import assert from "node:assert/strict";
import { chmod, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { SankaMigrate, SankaMigrateError } from "sanka-sdk/migrate";

const fakeSource = String.raw`#!/usr/bin/env node
const command = process.argv[2];
const mode = process.env.FAKE_SANKA_MODE ?? "success";
const isError = mode === "error" || mode === "trust-error" || mode === "signal";
if (process.env.FAKE_SANKA_INVOKED) {
  require("node:fs").writeFileSync(process.env.FAKE_SANKA_INVOKED, "invoked");
}
if (process.env.FAKE_SANKA_JSON !== undefined) {
  console.log(process.env.FAKE_SANKA_JSON);
  process.exit(Number(process.env.FAKE_SANKA_EXIT ?? "0"));
}
if (mode === "malformed") {
  console.log("progress before json");
  console.log("{}");
  process.exit(0);
}
const payload = {
  schema_version: mode === "wrong-schema" ? "wrong/v1" : "sanka-cli/v1",
  command: mode === "wrong-command" ? "wrong" : command,
  outcome: process.env.FAKE_SANKA_OUTCOME ?? (isError ? "error" : "success"),
  migration_state: isError ? "failed" : "complete",
  data: {
    argv: process.argv.slice(2),
    ...(mode === "trust-error"
      ? {
          error: {
            code: "SANKA_MARKETPLACE_TRUST_REQUIRED",
            message: "explicit trust is required",
            details: { identity: "local:/third-party" },
          },
        }
      : mode === "error" || mode === "signal"
      ? { error: { code: "SANKA_USAGE", message: "bad option" } }
      : {}),
    ...(mode === "recommendations"
      ? {
          recommendations: [
            {
              id: "sanka/drf-to-fastapi",
              version: "0.1.0a1",
              marketplace: "official",
              targets: ["fastapi"],
              evidence: [
                {
                  kind: "declared_dependency",
                  value: "djangorestframework",
                  path: "requirements.txt",
                },
              ],
              status: ["available"],
              add_command: "sanka extension add sanka/drf-to-fastapi",
            },
          ],
        }
      : {}),
  },
  artifacts: [],
  limitations: [],
  next_actions: [],
};
const errorCase = process.env.FAKE_SANKA_ERROR_CASE;
if (errorCase === "missing") {
  delete payload.data.error;
} else if (errorCase) {
  payload.data.error = JSON.parse(errorCase);
}
if (mode === "signal") {
  process.stdout.write(JSON.stringify(payload), () => process.kill(process.pid, "SIGTERM"));
} else {
  console.log(JSON.stringify(payload));
  process.exit(Number(process.env.FAKE_SANKA_EXIT ?? (isError ? "2" : "0")));
}
`;

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "sanka-node-migrate-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const executable = path.join(root, "fake-sanka");
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

test("defaults to the unified executable", () => {
  assert.equal(new SankaMigrate().executable, "sanka");
});

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

test("extension lifecycle options use exact stable argv for every command", async (t) => {
  const { migrate } = await fixture(t);
  const shared = { "日本語": "値" };

  assert.deepEqual(
    argv(
      await migrate.scan({
        extensionConfig: { shared },
        extensionEnvironment: ["SCAN_TOKEN"],
      }),
    ),
    [
      "scan",
      "--extension-config",
      '{"shared":{"日本語":"値"}}',
      "--extension-env",
      "SCAN_TOKEN",
      "--json",
    ],
  );
  assert.deepEqual(
    argv(
      await migrate.plan({
        to: "vendor/flask-v2",
        extensionConfig: {
          z: { "β": 2, "α": 1 },
          shared,
          copy: shared,
          "2": "two",
          "10": "ten",
        },
        extensionEnvironment: ["DJANGO_SECRET_KEY", "API_TOKEN"],
      }),
    ),
    [
      "plan",
      "--to",
      "vendor/flask-v2",
      "--extension-config",
      '{"10":"ten","2":"two","copy":{"日本語":"値"},"shared":{"日本語":"値"},"z":{"α":1,"β":2}}',
      "--extension-env",
      "DJANGO_SECRET_KEY",
      "--extension-env",
      "API_TOKEN",
      "--json",
    ],
  );
  assert.deepEqual(
    argv(
      await migrate.apply({
        planHash: "sha256:reviewed",
        extensionConfig: { generation: "full" },
        extensionEnvironment: ["APPLY_TOKEN"],
      }),
    ),
    [
      "apply",
      "--plan-hash",
      "sha256:reviewed",
      "--extension-config",
      '{"generation":"full"}',
      "--extension-env",
      "APPLY_TOKEN",
      "--json",
    ],
  );
  assert.deepEqual(
    argv(
      await migrate.test({
        extensionConfig: { generation: "full" },
        extensionEnvironment: ["TEST_TOKEN"],
      }),
    ),
    [
      "test",
      "--extension-config",
      '{"generation":"full"}',
      "--extension-env",
      "TEST_TOKEN",
      "--json",
    ],
  );
  assert.deepEqual(
    argv(
      await migrate.verify({
        extensionConfig: { generation: "full" },
        extensionEnvironment: ["VERIFY_TOKEN"],
      }),
    ),
    [
      "verify",
      "--extension-config",
      '{"generation":"full"}',
      "--extension-env",
      "VERIFY_TOKEN",
      "--json",
    ],
  );
});

test("extension config rejects non-canonical array state before spawning", async (t) => {
  const { root, executable } = await fixture(t);
  const invoked = path.join(root, "invoked");
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: { FAKE_SANKA_INVOKED: invoked },
  });
  const overriddenMap = [1];
  overriddenMap.map = () => [999];
  const overriddenIterator = [1];
  overriddenIterator[Symbol.iterator] = function* () {
    yield 999;
  };
  const nonCanonicalIndex = [1];
  nonCanonicalIndex["01"] = 2;
  const sparse = new Array(1);
  const accessor = [1];
  Object.defineProperty(accessor, "0", { enumerable: true, get: () => 1 });
  const nonEnumerable = [1];
  Object.defineProperty(nonEnumerable, "0", { enumerable: false, value: 1 });
  const customPrototype = [1];
  Object.setPrototypeOf(customPrototype, {});
  const invalid = [
    overriddenMap,
    overriddenIterator,
    nonCanonicalIndex,
    sparse,
    accessor,
    nonEnumerable,
    customPrototype,
  ];

  for (let index = 0; index < invalid.length; index += 1) {
    await assert.rejects(
      async () => migrate.plan({ extensionConfig: { values: invalid[index] } }),
      /extensionConfig.*JSON-compatible/,
    );
  }
  await assert.rejects(readFile(invoked), { code: "ENOENT" });
});

