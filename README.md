# sanka-sdk

Official Node.js and TypeScript SDK for the Sanka API.

[![Built by Speakeasy](https://img.shields.io/badge/Built_by-SPEAKEASY-374151?style=for-the-badge&labelColor=f3f4f6)](https://www.speakeasy.com/?utm_source=sanka-sdk&utm_campaign=typescript)
[![License: Apache-2.0](https://img.shields.io/badge/License-Apache_2.0-1f6feb?style=for-the-badge)](LICENSE)

<!-- Start Summary [summary] -->
## Summary

The official Node.js and TypeScript SDK for Sanka's public API.

<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [sanka-sdk](#sanka-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
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

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import Sanka from "sanka-sdk";

const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const result = await sanka.ai.enrich({
    objectType: "<value>",
  });

  console.log(result);
}

run();
```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type | Scheme      | Environment Variable |
| ------------ | ---- | ----------- | -------------------- |
| `bearerAuth` | http | HTTP Bearer | `SANKA_BEARER_AUTH`  |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import Sanka from "sanka-sdk";

const sanka = new Sanka({
  apiKey: process.env["SANKA_API_KEY"] ?? "",
});

async function run() {
  const result = await sanka.ai.enrich({
    objectType: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Absences](docs/sdks/absences/README.md)

* [listPublicAbsencesApiV2PublicAbsencesGet](docs/sdks/absences/README.md#listpublicabsencesapiv2publicabsencesget) - List Public Absences
* [createPublicAbsenceApiV2PublicAbsencesPost](docs/sdks/absences/README.md#createpublicabsenceapiv2publicabsencespost) - Create Public Absence
* [getPublicAbsenceApiV2PublicAbsencesAbsenceIdGet](docs/sdks/absences/README.md#getpublicabsenceapiv2publicabsencesabsenceidget) - Get Public Absence
* [updatePublicAbsenceApiV2PublicAbsencesAbsenceIdPut](docs/sdks/absences/README.md#updatepublicabsenceapiv2publicabsencesabsenceidput) - Update Public Absence
* [deletePublicAbsenceApiV2PublicAbsencesAbsenceIdDelete](docs/sdks/absences/README.md#deletepublicabsenceapiv2publicabsencesabsenceiddelete) - Delete Public Absence

### [ActivityLogs](docs/sdks/activitylogs/README.md)

* [listPublicActivityLogsApiV2PublicLogsGet](docs/sdks/activitylogs/README.md#listpublicactivitylogsapiv2publiclogsget) - List Public Activity Logs

### [Ai](docs/sdks/ai/README.md)

* [enrich](docs/sdks/ai/README.md#enrich) - Enrich Record
* [score](docs/sdks/ai/README.md#score) - Score Record

### [ApprovalRequests](docs/sdks/approvalrequests/README.md)

* [createApprovalRequestApiV2PublicApprovalRequestsPost](docs/sdks/approvalrequests/README.md#createapprovalrequestapiv2publicapprovalrequestspost) - Create Approval Request
* [approveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost](docs/sdks/approvalrequests/README.md#approveapprovalrequestapiv2publicapprovalrequestshistoryidapprovepost) - Approve Approval Request
* [rejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost](docs/sdks/approvalrequests/README.md#rejectapprovalrequestapiv2publicapprovalrequestshistoryidrejectpost) - Reject Approval Request

### [Associations](docs/sdks/associations/README.md)

* [listPublicAssociationsApiV2PublicAssociationsGet](docs/sdks/associations/README.md#listpublicassociationsapiv2publicassociationsget) - List Public Associations
* [createPublicAssociationApiV2PublicAssociationsPost](docs/sdks/associations/README.md#createpublicassociationapiv2publicassociationspost) - Create Public Association
* [deletePublicAssociationApiV2PublicAssociationsDelete](docs/sdks/associations/README.md#deletepublicassociationapiv2publicassociationsdelete) - Delete Public Association

### [AttendanceRecords](docs/sdks/attendancerecords/README.md)

* [listPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet](docs/sdks/attendancerecords/README.md#listpublicattendancerecordsapiv2publicattendancerecordsget) - List Public Attendance Records
* [createPublicAttendanceRecordApiV2PublicAttendanceRecordsPost](docs/sdks/attendancerecords/README.md#createpublicattendancerecordapiv2publicattendancerecordspost) - Create Public Attendance Record
* [getPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet](docs/sdks/attendancerecords/README.md#getpublicattendancerecordapiv2publicattendancerecordsattendancerecordidget) - Get Public Attendance Record
* [updatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut](docs/sdks/attendancerecords/README.md#updatepublicattendancerecordapiv2publicattendancerecordsattendancerecordidput) - Update Public Attendance Record
* [deletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete](docs/sdks/attendancerecords/README.md#deletepublicattendancerecordapiv2publicattendancerecordsattendancerecordiddelete) - Delete Public Attendance Record

### [Bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List Public Bills
* [create](docs/sdks/bills/README.md#create) - Create Public Bill
* [uploadPublicBillFileApiV2PublicBillsFilesPost](docs/sdks/bills/README.md#uploadpublicbillfileapiv2publicbillsfilespost) - Upload Public Bill File
* [get](docs/sdks/bills/README.md#get) - Get Public Bill
* [update](docs/sdks/bills/README.md#update) - Update Public Bill
* [delete](docs/sdks/bills/README.md#delete) - Delete Public Bill

### [Companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List Public Companies
* [create](docs/sdks/companies/README.md#create) - Create Public Company
* [get](docs/sdks/companies/README.md#get) - Get Public Company
* [update](docs/sdks/companies/README.md#update) - Update Public Company
* [delete](docs/sdks/companies/README.md#delete) - Delete Public Company
* [getPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet](docs/sdks/companies/README.md#getpubliccompanypricetableapiv2publiccompaniescompanyidpricetableget) - Get Public Company Price Table
* [updatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch](docs/sdks/companies/README.md#updatepubliccompanypricetablecompanyapiv2publiccompaniescompanyidpricetablecompanypatch) - Update Public Company Price Table Company
* [applyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost](docs/sdks/companies/README.md#applypubliccompanypricetableitemsapiv2publiccompaniescompanyidpricetableitemsapplyallpost) - Apply Public Company Price Table Items
* [updatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch](docs/sdks/companies/README.md#updatepubliccompanypricetableitemapiv2publiccompaniescompanyidpricetableitemsitemidpatch) - Update Public Company Price Table Item

### [Contacts](docs/sdks/contacts/README.md)

* [list](docs/sdks/contacts/README.md#list) - List Public Contacts
* [create](docs/sdks/contacts/README.md#create) - Create Public Contact
* [get](docs/sdks/contacts/README.md#get) - Get Public Contact
* [update](docs/sdks/contacts/README.md#update) - Update Public Contact
* [delete](docs/sdks/contacts/README.md#delete) - Delete Public Contact

### [CustomObjects](docs/sdks/customobjects/README.md)

* [listRecords](docs/sdks/customobjects/README.md#listrecords) - List Custom Object Records
* [createRecord](docs/sdks/customobjects/README.md#createrecord) - Create Custom Object Record
* [getRecord](docs/sdks/customobjects/README.md#getrecord) - Get Custom Object Record
* [updateRecord](docs/sdks/customobjects/README.md#updaterecord) - Update Custom Object Record
* [deleteRecord](docs/sdks/customobjects/README.md#deleterecord) - Delete Custom Object Record
* [archiveRecord](docs/sdks/customobjects/README.md#archiverecord) - Archive Custom Object Record
* [activateRecord](docs/sdks/customobjects/README.md#activaterecord) - Activate Custom Object Record
* [createPublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost](docs/sdks/customobjects/README.md#createpubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordspost) - Create Public Custom Object Record Compatibility
* [updatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost](docs/sdks/customobjects/README.md#updatepubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordsrecordidpost) - Update Public Custom Object Record Compatibility
* [archivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost](docs/sdks/customobjects/README.md#archivepubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordsrecordidarchivepost) - Archive Public Custom Object Record Compatibility

### [Deals](docs/sdks/deals/README.md)

* [list](docs/sdks/deals/README.md#list) - List Public Deals
* [create](docs/sdks/deals/README.md#create) - Create Public Deal
* [listPipelines](docs/sdks/deals/README.md#listpipelines) - List Public Deal Pipelines
* [get](docs/sdks/deals/README.md#get) - Get Public Deal
* [update](docs/sdks/deals/README.md#update) - Update Public Deal
* [delete](docs/sdks/deals/README.md#delete) - Delete Public Deal

### [Disbursements](docs/sdks/disbursements/README.md)

* [list](docs/sdks/disbursements/README.md#list) - List Public Disbursements
* [create](docs/sdks/disbursements/README.md#create) - Create Public Disbursement
* [get](docs/sdks/disbursements/README.md#get) - Get Public Disbursement
* [update](docs/sdks/disbursements/README.md#update) - Update Public Disbursement
* [delete](docs/sdks/disbursements/README.md#delete) - Delete Public Disbursement
* [listPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet](docs/sdks/disbursements/README.md#listpublicdisbursementallocationsapiv2publicdisbursementsdisbursementidallocationsget) - List Public Disbursement Allocations
* [createPublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost](docs/sdks/disbursements/README.md#createpublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationspost) - Create Public Disbursement Allocation
* [updatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch](docs/sdks/disbursements/README.md#updatepublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationsallocationidpatch) - Update Public Disbursement Allocation
* [deletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete](docs/sdks/disbursements/README.md#deletepublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationsallocationiddelete) - Delete Public Disbursement Allocation

### [Employees](docs/sdks/employees/README.md)

* [listPublicEmployeesApiV2PublicEmployeesGet](docs/sdks/employees/README.md#listpublicemployeesapiv2publicemployeesget) - List Public Employees

### [Estimates](docs/sdks/estimates/README.md)

* [list](docs/sdks/estimates/README.md#list) - List Public Estimates
* [create](docs/sdks/estimates/README.md#create) - Create Public Estimate
* [uploadPublicEstimateFileApiV2PublicEstimatesFilesPost](docs/sdks/estimates/README.md#uploadpublicestimatefileapiv2publicestimatesfilespost) - Upload Public Estimate File
* [get](docs/sdks/estimates/README.md#get) - Get Public Estimate
* [update](docs/sdks/estimates/README.md#update) - Update Public Estimate
* [delete](docs/sdks/estimates/README.md#delete) - Delete Public Estimate
* [downloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet](docs/sdks/estimates/README.md#downloadpublicestimatepdfapiv2publicestimatesestimateidpdfget) - Download Public Estimate Pdf

### [Expenses](docs/sdks/expenses/README.md)

* [list](docs/sdks/expenses/README.md#list) - List Public Expenses
* [create](docs/sdks/expenses/README.md#create) - Create Public Expense
* [uploadFile](docs/sdks/expenses/README.md#uploadfile) - Upload Public Expense File
* [get](docs/sdks/expenses/README.md#get) - Get Public Expense
* [update](docs/sdks/expenses/README.md#update) - Update Public Expense
* [delete](docs/sdks/expenses/README.md#delete) - Delete Public Expense

### [Exports](docs/sdks/exports/README.md)

* [listPublicExportJobsCompatApiV2PublicExportsGet](docs/sdks/exports/README.md#listpublicexportjobscompatapiv2publicexportsget) - List Public Export Jobs Compat
* [createPublicExportJobCompatApiV2PublicExportsPost](docs/sdks/exports/README.md#createpublicexportjobcompatapiv2publicexportspost) - Create Public Export Job Compat
* [getPublicExportJobCompatApiV2PublicExportsJobIdGet](docs/sdks/exports/README.md#getpublicexportjobcompatapiv2publicexportsjobidget) - Get Public Export Job Compat
* [cancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost](docs/sdks/exports/README.md#cancelpublicexportjobcompatapiv2publicexportsjobidcancelpost) - Cancel Public Export Job Compat

### [FerryDiagrams](docs/sdks/ferrydiagrams/README.md)

* [listPublicFerryDiagramsApiV2PublicFerryDiagramsGet](docs/sdks/ferrydiagrams/README.md#listpublicferrydiagramsapiv2publicferrydiagramsget) - List Public Ferry Diagrams
* [createPublicFerryDiagramApiV2PublicFerryDiagramsPost](docs/sdks/ferrydiagrams/README.md#createpublicferrydiagramapiv2publicferrydiagramspost) - Create Public Ferry Diagram
* [getPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet](docs/sdks/ferrydiagrams/README.md#getpublicferrydiagramapiv2publicferrydiagramsdiagramidget) - Get Public Ferry Diagram
* [updatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut](docs/sdks/ferrydiagrams/README.md#updatepublicferrydiagramapiv2publicferrydiagramsdiagramidput) - Update Public Ferry Diagram
* [deletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete](docs/sdks/ferrydiagrams/README.md#deletepublicferrydiagramapiv2publicferrydiagramsdiagramiddelete) - Delete Public Ferry Diagram

### [Files](docs/sdks/files/README.md)

* [uploadPublicFileApiV2PublicFilesPost](docs/sdks/files/README.md#uploadpublicfileapiv2publicfilespost) - Upload Public File

### [Imports](docs/sdks/imports/README.md)

* [listPublicImportJobsCompatApiV2PublicImportsGet](docs/sdks/imports/README.md#listpublicimportjobscompatapiv2publicimportsget) - List Public Import Jobs Compat
* [createPublicImportJobCompatApiV2PublicImportsPost](docs/sdks/imports/README.md#createpublicimportjobcompatapiv2publicimportspost) - Create Public Import Job Compat
* [getPublicImportJobCompatApiV2PublicImportsJobIdGet](docs/sdks/imports/README.md#getpublicimportjobcompatapiv2publicimportsjobidget) - Get Public Import Job Compat
* [cancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost](docs/sdks/imports/README.md#cancelpublicimportjobcompatapiv2publicimportsjobidcancelpost) - Cancel Public Import Job Compat

### [Incentives](docs/sdks/incentives/README.md)

* [listPublicIncentivesApiV2PublicIncentivesGet](docs/sdks/incentives/README.md#listpublicincentivesapiv2publicincentivesget) - List Public Incentives
* [listPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet](docs/sdks/incentives/README.md#listpublicincentivecompanyoptionsapiv2publicincentivescompanyoptionsget) - List Public Incentive Company Options
* [listPublicIncentivePlansApiV2PublicIncentivesPlansGet](docs/sdks/incentives/README.md#listpublicincentiveplansapiv2publicincentivesplansget) - List Public Incentive Plans
* [createPublicIncentivePlanApiV2PublicIncentivesPlansPost](docs/sdks/incentives/README.md#createpublicincentiveplanapiv2publicincentivesplanspost) - Create Public Incentive Plan
* [updatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch](docs/sdks/incentives/README.md#updatepublicincentiveplanapiv2publicincentivesplansplanidpatch) - Update Public Incentive Plan
* [deletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete](docs/sdks/incentives/README.md#deletepublicincentiveplanapiv2publicincentivesplansplaniddelete) - Delete Public Incentive Plan
* [listPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet](docs/sdks/incentives/README.md#listpublicincentiveallocationsapiv2publicincentivesallocationsget) - List Public Incentive Allocations
* [replacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut](docs/sdks/incentives/README.md#replacepublicincentiveallocationsapiv2publicincentivesallocationsput) - Replace Public Incentive Allocations
* [calculatePublicIncentivesApiV2PublicIncentivesCalculatePost](docs/sdks/incentives/README.md#calculatepublicincentivesapiv2publicincentivescalculatepost) - Calculate Public Incentives
* [approvePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost](docs/sdks/incentives/README.md#approvepublicincentivesbulkapiv2publicincentivesapprovebulkpost) - Approve Public Incentives Bulk
* [listPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet](docs/sdks/incentives/README.md#listpublicincentivebatchesapiv2publicincentivesbatchesget) - List Public Incentive Batches
* [createPublicIncentiveBatchApiV2PublicIncentivesBatchesPost](docs/sdks/incentives/README.md#createpublicincentivebatchapiv2publicincentivesbatchespost) - Create Public Incentive Batch
* [getPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet](docs/sdks/incentives/README.md#getpublicincentivebatchapiv2publicincentivesbatchesbatchidget) - Get Public Incentive Batch
* [approvePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost](docs/sdks/incentives/README.md#approvepublicincentivebatchapiv2publicincentivesbatchesbatchidapprovepost) - Approve Public Incentive Batch
* [markPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost](docs/sdks/incentives/README.md#markpublicincentivebatchpaidapiv2publicincentivesbatchesbatchidmarkpaidpost) - Mark Public Incentive Batch Paid
* [approvePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost](docs/sdks/incentives/README.md#approvepublicincentiveapiv2publicincentivesincentiveidapprovepost) - Approve Public Incentive

### [Inventories](docs/sdks/inventories/README.md)

* [list](docs/sdks/inventories/README.md#list) - List Public Inventories
* [create](docs/sdks/inventories/README.md#create) - Create Public Inventory
* [get](docs/sdks/inventories/README.md#get) - Get Public Inventory
* [update](docs/sdks/inventories/README.md#update) - Update Public Inventory
* [delete](docs/sdks/inventories/README.md#delete) - Delete Public Inventory

### [InventoryTransactions](docs/sdks/inventorytransactions/README.md)

* [list](docs/sdks/inventorytransactions/README.md#list) - List Public Inventory Transactions
* [create](docs/sdks/inventorytransactions/README.md#create) - Create Public Inventory Transaction
* [get](docs/sdks/inventorytransactions/README.md#get) - Get Public Inventory Transaction
* [update](docs/sdks/inventorytransactions/README.md#update) - Update Public Inventory Transaction
* [delete](docs/sdks/inventorytransactions/README.md#delete) - Delete Public Inventory Transaction

### [Invoices](docs/sdks/invoices/README.md)

* [list](docs/sdks/invoices/README.md#list) - List Public Invoices
* [create](docs/sdks/invoices/README.md#create) - Create Public Invoice
* [uploadPublicInvoiceFileApiV2PublicInvoicesFilesPost](docs/sdks/invoices/README.md#uploadpublicinvoicefileapiv2publicinvoicesfilespost) - Upload Public Invoice File
* [bulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePost](docs/sdks/invoices/README.md#bulkupdatepublicinvoicesapiv2publicinvoicesbulkupdatepost) - Bulk Update Public Invoices
* [listPublicOverdueInvoicesApiV2PublicInvoicesOverdueGet](docs/sdks/invoices/README.md#listpublicoverdueinvoicesapiv2publicinvoicesoverdueget) - List Public Overdue Invoices
* [get](docs/sdks/invoices/README.md#get) - Get Public Invoice
* [update](docs/sdks/invoices/README.md#update) - Update Public Invoice
* [delete](docs/sdks/invoices/README.md#delete) - Delete Public Invoice
* [downloadPublicInvoicePdfApiV2PublicInvoicesInvoiceIdPdfGet](docs/sdks/invoices/README.md#downloadpublicinvoicepdfapiv2publicinvoicesinvoiceidpdfget) - Download Public Invoice Pdf
* [sendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPost](docs/sdks/invoices/README.md#sendpublicinvoiceemailapiv2publicinvoicesinvoiceidemailpost) - Send Public Invoice Email
* [permanentDeletePublicInvoiceApiV2PublicInvoicesInvoiceIdPermanentDeleteDelete](docs/sdks/invoices/README.md#permanentdeletepublicinvoiceapiv2publicinvoicesinvoiceidpermanentdeletedelete) - Permanent Delete Public Invoice

### [Items](docs/sdks/items/README.md)

* [list](docs/sdks/items/README.md#list) - List Public Items
* [create](docs/sdks/items/README.md#create) - Create Public Item
* [get](docs/sdks/items/README.md#get) - Get Public Item
* [update](docs/sdks/items/README.md#update) - Update Public Item
* [delete](docs/sdks/items/README.md#delete) - Delete Public Item

### [Journals](docs/sdks/journals/README.md)

* [listPublicJournalsApiV2PublicJournalsGet](docs/sdks/journals/README.md#listpublicjournalsapiv2publicjournalsget) - List Journal Entries
* [createPublicJournalApiV2PublicJournalsPost](docs/sdks/journals/README.md#createpublicjournalapiv2publicjournalspost) - Create Journal Entry
* [createPublicFinancialStatementViewApiV2PublicJournalsViewsPost](docs/sdks/journals/README.md#createpublicfinancialstatementviewapiv2publicjournalsviewspost) - Create Financial Statement View
* [get](docs/sdks/journals/README.md#get) - Get Journal Entry
* [update](docs/sdks/journals/README.md#update) - Update Journal Entry
* [delete](docs/sdks/journals/README.md#delete) - Delete Journal Entry
* [archive](docs/sdks/journals/README.md#archive) - Archive Journal Entry
* [activate](docs/sdks/journals/README.md#activate) - Activate Journal Entry

### [Locations](docs/sdks/locations/README.md)

* [list](docs/sdks/locations/README.md#list) - List Public Locations
* [create](docs/sdks/locations/README.md#create) - Create Public Location
* [get](docs/sdks/locations/README.md#get) - Get Public Location
* [update](docs/sdks/locations/README.md#update) - Update Public Location
* [delete](docs/sdks/locations/README.md#delete) - Delete Public Location

### [Meters](docs/sdks/meters/README.md)

* [list](docs/sdks/meters/README.md#list) - List Public Meters
* [create](docs/sdks/meters/README.md#create) - Create Public Meter
* [get](docs/sdks/meters/README.md#get) - Get Public Meter
* [update](docs/sdks/meters/README.md#update) - Update Public Meter
* [delete](docs/sdks/meters/README.md#delete) - Delete Public Meter

### [ObjectSchemas](docs/sdks/objectschemas/README.md)

* [listPublicObjectSchemasApiV2PublicObjectSchemasGet](docs/sdks/objectschemas/README.md#listpublicobjectschemasapiv2publicobjectschemasget) - List Public Object Schemas
* [mutatePublicObjectSchemaApiV2PublicObjectSchemasPost](docs/sdks/objectschemas/README.md#mutatepublicobjectschemaapiv2publicobjectschemaspost) - Mutate Public Object Schema

### [Orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List Public Orders
* [create](docs/sdks/orders/README.md#create) - Create Public Order
* [bulkCreate](docs/sdks/orders/README.md#bulkcreate) - Bulk Create Public Orders
* [uploadPublicOrderFileApiV2PublicOrdersFilesPost](docs/sdks/orders/README.md#uploadpublicorderfileapiv2publicordersfilespost) - Upload Public Order File
* [get](docs/sdks/orders/README.md#get) - Get Public Order
* [update](docs/sdks/orders/README.md#update) - Update Public Order
* [delete](docs/sdks/orders/README.md#delete) - Delete Public Order
* [downloadPublicOrderPdfApiV2PublicOrdersOrderIdPdfGet](docs/sdks/orders/README.md#downloadpublicorderpdfapiv2publicordersorderidpdfget) - Download Public Order Pdf

### [Payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List Public Payments
* [create](docs/sdks/payments/README.md#create) - Create Public Payment
* [get](docs/sdks/payments/README.md#get) - Get Public Payment
* [update](docs/sdks/payments/README.md#update) - Update Public Payment
* [delete](docs/sdks/payments/README.md#delete) - Delete Public Payment
* [downloadPublicPaymentPdfApiV2PublicPaymentsPaymentIdPdfGet](docs/sdks/payments/README.md#downloadpublicpaymentpdfapiv2publicpaymentspaymentidpdfget) - Download Public Payment Pdf
* [listPublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsGet](docs/sdks/payments/README.md#listpublicpaymentallocationsapiv2publicpaymentspaymentidallocationsget) - List Public Payment Allocations
* [updatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPut](docs/sdks/payments/README.md#updatepublicpaymentallocationsapiv2publicpaymentspaymentidallocationsput) - Update Public Payment Allocations

### [Payroll](docs/sdks/payroll/README.md)

* [listPublicPayrollProfilesApiV2PublicPayrollProfilesGet](docs/sdks/payroll/README.md#listpublicpayrollprofilesapiv2publicpayrollprofilesget) - List Public Payroll Profiles
* [upsertPublicPayrollProfileApiV2PublicPayrollProfilesPost](docs/sdks/payroll/README.md#upsertpublicpayrollprofileapiv2publicpayrollprofilespost) - Upsert Public Payroll Profile
* [listPublicPayrollRunsApiV2PublicPayrollRunsGet](docs/sdks/payroll/README.md#listpublicpayrollrunsapiv2publicpayrollrunsget) - List Public Payroll Runs
* [calculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost](docs/sdks/payroll/README.md#calculatepublicpayrollrunapiv2publicpayrollrunscalculatepost) - Calculate Public Payroll Run
* [getPublicPayrollRunApiV2PublicPayrollRunsRunIdGet](docs/sdks/payroll/README.md#getpublicpayrollrunapiv2publicpayrollrunsrunidget) - Get Public Payroll Run
* [approvePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost](docs/sdks/payroll/README.md#approvepublicpayrollrunapiv2publicpayrollrunsrunidapprovepost) - Approve Public Payroll Run
* [createPublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost](docs/sdks/payroll/README.md#createpublicpayrolljournalentryapiv2publicpayrollrunsrunidjournalentrypost) - Create Public Payroll Journal Entry
* [downloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet](docs/sdks/payroll/README.md#downloadpublicpayrollpayslippdfapiv2publicpayrollrunsrunidpayslipspdfget) - Download Public Payroll Payslip Pdf

### [Projects](docs/sdks/projects/README.md)

* [list](docs/sdks/projects/README.md#list) - List Public Projects
* [create](docs/sdks/projects/README.md#create) - Create Public Project
* [get](docs/sdks/projects/README.md#get) - Get Public Project
* [update](docs/sdks/projects/README.md#update) - Update Public Project
* [delete](docs/sdks/projects/README.md#delete) - Delete Public Project

### [Properties](docs/sdks/properties/README.md)

* [list](docs/sdks/properties/README.md#list) - List Public Developer Properties
* [create](docs/sdks/properties/README.md#create) - Create Public Developer Property
* [get](docs/sdks/properties/README.md#get) - Retrieve Public Developer Property
* [update](docs/sdks/properties/README.md#update) - Update Public Developer Property
* [delete](docs/sdks/properties/README.md#delete) - Delete Public Developer Property

### [Prospect.Companies](docs/sdks/prospectcompanies/README.md)

* [create](docs/sdks/prospectcompanies/README.md#create) - Prospect Companies

### [PublicAuth](docs/sdks/publicauth/README.md)

* [getCurrentIdentity](docs/sdks/publicauth/README.md#getcurrentidentity) - Get Current Public Developer Auth Identity
* [getPublicAuthSessionApiV2PublicAuthSessionGet](docs/sdks/publicauth/README.md#getpublicauthsessionapiv2publicauthsessionget) - Get Current Public OAuth Session
* [switchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost](docs/sdks/publicauth/README.md#switchpublicauthsessionworkspaceapiv2publicauthsessionswitchworkspacepost) - Switch Current Public OAuth Session Workspace
* [switchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost](docs/sdks/publicauth/README.md#switchpublicauthmcpsessionworkspaceapiv2publicauthmcpsessionswitchworkspacepost) - Switch Current Public MCP OAuth Session Workspace
* [recordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost](docs/sdks/publicauth/README.md#recordpublicauthmcptoolcallapiv2publicauthmcpsessiontoolcalllogpost) - Record Public MCP Tool Call
* [revokePublicAuthSessionApiV2PublicAuthSessionRevokePost](docs/sdks/publicauth/README.md#revokepublicauthsessionapiv2publicauthsessionrevokepost) - Revoke Current Public OAuth Session

### [PurchaseOrders](docs/sdks/purchaseorders/README.md)

* [list](docs/sdks/purchaseorders/README.md#list) - List Public Purchase Orders
* [create](docs/sdks/purchaseorders/README.md#create) - Create Public Purchase Order
* [get](docs/sdks/purchaseorders/README.md#get) - Get Public Purchase Order
* [update](docs/sdks/purchaseorders/README.md#update) - Update Public Purchase Order
* [delete](docs/sdks/purchaseorders/README.md#delete) - Delete Public Purchase Order
* [uploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost](docs/sdks/purchaseorders/README.md#uploadpublicpurchaseorderfileapiv2publicpurchaseordersfilespost) - Upload Public Purchase Order File
* [downloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet](docs/sdks/purchaseorders/README.md#downloadpublicpurchaseorderpdfapiv2publicpurchaseorderspurchaseorderidpdfget) - Download Public Purchase Order Pdf

### [Records](docs/sdks/records/README.md)

* [queryPublicRecordsApiV2PublicRecordsQueryPost](docs/sdks/records/README.md#querypublicrecordsapiv2publicrecordsquerypost) - Query Public Records
* [aggregatePublicRecordsApiV2PublicRecordsAggregatePost](docs/sdks/records/README.md#aggregatepublicrecordsapiv2publicrecordsaggregatepost) - Aggregate Public Records

### [Reports](docs/sdks/reports/README.md)

* [list](docs/sdks/reports/README.md#list) - List Public Reports
* [create](docs/sdks/reports/README.md#create) - Create Public Report
* [get](docs/sdks/reports/README.md#get) - Get Public Report
* [update](docs/sdks/reports/README.md#update) - Update Public Report
* [delete](docs/sdks/reports/README.md#delete) - Delete Public Report

### [Revenues](docs/sdks/revenues/README.md)

* [list](docs/sdks/revenues/README.md#list) - List Public Slips
* [create](docs/sdks/revenues/README.md#create) - Create Public Slip
* [get](docs/sdks/revenues/README.md#get) - Get Public Slip
* [update](docs/sdks/revenues/README.md#update) - Update Public Slip
* [delete](docs/sdks/revenues/README.md#delete) - Delete Public Slip
* [downloadPublicSlipPdfApiV2PublicSlipsRevenueIdPdfGet](docs/sdks/revenues/README.md#downloadpublicslippdfapiv2publicslipsrevenueidpdfget) - Download Public Slip Pdf

### [RuleSettings](docs/sdks/rulesettings/README.md)

* [listPublicApprovalRulesApiV2PublicApprovalRulesGet](docs/sdks/rulesettings/README.md#listpublicapprovalrulesapiv2publicapprovalrulesget) - List Public Approval Rules
* [upsertPublicApprovalRuleApiV2PublicApprovalRulesPost](docs/sdks/rulesettings/README.md#upsertpublicapprovalruleapiv2publicapprovalrulespost) - Upsert Public Approval Rule
* [getPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet](docs/sdks/rulesettings/README.md#getpublicapprovalruleoptionsapiv2publicapprovalrulesoptionsget) - Get Public Approval Rule Options
* [deletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete](docs/sdks/rulesettings/README.md#deletepublicapprovalruleapiv2publicapprovalrulesruleiddelete) - Delete Public Approval Rule
* [listPublicLockRulesApiV2PublicLockRulesGet](docs/sdks/rulesettings/README.md#listpubliclockrulesapiv2publiclockrulesget) - List Public Lock Rules
* [upsertPublicLockRuleApiV2PublicLockRulesPost](docs/sdks/rulesettings/README.md#upsertpubliclockruleapiv2publiclockrulespost) - Upsert Public Lock Rule
* [getPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet](docs/sdks/rulesettings/README.md#getpubliclockruleoptionsapiv2publiclockrulesoptionsget) - Get Public Lock Rule Options
* [deletePublicLockRuleApiV2PublicLockRulesRuleIdDelete](docs/sdks/rulesettings/README.md#deletepubliclockruleapiv2publiclockrulesruleiddelete) - Delete Public Lock Rule
* [listPublicDeliveryRulesApiV2PublicDeliveryRulesGet](docs/sdks/rulesettings/README.md#listpublicdeliveryrulesapiv2publicdeliveryrulesget) - List Public Delivery Rules
* [upsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost](docs/sdks/rulesettings/README.md#upsertpublicdeliveryruleapiv2publicdeliveryrulespost) - Upsert Public Delivery Rule
* [getPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet](docs/sdks/rulesettings/README.md#getpublicdeliveryruleoptionsapiv2publicdeliveryrulesoptionsget) - Get Public Delivery Rule Options
* [deletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete](docs/sdks/rulesettings/README.md#deletepublicdeliveryruleapiv2publicdeliveryrulesruleiddelete) - Delete Public Delivery Rule

### [Subscriptions](docs/sdks/subscriptions/README.md)

* [list](docs/sdks/subscriptions/README.md#list) - List Public Subscriptions
* [create](docs/sdks/subscriptions/README.md#create) - Create Public Subscription
* [bulkUpdatePublicSubscriptionsApiV2PublicSubscriptionsBulkUpdatePost](docs/sdks/subscriptions/README.md#bulkupdatepublicsubscriptionsapiv2publicsubscriptionsbulkupdatepost) - Bulk Update Public Subscriptions
* [get](docs/sdks/subscriptions/README.md#get) - Get Public Subscription
* [update](docs/sdks/subscriptions/README.md#update) - Update Public Subscription
* [delete](docs/sdks/subscriptions/README.md#delete) - Delete Public Subscription

### [Tasks](docs/sdks/tasks/README.md)

* [listPublicTasksApiV2PublicTasksGet](docs/sdks/tasks/README.md#listpublictasksapiv2publictasksget) - List Public Tasks
* [createPublicTaskApiV2PublicTasksPost](docs/sdks/tasks/README.md#createpublictaskapiv2publictaskspost) - Create Public Task
* [getPublicTaskApiV2PublicTasksTaskIdGet](docs/sdks/tasks/README.md#getpublictaskapiv2publictaskstaskidget) - Get Public Task
* [updatePublicTaskApiV2PublicTasksTaskIdPut](docs/sdks/tasks/README.md#updatepublictaskapiv2publictaskstaskidput) - Update Public Task
* [deletePublicTaskApiV2PublicTasksTaskIdDelete](docs/sdks/tasks/README.md#deletepublictaskapiv2publictaskstaskiddelete) - Delete Public Task

### [Tickets](docs/sdks/tickets/README.md)

* [list](docs/sdks/tickets/README.md#list) - List Public Tickets
* [create](docs/sdks/tickets/README.md#create) - Create Public Ticket
* [listPipelines](docs/sdks/tickets/README.md#listpipelines) - List Public Ticket Pipelines
* [get](docs/sdks/tickets/README.md#get) - Get Public Ticket
* [update](docs/sdks/tickets/README.md#update) - Update Public Ticket
* [delete](docs/sdks/tickets/README.md#delete) - Delete Public Ticket
* [updateStatus](docs/sdks/tickets/README.md#updatestatus) - Update Public Ticket Status

### [Transfers](docs/sdks/transfers/README.md)

* [getPublicTransferHistoryApiV2PublicTransfersHistoryIdGet](docs/sdks/transfers/README.md#getpublictransferhistoryapiv2publictransfershistoryidget) - Get Public Transfer History

### [Views](docs/sdks/views/README.md)

* [listPublicViewsApiV2PublicViewsGet](docs/sdks/views/README.md#listpublicviewsapiv2publicviewsget) - List Public Views
* [createPublicViewApiV2PublicViewsPost](docs/sdks/views/README.md#createpublicviewapiv2publicviewspost) - Create Public View
* [getPublicViewApiV2PublicViewsViewIdGet](docs/sdks/views/README.md#getpublicviewapiv2publicviewsviewidget) - Get Public View
* [updatePublicViewApiV2PublicViewsViewIdPatch](docs/sdks/views/README.md#updatepublicviewapiv2publicviewsviewidpatch) - Update Public View
* [deletePublicViewApiV2PublicViewsViewIdDelete](docs/sdks/views/README.md#deletepublicviewapiv2publicviewsviewiddelete) - Delete Public View
* [getPublicViewColumnsApiV2PublicViewsViewIdColumnsGet](docs/sdks/views/README.md#getpublicviewcolumnsapiv2publicviewsviewidcolumnsget) - Get Public View Columns

### [WorkflowActions](docs/sdks/workflowactions/README.md)

* [listActions](docs/sdks/workflowactions/README.md#listactions) - List Public Workflow Actions Compat

### [WorkflowRuns](docs/sdks/workflowruns/README.md)

* [getRun](docs/sdks/workflowruns/README.md#getrun) - Get Public Workflow Run
* [getPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet](docs/sdks/workflowruns/README.md#getpublicworkflowrunnestedcompatapiv2publicworkflowsrunsrunidget) - Get Public Workflow Run Nested Compat
* [resolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost](docs/sdks/workflowruns/README.md#resolvepublicworkflowrecordapiv2publicworkflowrunsresolverecordpost) - Resolve Public Workflow Record
* [previewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost](docs/sdks/workflowruns/README.md#previewpublicworkflowcompatapiv2publicworkflowrunspreviewpost) - Preview Public Workflow Compat
* [previewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost](docs/sdks/workflowruns/README.md#previewpublichubspotinvoicedraftapiv2publicinvoicesdraftshubspotpreviewpost) - Preview Public Hubspot Invoice Draft
* [previewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost](docs/sdks/workflowruns/README.md#previewpublicfreeeinvoiceexportapiv2publicinvoicesexportsfreeepreviewpost) - Preview Public Freee Invoice Export
* [previewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost](docs/sdks/workflowruns/README.md#previewpublicmoneyforwardinvoiceexportapiv2publicinvoicesexportsmoneyforwardpreviewpost) - Preview Public Moneyforward Invoice Export
* [previewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost](docs/sdks/workflowruns/README.md#previewpublichubspotestimatedraftapiv2publicestimatesdraftshubspotpreviewpost) - Preview Public Hubspot Estimate Draft
* [previewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost](docs/sdks/workflowruns/README.md#previewpublichubspotorderhandoffapiv2publicordershandoffshubspotpreviewpost) - Preview Public Hubspot Order Handoff
* [previewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost](docs/sdks/workflowruns/README.md#previewpublichubspotcommissionincentiveapiv2publicincentivescommissionhubspotpreviewpost) - Preview Public Hubspot Commission Incentive
* [previewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost](docs/sdks/workflowruns/README.md#previewpublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcepreviewpost) - Preview Public Salesforce Quote Readiness
* [summarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost](docs/sdks/workflowruns/README.md#summarizepublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcesummarypost) - Summarize Public Salesforce Quote Readiness
* [startPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost](docs/sdks/workflowruns/README.md#startpublicworkflowcompatapiv2publicworkflowrunsstartpost) - Start Public Workflow Compat
* [startPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost](docs/sdks/workflowruns/README.md#startpublichubspotinvoicedraftapiv2publicinvoicesdraftshubspotpost) - Start Public Hubspot Invoice Draft
* [startPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost](docs/sdks/workflowruns/README.md#startpublicfreeeinvoiceexportapiv2publicinvoicesexportsfreeepost) - Start Public Freee Invoice Export
* [startPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost](docs/sdks/workflowruns/README.md#startpublicmoneyforwardinvoiceexportapiv2publicinvoicesexportsmoneyforwardpost) - Start Public Moneyforward Invoice Export
* [startPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost](docs/sdks/workflowruns/README.md#startpublichubspotestimatedraftapiv2publicestimatesdraftshubspotpost) - Start Public Hubspot Estimate Draft
* [startPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost](docs/sdks/workflowruns/README.md#startpublichubspotorderhandoffapiv2publicordershandoffshubspotpost) - Start Public Hubspot Order Handoff
* [startPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost](docs/sdks/workflowruns/README.md#startpublichubspotrevenuecontrolreportapiv2publicreportsrevenuecontrolhubspotpost) - Start Public Hubspot Revenue Control Report
* [writebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost](docs/sdks/workflowruns/README.md#writebackpublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcewritebackpost) - Writeback Public Salesforce Quote Readiness

### [Workflows](docs/sdks/workflows/README.md)

* [list](docs/sdks/workflows/README.md#list) - List Public Workflows
* [createOrUpdate](docs/sdks/workflows/README.md#createorupdate) - Create Public Workflow
* [get](docs/sdks/workflows/README.md#get) - Get Public Workflow
* [updatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch](docs/sdks/workflows/README.md#updatepublicworkflowapiv2publicworkflowsworkflowidpatch) - Update Public Workflow
* [deletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete](docs/sdks/workflows/README.md#deletepublicworkflowapiv2publicworkflowsworkflowiddelete) - Delete Public Workflow
* [runByRef](docs/sdks/workflows/README.md#runbyref) - Run Public Workflow

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`absencesCreatePublicAbsenceApiV2PublicAbsencesPost`](docs/sdks/absences/README.md#createpublicabsenceapiv2publicabsencespost) - Create Public Absence
- [`absencesDeletePublicAbsenceApiV2PublicAbsencesAbsenceIdDelete`](docs/sdks/absences/README.md#deletepublicabsenceapiv2publicabsencesabsenceiddelete) - Delete Public Absence
- [`absencesGetPublicAbsenceApiV2PublicAbsencesAbsenceIdGet`](docs/sdks/absences/README.md#getpublicabsenceapiv2publicabsencesabsenceidget) - Get Public Absence
- [`absencesListPublicAbsencesApiV2PublicAbsencesGet`](docs/sdks/absences/README.md#listpublicabsencesapiv2publicabsencesget) - List Public Absences
- [`absencesUpdatePublicAbsenceApiV2PublicAbsencesAbsenceIdPut`](docs/sdks/absences/README.md#updatepublicabsenceapiv2publicabsencesabsenceidput) - Update Public Absence
- [`activityLogsListPublicActivityLogsApiV2PublicLogsGet`](docs/sdks/activitylogs/README.md#listpublicactivitylogsapiv2publiclogsget) - List Public Activity Logs
- [`aiEnrich`](docs/sdks/ai/README.md#enrich) - Enrich Record
- [`aiScore`](docs/sdks/ai/README.md#score) - Score Record
- [`approvalRequestsApproveApprovalRequestApiV2PublicApprovalRequestsHistoryIdApprovePost`](docs/sdks/approvalrequests/README.md#approveapprovalrequestapiv2publicapprovalrequestshistoryidapprovepost) - Approve Approval Request
- [`approvalRequestsCreateApprovalRequestApiV2PublicApprovalRequestsPost`](docs/sdks/approvalrequests/README.md#createapprovalrequestapiv2publicapprovalrequestspost) - Create Approval Request
- [`approvalRequestsRejectApprovalRequestApiV2PublicApprovalRequestsHistoryIdRejectPost`](docs/sdks/approvalrequests/README.md#rejectapprovalrequestapiv2publicapprovalrequestshistoryidrejectpost) - Reject Approval Request
- [`associationsCreatePublicAssociationApiV2PublicAssociationsPost`](docs/sdks/associations/README.md#createpublicassociationapiv2publicassociationspost) - Create Public Association
- [`associationsDeletePublicAssociationApiV2PublicAssociationsDelete`](docs/sdks/associations/README.md#deletepublicassociationapiv2publicassociationsdelete) - Delete Public Association
- [`associationsListPublicAssociationsApiV2PublicAssociationsGet`](docs/sdks/associations/README.md#listpublicassociationsapiv2publicassociationsget) - List Public Associations
- [`attendanceRecordsCreatePublicAttendanceRecordApiV2PublicAttendanceRecordsPost`](docs/sdks/attendancerecords/README.md#createpublicattendancerecordapiv2publicattendancerecordspost) - Create Public Attendance Record
- [`attendanceRecordsDeletePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdDelete`](docs/sdks/attendancerecords/README.md#deletepublicattendancerecordapiv2publicattendancerecordsattendancerecordiddelete) - Delete Public Attendance Record
- [`attendanceRecordsGetPublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdGet`](docs/sdks/attendancerecords/README.md#getpublicattendancerecordapiv2publicattendancerecordsattendancerecordidget) - Get Public Attendance Record
- [`attendanceRecordsListPublicAttendanceRecordsApiV2PublicAttendanceRecordsGet`](docs/sdks/attendancerecords/README.md#listpublicattendancerecordsapiv2publicattendancerecordsget) - List Public Attendance Records
- [`attendanceRecordsUpdatePublicAttendanceRecordApiV2PublicAttendanceRecordsAttendanceRecordIdPut`](docs/sdks/attendancerecords/README.md#updatepublicattendancerecordapiv2publicattendancerecordsattendancerecordidput) - Update Public Attendance Record
- [`billsCreate`](docs/sdks/bills/README.md#create) - Create Public Bill
- [`billsDelete`](docs/sdks/bills/README.md#delete) - Delete Public Bill
- [`billsGet`](docs/sdks/bills/README.md#get) - Get Public Bill
- [`billsList`](docs/sdks/bills/README.md#list) - List Public Bills
- [`billsUpdate`](docs/sdks/bills/README.md#update) - Update Public Bill
- [`billsUploadPublicBillFileApiV2PublicBillsFilesPost`](docs/sdks/bills/README.md#uploadpublicbillfileapiv2publicbillsfilespost) - Upload Public Bill File
- [`companiesApplyPublicCompanyPriceTableItemsApiV2PublicCompaniesCompanyIdPriceTableItemsApplyAllPost`](docs/sdks/companies/README.md#applypubliccompanypricetableitemsapiv2publiccompaniescompanyidpricetableitemsapplyallpost) - Apply Public Company Price Table Items
- [`companiesCreate`](docs/sdks/companies/README.md#create) - Create Public Company
- [`companiesDelete`](docs/sdks/companies/README.md#delete) - Delete Public Company
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get Public Company
- [`companiesGetPublicCompanyPriceTableApiV2PublicCompaniesCompanyIdPriceTableGet`](docs/sdks/companies/README.md#getpubliccompanypricetableapiv2publiccompaniescompanyidpricetableget) - Get Public Company Price Table
- [`companiesList`](docs/sdks/companies/README.md#list) - List Public Companies
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update Public Company
- [`companiesUpdatePublicCompanyPriceTableCompanyApiV2PublicCompaniesCompanyIdPriceTableCompanyPatch`](docs/sdks/companies/README.md#updatepubliccompanypricetablecompanyapiv2publiccompaniescompanyidpricetablecompanypatch) - Update Public Company Price Table Company
- [`companiesUpdatePublicCompanyPriceTableItemApiV2PublicCompaniesCompanyIdPriceTableItemsItemIdPatch`](docs/sdks/companies/README.md#updatepubliccompanypricetableitemapiv2publiccompaniescompanyidpricetableitemsitemidpatch) - Update Public Company Price Table Item
- [`contactsCreate`](docs/sdks/contacts/README.md#create) - Create Public Contact
- [`contactsDelete`](docs/sdks/contacts/README.md#delete) - Delete Public Contact
- [`contactsGet`](docs/sdks/contacts/README.md#get) - Get Public Contact
- [`contactsList`](docs/sdks/contacts/README.md#list) - List Public Contacts
- [`contactsUpdate`](docs/sdks/contacts/README.md#update) - Update Public Contact
- [`customObjectsActivateRecord`](docs/sdks/customobjects/README.md#activaterecord) - Activate Custom Object Record
- [`customObjectsArchivePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdArchivePost`](docs/sdks/customobjects/README.md#archivepubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordsrecordidarchivepost) - Archive Public Custom Object Record Compatibility
- [`customObjectsArchiveRecord`](docs/sdks/customobjects/README.md#archiverecord) - Archive Custom Object Record
- [`customObjectsCreatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsPost`](docs/sdks/customobjects/README.md#createpubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordspost) - Create Public Custom Object Record Compatibility
- [`customObjectsCreateRecord`](docs/sdks/customobjects/README.md#createrecord) - Create Custom Object Record
- [`customObjectsDeleteRecord`](docs/sdks/customobjects/README.md#deleterecord) - Delete Custom Object Record
- [`customObjectsGetRecord`](docs/sdks/customobjects/README.md#getrecord) - Get Custom Object Record
- [`customObjectsListRecords`](docs/sdks/customobjects/README.md#listrecords) - List Custom Object Records
- [`customObjectsUpdatePublicCustomObjectRecordCompatibilityApiV2PublicRecordsCustomObjectsRecordsRecordIdPost`](docs/sdks/customobjects/README.md#updatepubliccustomobjectrecordcompatibilityapiv2publicrecordscustomobjectsrecordsrecordidpost) - Update Public Custom Object Record Compatibility
- [`customObjectsUpdateRecord`](docs/sdks/customobjects/README.md#updaterecord) - Update Custom Object Record
- [`dealsCreate`](docs/sdks/deals/README.md#create) - Create Public Deal
- [`dealsDelete`](docs/sdks/deals/README.md#delete) - Delete Public Deal
- [`dealsGet`](docs/sdks/deals/README.md#get) - Get Public Deal
- [`dealsList`](docs/sdks/deals/README.md#list) - List Public Deals
- [`dealsListPipelines`](docs/sdks/deals/README.md#listpipelines) - List Public Deal Pipelines
- [`dealsUpdate`](docs/sdks/deals/README.md#update) - Update Public Deal
- [`disbursementsCreate`](docs/sdks/disbursements/README.md#create) - Create Public Disbursement
- [`disbursementsCreatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsPost`](docs/sdks/disbursements/README.md#createpublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationspost) - Create Public Disbursement Allocation
- [`disbursementsDelete`](docs/sdks/disbursements/README.md#delete) - Delete Public Disbursement
- [`disbursementsDeletePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdDelete`](docs/sdks/disbursements/README.md#deletepublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationsallocationiddelete) - Delete Public Disbursement Allocation
- [`disbursementsGet`](docs/sdks/disbursements/README.md#get) - Get Public Disbursement
- [`disbursementsList`](docs/sdks/disbursements/README.md#list) - List Public Disbursements
- [`disbursementsListPublicDisbursementAllocationsApiV2PublicDisbursementsDisbursementIdAllocationsGet`](docs/sdks/disbursements/README.md#listpublicdisbursementallocationsapiv2publicdisbursementsdisbursementidallocationsget) - List Public Disbursement Allocations
- [`disbursementsUpdate`](docs/sdks/disbursements/README.md#update) - Update Public Disbursement
- [`disbursementsUpdatePublicDisbursementAllocationApiV2PublicDisbursementsDisbursementIdAllocationsAllocationIdPatch`](docs/sdks/disbursements/README.md#updatepublicdisbursementallocationapiv2publicdisbursementsdisbursementidallocationsallocationidpatch) - Update Public Disbursement Allocation
- [`employeesListPublicEmployeesApiV2PublicEmployeesGet`](docs/sdks/employees/README.md#listpublicemployeesapiv2publicemployeesget) - List Public Employees
- [`estimatesCreate`](docs/sdks/estimates/README.md#create) - Create Public Estimate
- [`estimatesDelete`](docs/sdks/estimates/README.md#delete) - Delete Public Estimate
- [`estimatesDownloadPublicEstimatePdfApiV2PublicEstimatesEstimateIdPdfGet`](docs/sdks/estimates/README.md#downloadpublicestimatepdfapiv2publicestimatesestimateidpdfget) - Download Public Estimate Pdf
- [`estimatesGet`](docs/sdks/estimates/README.md#get) - Get Public Estimate
- [`estimatesList`](docs/sdks/estimates/README.md#list) - List Public Estimates
- [`estimatesUpdate`](docs/sdks/estimates/README.md#update) - Update Public Estimate
- [`estimatesUploadPublicEstimateFileApiV2PublicEstimatesFilesPost`](docs/sdks/estimates/README.md#uploadpublicestimatefileapiv2publicestimatesfilespost) - Upload Public Estimate File
- [`expensesCreate`](docs/sdks/expenses/README.md#create) - Create Public Expense
- [`expensesDelete`](docs/sdks/expenses/README.md#delete) - Delete Public Expense
- [`expensesGet`](docs/sdks/expenses/README.md#get) - Get Public Expense
- [`expensesList`](docs/sdks/expenses/README.md#list) - List Public Expenses
- [`expensesUpdate`](docs/sdks/expenses/README.md#update) - Update Public Expense
- [`expensesUploadFile`](docs/sdks/expenses/README.md#uploadfile) - Upload Public Expense File
- [`exportsCancelPublicExportJobCompatApiV2PublicExportsJobIdCancelPost`](docs/sdks/exports/README.md#cancelpublicexportjobcompatapiv2publicexportsjobidcancelpost) - Cancel Public Export Job Compat
- [`exportsCreatePublicExportJobCompatApiV2PublicExportsPost`](docs/sdks/exports/README.md#createpublicexportjobcompatapiv2publicexportspost) - Create Public Export Job Compat
- [`exportsGetPublicExportJobCompatApiV2PublicExportsJobIdGet`](docs/sdks/exports/README.md#getpublicexportjobcompatapiv2publicexportsjobidget) - Get Public Export Job Compat
- [`exportsListPublicExportJobsCompatApiV2PublicExportsGet`](docs/sdks/exports/README.md#listpublicexportjobscompatapiv2publicexportsget) - List Public Export Jobs Compat
- [`ferryDiagramsCreatePublicFerryDiagramApiV2PublicFerryDiagramsPost`](docs/sdks/ferrydiagrams/README.md#createpublicferrydiagramapiv2publicferrydiagramspost) - Create Public Ferry Diagram
- [`ferryDiagramsDeletePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdDelete`](docs/sdks/ferrydiagrams/README.md#deletepublicferrydiagramapiv2publicferrydiagramsdiagramiddelete) - Delete Public Ferry Diagram
- [`ferryDiagramsGetPublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdGet`](docs/sdks/ferrydiagrams/README.md#getpublicferrydiagramapiv2publicferrydiagramsdiagramidget) - Get Public Ferry Diagram
- [`ferryDiagramsListPublicFerryDiagramsApiV2PublicFerryDiagramsGet`](docs/sdks/ferrydiagrams/README.md#listpublicferrydiagramsapiv2publicferrydiagramsget) - List Public Ferry Diagrams
- [`ferryDiagramsUpdatePublicFerryDiagramApiV2PublicFerryDiagramsDiagramIdPut`](docs/sdks/ferrydiagrams/README.md#updatepublicferrydiagramapiv2publicferrydiagramsdiagramidput) - Update Public Ferry Diagram
- [`filesUploadPublicFileApiV2PublicFilesPost`](docs/sdks/files/README.md#uploadpublicfileapiv2publicfilespost) - Upload Public File
- [`importsCancelPublicImportJobCompatApiV2PublicImportsJobIdCancelPost`](docs/sdks/imports/README.md#cancelpublicimportjobcompatapiv2publicimportsjobidcancelpost) - Cancel Public Import Job Compat
- [`importsCreatePublicImportJobCompatApiV2PublicImportsPost`](docs/sdks/imports/README.md#createpublicimportjobcompatapiv2publicimportspost) - Create Public Import Job Compat
- [`importsGetPublicImportJobCompatApiV2PublicImportsJobIdGet`](docs/sdks/imports/README.md#getpublicimportjobcompatapiv2publicimportsjobidget) - Get Public Import Job Compat
- [`importsListPublicImportJobsCompatApiV2PublicImportsGet`](docs/sdks/imports/README.md#listpublicimportjobscompatapiv2publicimportsget) - List Public Import Jobs Compat
- [`incentivesApprovePublicIncentiveApiV2PublicIncentivesIncentiveIdApprovePost`](docs/sdks/incentives/README.md#approvepublicincentiveapiv2publicincentivesincentiveidapprovepost) - Approve Public Incentive
- [`incentivesApprovePublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdApprovePost`](docs/sdks/incentives/README.md#approvepublicincentivebatchapiv2publicincentivesbatchesbatchidapprovepost) - Approve Public Incentive Batch
- [`incentivesApprovePublicIncentivesBulkApiV2PublicIncentivesApproveBulkPost`](docs/sdks/incentives/README.md#approvepublicincentivesbulkapiv2publicincentivesapprovebulkpost) - Approve Public Incentives Bulk
- [`incentivesCalculatePublicIncentivesApiV2PublicIncentivesCalculatePost`](docs/sdks/incentives/README.md#calculatepublicincentivesapiv2publicincentivescalculatepost) - Calculate Public Incentives
- [`incentivesCreatePublicIncentiveBatchApiV2PublicIncentivesBatchesPost`](docs/sdks/incentives/README.md#createpublicincentivebatchapiv2publicincentivesbatchespost) - Create Public Incentive Batch
- [`incentivesCreatePublicIncentivePlanApiV2PublicIncentivesPlansPost`](docs/sdks/incentives/README.md#createpublicincentiveplanapiv2publicincentivesplanspost) - Create Public Incentive Plan
- [`incentivesDeletePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdDelete`](docs/sdks/incentives/README.md#deletepublicincentiveplanapiv2publicincentivesplansplaniddelete) - Delete Public Incentive Plan
- [`incentivesGetPublicIncentiveBatchApiV2PublicIncentivesBatchesBatchIdGet`](docs/sdks/incentives/README.md#getpublicincentivebatchapiv2publicincentivesbatchesbatchidget) - Get Public Incentive Batch
- [`incentivesListPublicIncentiveAllocationsApiV2PublicIncentivesAllocationsGet`](docs/sdks/incentives/README.md#listpublicincentiveallocationsapiv2publicincentivesallocationsget) - List Public Incentive Allocations
- [`incentivesListPublicIncentiveBatchesApiV2PublicIncentivesBatchesGet`](docs/sdks/incentives/README.md#listpublicincentivebatchesapiv2publicincentivesbatchesget) - List Public Incentive Batches
- [`incentivesListPublicIncentiveCompanyOptionsApiV2PublicIncentivesCompanyOptionsGet`](docs/sdks/incentives/README.md#listpublicincentivecompanyoptionsapiv2publicincentivescompanyoptionsget) - List Public Incentive Company Options
- [`incentivesListPublicIncentivePlansApiV2PublicIncentivesPlansGet`](docs/sdks/incentives/README.md#listpublicincentiveplansapiv2publicincentivesplansget) - List Public Incentive Plans
- [`incentivesListPublicIncentivesApiV2PublicIncentivesGet`](docs/sdks/incentives/README.md#listpublicincentivesapiv2publicincentivesget) - List Public Incentives
- [`incentivesMarkPublicIncentiveBatchPaidApiV2PublicIncentivesBatchesBatchIdMarkPaidPost`](docs/sdks/incentives/README.md#markpublicincentivebatchpaidapiv2publicincentivesbatchesbatchidmarkpaidpost) - Mark Public Incentive Batch Paid
- [`incentivesReplacePublicIncentiveAllocationsApiV2PublicIncentivesAllocationsPut`](docs/sdks/incentives/README.md#replacepublicincentiveallocationsapiv2publicincentivesallocationsput) - Replace Public Incentive Allocations
- [`incentivesUpdatePublicIncentivePlanApiV2PublicIncentivesPlansPlanIdPatch`](docs/sdks/incentives/README.md#updatepublicincentiveplanapiv2publicincentivesplansplanidpatch) - Update Public Incentive Plan
- [`inventoriesCreate`](docs/sdks/inventories/README.md#create) - Create Public Inventory
- [`inventoriesDelete`](docs/sdks/inventories/README.md#delete) - Delete Public Inventory
- [`inventoriesGet`](docs/sdks/inventories/README.md#get) - Get Public Inventory
- [`inventoriesList`](docs/sdks/inventories/README.md#list) - List Public Inventories
- [`inventoriesUpdate`](docs/sdks/inventories/README.md#update) - Update Public Inventory
- [`inventoryTransactionsCreate`](docs/sdks/inventorytransactions/README.md#create) - Create Public Inventory Transaction
- [`inventoryTransactionsDelete`](docs/sdks/inventorytransactions/README.md#delete) - Delete Public Inventory Transaction
- [`inventoryTransactionsGet`](docs/sdks/inventorytransactions/README.md#get) - Get Public Inventory Transaction
- [`inventoryTransactionsList`](docs/sdks/inventorytransactions/README.md#list) - List Public Inventory Transactions
- [`inventoryTransactionsUpdate`](docs/sdks/inventorytransactions/README.md#update) - Update Public Inventory Transaction
- [`invoicesBulkUpdatePublicInvoicesApiV2PublicInvoicesBulkUpdatePost`](docs/sdks/invoices/README.md#bulkupdatepublicinvoicesapiv2publicinvoicesbulkupdatepost) - Bulk Update Public Invoices
- [`invoicesCreate`](docs/sdks/invoices/README.md#create) - Create Public Invoice
- [`invoicesDelete`](docs/sdks/invoices/README.md#delete) - Delete Public Invoice
- [`invoicesDownloadPublicInvoicePdfApiV2PublicInvoicesInvoiceIdPdfGet`](docs/sdks/invoices/README.md#downloadpublicinvoicepdfapiv2publicinvoicesinvoiceidpdfget) - Download Public Invoice Pdf
- [`invoicesGet`](docs/sdks/invoices/README.md#get) - Get Public Invoice
- [`invoicesList`](docs/sdks/invoices/README.md#list) - List Public Invoices
- [`invoicesListPublicOverdueInvoicesApiV2PublicInvoicesOverdueGet`](docs/sdks/invoices/README.md#listpublicoverdueinvoicesapiv2publicinvoicesoverdueget) - List Public Overdue Invoices
- [`invoicesPermanentDeletePublicInvoiceApiV2PublicInvoicesInvoiceIdPermanentDeleteDelete`](docs/sdks/invoices/README.md#permanentdeletepublicinvoiceapiv2publicinvoicesinvoiceidpermanentdeletedelete) - Permanent Delete Public Invoice
- [`invoicesSendPublicInvoiceEmailApiV2PublicInvoicesInvoiceIdEmailPost`](docs/sdks/invoices/README.md#sendpublicinvoiceemailapiv2publicinvoicesinvoiceidemailpost) - Send Public Invoice Email
- [`invoicesUpdate`](docs/sdks/invoices/README.md#update) - Update Public Invoice
- [`invoicesUploadPublicInvoiceFileApiV2PublicInvoicesFilesPost`](docs/sdks/invoices/README.md#uploadpublicinvoicefileapiv2publicinvoicesfilespost) - Upload Public Invoice File
- [`itemsCreate`](docs/sdks/items/README.md#create) - Create Public Item
- [`itemsDelete`](docs/sdks/items/README.md#delete) - Delete Public Item
- [`itemsGet`](docs/sdks/items/README.md#get) - Get Public Item
- [`itemsList`](docs/sdks/items/README.md#list) - List Public Items
- [`itemsUpdate`](docs/sdks/items/README.md#update) - Update Public Item
- [`journalsActivate`](docs/sdks/journals/README.md#activate) - Activate Journal Entry
- [`journalsArchive`](docs/sdks/journals/README.md#archive) - Archive Journal Entry
- [`journalsCreatePublicFinancialStatementViewApiV2PublicJournalsViewsPost`](docs/sdks/journals/README.md#createpublicfinancialstatementviewapiv2publicjournalsviewspost) - Create Financial Statement View
- [`journalsCreatePublicJournalApiV2PublicJournalsPost`](docs/sdks/journals/README.md#createpublicjournalapiv2publicjournalspost) - Create Journal Entry
- [`journalsDelete`](docs/sdks/journals/README.md#delete) - Delete Journal Entry
- [`journalsGet`](docs/sdks/journals/README.md#get) - Get Journal Entry
- [`journalsListPublicJournalsApiV2PublicJournalsGet`](docs/sdks/journals/README.md#listpublicjournalsapiv2publicjournalsget) - List Journal Entries
- [`journalsUpdate`](docs/sdks/journals/README.md#update) - Update Journal Entry
- [`locationsCreate`](docs/sdks/locations/README.md#create) - Create Public Location
- [`locationsDelete`](docs/sdks/locations/README.md#delete) - Delete Public Location
- [`locationsGet`](docs/sdks/locations/README.md#get) - Get Public Location
- [`locationsList`](docs/sdks/locations/README.md#list) - List Public Locations
- [`locationsUpdate`](docs/sdks/locations/README.md#update) - Update Public Location
- [`metersCreate`](docs/sdks/meters/README.md#create) - Create Public Meter
- [`metersDelete`](docs/sdks/meters/README.md#delete) - Delete Public Meter
- [`metersGet`](docs/sdks/meters/README.md#get) - Get Public Meter
- [`metersList`](docs/sdks/meters/README.md#list) - List Public Meters
- [`metersUpdate`](docs/sdks/meters/README.md#update) - Update Public Meter
- [`objectSchemasListPublicObjectSchemasApiV2PublicObjectSchemasGet`](docs/sdks/objectschemas/README.md#listpublicobjectschemasapiv2publicobjectschemasget) - List Public Object Schemas
- [`objectSchemasMutatePublicObjectSchemaApiV2PublicObjectSchemasPost`](docs/sdks/objectschemas/README.md#mutatepublicobjectschemaapiv2publicobjectschemaspost) - Mutate Public Object Schema
- [`ordersBulkCreate`](docs/sdks/orders/README.md#bulkcreate) - Bulk Create Public Orders
- [`ordersCreate`](docs/sdks/orders/README.md#create) - Create Public Order
- [`ordersDelete`](docs/sdks/orders/README.md#delete) - Delete Public Order
- [`ordersDownloadPublicOrderPdfApiV2PublicOrdersOrderIdPdfGet`](docs/sdks/orders/README.md#downloadpublicorderpdfapiv2publicordersorderidpdfget) - Download Public Order Pdf
- [`ordersGet`](docs/sdks/orders/README.md#get) - Get Public Order
- [`ordersList`](docs/sdks/orders/README.md#list) - List Public Orders
- [`ordersUpdate`](docs/sdks/orders/README.md#update) - Update Public Order
- [`ordersUploadPublicOrderFileApiV2PublicOrdersFilesPost`](docs/sdks/orders/README.md#uploadpublicorderfileapiv2publicordersfilespost) - Upload Public Order File
- [`paymentsCreate`](docs/sdks/payments/README.md#create) - Create Public Payment
- [`paymentsDelete`](docs/sdks/payments/README.md#delete) - Delete Public Payment
- [`paymentsDownloadPublicPaymentPdfApiV2PublicPaymentsPaymentIdPdfGet`](docs/sdks/payments/README.md#downloadpublicpaymentpdfapiv2publicpaymentspaymentidpdfget) - Download Public Payment Pdf
- [`paymentsGet`](docs/sdks/payments/README.md#get) - Get Public Payment
- [`paymentsList`](docs/sdks/payments/README.md#list) - List Public Payments
- [`paymentsListPublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsGet`](docs/sdks/payments/README.md#listpublicpaymentallocationsapiv2publicpaymentspaymentidallocationsget) - List Public Payment Allocations
- [`paymentsUpdate`](docs/sdks/payments/README.md#update) - Update Public Payment
- [`paymentsUpdatePublicPaymentAllocationsApiV2PublicPaymentsPaymentIdAllocationsPut`](docs/sdks/payments/README.md#updatepublicpaymentallocationsapiv2publicpaymentspaymentidallocationsput) - Update Public Payment Allocations
- [`payrollApprovePublicPayrollRunApiV2PublicPayrollRunsRunIdApprovePost`](docs/sdks/payroll/README.md#approvepublicpayrollrunapiv2publicpayrollrunsrunidapprovepost) - Approve Public Payroll Run
- [`payrollCalculatePublicPayrollRunApiV2PublicPayrollRunsCalculatePost`](docs/sdks/payroll/README.md#calculatepublicpayrollrunapiv2publicpayrollrunscalculatepost) - Calculate Public Payroll Run
- [`payrollCreatePublicPayrollJournalEntryApiV2PublicPayrollRunsRunIdJournalEntryPost`](docs/sdks/payroll/README.md#createpublicpayrolljournalentryapiv2publicpayrollrunsrunidjournalentrypost) - Create Public Payroll Journal Entry
- [`payrollDownloadPublicPayrollPayslipPdfApiV2PublicPayrollRunsRunIdPayslipsPdfGet`](docs/sdks/payroll/README.md#downloadpublicpayrollpayslippdfapiv2publicpayrollrunsrunidpayslipspdfget) - Download Public Payroll Payslip Pdf
- [`payrollGetPublicPayrollRunApiV2PublicPayrollRunsRunIdGet`](docs/sdks/payroll/README.md#getpublicpayrollrunapiv2publicpayrollrunsrunidget) - Get Public Payroll Run
- [`payrollListPublicPayrollProfilesApiV2PublicPayrollProfilesGet`](docs/sdks/payroll/README.md#listpublicpayrollprofilesapiv2publicpayrollprofilesget) - List Public Payroll Profiles
- [`payrollListPublicPayrollRunsApiV2PublicPayrollRunsGet`](docs/sdks/payroll/README.md#listpublicpayrollrunsapiv2publicpayrollrunsget) - List Public Payroll Runs
- [`payrollUpsertPublicPayrollProfileApiV2PublicPayrollProfilesPost`](docs/sdks/payroll/README.md#upsertpublicpayrollprofileapiv2publicpayrollprofilespost) - Upsert Public Payroll Profile
- [`projectsCreate`](docs/sdks/projects/README.md#create) - Create Public Project
- [`projectsDelete`](docs/sdks/projects/README.md#delete) - Delete Public Project
- [`projectsGet`](docs/sdks/projects/README.md#get) - Get Public Project
- [`projectsList`](docs/sdks/projects/README.md#list) - List Public Projects
- [`projectsUpdate`](docs/sdks/projects/README.md#update) - Update Public Project
- [`propertiesCreate`](docs/sdks/properties/README.md#create) - Create Public Developer Property
- [`propertiesDelete`](docs/sdks/properties/README.md#delete) - Delete Public Developer Property
- [`propertiesGet`](docs/sdks/properties/README.md#get) - Retrieve Public Developer Property
- [`propertiesList`](docs/sdks/properties/README.md#list) - List Public Developer Properties
- [`propertiesUpdate`](docs/sdks/properties/README.md#update) - Update Public Developer Property
- [`prospectCompaniesCreate`](docs/sdks/prospectcompanies/README.md#create) - Prospect Companies
- [`publicAuthGetCurrentIdentity`](docs/sdks/publicauth/README.md#getcurrentidentity) - Get Current Public Developer Auth Identity
- [`publicAuthGetPublicAuthSessionApiV2PublicAuthSessionGet`](docs/sdks/publicauth/README.md#getpublicauthsessionapiv2publicauthsessionget) - Get Current Public OAuth Session
- [`publicAuthRecordPublicAuthMcpToolCallApiV2PublicAuthMcpSessionToolCallLogPost`](docs/sdks/publicauth/README.md#recordpublicauthmcptoolcallapiv2publicauthmcpsessiontoolcalllogpost) - Record Public MCP Tool Call
- [`publicAuthRevokePublicAuthSessionApiV2PublicAuthSessionRevokePost`](docs/sdks/publicauth/README.md#revokepublicauthsessionapiv2publicauthsessionrevokepost) - Revoke Current Public OAuth Session
- [`publicAuthSwitchPublicAuthMcpSessionWorkspaceApiV2PublicAuthMcpSessionSwitchWorkspacePost`](docs/sdks/publicauth/README.md#switchpublicauthmcpsessionworkspaceapiv2publicauthmcpsessionswitchworkspacepost) - Switch Current Public MCP OAuth Session Workspace
- [`publicAuthSwitchPublicAuthSessionWorkspaceApiV2PublicAuthSessionSwitchWorkspacePost`](docs/sdks/publicauth/README.md#switchpublicauthsessionworkspaceapiv2publicauthsessionswitchworkspacepost) - Switch Current Public OAuth Session Workspace
- [`purchaseOrdersCreate`](docs/sdks/purchaseorders/README.md#create) - Create Public Purchase Order
- [`purchaseOrdersDelete`](docs/sdks/purchaseorders/README.md#delete) - Delete Public Purchase Order
- [`purchaseOrdersDownloadPublicPurchaseOrderPdfApiV2PublicPurchaseOrdersPurchaseOrderIdPdfGet`](docs/sdks/purchaseorders/README.md#downloadpublicpurchaseorderpdfapiv2publicpurchaseorderspurchaseorderidpdfget) - Download Public Purchase Order Pdf
- [`purchaseOrdersGet`](docs/sdks/purchaseorders/README.md#get) - Get Public Purchase Order
- [`purchaseOrdersList`](docs/sdks/purchaseorders/README.md#list) - List Public Purchase Orders
- [`purchaseOrdersUpdate`](docs/sdks/purchaseorders/README.md#update) - Update Public Purchase Order
- [`purchaseOrdersUploadPublicPurchaseOrderFileApiV2PublicPurchaseOrdersFilesPost`](docs/sdks/purchaseorders/README.md#uploadpublicpurchaseorderfileapiv2publicpurchaseordersfilespost) - Upload Public Purchase Order File
- [`recordsAggregatePublicRecordsApiV2PublicRecordsAggregatePost`](docs/sdks/records/README.md#aggregatepublicrecordsapiv2publicrecordsaggregatepost) - Aggregate Public Records
- [`recordsQueryPublicRecordsApiV2PublicRecordsQueryPost`](docs/sdks/records/README.md#querypublicrecordsapiv2publicrecordsquerypost) - Query Public Records
- [`reportsCreate`](docs/sdks/reports/README.md#create) - Create Public Report
- [`reportsDelete`](docs/sdks/reports/README.md#delete) - Delete Public Report
- [`reportsGet`](docs/sdks/reports/README.md#get) - Get Public Report
- [`reportsList`](docs/sdks/reports/README.md#list) - List Public Reports
- [`reportsUpdate`](docs/sdks/reports/README.md#update) - Update Public Report
- [`revenuesCreate`](docs/sdks/revenues/README.md#create) - Create Public Slip
- [`revenuesDelete`](docs/sdks/revenues/README.md#delete) - Delete Public Slip
- [`revenuesDownloadPublicSlipPdfApiV2PublicSlipsRevenueIdPdfGet`](docs/sdks/revenues/README.md#downloadpublicslippdfapiv2publicslipsrevenueidpdfget) - Download Public Slip Pdf
- [`revenuesGet`](docs/sdks/revenues/README.md#get) - Get Public Slip
- [`revenuesList`](docs/sdks/revenues/README.md#list) - List Public Slips
- [`revenuesUpdate`](docs/sdks/revenues/README.md#update) - Update Public Slip
- [`ruleSettingsDeletePublicApprovalRuleApiV2PublicApprovalRulesRuleIdDelete`](docs/sdks/rulesettings/README.md#deletepublicapprovalruleapiv2publicapprovalrulesruleiddelete) - Delete Public Approval Rule
- [`ruleSettingsDeletePublicDeliveryRuleApiV2PublicDeliveryRulesRuleIdDelete`](docs/sdks/rulesettings/README.md#deletepublicdeliveryruleapiv2publicdeliveryrulesruleiddelete) - Delete Public Delivery Rule
- [`ruleSettingsDeletePublicLockRuleApiV2PublicLockRulesRuleIdDelete`](docs/sdks/rulesettings/README.md#deletepubliclockruleapiv2publiclockrulesruleiddelete) - Delete Public Lock Rule
- [`ruleSettingsGetPublicApprovalRuleOptionsApiV2PublicApprovalRulesOptionsGet`](docs/sdks/rulesettings/README.md#getpublicapprovalruleoptionsapiv2publicapprovalrulesoptionsget) - Get Public Approval Rule Options
- [`ruleSettingsGetPublicDeliveryRuleOptionsApiV2PublicDeliveryRulesOptionsGet`](docs/sdks/rulesettings/README.md#getpublicdeliveryruleoptionsapiv2publicdeliveryrulesoptionsget) - Get Public Delivery Rule Options
- [`ruleSettingsGetPublicLockRuleOptionsApiV2PublicLockRulesOptionsGet`](docs/sdks/rulesettings/README.md#getpubliclockruleoptionsapiv2publiclockrulesoptionsget) - Get Public Lock Rule Options
- [`ruleSettingsListPublicApprovalRulesApiV2PublicApprovalRulesGet`](docs/sdks/rulesettings/README.md#listpublicapprovalrulesapiv2publicapprovalrulesget) - List Public Approval Rules
- [`ruleSettingsListPublicDeliveryRulesApiV2PublicDeliveryRulesGet`](docs/sdks/rulesettings/README.md#listpublicdeliveryrulesapiv2publicdeliveryrulesget) - List Public Delivery Rules
- [`ruleSettingsListPublicLockRulesApiV2PublicLockRulesGet`](docs/sdks/rulesettings/README.md#listpubliclockrulesapiv2publiclockrulesget) - List Public Lock Rules
- [`ruleSettingsUpsertPublicApprovalRuleApiV2PublicApprovalRulesPost`](docs/sdks/rulesettings/README.md#upsertpublicapprovalruleapiv2publicapprovalrulespost) - Upsert Public Approval Rule
- [`ruleSettingsUpsertPublicDeliveryRuleApiV2PublicDeliveryRulesPost`](docs/sdks/rulesettings/README.md#upsertpublicdeliveryruleapiv2publicdeliveryrulespost) - Upsert Public Delivery Rule
- [`ruleSettingsUpsertPublicLockRuleApiV2PublicLockRulesPost`](docs/sdks/rulesettings/README.md#upsertpubliclockruleapiv2publiclockrulespost) - Upsert Public Lock Rule
- [`subscriptionsBulkUpdatePublicSubscriptionsApiV2PublicSubscriptionsBulkUpdatePost`](docs/sdks/subscriptions/README.md#bulkupdatepublicsubscriptionsapiv2publicsubscriptionsbulkupdatepost) - Bulk Update Public Subscriptions
- [`subscriptionsCreate`](docs/sdks/subscriptions/README.md#create) - Create Public Subscription
- [`subscriptionsDelete`](docs/sdks/subscriptions/README.md#delete) - Delete Public Subscription
- [`subscriptionsGet`](docs/sdks/subscriptions/README.md#get) - Get Public Subscription
- [`subscriptionsList`](docs/sdks/subscriptions/README.md#list) - List Public Subscriptions
- [`subscriptionsUpdate`](docs/sdks/subscriptions/README.md#update) - Update Public Subscription
- [`tasksCreatePublicTaskApiV2PublicTasksPost`](docs/sdks/tasks/README.md#createpublictaskapiv2publictaskspost) - Create Public Task
- [`tasksDeletePublicTaskApiV2PublicTasksTaskIdDelete`](docs/sdks/tasks/README.md#deletepublictaskapiv2publictaskstaskiddelete) - Delete Public Task
- [`tasksGetPublicTaskApiV2PublicTasksTaskIdGet`](docs/sdks/tasks/README.md#getpublictaskapiv2publictaskstaskidget) - Get Public Task
- [`tasksListPublicTasksApiV2PublicTasksGet`](docs/sdks/tasks/README.md#listpublictasksapiv2publictasksget) - List Public Tasks
- [`tasksUpdatePublicTaskApiV2PublicTasksTaskIdPut`](docs/sdks/tasks/README.md#updatepublictaskapiv2publictaskstaskidput) - Update Public Task
- [`ticketsCreate`](docs/sdks/tickets/README.md#create) - Create Public Ticket
- [`ticketsDelete`](docs/sdks/tickets/README.md#delete) - Delete Public Ticket
- [`ticketsGet`](docs/sdks/tickets/README.md#get) - Get Public Ticket
- [`ticketsList`](docs/sdks/tickets/README.md#list) - List Public Tickets
- [`ticketsListPipelines`](docs/sdks/tickets/README.md#listpipelines) - List Public Ticket Pipelines
- [`ticketsUpdate`](docs/sdks/tickets/README.md#update) - Update Public Ticket
- [`ticketsUpdateStatus`](docs/sdks/tickets/README.md#updatestatus) - Update Public Ticket Status
- [`transfersGetPublicTransferHistoryApiV2PublicTransfersHistoryIdGet`](docs/sdks/transfers/README.md#getpublictransferhistoryapiv2publictransfershistoryidget) - Get Public Transfer History
- [`viewsCreatePublicViewApiV2PublicViewsPost`](docs/sdks/views/README.md#createpublicviewapiv2publicviewspost) - Create Public View
- [`viewsDeletePublicViewApiV2PublicViewsViewIdDelete`](docs/sdks/views/README.md#deletepublicviewapiv2publicviewsviewiddelete) - Delete Public View
- [`viewsGetPublicViewApiV2PublicViewsViewIdGet`](docs/sdks/views/README.md#getpublicviewapiv2publicviewsviewidget) - Get Public View
- [`viewsGetPublicViewColumnsApiV2PublicViewsViewIdColumnsGet`](docs/sdks/views/README.md#getpublicviewcolumnsapiv2publicviewsviewidcolumnsget) - Get Public View Columns
- [`viewsListPublicViewsApiV2PublicViewsGet`](docs/sdks/views/README.md#listpublicviewsapiv2publicviewsget) - List Public Views
- [`viewsUpdatePublicViewApiV2PublicViewsViewIdPatch`](docs/sdks/views/README.md#updatepublicviewapiv2publicviewsviewidpatch) - Update Public View
- [`workflowActionsListActions`](docs/sdks/workflowactions/README.md#listactions) - List Public Workflow Actions Compat
- [`workflowRunsGetPublicWorkflowRunNestedCompatApiV2PublicWorkflowsRunsRunIdGet`](docs/sdks/workflowruns/README.md#getpublicworkflowrunnestedcompatapiv2publicworkflowsrunsrunidget) - Get Public Workflow Run Nested Compat
- [`workflowRunsGetRun`](docs/sdks/workflowruns/README.md#getrun) - Get Public Workflow Run
- [`workflowRunsPreviewPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePreviewPost`](docs/sdks/workflowruns/README.md#previewpublicfreeeinvoiceexportapiv2publicinvoicesexportsfreeepreviewpost) - Preview Public Freee Invoice Export
- [`workflowRunsPreviewPublicHubspotCommissionIncentiveApiV2PublicIncentivesCommissionHubspotPreviewPost`](docs/sdks/workflowruns/README.md#previewpublichubspotcommissionincentiveapiv2publicincentivescommissionhubspotpreviewpost) - Preview Public Hubspot Commission Incentive
- [`workflowRunsPreviewPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPreviewPost`](docs/sdks/workflowruns/README.md#previewpublichubspotestimatedraftapiv2publicestimatesdraftshubspotpreviewpost) - Preview Public Hubspot Estimate Draft
- [`workflowRunsPreviewPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPreviewPost`](docs/sdks/workflowruns/README.md#previewpublichubspotinvoicedraftapiv2publicinvoicesdraftshubspotpreviewpost) - Preview Public Hubspot Invoice Draft
- [`workflowRunsPreviewPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPreviewPost`](docs/sdks/workflowruns/README.md#previewpublichubspotorderhandoffapiv2publicordershandoffshubspotpreviewpost) - Preview Public Hubspot Order Handoff
- [`workflowRunsPreviewPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPreviewPost`](docs/sdks/workflowruns/README.md#previewpublicmoneyforwardinvoiceexportapiv2publicinvoicesexportsmoneyforwardpreviewpost) - Preview Public Moneyforward Invoice Export
- [`workflowRunsPreviewPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforcePreviewPost`](docs/sdks/workflowruns/README.md#previewpublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcepreviewpost) - Preview Public Salesforce Quote Readiness
- [`workflowRunsPreviewPublicWorkflowCompatApiV2PublicWorkflowRunsPreviewPost`](docs/sdks/workflowruns/README.md#previewpublicworkflowcompatapiv2publicworkflowrunspreviewpost) - Preview Public Workflow Compat
- [`workflowRunsResolvePublicWorkflowRecordApiV2PublicWorkflowRunsResolveRecordPost`](docs/sdks/workflowruns/README.md#resolvepublicworkflowrecordapiv2publicworkflowrunsresolverecordpost) - Resolve Public Workflow Record
- [`workflowRunsStartPublicFreeeInvoiceExportApiV2PublicInvoicesExportsFreeePost`](docs/sdks/workflowruns/README.md#startpublicfreeeinvoiceexportapiv2publicinvoicesexportsfreeepost) - Start Public Freee Invoice Export
- [`workflowRunsStartPublicHubspotEstimateDraftApiV2PublicEstimatesDraftsHubspotPost`](docs/sdks/workflowruns/README.md#startpublichubspotestimatedraftapiv2publicestimatesdraftshubspotpost) - Start Public Hubspot Estimate Draft
- [`workflowRunsStartPublicHubspotInvoiceDraftApiV2PublicInvoicesDraftsHubspotPost`](docs/sdks/workflowruns/README.md#startpublichubspotinvoicedraftapiv2publicinvoicesdraftshubspotpost) - Start Public Hubspot Invoice Draft
- [`workflowRunsStartPublicHubspotOrderHandoffApiV2PublicOrdersHandoffsHubspotPost`](docs/sdks/workflowruns/README.md#startpublichubspotorderhandoffapiv2publicordershandoffshubspotpost) - Start Public Hubspot Order Handoff
- [`workflowRunsStartPublicHubspotRevenueControlReportApiV2PublicReportsRevenueControlHubspotPost`](docs/sdks/workflowruns/README.md#startpublichubspotrevenuecontrolreportapiv2publicreportsrevenuecontrolhubspotpost) - Start Public Hubspot Revenue Control Report
- [`workflowRunsStartPublicMoneyforwardInvoiceExportApiV2PublicInvoicesExportsMoneyforwardPost`](docs/sdks/workflowruns/README.md#startpublicmoneyforwardinvoiceexportapiv2publicinvoicesexportsmoneyforwardpost) - Start Public Moneyforward Invoice Export
- [`workflowRunsStartPublicWorkflowCompatApiV2PublicWorkflowRunsStartPost`](docs/sdks/workflowruns/README.md#startpublicworkflowcompatapiv2publicworkflowrunsstartpost) - Start Public Workflow Compat
- [`workflowRunsSummarizePublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceSummaryPost`](docs/sdks/workflowruns/README.md#summarizepublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcesummarypost) - Summarize Public Salesforce Quote Readiness
- [`workflowRunsWritebackPublicSalesforceQuoteReadinessApiV2PublicCpqQuoteReadinessSalesforceWritebackPost`](docs/sdks/workflowruns/README.md#writebackpublicsalesforcequotereadinessapiv2publiccpqquotereadinesssalesforcewritebackpost) - Writeback Public Salesforce Quote Readiness
- [`workflowsCreateOrUpdate`](docs/sdks/workflows/README.md#createorupdate) - Create Public Workflow
- [`workflowsDeletePublicWorkflowApiV2PublicWorkflowsWorkflowIdDelete`](docs/sdks/workflows/README.md#deletepublicworkflowapiv2publicworkflowsworkflowiddelete) - Delete Public Workflow
- [`workflowsGet`](docs/sdks/workflows/README.md#get) - Get Public Workflow
- [`workflowsList`](docs/sdks/workflows/README.md#list) - List Public Workflows
- [`workflowsRunByRef`](docs/sdks/workflows/README.md#runbyref) - Run Public Workflow
- [`workflowsUpdatePublicWorkflowApiV2PublicWorkflowsWorkflowIdPatch`](docs/sdks/workflows/README.md#updatepublicworkflowapiv2publicworkflowsworkflowidpatch) - Update Public Workflow

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
import { Sanka } from "sanka-sdk";

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
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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

[`SankaError`](./src/models/errors/sanka-error.ts) is the base class for all HTTP error responses. It has the following properties:

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
import { Sanka } from "sanka-sdk";
import * as errors from "sanka-sdk/models/errors";

const sanka = new Sanka({
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
* [`SankaError`](./src/models/errors/sanka-error.ts): The base class for HTTP error responses.
  * [`ErrorEnvelope`](./src/models/errors/error-envelope.ts): Error response.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`SankaError`](./src/models/errors/sanka-error.ts)**:
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  serverURL: "https://api.sanka.com",
  bearerAuth: process.env["SANKA_BEARER_AUTH"] ?? "",
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
import { Sanka } from "sanka-sdk";
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
import { Sanka } from "sanka-sdk";

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
