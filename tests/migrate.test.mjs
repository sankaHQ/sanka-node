import assert from "node:assert/strict";
import { chmod, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { SankaMigrate, SankaMigrateError } from "sanka-sdk/migrate";

const fakeSource = String.raw`#!/usr/bin/env node
const command = process.argv[2];
const mode = process.env.FAKE_SANKA_MODE ?? "success";
if (mode === "malformed") {
  console.log("progress before json");
  console.log("{}");
  process.exit(0);
}
const payload = {
  schema_version: mode === "wrong-schema" ? "wrong/v1" : "sanka-cli/v1",
  command: mode === "wrong-command" ? "wrong" : command,
  outcome: mode === "error" ? "error" : "success",
  migration_state: mode === "error" ? "failed" : "complete",
  data: {
    argv: process.argv.slice(2),
    ...(mode === "error"
      ? { error: { code: "SANKA_USAGE", message: "bad option" } }
      : {}),
  },
  artifacts: [],
  limitations: [],
  next_actions: [],
};
console.log(JSON.stringify(payload));
process.exit(Number(process.env.FAKE_SANKA_EXIT ?? (mode === "error" ? "2" : "0")));
`;

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "sanka-node-migrate-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const executable = path.join(root, "fake-sanka-migrate");
  await writeFile(executable, fakeSource, "utf8");
  await chmod(executable, 0o755);
  return {
    root,
    executable,
    migrate: new SankaMigrate({ cwd: root, executable }),
  };
}

function argv(result) {
  return result.data.argv;
}

test("every command forwards every functional option", async (t) => {
  const { migrate } = await fixture(t);

  assert.deepEqual(
    argv(
      await migrate.scan({
        root: "source root",
        settings: "project.settings",
        artifactDir: ".artifacts",
      }),
    ),
    [
      "scan",
      "source root",
      "--settings",
      "project.settings",
      "--artifact-dir",
      ".artifacts",
      "--json",
    ],
  );
  assert.deepEqual(
    argv(
      await migrate.plan({
        root: "source",
        file: "migration.yaml",
        state: "state.db",
        to: "fastapi",
        strategy: "native",
        artifactDir: ".artifacts",
        output: "target",
        generation: "full",
        packageManager: "uv",
        orm: "tortoise",
      }),
    ),
    [
      "plan",
      "source",
      "--file",
      "migration.yaml",
      "--state",
      "state.db",
      "--to",
      "fastapi",
      "--strategy",
      "native",
      "--artifact-dir",
      ".artifacts",
      "--output",
      "target",
      "--generation",
      "full",
      "--package-manager",
      "uv",
      "--orm",
      "tortoise",
      "--json",
    ],
  );
  assert.deepEqual(
    argv(
      await migrate.apply({
        planHash: "sha256:reviewed",
        root: "source",
        file: "migration.yaml",
        state: "state.db",
        to: "fastapi",
        artifactDir: ".artifacts",
        output: "target",
        force: true,
        orm: "sqlalchemy",
        minReadiness: 75,
        gapReportOnly: true,
        benchCandidate: "candidate",
      }),
    ),
    [
      "apply",
      "--plan-hash",
      "sha256:reviewed",
      "--root",
      "source",
      "--file",
      "migration.yaml",
      "--state",
      "state.db",
      "--to",
      "fastapi",
      "--artifact-dir",
      ".artifacts",
      "--output",
      "target",
      "--force",
      "--orm",
      "sqlalchemy",
      "--min-readiness",
      "75",
      "--gap-report-only",
      "--bench-candidate",
      "candidate",
      "--json",
    ],
  );
  assert.deepEqual(
    argv(
      await migrate.test({
        root: "source",
        file: "migration.yaml",
        state: "state.db",
        to: "fastapi",
        artifactDir: ".artifacts",
        output: "target",
      }),
    ),
    [
      "test",
      "source",
      "--file",
      "migration.yaml",
      "--state",
      "state.db",
      "--to",
      "fastapi",
      "--artifact-dir",
      ".artifacts",
      "--output",
      "target",
      "--json",
    ],
  );
  assert.deepEqual(
    argv(
      await migrate.verify({
        root: "source",
        file: "migration.yaml",
        state: "state.db",
        to: "fastapi",
        artifactDir: ".artifacts",
        output: "target",
        cases: "cases.json",
        noHttp: true,
      }),
    ),
    [
      "verify",
      "source",
      "--file",
      "migration.yaml",
      "--state",
      "state.db",
      "--to",
      "fastapi",
      "--artifact-dir",
      ".artifacts",
      "--output",
      "target",
      "--cases",
      "cases.json",
      "--no-http",
      "--json",
    ],
  );
});