test("extension config rejects accessors without invoking them or spawning", async (t) => {
  const { root, executable } = await fixture(t);
  const invoked = path.join(root, "invoked");
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: { FAKE_SANKA_INVOKED: invoked },
  });
  let reads = 0;
  const extensionConfig = {};
  Object.defineProperty(extensionConfig, "value", {
    enumerable: true,
    get() {
      reads += 1;
      return reads === 1 ? "ok" : undefined;
    },
  });

  await assert.rejects(
    async () => migrate.plan({ extensionConfig }),
    /extensionConfig.*JSON-compatible/,
  );
  assert.equal(reads, 0);
  await assert.rejects(readFile(invoked), { code: "ENOENT" });
});

test("extension config accepts null-prototype records and own __proto__ data", async (t) => {
  const { migrate } = await fixture(t);
  const nested = Object.create(null);
  nested.value = "ok";
  const extensionConfig = Object.create(null);
  Object.defineProperty(extensionConfig, "__proto__", {
    enumerable: true,
    value: "literal",
  });
  extensionConfig.nested = nested;

  assert.deepEqual(
    argv(await migrate.plan({ extensionConfig })),
    [
      "plan",
      "--extension-config",
      '{"__proto__":"literal","nested":{"value":"ok"}}',
      "--json",
    ],
  );
});

