/**
 * Local Sanka migration commands for Node.js.
 *
 * This module exposes the generic scan, plan, apply, test, and verify lifecycle
 * by running the separately installed sanka-migrate CLI in JSON mode. It does
 * not call Sanka's hosted API.
 */

import { spawn } from "node:child_process";
import { existsSync } from "node:fs";

const CLI_SCHEMA_VERSION = "sanka-cli/v1";

/** A generic local migration command supported by the SDK adapter. */
export type SankaMigrateCommand =
  | "scan"
  | "plan"
  | "apply"
  | "test"
  | "verify"
  | "extension";

/** A value accepted by JSON and extension configuration. */
export type JsonValue =
  | null
  | boolean
  | number
  | string
  | JsonValue[]
  | { [key: string]: JsonValue };

/** Static project evidence that matched an extension recommendation. */
export interface ExtensionEvidence {
  /** Matcher that produced the evidence. */
  kind: string;
  /** Static value that matched. */
  value: string;
  /** Source-relative evidence path. */
  path: string;
}

/** One compatible extension recommended by sanka-migrate. */
export interface ExtensionRecommendation {
  /** Logical owner/name extension identifier. */
  id: string;
  /** Recommended extension version. */
  version: string;
  /** Marketplace containing the extension. */
  marketplace: string;
  /** Migration targets advertised by the extension. */
  targets: string[];
  /** Static evidence supporting the recommendation. */
  evidence: ExtensionEvidence[];
  /** Availability, installation, and compatibility states. */
  status: string[];
  /** Exact command that installs the recommendation. */
  add_command: string;
}

/** Structured extension or marketplace failure returned by the CLI. */
export interface ExtensionFailure {
  /** Stable machine-readable failure code. */
  code: string;
  /** Human-readable failure message. */
  message: string;
  /** Optional structured failure evidence. */
  details?: Record<string, JsonValue>;
}

/** Command-specific scan data returned by sanka-migrate. */
export interface ScanData {
  /** Compatible extensions discovered from static project evidence. */
  recommendations?: ExtensionRecommendation[];
  [key: string]: unknown;
}

/** Command-specific plan data, including the hash required by apply(). */
export interface PlanData {
  /** Hash binding apply() to this exact reviewed plan. */
  plan_hash: string;
  [key: string]: unknown;
}

/** Command-specific apply data returned after plan-bound generation. */
export interface ApplyData {
  /** Hash of the plan that was applied. */
  plan_hash: string;
  [key: string]: unknown;
}

/** Command-specific generated-target test evidence. */
export interface TestData {
  /** Whether the generated-target tests passed. */
  ok: boolean;
  [key: string]: unknown;
}

/** Command-specific migration verification evidence. */
export interface VerifyData {
  /** Whether verification passed within its configured scope. */
  ok: boolean;
  [key: string]: unknown;
}

/** A valid sanka-cli/v1 command result. */
export interface SankaMigrateResult<TData extends Record<string, unknown>> {
  /** Version of the CLI-to-SDK protocol. */
  schema_version: "sanka-cli/v1";
  /** Generic command that produced this result. */
  command: SankaMigrateCommand;
  /** CLI verdict. */
  outcome: "success" | "error";
  /** Lifecycle state after the command completed. */
  migration_state: string;
  /** Command-specific machine-readable data. */
  data: TData;
  /** Files or directories written by the command. */
  artifacts: string[];
  /** Scope limits or known migration gaps. */
  limitations: string[];
  /** Deterministic suggested follow-up commands. */
  next_actions: string[];
}

/** Construction options for the local migration adapter. */
export interface SankaMigrateOptions {
  /** Working directory used by sanka-migrate. */
  cwd?: string;
  /**
   * CLI executable name or path.
   *
   * Install the default executable separately with:
   * uv tool install sanka-migrate
   */
  executable?: string;
  /** Environment variables merged over the current process environment. */
  env?: Readonly<Record<string, string | undefined>>;
}

/** Functional arguments accepted by sanka-migrate scan. */
export interface ScanOptions {
  /** Source repository root. Omit it to use the adapter cwd. */
  root?: string;
  /** Explicit Django settings module; otherwise the CLI detects it. */
  settings?: string;
  /** Directory for the semantic scan artifact. */
  artifactDir?: string;
  /** JSON-compatible settings for the selected extension. */
  extensionConfig?: Record<string, JsonValue>;
  /** Ambient environment variable names to forward explicitly. */
  extensionEnvironment?: readonly string[];
}

