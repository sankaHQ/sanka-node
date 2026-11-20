# sanka-sdk

Official Node.js and TypeScript SDK for Sanka's hosted API and local migration lifecycle.

[Node SDK guide](https://sanka.com/docs/developers/sdk-node/) · [Authentication](https://sanka.com/docs/developers/authentication/) · [Developer documentation](https://sanka.com/docs/developers/) · API base URL `https://api.sanka.com`

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=sanka-sdk&utm_campaign=typescript)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-1f6feb?style=for-the-badge)](https://github.com/sankaHQ/sanka-node/blob/main/LICENSE)

<!-- Start Summary [summary] -->
## Summary

The official Node.js and TypeScript SDK for Sanka's hosted API and local migration lifecycle.

<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [sanka-sdk](#sanka-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Local migration](#local-migration)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add sanka-sdk
```

### PNPM

```bash
pnpm add sanka-sdk
```

### Bun

```bash
bun add sanka-sdk
```

### Yarn

```bash
yarn add sanka-sdk
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import()` to import and use this package.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](https://github.com/sankaHQ/sanka-node/blob/main/RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import Sanka from "sanka-sdk";

// With no apiKey, the client reads SANKA_API_KEY from the environment.
const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const identity = await sanka.publicAuth.getCurrentIdentity();

  console.log(identity.result.data.workspaceName); // workspace the key belongs to
  console.log(identity.result.data.permissionLevel); // the key's permission level
}

run();
```

`getCurrentIdentity()` resolves to `{ headers, result }`, where `result` is the response body, so the identity is `identity.result.data`. It also carries `workspaceId`, `tokenName`, `permissions` and `scopes`. About half of the methods resolve to this shape and the rest to the body itself; each method's page shows its response type.
<!-- End SDK Example Usage [usage] -->

<!-- Start Local Migration [local-migration] -->
## Local migration

The hosted API client and local migration runtime are separate:

| Import | What runs | Authentication |
|---|---|---|
| `import Sanka from "sanka-sdk"` | Sanka's hosted HTTP API | API token |
| `import { SankaMigrate } from "sanka-sdk/migrate"` | A local `sanka` subprocess | None |

Install `sanka` separately. The Node adapter does not bundle the runtime or call the hosted API.

```bash
uv tool install sanka-cli
```

Use a runtime release that includes the extension marketplace commands and
the published default DRF extension dependency.

```typescript
import { SankaMigrate } from "sanka-sdk/migrate";

const migrate = new SankaMigrate({
  cwd: "./django-app",
  env: { DJANGO_SECRET_KEY: process.env["DJANGO_SECRET_KEY"] },
});

await migrate.extensions.marketplaces.add(
  "git@github.com:sankaHQ/extensions.git",
  { name: "sanka" },
);
const extensions = await migrate.extensions.list();
console.log(extensions.data);
await migrate.extensions.add("sanka/drf-to-fastapi", {
  marketplace: "sanka",
});

const scan = await migrate.scan();
for (const recommendation of scan.data.recommendations ?? []) {
  console.log(
    recommendation.id,
    recommendation.targets,
    recommendation.status,
    recommendation.add_command,
  );
}

const plan = await migrate.plan({
  to: "fastapi",
  generation: "full",
  strategy: "native",
  packageManager: "uv",
  extensionConfig: { output: "target" },
  extensionEnvironment: ["DJANGO_SECRET_KEY"],
});
const applied = await migrate.apply({ planHash: plan.data.plan_hash });
const tested = await migrate.test();
const verified = await migrate.verify();
```

`scan.data.recommendations` contains typed extension IDs, versions, marketplace
names, targets, static evidence, status, and the exact add command. `plan({ to })`
selects one enabled extension that advertises that target. SDK calls are
non-interactive, so pass `to`. A missing, incompatible, or ambiguous extension
fails instead of choosing one silently. For `SANKA_EXTENSION_REQUIRED`, read
the same recommendation data from
`error.parsedError?.details?.["recommendations"]`.

`extensionConfig` and `extensionEnvironment` are available on `scan`, `plan`,
`apply`, `test`, and `verify`. Configuration must be a plain JSON object. The
adapter snapshots and serializes it before spawning. `extensionEnvironment`
accepts names such as `DJANGO_SECRET_KEY`, not secret values. Values come from
`process.env` plus the constructor's `env` overrides and are forwarded only
when named.

### Manage extensions and marketplaces

```typescript
await migrate.extensions.marketplaces.add("./marketplace", {
  name: "third-party",
  trust: true,
});
await migrate.extensions.marketplaces.list();
await migrate.extensions.marketplaces.upgrade("third-party");
await migrate.extensions.marketplaces.upgrade(); // Upgrade every marketplace.

await migrate.extensions.add("example/demo", {
  marketplace: "third-party",
});
await migrate.extensions.list();
await migrate.extensions.remove("example/demo");

await migrate.extensions.marketplaces.remove("third-party");
```

The Node adapter does not make trust or snapshot decisions. `sanka`
owns marketplace trust checks, immutable snapshots, artifact validation,
installed caches, and project extension locks. Adding an untrusted marketplace
requires `trust: true`. Upgrading reads a new immutable snapshot. Removing a
marketplace fails while a project extension still depends on it.

### Command and result contract

| Node.js method | Runtime command | Purpose |
|---|---|---|
| `scan()` | `sanka scan ... --json` | Inspect the source and write the scan artifact |
| `plan()` | `sanka plan ... --json` | Create a reviewable plan and plan hash |
| `apply()` | `sanka apply ... --json` | Generate only from the supplied reviewed plan hash |
| `test()` | `sanka test ... --json` | Prepare the generated target environment and run its tests |
| `verify()` | `sanka verify ... --json` | Verify integrity and configured behavior |
| `extensions.add/list/remove` | `sanka extension ... --json` | Manage project extension pins |
| `extensions.marketplaces.add/list/upgrade/remove` | `sanka extension marketplace ... --json` | Manage immutable marketplace snapshots |

Every subprocess receives an argument array with `shell: false` and `--json`.
Invalid extension configuration or environment names throw before the process
starts. String arguments are never interpreted as shell commands.

Successful calls return a typed `SankaMigrateResult` only after the adapter
validates one complete `sanka-cli/v1` document. It requires the matching
command, a `success` outcome with exit `0`, object `data`, string-array
`artifacts`, `limitations`, and `next_actions`, and a string `migration_state`.

Failures reject with `SankaMigrateError`. A valid CLI failure has an `error`
outcome with exit `1` for a migration or verification failure, or exit `2` for
invalid usage. `parsedError` contains its stable `code`, `message`, and optional
`details`. `result` keeps the complete validated envelope. Missing executables,
signals, malformed JSON, unsupported schemas, command mismatches, malformed
error data, and inconsistent outcome/exit pairs fail closed without a `result`.

```typescript
import { SankaMigrateError } from "sanka-sdk/migrate";

try {
  await migrate.plan({ to: "fastapi" });
} catch (error) {
  if (error instanceof SankaMigrateError) {
    console.error(error.parsedError?.code, error.parsedError?.details);
    console.error(error.exitCode, error.stderr);
  }
}
```

See the [CLI execution model](https://github.com/sankaHQ/sanka/blob/main/docs/django-to-fastapi.md#cli-and-sdk-execution-model) and [Sanka developer documentation](https://sanka.com/docs/developers/).
<!-- End Local Migration [local-migration] -->

<!-- Start Authentication [security] -->
## Authentication

Every request needs a Sanka API key. Create one as described in [Authentication](https://sanka.com/docs/developers/authentication/) and store it as `SANKA_API_KEY`.

| Option   | Type | Scheme      | Environment variable |
| -------- | ---- | ----------- | -------------------- |
| `apiKey` | http | HTTP Bearer | `SANKA_API_KEY`      |

`new Sanka()` reads `SANKA_API_KEY` when you do not pass `apiKey`. The older `bearerAuth` option and `SANKA_BEARER_AUTH` variable still work: an option you pass wins over the environment, and `SANKA_API_KEY` wins over `SANKA_BEARER_AUTH`.

```typescript
import Sanka from "sanka-sdk";

// With no apiKey, the client reads SANKA_API_KEY from the environment.
const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const identity = await sanka.publicAuth.getCurrentIdentity();

  console.log(identity.result.data.workspaceName); // workspace the key belongs to
  console.log(identity.result.data.permissionLevel); // the key's permission level
}

run();
```

`getCurrentIdentity()` resolves to `{ headers, result }`, where `result` is the response body, so the identity is `identity.result.data`. It also carries `workspaceId`, `tokenName`, `permissions` and `scopes`. About half of the methods resolve to this shape and the rest to the body itself; each method's page shows its response type.

A missing or invalid key fails with HTTP 401, thrown as `errors.ErrorEnvelope` (see [Error Handling](#error-handling)).
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

Each resource is a property of the client: `sanka.publicAuth.getCurrentIdentity()` calls `GET /v2/public/auth/whoami`. Each resource links to its page on GitHub with the parameters, response type and an example for every method. The installed package also ships the typed source in `src/sdk/`.

<details open>
<summary>Available methods</summary>

### [Absences](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/absences/README.md): `sanka.absences`

* `listPublicAbsencesApiV2PublicAbsencesGet` - List Public Absences
* `createPublicAbsenceApiV2PublicAbsencesPost` - Create Public Absence
* `getPublicAbsenceApiV2PublicAbsencesAbsenceIdGet` - Get Public Absence
* `updatePublicAbsenceApiV2PublicAbsencesAbsenceIdPut` - Update Public Absence
* `deletePublicAbsenceApiV2PublicAbsencesAbsenceIdDelete` - Delete Public Absence

### [ActivityLogs](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/activitylogs/README.md): `sanka.activityLogs`

* `listPublicActivityLogsApiV2PublicLogsGet` - List Public Activity Logs

### [Ai](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/ai/README.md): `sanka.ai`

* `enrich` - Enrich Record
* `score` - Score Record

### [Applicants](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/applicants/README.md): `sanka.applicants`

* `listPublicApplicants` - List Records
* `createPublicApplicant` - Create Record
* `getPublicApplicant` - Get Record
* `updatePublicApplicant` - Update Record
* `archivePublicApplicant` - Archive Record
* `activatePublicApplicant` - Activate Record

### [ApprovalRequests](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/approvalrequests/README.md): `sanka.approvalRequests`

* `createApprovalRequestApiV2PublicApprovalRequestsPost` - Create Approval Request
* `approveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost` - Approve Approval Request
* `rejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost` - Reject Approval Request

### [Associations](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/associations/README.md): `sanka.associations`

* `listPublicAssociationsApiV2PublicAssociationsGet` - List Public Associations
* `createPublicAssociationApiV2PublicAssociationsPost` - Create Public Association
* `deletePublicAssociationApiV2PublicAssociationsDelete` - Delete Public Association

### [AttendanceRecords](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/attendancerecords/README.md): `sanka.attendanceRecords`

* `listPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet` - List Public Attendance Records
* `createPublicAttendanceRecordApiV2PublicAttendanceRecordsPost` - Create Public Attendance Record
* `getPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet` - Get Public Attendance Record
* `updatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut` - Update Public Attendance Record
* `deletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete` - Delete Public Attendance Record

### [Bills](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/bills/README.md): `sanka.bills`

* `list` - List Public Bills
* `create` - Create Public Bill
* `uploadPublicBillFileApiV2PublicBillsFilesPost` - Upload Public Bill File
* `get` - Get Public Bill
* `update` - Update Public Bill
* `delete` - Delete Public Bill

### [Companies](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/companies/README.md): `sanka.companies`

* `list` - List Public Companies
* `create` - Create Public Company
* `get` - Get Public Company
* `update` - Update Public Company
* `delete` - Delete Public Company
* `getPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet` - Get Public Company Price Table
* `updatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch` - Update Public Company Price Table Company
* `applyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost` - Apply Public Company Price Table Items
* `updatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch` - Update Public Company Price Table Item

### [Contacts](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/contacts/README.md): `sanka.contacts`

* `list` - List Public Contacts
* `create` - Create Public Contact
* `get` - Get Public Contact
* `update` - Update Public Contact
* `delete` - Delete Public Contact

### [CustomObjects](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/customobjects/README.md): `sanka.customObjects`

* `listRecords` - List Custom Object Records
* `createRecord` - Create Custom Object Record
* `getRecord` - Get Custom Object Record
* `updateRecord` - Update Custom Object Record
* `deleteRecord` - Delete Custom Object Record
* `archiveRecord` - Archive Custom Object Record
* `activateRecord` - Activate Custom Object Record
* `createPublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost` - Create Public Custom Object Record Compatibility
* `updatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost` - Update Public Custom Object Record Compatibility
* `archivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost` - Archive Public Custom Object Record Compatibility

### [Deals](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/deals/README.md): `sanka.deals`

* `list` - List Public Deals
* `create` - Create Public Deal
* `listPipelines` - List Public Deal Pipelines
* `createPipeline` - Create Public Deal Pipeline
* `updatePipeline` - Update Public Deal Pipeline
* `get` - Get Public Deal
* `update` - Update Public Deal
* `delete` - Delete Public Deal

### [DeveloperCloud](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/developercloud/README.md): `sanka.developerCloud`

* `listFleets` - List Fleets
* `createFleet` - Create Fleet
* `getFleet` - Get Fleet
* `cancelFleet` - Cancel Fleet
* `retryFleet` - Retry Fleet
* `getAvailability` - Cloud Availability
* `uploadSource` - Upload Cloud Source
* `listRuns` - List Cloud Runs
* `createRun` - Create Cloud Run
* `listCertificateKeys` - Cloud Certificate Keys
* `getCertificate` - Cloud Certificate
* `revokeCertificate` - Revoke Cloud Certificate
* `getRun` - Get Cloud Run
* `cancelRun` - Cancel Cloud Run
* `listEvents` - Cloud Run Events
* `getReceipt` - Cloud Run Receipt
* `listArtifacts` - Cloud Run Artifacts
* `getArtifact` - Download Cloud Artifact

### [Disbursements](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/disbursements/README.md): `sanka.disbursements`

* `list` - List Public Disbursements
* `create` - Create Public Disbursement
* `get` - Get Public Disbursement
* `update` - Update Public Disbursement
* `delete` - Delete Public Disbursement
* `listPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet` - List Public Disbursement Allocations
* `createPublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost` - Create Public Disbursement Allocation
* `updatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch` - Update Public Disbursement Allocation
* `deletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete` - Delete Public Disbursement Allocation

### [Employees](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/employees/README.md): `sanka.employees`

* `listPublicEmployeesApiV2PublicEmployeesGet` - List Public Employees

### [Estimates](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/estimates/README.md): `sanka.estimates`

* `list` - List Public Estimates
* `create` - Create Public Estimate
* `uploadPublicEstimateFileApiV2PublicEstimatesFilesPost` - Upload Public Estimate File
* `get` - Get Public Estimate
* `update` - Update Public Estimate
* `delete` - Delete Public Estimate
* `downloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet` - Download Public Estimate Pdf

### [Expenses](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/expenses/README.md): `sanka.expenses`

* `list` - List Public Expenses
* `create` - Create Public Expense
* `uploadFile` - Upload Public Expense File
* `get` - Get Public Expense
* `update` - Update Public Expense
* `delete` - Delete Public Expense

### [Exports](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/exports/README.md): `sanka.exports`

* `listPublicExportJobsCompatApiV2PublicExportsGet` - List Public Export Jobs Compat
* `createPublicExportJobCompatApiV2PublicExportsPost` - Create Public Export Job Compat
* `getPublicExportJobCompatApiV2PublicExportsJobIdGet` - Get Public Export Job Compat
* `cancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost` - Cancel Public Export Job Compat

### [FerryDiagrams](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/ferrydiagrams/README.md): `sanka.ferryDiagrams`

* `listPublicFerryDiagramsApiV2PublicFerryDiagramsGet` - List Public Ferry Diagrams
* `createPublicFerryDiagramApiV2PublicFerryDiagramsPost` - Create Public Ferry Diagram
* `getPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet` - Get Public Ferry Diagram
* `updatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut` - Update Public Ferry Diagram
* `deletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete` - Delete Public Ferry Diagram
* `getPublicFerryDiagramImage` - Get Public Ferry Diagram Image

### [FerryPrograms](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/ferryprograms/README.md): `sanka.ferryPrograms`

* `listPublicFerryProgramsApiV2PublicFerryProgramsGet` - List Public Ferry Programs
* `getPublicFerryProgramApiV2PublicFerryProgramsProgramIdGet` - Get Public Ferry Program
* `listPublicFerryProgramMeetingsApiV2PublicFerryProgramsProgramIdMeetingsGet` - List Public Ferry Program Meetings
* `createPublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsPost` - Create Public Ferry Program Meeting
* `updatePublicFerryProgramMeetingApiV2PublicFerryProgramsProgramIdMeetingsMeetingIdPatch` - Update Public Ferry Program Meeting
* `createPublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosPost` - Create Public Ferry Program Todo
* `batchUpsertPublicFerryProgramTodosApiV2PublicFerryProgramsProgramIdTodosBatchUpsertPost` - Batch Upsert Public Ferry Program Todos
* `updatePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdPatch` - Update Public Ferry Program Todo
* `deletePublicFerryProgramTodoApiV2PublicFerryProgramsProgramIdTodosTodoIdDelete` - Delete Public Ferry Program Todo

### [Files](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/files/README.md): `sanka.files`

* `uploadPublicFileApiV2PublicFilesPost` - Upload Public File

### [Goals](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/goals/README.md): `sanka.goals`

* `list` - List Public Goals
* `create` - Create Public Goal
* `listMetrics` - List Public Goal Metrics
* `get` - Get Public Goal
* `update` - Update Public Goal
* `delete` - Delete Public Goal
* `setTargets` - Set Public Goal Targets
* `getProgress` - Get Public Goal Progress

### [Imports](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/imports/README.md): `sanka.imports`

* `listPublicImportJobsCompatApiV2PublicImportsGet` - List Public Import Jobs Compat
* `createPublicImportJobCompatApiV2PublicImportsPost` - Create Public Import Job Compat
* `getPublicImportJobCompatApiV2PublicImportsJobIdGet` - Get Public Import Job Compat
* `cancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost` - Cancel Public Import Job Compat

### [Incentives](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/incentives/README.md): `sanka.incentives`

* `listPublicIncentivesApiV2PublicIncentivesGet` - List Public Incentives
* `listPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet` - List Public Incentive Company Options
* `listPublicIncentivePlansApiV2PublicIncentivesPlansGet` - List Public Incentive Plans
* `createPublicIncentivePlanApiV2PublicIncentivesPlansPost` - Create Public Incentive Plan
* `updatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch` - Update Public Incentive Plan
* `deletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete` - Delete Public Incentive Plan
* `listPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet` - List Public Incentive Allocations
* `replacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut` - Replace Public Incentive Allocations
* `calculatePublicIncentivesApiV2PublicIncentivesCalculatePost` - Calculate Public Incentives
* `approvePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost` - Approve Public Incentives Bulk
* `listPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet` - List Public Incentive Batches
* `createPublicIncentiveBatchApiV2PublicIncentivesBatchesPost` - Create Public Incentive Batch
* `getPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet` - Get Public Incentive Batch
* `approvePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost` - Approve Public Incentive Batch
* `markPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost` - Mark Public Incentive Batch Paid
* `approvePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost` - Approve Public Incentive

### [Interviews](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/interviews/README.md): `sanka.interviews`

* `listPublicInterviews` - List Records
* `createPublicInterview` - Create Record
* `getPublicInterview` - Get Record
* `updatePublicInterview` - Update Record
* `archivePublicInterview` - Archive Record
* `activatePublicInterview` - Activate Record

### [Inventories](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/inventories/README.md): `sanka.inventories`

* `list` - List Public Inventories
* `create` - Create Public Inventory
* `get` - Get Public Inventory
* `update` - Update Public Inventory
* `delete` - Delete Public Inventory

### [InventoryTransactions](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/inventorytransactions/README.md): `sanka.inventoryTransactions`

* `list` - List Public Inventory Transactions
* `create` - Create Public Inventory Transaction
* `get` - Get Public Inventory Transaction
* `update` - Update Public Inventory Transaction
* `delete` - Delete Public Inventory Transaction

### [Invoices](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/invoices/README.md): `sanka.invoices`

* `list` - List Public Invoices
* `create` - Create Public Invoice
* `uploadPublicInvoiceFileApiV2PublicInvoicesFilesPost` - Upload Public Invoice File
* `bulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePost` - Bulk Update Public Invoices
* `listPublicOverdueInvoicesApiV2PublicInvoicesOverdueGet` - List Public Overdue Invoices
* `get` - Get Public Invoice
* `update` - Update Public Invoice
* `delete` - Delete Public Invoice
* `downloadPublicInvoicePdfApiV2PublicInvoicesInvoiceIdPdfGet` - Download Public Invoice Pdf
* `sendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPost` - Send Public Invoice Email
* `permanentDeletePublicInvoiceApiV2PublicInvoicesInvoiceIdPermanentDeleteDelete` - Permanent Delete Public Invoice

### [Items](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/items/README.md): `sanka.items`

* `list` - List Public Items
* `create` - Create Public Item
* `get` - Get Public Item
* `update` - Update Public Item
* `delete` - Delete Public Item

### [JobPostings](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/jobpostings/README.md): `sanka.jobPostings`

* `listPublicJobPostings` - List Records
* `createPublicJobPosting` - Create Record
* `getPublicJobPosting` - Get Record
* `updatePublicJobPosting` - Update Record
* `archivePublicJobPosting` - Archive Record
* `activatePublicJobPosting` - Activate Record

### [Journals](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/journals/README.md): `sanka.journals`

* `listPublicJournalsApiV2PublicJournalsGet` - List Journal Entries
* `createPublicJournalApiV2PublicJournalsPost` - Create Journal Entry
* `createPublicFinancialStatementViewApiV2PublicJournalsViewsPost` - Create Financial Statement View
* `get` - Get Journal Entry
* `update` - Update Journal Entry
* `delete` - Delete Journal Entry
* `archive` - Archive Journal Entry
* `activate` - Activate Journal Entry

### [Locations](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/locations/README.md): `sanka.locations`

* `list` - List Public Locations
* `create` - Create Public Location
* `get` - Get Public Location
* `update` - Update Public Location
* `delete` - Delete Public Location

### [Lookout](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/lookout/README.md): `sanka.lookout`

* `ingestClaySignalApiV2LookoutConnectorsClaySignalsPost` - Ingest Clay Signal
* `ingestProviderSignalApiV2LookoutConnectorsProviderSignalsPost` - Ingest Provider Signal
* `listProviderActionsApiV2LookoutAdActionsGet` - List Provider Actions (deprecated)
* `listProviderActionsApiV2LookoutProviderActionsGet` - List Provider Actions
* `claimProviderActionApiV2LookoutAdActionsActionIdClaimPost` - Claim Provider Action (deprecated)
* `claimProviderActionApiV2LookoutProviderActionsActionIdClaimPost` - Claim Provider Action
* `completeProviderActionApiV2LookoutAdActionsActionIdCompletePost` - Complete Provider Action (deprecated)
* `completeProviderActionApiV2LookoutProviderActionsActionIdCompletePost` - Complete Provider Action

### [Meters](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/meters/README.md): `sanka.meters`

* `list` - List Public Meters
* `create` - Create Public Meter
* `get` - Get Public Meter
* `update` - Update Public Meter
* `delete` - Delete Public Meter

### [ObjectSchemas](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/objectschemas/README.md): `sanka.objectSchemas`

* `listPublicObjectSchemasApiV2PublicObjectSchemasGet` - List Public Object Schemas
* `mutatePublicObjectSchemaApiV2PublicObjectSchemasPost` - Mutate Public Object Schema

### [Orders](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/orders/README.md): `sanka.orders`

* `list` - List Public Orders
* `create` - Create Public Order
* `bulkCreate` - Bulk Create Public Orders
* `uploadPublicOrderFileApiV2PublicOrdersFilesPost` - Upload Public Order File
* `get` - Get Public Order
* `update` - Update Public Order
* `delete` - Delete Public Order
* `downloadPublicOrderPdfApiV2PublicOrdersOrderIdPdfGet` - Download Public Order Pdf

### [Payments](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/payments/README.md): `sanka.payments`

* `list` - List Public Payments
* `create` - Create Public Payment
* `get` - Get Public Payment
* `update` - Update Public Payment
* `delete` - Delete Public Payment
* `downloadPublicPaymentPdfApiV2PublicPaymentsPaymentIdPdfGet` - Download Public Payment Pdf
* `listPublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsGet` - List Public Payment Allocations
* `updatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPut` - Update Public Payment Allocations

### [Payroll](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/payroll/README.md): `sanka.payroll`

* `listPublicPayrollProfilesApiV2PublicPayrollProfilesGet` - List Public Payroll Profiles
* `upsertPublicPayrollProfileApiV2PublicPayrollProfilesPost` - Upsert Public Payroll Profile
* `listPublicPayrollRunsApiV2PublicPayrollRunsGet` - List Public Payroll Runs
* `calculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost` - Calculate Public Payroll Run
* `getPublicPayrollRunApiV2PublicPayrollRunsRunIdGet` - Get Public Payroll Run
* `approvePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost` - Approve Public Payroll Run
* `createPublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost` - Create Public Payroll Journal Entry
* `downloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet` - Download Public Payroll Payslip Pdf

### [Presentations](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/presentations/README.md): `sanka.presentations`

* `catalog` - Get Public Presentation Catalog
* `list` - List Public Flow Presentations
* `create` - Create Public Flow Presentation
* `get` - Get Public Flow Presentation
* `replace` - Replace Public Flow Presentation
* `update` - Update Public Flow Presentation
* `uploadImage` - Upload Public Flow Presentation Image
* `importImage` - Import Public Flow Presentation Image
* `importDiagramImage` - Import Public Flow Presentation Diagram Image
* `preview` - Preview Public Flow Presentation
* `createExport` - Create Public Flow Presentation Export
* `getExport` - Get Public Flow Presentation Export
* `downloadExport` - Download Public Flow Presentation Export
* `cancelExport` - Cancel Public Flow Presentation Export

### [ProgramPresentations](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/programpresentations/README.md): `sanka.programPresentations`

* `list` - List Public Program Presentations
* `create` - Create Public Program Presentation
* `get` - Get Public Program Presentation
* `replace` - Replace Public Program Presentation
* `update` - Update Public Program Presentation
* `uploadImage` - Upload Public Program Presentation Image
* `importImage` - Import Public Program Presentation Image
* `importDiagramImage` - Import Public Program Presentation Diagram Image
* `preview` - Preview Public Program Presentation
* `createExport` - Create Public Program Presentation Export
* `getExport` - Get Public Program Presentation Export
* `downloadExport` - Download Public Program Presentation Export
* `cancelExport` - Cancel Public Program Presentation Export

### [Projects](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/projects/README.md): `sanka.projects`

* `list` - List Public Projects
* `create` - Create Public Project
* `get` - Get Public Project
* `update` - Update Public Project
* `delete` - Delete Public Project

### [Properties](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/properties/README.md): `sanka.properties`

* `list` - List Public Developer Properties
* `create` - Create Public Developer Property
* `get` - Retrieve Public Developer Property
* `update` - Update Public Developer Property
* `delete` - Delete Public Developer Property

### [Prospect.Companies](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/prospectcompanies/README.md): `sanka.prospect.companies`

* `create` - Prospect Companies

### [PublicAuth](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/publicauth/README.md): `sanka.publicAuth`

* `getCurrentIdentity` - Get Current Public Developer Auth Identity
* `getPublicAuthSessionApiV2PublicAuthSessionGet` - Get Current Public OAuth Session
* `switchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost` - Switch Current Public OAuth Session Workspace
* `switchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost` - Switch Current Public MCP OAuth Session Workspace
* `recordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost` - Record Public MCP Tool Call
* `revokePublicAuthSessionApiV2PublicAuthSessionRevokePost` - Revoke Current Public OAuth Session

### [PurchaseOrders](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/purchaseorders/README.md): `sanka.purchaseOrders`

* `list` - List Public Purchase Orders
* `create` - Create Public Purchase Order
* `get` - Get Public Purchase Order
* `update` - Update Public Purchase Order
* `delete` - Delete Public Purchase Order
* `uploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost` - Upload Public Purchase Order File
* `downloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet` - Download Public Purchase Order Pdf

### [Records](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/records/README.md): `sanka.records`

* `queryPublicRecordsApiV2PublicRecordsQueryPost` - Query Public Records
* `aggregatePublicRecordsApiV2PublicRecordsAggregatePost` - Aggregate Public Records

### [Reports](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/reports/README.md): `sanka.reports`

* `list` - List Public Reports
* `create` - Create Public Report
* `get` - Get Public Report
* `update` - Update Public Report
* `delete` - Delete Public Report

### [Revenues](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/revenues/README.md): `sanka.revenues`

* `list` - List Public Slips
* `create` - Create Public Slip
* `get` - Get Public Slip
* `update` - Update Public Slip
* `delete` - Delete Public Slip
* `downloadPublicSlipPdfApiV2PublicSlipsRevenueIdPdfGet` - Download Public Slip Pdf

### [RuleSettings](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/rulesettings/README.md): `sanka.ruleSettings`

* `listPublicApprovalRulesApiV2PublicApprovalRulesGet` - List Public Approval Rules
* `upsertPublicApprovalRuleApiV2PublicApprovalRulesPost` - Upsert Public Approval Rule
* `getPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet` - Get Public Approval Rule Options
* `deletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete` - Delete Public Approval Rule
* `listPublicLockRulesApiV2PublicLockRulesGet` - List Public Lock Rules
* `upsertPublicLockRuleApiV2PublicLockRulesPost` - Upsert Public Lock Rule
* `getPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet` - Get Public Lock Rule Options
* `deletePublicLockRuleApiV2PublicLockRulesRuleIdDelete` - Delete Public Lock Rule
* `listPublicDeliveryRulesApiV2PublicDeliveryRulesGet` - List Public Delivery Rules
* `upsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost` - Upsert Public Delivery Rule
* `getPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet` - Get Public Delivery Rule Options
* `deletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete` - Delete Public Delivery Rule

### [SankaBuy](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/sankabuy/README.md): `sanka.sankaBuy`

* `listPublicBuyOffersApiV2PublicBuyOffersGet` - List Public Buy Offers

### [Subscriptions](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/subscriptions/README.md): `sanka.subscriptions`

* `list` - List Public Subscriptions
* `create` - Create Public Subscription
* `bulkUpdatePublicSubscriptionsApiV2PublicSubscriptionsBulkUpdatePost` - Bulk Update Public Subscriptions
* `get` - Get Public Subscription
* `update` - Update Public Subscription
* `delete` - Delete Public Subscription

### [Tasks](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/tasks/README.md): `sanka.tasks`

* `listPublicTasksApiV2PublicTasksGet` - List Public Tasks
* `createPublicTaskApiV2PublicTasksPost` - Create Public Task
* `getPublicTaskApiV2PublicTasksTaskIdGet` - Get Public Task
* `updatePublicTaskApiV2PublicTasksTaskIdPut` - Update Public Task
* `deletePublicTaskApiV2PublicTasksTaskIdDelete` - Delete Public Task

### [Tickets](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/tickets/README.md): `sanka.tickets`

* `list` - List Public Tickets
* `create` - Create Public Ticket
* `listPipelines` - List Public Ticket Pipelines
* `get` - Get Public Ticket
* `update` - Update Public Ticket
* `delete` - Delete Public Ticket
* `updateStatus` - Update Public Ticket Status

### [Transfers](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/transfers/README.md): `sanka.transfers`

* `getPublicTransferHistoryApiV2PublicTransfersHistoryIdGet` - Get Public Transfer History

### [Views](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/views/README.md): `sanka.views`

* `listPublicViewsApiV2PublicViewsGet` - List Public Views
* `createPublicViewApiV2PublicViewsPost` - Create Public View
* `getPublicViewApiV2PublicViewsViewIdGet` - Get Public View
* `updatePublicViewApiV2PublicViewsViewIdPatch` - Update Public View
* `deletePublicViewApiV2PublicViewsViewIdDelete` - Delete Public View
* `getPublicViewColumnsApiV2PublicViewsViewIdColumnsGet` - Get Public View Columns

### [WorkflowActions](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/workflowactions/README.md): `sanka.workflowActions`

* `listActions` - List Public Workflow Actions Compat

### [WorkflowRuns](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/workflowruns/README.md): `sanka.workflowRuns`

* `getRun` - Get Public Workflow Run
* `getPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet` - Get Public Workflow Run Nested Compat
* `resolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost` - Resolve Public Workflow Record
* `previewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost` - Preview Public Workflow Compat
* `previewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost` - Preview Public Hubspot Invoice Draft
* `previewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost` - Preview Public Freee Invoice Export
* `previewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost` - Preview Public Moneyforward Invoice Export
* `previewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost` - Preview Public Hubspot Estimate Draft
* `previewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost` - Preview Public Hubspot Order Handoff
* `previewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost` - Preview Public Hubspot Commission Incentive
* `previewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost` - Preview Public Salesforce Quote Readiness
* `summarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost` - Summarize Public Salesforce Quote Readiness
* `startPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost` - Start Public Workflow Compat
* `startPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost` - Start Public Hubspot Invoice Draft
* `startPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost` - Start Public Freee Invoice Export
* `startPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost` - Start Public Moneyforward Invoice Export
* `startPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost` - Start Public Hubspot Estimate Draft
* `startPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost` - Start Public Hubspot Order Handoff
* `startPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost` - Start Public Hubspot Revenue Control Report
* `writebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost` - Writeback Public Salesforce Quote Readiness

### [Workflows](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/workflows/README.md): `sanka.workflows`

* `list` - List Public Workflows
* `createOrUpdate` - Create Public Workflow
* `get` - Get Public Workflow
* `updatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch` - Update Public Workflow
* `deletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete` - Delete Public Workflow
* `runByRef` - Run Public Workflow
* `planTemplate` - Plan Public Workflow Template
* `useTemplate` - Use Public Workflow Template
* `getFlow` - Get Public Workflow Flow
* `constructFlow` - Construct Public Workflow Flow

### [WorkforcePlanning](https://github.com/sankaHQ/sanka-node/blob/main/docs/sdks/workforceplanning/README.md): `sanka.workforcePlanning`

* `getPublicWorkforceOrganization` - Get Public Workforce Organization
* `createPublicWorkforcePosition` - Create Public Workforce Position
* `updatePublicWorkforcePosition` - Update Public Workforce Position
* `setPublicWorkforcePositionJob` - Set Public Workforce Position Job
* `setPublicWorkforcePositionOccupant` - Set Public Workforce Position Occupant

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

Every method above is also a standalone function for browser and serverless bundles, where unused code is tree-shaken away. A function's name is the resource property followed by the method name, it is imported from `sanka-sdk/funcs/<kebab-case-name>.js`, and it takes a `SankaCore` client. `SankaCore` takes the key as `bearerAuth` and reads only the older `SANKA_BEARER_AUTH` from the environment, so pass the key explicitly:

```typescript
import { SankaCore } from "sanka-sdk/core.js";
import { publicAuthGetCurrentIdentity } from "sanka-sdk/funcs/public-auth-get-current-identity.js";

const sanka = new SankaCore({
  bearerAuth: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const res = await publicAuthGetCurrentIdentity(sanka);
  if (res.ok) {
    console.log(res.value);
  } else {
    console.log("publicAuthGetCurrentIdentity failed:", res.error);
  }
}

run();
```

Each resource page linked above shows the standalone form of every method. [FUNCTIONS.md](https://github.com/sankaHQ/sanka-node/blob/main/FUNCTIONS.md) explains the `Result` type they return.
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import Sanka from "sanka-sdk";

const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const result = await sanka.absences.listPublicAbsencesApiV2PublicAbsencesGet(
    {},
    {
      retries: {
        strategy: "backoff",
        backoff: {
          initialInterval: 1,
          maxInterval: 50,
          exponent: 1.1,
          maxElapsedTime: 100,
        },
        retryConnectionErrors: false,
      },
    },
  );

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import Sanka from "sanka-sdk";

const sanka = new Sanka({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const result = await sanka.absences.listPublicAbsencesApiV2PublicAbsencesGet(
    {},
  );

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`SankaError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/sanka-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import Sanka from "sanka-sdk";
import * as errors from "sanka-sdk/models/errors";

const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  try {
    const result = await sanka.absences
      .listPublicAbsencesApiV2PublicAbsencesGet({});

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SankaError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ErrorEnvelope) {
        console.log(error.data$.success); // boolean
        console.log(error.data$.error); // models.ErrorBody
        console.log(error.data$.meta); // models.EnvelopeMeta
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`SankaError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/sanka-error.ts): The base class for HTTP error responses.
  * [`ErrorEnvelope`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/error-envelope.ts): Error response.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`SankaError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/sanka-error.ts)**:
* [`ResponseValidationError`](https://github.com/sankaHQ/sanka-node/blob/main/src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

Requests go to `https://api.sanka.com` by default.

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import Sanka from "sanka-sdk";

const sanka = new Sanka({
  serverURL: "https://api.sanka.com",
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const result = await sanka.absences.listPublicAbsencesApiV2PublicAbsencesGet(
    {},
  );

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import Sanka from "sanka-sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "sanka-sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Sanka({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import Sanka from "sanka-sdk";

const sdk = new Sanka({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `SANKA_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=sanka-sdk&utm_campaign=typescript)


[Developer Cloud release candidate](https://github.com/sankaHQ/sanka-node/blob/main/docs/developer-cloud.md): bounded execution, Repair, certificates and Fleet.