test("extension config rejects values outside JsonValue before spawning", async (t) => {
  const { root, executable } = await fixture(t);
  const invoked = path.join(root, "invoked");
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: { FAKE_SANKA_INVOKED: invoked },
  });
  const cyclicArray = [];
  cyclicArray.push(cyclicArray);
  const cyclicObject = {};
  cyclicObject.self = cyclicObject;
  const invalid = [
    [],
    null,
    "not-an-object",
    { value: Number.NaN },
    { value: Number.POSITIVE_INFINITY },
    { value: Number.NEGATIVE_INFINITY },
    { value: undefined },
    { value: () => undefined },
    { value: Symbol("bad") },
    { value: 1n },
    { value: new Date() },
    { value: new Set(["bad"]) },
    { value: new (class NonPlain {})() },
    { value: [{ nested: undefined }] },
    { value: cyclicArray },
    { value: cyclicObject },
  ];

  for (const extensionConfig of invalid) {
    await assert.rejects(
      async () => migrate.plan({ extensionConfig }),
      /extensionConfig.*JSON-compatible/,
    );
  }
  await assert.rejects(readFile(invoked), { code: "ENOENT" });
});

test("extension environment validates its container and members before spawning", async (t) => {
  const { root, executable } = await fixture(t);
  const invoked = path.join(root, "invoked");
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: { FAKE_SANKA_INVOKED: invoked },
  });

  for (const extensionEnvironment of [
    "API_TOKEN",
    new Set(["API_TOKEN"]),
    { 0: "API_TOKEN", length: 1 },
    [42],
    ["API-TOKEN"],
    ["9API_TOKEN"],
    ["API_TÖKEN"],
  ]) {
    await assert.rejects(
      async () => migrate.plan({ extensionEnvironment }),
      /extensionEnvironment/,
    );
  }
  await assert.rejects(readFile(invoked), { code: "ENOENT" });
});

test("extension management has full grouped parity without a shell", async (t) => {
  const { root, migrate } = await fixture(t);
  const marker = path.join(root, "unexpected-extension");
  const source = "$(touch " + marker + ")";
  const results = [
    await migrate.extensions.add("example/demo", { marketplace: "third-party" }),
    await migrate.extensions.list(),
    await migrate.extensions.remove("example/demo"),
    await migrate.extensions.marketplaces.add(source, {
      name: "third-party",
      trust: true,
    }),
    await migrate.extensions.marketplaces.list(),
    await migrate.extensions.marketplaces.upgrade("third-party"),
    await migrate.extensions.marketplaces.remove("third-party"),
  ];

  assert.deepEqual(
    results.map(argv),
    [
      ["extension", "add", "example/demo", "--marketplace", "third-party", "--json"],
      ["extension", "list", "--json"],
      ["extension", "remove", "example/demo", "--json"],
      [
        "extension",
        "marketplace",
        "add",
        source,
        "--name",
        "third-party",
        "--trust",
        "--json",
      ],
      ["extension", "marketplace", "list", "--json"],
      ["extension", "marketplace", "upgrade", "third-party", "--json"],
      ["extension", "marketplace", "remove", "third-party", "--json"],
    ],
  );
  await assert.rejects(readFile(marker), { code: "ENOENT" });
});

test("recommendations expose typed evidence", async (t) => {
  const { root, executable } = await fixture(t);
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: { FAKE_SANKA_MODE: "recommendations" },
  });

  const recommendation = (await migrate.scan()).data.recommendations[0];
  assert.deepEqual(recommendation.targets, ["fastapi"]);
  assert.deepEqual(structuredClone(recommendation.evidence), [
    {
      kind: "declared_dependency",
      value: "djangorestframework",
      path: "requirements.txt",
    },
  ]);
});

test("third-party trust failures keep the complete valid result", async (t) => {
  const { root, executable } = await fixture(t);
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: { FAKE_SANKA_MODE: "trust-error" },
  });

  await assert.rejects(
    migrate.extensions.marketplaces.add("/third-party", { name: "third-party" }),
    (error) => {
      assert.ok(error instanceof SankaMigrateError);
      assert.equal(error.parsedError.code, "SANKA_MARKETPLACE_TRUST_REQUIRED");
      assert.equal(error.result.command, "extension");
      assert.deepEqual(structuredClone(error.result.data.error.details), {
        identity: "local:/third-party",
      });
      return true;
    },
  );
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
    ["wrong-schema", "unsupported sanka protocol"],
    ["wrong-command", "expected scan"],
  ]) {
    const migrate = new SankaMigrate({
      cwd: root,
      executable,
      env: { FAKE_SANKA_MODE: mode },
    });
    await assert.rejects(migrate.scan(), (error) => {
      assert.match(error.message, new RegExp(message));
      assert.equal(error.result, undefined);
      return true;
    });
  }
});