/** Functional arguments accepted by sanka-migrate plan. */
export interface PlanOptions {
  /** Source repository root. Omit it to use the adapter cwd. */
  root?: string;
  /** Migration spec passed as --file. */
  file?: string;
  /** Run-state SQLite file passed as --state. */
  state?: string;
  /** Target advertised by an installed extension. */
  to?: string;
  /** Runtime strategy, currently "native" or "compatibility". */
  strategy?: "native" | "compatibility";
  /** Directory containing scan and plan artifacts. */
  artifactDir?: string;
  /** Planned generated target directory. */
  output?: string;
  /** Generation mode: "full", "update", or "minimal". */
  generation?: "full" | "update" | "minimal";
  /** Generated environment manager: "uv" or "pip". */
  packageManager?: "uv" | "pip";
  /** ORM selected when the scan detects database-backed routes. */
  orm?: "tortoise" | "sqlalchemy" | "psycopg";
  /** JSON-compatible settings for the selected extension. */
  extensionConfig?: Record<string, JsonValue>;
  /** Ambient environment variable names to forward explicitly. */
  extensionEnvironment?: readonly string[];
}

/** Functional arguments accepted by sanka-migrate apply. */
export interface ApplyOptions {
  /** Non-empty hash returned by plan(); writes are bound to it. */
  planHash: string;
  /** Source repository root passed as --root. */
  root?: string;
  /** Migration spec passed as --file. */
  file?: string;
  /** Run-state SQLite file passed as --state. */
  state?: string;
  /** Target advertised by an installed extension. */
  to?: string;
  /** Directory containing the reviewed plan. */
  artifactDir?: string;
  /** Generated target directory reviewed by the plan. */
  output?: string;
  /** Replace conflicting generated files only when explicitly true. */
  force?: boolean;
  /** Assert the reviewed ORM without changing it. */
  orm?: "tortoise" | "sqlalchemy" | "psycopg";
  /** Minimum native readiness percentage from 0 through 100. */
  minReadiness?: number;
  /** Write a gap report instead of generating an application. */
  gapReportOnly?: boolean;
  /** Also write a Migration Bench candidate here. */
  benchCandidate?: string;
  /** JSON-compatible settings for the selected extension. */
  extensionConfig?: Record<string, JsonValue>;
  /** Ambient environment variable names to forward explicitly. */
  extensionEnvironment?: readonly string[];
}

/** Functional arguments accepted by sanka-migrate test. */
export interface TestOptions {
  /** Source repository root. Omit it to use the adapter cwd. */
  root?: string;
  /** Migration spec passed as --file. */
  file?: string;
  /** Run-state SQLite file passed as --state. */
  state?: string;
  /** Target advertised by an installed extension. */
  to?: string;
  /** Directory containing the applied plan. */
  artifactDir?: string;
  /** Generated target directory. */
  output?: string;
  /** JSON-compatible settings for the selected extension. */
  extensionConfig?: Record<string, JsonValue>;
  /** Ambient environment variable names to forward explicitly. */
  extensionEnvironment?: readonly string[];
}

/** Functional arguments accepted by sanka-migrate verify. */
export interface VerifyOptions {
  /** Source repository root. Omit it to use the adapter cwd. */
  root?: string;
  /** Migration spec passed as --file. */
  file?: string;
  /** Run-state SQLite file passed as --state. */
  state?: string;
  /** Target advertised by an installed extension. */
  to?: string;
  /** Directory containing the applied plan. */
  artifactDir?: string;
  /** Generated target directory. */
  output?: string;
  /** JSON file containing additional read-only HTTP verification cases. */
  cases?: string;
  /** Skip HTTP probes when structural verification is sufficient. */
  noHttp?: boolean;
  /** JSON-compatible settings for the selected extension. */
  extensionConfig?: Record<string, JsonValue>;
  /** Ambient environment variable names to forward explicitly. */
  extensionEnvironment?: readonly string[];
}