test("arguments are not interpreted by a shell", async (t) => {
  const { root, migrate } = await fixture(t);
  const marker = path.join(root, "unexpected");
  const source = "$(touch " + marker + ")";

  const result = await migrate.scan({ root: source });

  assert.ok(argv(result).includes(source));
  await assert.rejects(readFile(marker), { code: "ENOENT" });
});

test("structured failures keep exit and CLI details", async (t) => {
  const { root, executable } = await fixture(t);
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: { FAKE_SANKA_MODE: "error", FAKE_SANKA_EXIT: "2" },
  });

  await assert.rejects(
    migrate.apply({ planHash: "sha256:reviewed" }),
    (error) => {
      assert.ok(error instanceof SankaMigrateError);
      assert.equal(error.command, "apply");
      assert.equal(error.exitCode, 2);
      assert.equal(error.parsedError.code, "SANKA_USAGE");
      assert.equal(error.message, "bad option");
      return true;
    },
  );
});

test("protocol rejects malformed schema and command", async (t) => {
  const { root, executable } = await fixture(t);
  for (const [mode, message] of [
    ["malformed", "one valid JSON document"],
    ["wrong-schema", "unsupported sanka-migrate protocol"],
    ["wrong-command", "expected scan"],
  ]) {
    const migrate = new SankaMigrate({
      cwd: root,
      executable,
      env: { FAKE_SANKA_MODE: mode },
    });
    await assert.rejects(migrate.scan(), new RegExp(message));
  }
});

test("apply requires a reviewed plan hash", () => {
  const migrate = new SankaMigrate();
  assert.throws(() => migrate.apply({ planHash: "" }), /planHash/);
});

test("missing executable has an install hint", async (t) => {
  const { root } = await fixture(t);
  const migrate = new SankaMigrate({
    cwd: root,
    executable: path.join(root, "missing"),
  });
  await assert.rejects(migrate.scan(), /uv tool install sanka-migrate/);
});

test("built declarations retain public hover documentation", async () => {
  const declaration = await readFile(
    new URL("../esm/migrate.d.ts", import.meta.url),
    "utf8",
  );
  for (const symbol of [
    "SankaMigrateCommand",
    "SankaMigrateResult",
    "SankaMigrateOptions",
    "ScanOptions",
    "PlanOptions",
    "ApplyOptions",
    "TestOptions",
    "VerifyOptions",
    "SankaMigrateError",
    "SankaMigrate",
  ]) {
    assert.match(
      declaration,
      new RegExp("/\\*\\*[\\s\\S]*?export (?:declare )?(?:type|interface|class) " + symbol),
      symbol,
    );
  }
  for (const method of ["scan", "plan", "apply", "test", "verify"]) {
    assert.match(
      declaration,
      new RegExp("/\\*\\*[\\s\\S]*?\\*/\\s+" + method + "\\("),
      method,
    );
  }
});

test("packaged source matches the regeneration source", async () => {
  const packaged = await readFile(new URL("../src/migrate.ts", import.meta.url), "utf8");
  const handwritten = await readFile(
    new URL("../handwritten/migrate.ts", import.meta.url),
    "utf8",
  );
  assert.equal(packaged, handwritten);
});