test("protocol rejects invalid outcome and exit pairs without a result", async (t) => {
  const { root, executable } = await fixture(t);
  const invalid = [
    ["bogus", "0"],
    ["bogus", "1"],
    ["bogus", "2"],
    ["bogus", "99"],
    ["success", "1"],
    ["success", "2"],
    ["success", "99"],
    ["error", "0"],
    ["error", "99"],
  ];

  for (const [outcome, exitCode] of invalid) {
    const migrate = new SankaMigrate({
      cwd: root,
      executable,
      env: {
        FAKE_SANKA_MODE: outcome === "error" ? "error" : "success",
        FAKE_SANKA_OUTCOME: outcome,
        FAKE_SANKA_EXIT: exitCode,
      },
    });
    await assert.rejects(migrate.scan(), (error) => {
      assert.ok(error instanceof SankaMigrateError);
      assert.equal(error.result, undefined);
      return true;
    });
  }
});

test("protocol rejects signal termination without inventing an exit code", async (t) => {
  const { root, executable } = await fixture(t);
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: { FAKE_SANKA_MODE: "signal" },
  });

  await assert.rejects(migrate.scan(), (error) => {
    assert.ok(error instanceof SankaMigrateError);
    assert.equal(error.exitCode, undefined);
    assert.equal(error.result, undefined);
    return true;
  });
});

test("protocol preserves valid failure results for exits one and two", async (t) => {
  const { root, executable } = await fixture(t);

  for (const exitCode of ["1", "2"]) {
    for (const [mode, expected] of [
      ["error", { code: "SANKA_USAGE", message: "bad option" }],
      [
        "trust-error",
        {
          code: "SANKA_MARKETPLACE_TRUST_REQUIRED",
          message: "explicit trust is required",
          details: { identity: "local:/third-party" },
        },
      ],
    ]) {
      const migrate = new SankaMigrate({
        cwd: root,
        executable,
        env: { FAKE_SANKA_MODE: mode, FAKE_SANKA_EXIT: exitCode },
      });
      await assert.rejects(migrate.scan(), (error) => {
        assert.ok(error instanceof SankaMigrateError);
        assert.deepEqual(structuredClone(error.parsedError), expected);
        assert.deepEqual(structuredClone(error.result.data.error), expected);
        assert.equal(error.result.outcome, "error");
        assert.equal(error.exitCode, Number(exitCode));
        return true;
      });
    }
  }
});

test("protocol rejects malformed structured errors without a result", async (t) => {
  const { root, executable } = await fixture(t);
  const malformed = [
    ["missing", "missing"],
    ["string", '"failure"'],
    ["empty", "{}"],
    ["numeric-code", '{"code":7,"message":"bad option"}'],
    ["numeric-message", '{"code":"SANKA_USAGE","message":7}'],
    [
      "non-object-details",
      '{"code":"SANKA_USAGE","message":"bad option","details":[]}',
    ],
  ];

  for (const exitCode of ["1", "2"]) {
    for (const [, errorCase] of malformed) {
      const migrate = new SankaMigrate({
        cwd: root,
        executable,
        env: {
          FAKE_SANKA_MODE: "error",
          FAKE_SANKA_EXIT: exitCode,
          FAKE_SANKA_ERROR_CASE: errorCase,
        },
      });
      await assert.rejects(migrate.scan(), (error) => {
        assert.ok(error instanceof SankaMigrateError);
        assert.equal(error.result, undefined);
        return true;
      });
    }
  }
});