/** Marketplace management commands exposed under migrate.extensions. */
export interface SankaMigrateMarketplaces {
  /** Add an immutable marketplace snapshot. */
  add: (
    source: string,
    options?: { name?: string; trust?: boolean },
  ) => Promise<SankaMigrateResult<Record<string, unknown>>>;
  /** List configured marketplace snapshots. */
  list: () => Promise<SankaMigrateResult<Record<string, unknown>>>;
  /** Upgrade one marketplace, or every marketplace when name is omitted. */
  upgrade: (
    name?: string,
  ) => Promise<SankaMigrateResult<Record<string, unknown>>>;
  /** Remove an unused marketplace snapshot. */
  remove: (
    name: string,
  ) => Promise<SankaMigrateResult<Record<string, unknown>>>;
}

/** Extension management commands exposed by SankaMigrate. */
export interface SankaMigrateExtensions {
  /** Install and lock an extension. */
  add: (
    extensionId: string,
    options?: { marketplace?: string },
  ) => Promise<SankaMigrateResult<Record<string, unknown>>>;
  /** List available and installed extensions. */
  list: () => Promise<SankaMigrateResult<Record<string, unknown>>>;
  /** Unpin or disable an extension in the current project. */
  remove: (
    extensionId: string,
  ) => Promise<SankaMigrateResult<Record<string, unknown>>>;
  /** Nested marketplace management commands. */
  marketplaces: SankaMigrateMarketplaces;
}

/** A local migration command or protocol failure. */
export class SankaMigrateError extends Error {
  /** Generic command that failed. */
  readonly command: SankaMigrateCommand;
  /** Process exit code, or undefined when the CLI could not start. */
  readonly exitCode: number | undefined;
  /** Structured CLI error from data.error, when available. */
  readonly parsedError: ExtensionFailure | undefined;
  /** Complete valid failure envelope returned by the CLI, when available. */
  readonly result:
    | SankaMigrateResult<Record<string, unknown>>
    | undefined;
  /** Diagnostic text written by the CLI. */
  readonly stderr: string;

  /** Create an actionable local migration error. */
  constructor(
    message: string,
    options: {
      command: SankaMigrateCommand;
      exitCode?: number | undefined;
      parsedError?: ExtensionFailure | undefined;
      result?: SankaMigrateResult<Record<string, unknown>> | undefined;
      stderr?: string | undefined;
    },
  ) {
    super(message);
    this.name = "SankaMigrateError";
    this.command = options.command;
    this.exitCode = options.exitCode;
    this.parsedError = options.parsedError;
    this.result = options.result;
    this.stderr = options.stderr ?? "";
  }
}

/**
 * Run local Sanka migration commands without a Sanka API token.
 *
 * The adapter is non-interactive and always requests one sanka-cli/v1 JSON
 * document. It validates extension JSON and environment names before spawning;
 * framework detection, migration defaults, and execution remain owned by the CLI.
 *
 * @example
 * const migrate = new SankaMigrate({ cwd: "./django-app" });
 */
export class SankaMigrate {
  private readonly cwd: string | undefined;
  private readonly executable: string;
  private readonly env: Readonly<Record<string, string | undefined>>;
  /** Extension and marketplace management commands. */
  readonly extensions: SankaMigrateExtensions;

  /**
   * Create a local migration adapter.
   *
   * @param options - Working directory, executable override, and environment
   * overrides. Install sanka-migrate separately before running a command.
   */
  constructor(options: SankaMigrateOptions = {}) {
    const executable = options.executable ?? "sanka-migrate";
    if (executable.trim() === "") {
      throw new TypeError("executable must not be empty");
    }
    this.cwd = options.cwd;
    this.executable = executable;
    this.env = options.env ?? {};
    this.extensions = {
      add: (extensionId, extensionOptions = {}) => {
        const args = ["extension", "add", extensionId];
        option(args, "--marketplace", extensionOptions.marketplace);
        return this.run("extension", args);
      },
      list: () => this.run("extension", ["extension", "list"]),
      remove: (extensionId) =>
        this.run("extension", ["extension", "remove", extensionId]),
      marketplaces: {
        add: (source, marketplaceOptions = {}) => {
          const args = ["extension", "marketplace", "add", source];
          option(args, "--name", marketplaceOptions.name);
          flag(args, "--trust", marketplaceOptions.trust);
          return this.run("extension", args);
        },
        list: () =>
          this.run("extension", ["extension", "marketplace", "list"]),
        upgrade: (name) => {
          const args = ["extension", "marketplace", "upgrade"];
          positional(args, name);
          return this.run("extension", args);
        },
        remove: (name) =>
          this.run("extension", ["extension", "marketplace", "remove", name]),
      },
    };
  }

