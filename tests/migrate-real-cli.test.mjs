import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { SankaMigrate, SankaMigrateError } from "sanka-sdk/migrate";

const executableSelected = Object.hasOwn(
  process.env,
  "SANKA_CLI_EXECUTABLE",
);

function assertEnvelope(result, command, outcome) {
  assert.ok(result);
  assert.equal(result.schema_version, "sanka-cli/v1");
  assert.equal(result.command, command);
  assert.equal(result.outcome, outcome);
  assert.equal(typeof result.migration_state, "string");
  assert.equal(typeof result.data, "object");
  assert.ok(!Array.isArray(result.data));
  for (const field of ["artifacts", "limitations", "next_actions"]) {
    assert.ok(Array.isArray(result[field]));
  }
}

test(
  "real CLI preserves success and failure envelopes without a shell",
  {
    skip: executableSelected ? false : "SANKA_CLI_EXECUTABLE is not set",
  },
  async (t) => {
    const root = await mkdtemp(path.join(os.tmpdir(), "sanka-node-real-cli-"));
    t.after(() => rm(root, { recursive: true, force: true }));
    const project = path.join(root, "$(touch real-cli-shell-marker)");
    await mkdir(project);
    await writeFile(
      path.join(project, "views.py"),
      "from rest_framework.views import APIView\n",
      "utf8",
    );

    const executable = process.env.SANKA_CLI_EXECUTABLE;
    assert.equal(typeof executable, "string");
    const migrate = new SankaMigrate({
      cwd: root,
      executable,
      env: { SANKA_HOME: path.join(root, "sanka-home") },
    });
    assert.equal(migrate.executable, executable);

    assertEnvelope(
      await migrate.scan({ root: path.basename(project) }),
      "scan",
      "success",
    );
    assertEnvelope(await migrate.extensions.list(), "extension", "success");
    await assert.rejects(readFile(path.join(root, "real-cli-shell-marker")), {
      code: "ENOENT",
    });

    const failures = [
      [
        "extension",
        "SANKA_EXTENSION_NOT_FOUND",
        () => migrate.extensions.add("sanka/drf-to-fastapi"),
      ],
      [
        "plan",
        "SANKA_EXTENSION_REQUIRED",
        () => migrate.plan({ root: path.basename(project), to: "fastapi" }),
      ],
      [
        "apply",
        "SANKA_EXTENSION_IDENTITY",
        () =>
          migrate.apply({
            planHash: "sha256:missing",
            root: path.basename(project),
            to: "fastapi",
          }),
      ],
      [
        "test",
        "SANKA_EXTENSION_IDENTITY",
        () => migrate.test({ root: path.basename(project), to: "fastapi" }),
      ],
      [
        "verify",
        "SANKA_EXTENSION_IDENTITY",
        () => migrate.verify({ root: path.basename(project), to: "fastapi" }),
      ],
    ];

    for (const [command, errorCode, call] of failures) {
      await assert.rejects(call(), (error) => {
        assert.ok(error instanceof SankaMigrateError);
        assert.equal(error.command, command);
        assert.equal(error.exitCode, 1);
        assert.equal(error.parsedError.code, errorCode);
        assertEnvelope(error.result, command, "error");
        return true;
      });
    }
  },
);