test("protocol rejects inherited envelope fields without a result", async (t) => {
  const { root, executable } = await fixture(t);
  const pollution = {
    schema_version: "sanka-cli/v1",
    command: "scan",
    outcome: "error",
    migration_state: "failed",
    data: { error: {} },
    artifacts: [],
    limitations: [],
    next_actions: [],
    code: "SANKA_POLLUTED",
    message: "polluted failure",
    details: [],
  };
  const previous = new Map(
    Object.keys(pollution).map((name) => [
      name,
      Object.getOwnPropertyDescriptor(Object.prototype, name),
    ]),
  );

  try {
    for (const [name, value] of Object.entries(pollution)) {
      Object.defineProperty(Object.prototype, name, {
        configurable: true,
        enumerable: true,
        value,
        writable: true,
      });
    }
    for (const payload of ["{}", '{"data":{"error":{}}}']) {
      const migrate = new SankaMigrate({
        cwd: root,
        executable,
        env: { FAKE_SANKA_JSON: payload, FAKE_SANKA_EXIT: "1" },
      });
      await assert.rejects(migrate.scan(), (error) => {
        assert.ok(error instanceof SankaMigrateError);
        assert.match(
          error.message,
          /invalid sanka-cli\/v1 field schema_version/,
        );
        assert.equal(error.result, undefined);
        return true;
      });
    }
  } finally {
    for (const [name, descriptor] of previous) {
      if (descriptor === undefined) {
        Reflect.deleteProperty(Object.prototype, name);
      } else {
        Object.defineProperty(Object.prototype, name, descriptor);
      }
    }
  }
});

test("protocol rejects an error payload on success without a result", async (t) => {
  const { root, executable } = await fixture(t);
  const migrate = new SankaMigrate({
    cwd: root,
    executable,
    env: {
      FAKE_SANKA_ERROR_CASE: '{"code":"SANKA_FAILED","message":"not failed"}',
    },
  });

  await assert.rejects(migrate.scan(), (error) => {
    assert.ok(error instanceof SankaMigrateError);
    assert.equal(error.result, undefined);
    return true;
  });
});

test("apply requires a reviewed plan hash", () => {
  const migrate = new SankaMigrate();
  assert.throws(() => migrate.apply({ planHash: "" }), /planHash/);
});

test("missing executable has the unified install hint", async (t) => {
  const { root } = await fixture(t);
  const migrate = new SankaMigrate({
    cwd: root,
    executable: path.join(root, "missing"),
  });
  await assert.rejects(migrate.scan(), /uv tool install sanka-cli/);
});

test("generated migration guidance points to the unified CLI", async () => {
  const readme = await readFile(new URL("../README.md", import.meta.url), "utf8");
  const migration = readme.match(
    /<!-- Start Local Migration \[local-migration\] -->[\s\S]*?<!-- End Local Migration \[local-migration\] -->/,
  )?.[0];

  assert.ok(migration);
  assert.match(migration, /A local `sanka` subprocess/);
  assert.match(migration, /uv tool install sanka-cli/);
  assert.doesNotMatch(migration, /sanka-migrate/);
});

test("built declarations retain public hover documentation", async () => {
  const declaration = await readFile(
    new URL("../esm/migrate.d.ts", import.meta.url),
    "utf8",
  );
  for (const symbol of [
    "SankaMigrateCommand",
    "JsonValue",
    "ExtensionEvidence",
    "ExtensionRecommendation",
    "ExtensionFailure",
    "SankaMigrateResult",
    "SankaMigrateOptions",
    "ScanOptions",
    "PlanOptions",
    "ApplyOptions",
    "TestOptions",
    "VerifyOptions",
    "SankaMigrateMarketplaces",
    "SankaMigrateExtensions",
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
  assert.match(declaration, /to\?: string;/);
  assert.match(declaration, /extensionConfig\?: Record<string, JsonValue>;/);
  assert.match(declaration, /extensionEnvironment\?: readonly string\[\];/);
  assert.match(declaration, /readonly result: SankaMigrateResult<Record<string, unknown>> \| undefined;/);
  assert.match(declaration, /readonly extensions: SankaMigrateExtensions;/);
});

test("packaged source matches the regeneration source", async () => {
  const packaged = await readFile(new URL("../src/migrate.ts", import.meta.url), "utf8");
  const handwritten = await readFile(
    new URL("../handwritten/migrate.ts", import.meta.url),
    "utf8",
  );
  assert.equal(packaged, handwritten);
});