  /**
   * Inspect a source application with sanka-migrate scan.
   *
   * @param options - Source root, settings module, and artifact directory.
   * @returns Discovered application data, risks, and scan artifact paths.
   * @throws SankaMigrateError when scanning or the JSON protocol fails.
   *
   * Side effects: reads the source and writes only the scan artifact.
   *
   * @example
   * const scan = await migrate.scan();
   */
  scan(options: ScanOptions = {}): Promise<SankaMigrateResult<ScanData>> {
    const args = ["scan"];
    positional(args, options.root);
    option(args, "--settings", options.settings);
    option(args, "--artifact-dir", options.artifactDir);
    extensionOptions(args, options.extensionConfig, options.extensionEnvironment);
    return this.run("scan", args);
  }

  /**
   * Create a reviewable, hash-bound plan with sanka-migrate plan.
   *
   * @param options - Functional plan arguments matching the CLI flags.
   * @returns The plan and plan_hash required by apply().
   * @throws SankaMigrateError when planning or required choices fail.
   *
   * Side effects: writes plan and run-state artifacts without modifying the target.
   *
   * @example
   * const plan = await migrate.plan({ to: "fastapi", generation: "full" });
   */
  plan(options: PlanOptions = {}): Promise<SankaMigrateResult<PlanData>> {
    const args = ["plan"];
    positional(args, options.root);
    option(args, "--file", options.file);
    option(args, "--state", options.state);
    option(args, "--to", options.to);
    option(args, "--strategy", options.strategy);
    option(args, "--artifact-dir", options.artifactDir);
    option(args, "--output", options.output);
    option(args, "--generation", options.generation);
    option(args, "--package-manager", options.packageManager);
    option(args, "--orm", options.orm);
    extensionOptions(args, options.extensionConfig, options.extensionEnvironment);
    return this.run("plan", args);
  }

  /**
   * Apply exactly one reviewed plan with sanka-migrate apply.
   *
   * @param options - Reviewed plan hash and functional apply arguments.
   * @returns Paths and evidence written from the reviewed plan.
   * @throws TypeError when planHash is empty.
   * @throws SankaMigrateError when hash, safety checks, or generation fail.
   *
   * Side effects: mutates only the target and artifacts authorized by the plan.
   *
   * @example
   * const applied = await migrate.apply({ planHash: plan.data.plan_hash });
   */
  apply(options: ApplyOptions): Promise<SankaMigrateResult<ApplyData>> {
    if (options.planHash.trim() === "") {
      throw new TypeError("planHash must not be empty");
    }
    const args = ["apply", "--plan-hash", options.planHash];
    option(args, "--root", options.root);
    option(args, "--file", options.file);
    option(args, "--state", options.state);
    option(args, "--to", options.to);
    option(args, "--artifact-dir", options.artifactDir);
    option(args, "--output", options.output);
    flag(args, "--force", options.force);
    option(args, "--orm", options.orm);
    option(args, "--min-readiness", options.minReadiness);
    flag(args, "--gap-report-only", options.gapReportOnly);
    option(args, "--bench-candidate", options.benchCandidate);
    extensionOptions(args, options.extensionConfig, options.extensionEnvironment);
    return this.run("apply", args);
  }

  /**
   * Run generated-target tests with sanka-migrate test.
   *
   * @param options - Functional test arguments matching the CLI flags.
   * @returns Test verdict, target interpreter, dependencies, and test artifact.
   * @throws SankaMigrateError when setup, dependencies, or tests fail.
   *
   * Side effects: prepares and uses the generated target's own environment and
   * writes generated-target tests. It never borrows SDK dependencies.
   *
   * @example
   * const tested = await migrate.test();
   */
  test(options: TestOptions = {}): Promise<SankaMigrateResult<TestData>> {
    const args = ["test"];
    positional(args, options.root);
    option(args, "--file", options.file);
    option(args, "--state", options.state);
    option(args, "--to", options.to);
    option(args, "--artifact-dir", options.artifactDir);
    option(args, "--output", options.output);
    extensionOptions(args, options.extensionConfig, options.extensionEnvironment);
    return this.run("test", args);
  }

  /**
   * Verify the selected migration with sanka-migrate verify.
   *
   * @param options - Functional verification arguments matching the CLI flags.
   * @returns Verification verdict, checked scope, artifacts, and limitations.
   * @throws SankaMigrateError when verification or its evidence fails.
   *
   * Side effects: performs structural checks and configured read-only probes
   * using the generated target environment.
   *
   * @example
   * const verified = await migrate.verify({ noHttp: true });
   */
  verify(options: VerifyOptions = {}): Promise<SankaMigrateResult<VerifyData>> {
    const args = ["verify"];
    positional(args, options.root);
    option(args, "--file", options.file);
    option(args, "--state", options.state);
    option(args, "--to", options.to);
    option(args, "--artifact-dir", options.artifactDir);
    option(args, "--output", options.output);
    option(args, "--cases", options.cases);
    flag(args, "--no-http", options.noHttp);
    extensionOptions(args, options.extensionConfig, options.extensionEnvironment);
    return this.run("verify", args);
  }

  private run<TData extends Record<string, unknown>>(
    command: SankaMigrateCommand,
    args: string[],
  ): Promise<SankaMigrateResult<TData>> {
    if (this.cwd !== undefined && !existsSync(this.cwd)) {
      return Promise.reject(
        new SankaMigrateError(
          "sanka-migrate working directory was not found: " + this.cwd,
          { command },
        ),
      );
    }

    return new Promise((resolve, reject) => {
      const child = spawn(this.executable, [...args, "--json"], {
        cwd: this.cwd,
        env: { ...process.env, ...this.env },
        shell: false,
        stdio: ["ignore", "pipe", "pipe"],
      });
      let stdout = "";
      let stderr = "";
      child.stdout.setEncoding("utf8");
      child.stderr.setEncoding("utf8");
      child.stdout.on("data", (chunk: string) => {
        stdout += chunk;
      });
      child.stderr.on("data", (chunk: string) => {
        stderr += chunk;
      });
      child.once("error", (error: NodeJS.ErrnoException) => {
        const message =
          error.code === "ENOENT"
            ? "sanka-migrate executable was not found; install it with " +
              "uv tool install sanka-migrate or pass executable"
            : "could not execute sanka-migrate: " + error.message;
        reject(new SankaMigrateError(message, { command, stderr }));
      });
      child.once("close", (code, signal) => {
        if (code === null) {
          reject(
            new SankaMigrateError(
              "sanka-migrate " + command + " was terminated by " + String(signal),
              { command, stderr },
            ),
          );
          return;
        }
        const exitCode = code;
        let result: SankaMigrateResult<TData>;
        try {
          result = decodeResult<TData>(stdout, command, exitCode, stderr);
        } catch (error) {
          reject(error);
          return;
        }

        if (result.outcome === "error") {
          const parsedError = result.data["error"] as unknown as ExtensionFailure;
          reject(
            new SankaMigrateError(parsedError.message, {
              command,
              exitCode,
              parsedError,
              result: result as SankaMigrateResult<Record<string, unknown>>,
              stderr,
            }),
          );
          return;
        }
        resolve(result);
      });
    });
  }
}

function positional(args: string[], value: string | undefined): void {
  if (value !== undefined) {
    args.push(value);
  }
}

function option(
  args: string[],
  name: string,
  value: string | number | undefined,
): void {
  if (value !== undefined) {
    args.push(name, String(value));
  }
}

function flag(args: string[], name: string, enabled: boolean | undefined): void {
  if (enabled === true) {
    args.push(name);
  }
}

function extensionOptions(
  args: string[],
  configuration: Record<string, JsonValue> | undefined,
  environment: readonly string[] | undefined,
): void {
  if (configuration !== undefined) {
    if (
      configuration === null ||
      typeof configuration !== "object" ||
      Array.isArray(configuration)
    ) {
      throw invalidJsonValue();
    }
    args.push("--extension-config", stableJson(snapshotJsonValue(configuration)));
  }
  if (environment === undefined) {
    return;
  }
  if (!Array.isArray(environment)) {
    throw new TypeError(
      "extensionEnvironment must be an array of environment variable names",
    );
  }
  for (let index = 0; index < environment.length; index += 1) {
    const name = environment[index];
    if (
      typeof name !== "string" ||
      !/^[A-Za-z_][A-Za-z0-9_]*$/.test(name)
    ) {
      throw new TypeError(
        "extensionEnvironment must contain valid environment variable names",
      );
    }
    args.push("--extension-env", name);
  }
}

function snapshotJsonValue(
  value: unknown,
  active: WeakSet<object> = new WeakSet(),
  completed: WeakMap<object, JsonValue> = new WeakMap(),
): JsonValue {
  if (
    value === null ||
    typeof value === "boolean" ||
    typeof value === "string"
  ) {
    return value;
  }
  if (typeof value === "number") {
    if (Number.isFinite(value)) {
      return value;
    }
    throw invalidJsonValue();
  }
  if (typeof value !== "object") {
    throw invalidJsonValue();
  }
  if (active.has(value)) {
    throw invalidJsonValue();
  }
  const existing = completed.get(value);
  if (existing !== undefined) {
    return existing;
  }
  const isArray = Array.isArray(value);
  const prototype = Object.getPrototypeOf(value);
  if (
    (isArray && prototype !== Array.prototype) ||
    (!isArray && prototype !== Object.prototype && prototype !== null)
  ) {
    throw invalidJsonValue();
  }
  active.add(value);
  try {
    const descriptors = Object.getOwnPropertyDescriptors(value);
    const keys = Reflect.ownKeys(descriptors);
    let snapshot: JsonValue;
    if (isArray) {
      const lengthDescriptor = Object.getOwnPropertyDescriptor(
        descriptors,
        "length",
      )?.value as PropertyDescriptor | undefined;
      if (
        lengthDescriptor === undefined ||
        !Object.hasOwn(lengthDescriptor, "value") ||
        lengthDescriptor.enumerable !== false
      ) {
        throw invalidJsonValue();
      }
      const length = lengthDescriptor.value as number;
      if (!Number.isInteger(length) || length < 0 || keys.length !== length + 1) {
        throw invalidJsonValue();
      }
      const items: JsonValue[] = new Array(length);
      for (let index = 0; index < length; index += 1) {
        const descriptor = Object.getOwnPropertyDescriptor(
          descriptors,
          String(index),
        )?.value as PropertyDescriptor | undefined;
        if (
          descriptor === undefined ||
          !Object.hasOwn(descriptor, "value") ||
          descriptor.enumerable !== true
        ) {
          throw invalidJsonValue();
        }
        items[index] = snapshotJsonValue(descriptor.value, active, completed);
      }
      snapshot = items;
    } else {
      const record = Object.create(null) as Record<string, JsonValue>;
      for (let index = 0; index < keys.length; index += 1) {
        const key = keys[index];
        if (typeof key !== "string") {
          throw invalidJsonValue();
        }
        const descriptor = Object.getOwnPropertyDescriptor(
          descriptors,
          key,
        )?.value as PropertyDescriptor | undefined;
        if (
          descriptor === undefined ||
          !Object.hasOwn(descriptor, "value") ||
          descriptor.enumerable !== true
        ) {
          throw invalidJsonValue();
        }
        record[key] = snapshotJsonValue(descriptor.value, active, completed);
      }
      snapshot = record;
    }
    Object.freeze(snapshot);
    completed.set(value, snapshot);
    return snapshot;
  } finally {
    active.delete(value);
  }
}

function stableJson(value: JsonValue): string {
  if (Array.isArray(value)) {
    let json = "[";
    for (let index = 0; index < value.length; index += 1) {
      if (index !== 0) {
        json += ",";
      }
      const item = Object.getOwnPropertyDescriptor(value, String(index))
        ?.value as JsonValue;
      json += stableJson(item);
    }
    return json + "]";
  }
  if (value !== null && typeof value === "object") {
    const keys = Object.keys(value).sort();
    let json = "{";
    for (let index = 0; index < keys.length; index += 1) {
      if (index !== 0) {
        json += ",";
      }
      const key = keys[index] as string;
      const item = Object.getOwnPropertyDescriptor(value, key)
        ?.value as JsonValue;
      json += JSON.stringify(key) + ":" + stableJson(item);
    }
    return json + "}";
  }
  return JSON.stringify(value) as string;
}

function invalidJsonValue(): TypeError {
  return new TypeError(
    "extensionConfig must contain only JSON-compatible plain values",
  );
}

function decodeResult<TData extends Record<string, unknown>>(
  stdout: string,
  command: SankaMigrateCommand,
  exitCode: number,
  stderr: string,
): SankaMigrateResult<TData> {
  let parsed: unknown;
  try {
    parsed = JSON.parse(stdout);
  } catch {
    throw new SankaMigrateError(
      "sanka-migrate " + command + " did not return one valid JSON document",
      { command, exitCode, stderr },
    );
  }
  if (!isRecord(parsed)) {
    throw new SankaMigrateError(
      "sanka-migrate " + command + " returned a non-object JSON document",
      { command, exitCode, stderr },
    );
  }
  if (parsed["schema_version"] !== CLI_SCHEMA_VERSION) {
    throw new SankaMigrateError(
      "unsupported sanka-migrate protocol: " + String(parsed["schema_version"]),
      { command, exitCode, stderr },
    );
  }
  if (parsed["command"] !== command) {
    throw new SankaMigrateError(
      "sanka-migrate returned command " +
        String(parsed["command"]) +
        ", expected " +
        command,
      { command, exitCode, stderr },
    );
  }
  const outcome = parsed["outcome"];
  if (outcome !== "success" && outcome !== "error") {
    throw invalidField(
      command,
      exitCode,
      stderr,
      "outcome",
      '"success" or "error"',
    );
  }
  if (exitCode !== 0 && exitCode !== 1 && exitCode !== 2) {
    throw new SankaMigrateError(
      "invalid sanka-migrate exit code " + exitCode + "; expected 0, 1, or 2",
      { command, exitCode, stderr },
    );
  }
  if ((outcome === "success") !== (exitCode === 0)) {
    throw new SankaMigrateError(
      "sanka-migrate outcome " +
        outcome +
        " is inconsistent with exit code " +
        exitCode,
      { command, exitCode, stderr },
    );
  }

  const data = parsed["data"];
  if (!isRecord(data)) {
    throw invalidField(command, exitCode, stderr, "data", "an object");
  }
  const errorData = data["error"];
  if (outcome === "success") {
    if (Object.hasOwn(data, "error")) {
      throw invalidField(
        command,
        exitCode,
        stderr,
        "data.error",
        "absent on success",
      );
    }
  } else {
    if (!isRecord(errorData)) {
      throw invalidField(command, exitCode, stderr, "data.error", "an object");
    }
    for (const name of ["code", "message"] as const) {
      if (typeof errorData[name] !== "string") {
        throw invalidField(
          command,
          exitCode,
          stderr,
          "data.error." + name,
          "a string",
        );
      }
    }
    if (Object.hasOwn(errorData, "details") && !isRecord(errorData["details"])) {
      throw invalidField(
        command,
        exitCode,
        stderr,
        "data.error.details",
        "an object",
      );
    }
  }
  if (!isStringArray(parsed["artifacts"])) {
    throw invalidField(command, exitCode, stderr, "artifacts", "a string array");
  }
  if (!isStringArray(parsed["limitations"])) {
    throw invalidField(command, exitCode, stderr, "limitations", "a string array");
  }
  if (!isStringArray(parsed["next_actions"])) {
    throw invalidField(command, exitCode, stderr, "next_actions", "a string array");
  }
  if (typeof parsed["migration_state"] !== "string") {
    throw invalidField(command, exitCode, stderr, "migration_state", "a string");
  }

  return {
    schema_version: CLI_SCHEMA_VERSION,
    command,
    outcome,
    migration_state: parsed["migration_state"],
    data: data as TData,
    artifacts: parsed["artifacts"],
    limitations: parsed["limitations"],
    next_actions: parsed["next_actions"],
  };
}

function invalidField(
  command: SankaMigrateCommand,
  exitCode: number,
  stderr: string,
  name: string,
  expected: string,
): SankaMigrateError {
  return new SankaMigrateError(
    "invalid sanka-cli/v1 field " + name + "; expected " + expected,
    { command, exitCode, stderr },
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string");
}
