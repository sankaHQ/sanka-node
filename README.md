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
  * [File uploads](#file-uploads)
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

| Name                   | Type | Scheme      | Environment Variable              |
| ---------------------- | ---- | ----------- | --------------------------------- |
| `apiKey` | http | HTTP Bearer | `SANKA_API_KEY` |

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

### [Ai](docs/sdks/ai/README.md)

* [enrich](docs/sdks/ai/README.md#enrich) - Enrich Company Data
* [score](docs/sdks/ai/README.md#score) - Score Company or Deal Data

### [Bills](docs/sdks/bills/README.md)

* [list](docs/sdks/bills/README.md#list) - List Bills
* [create](docs/sdks/bills/README.md#create) - Create Bill
* [get](docs/sdks/bills/README.md#get) - Get Bill
* [update](docs/sdks/bills/README.md#update) - Update Bill
* [delete](docs/sdks/bills/README.md#delete) - Delete Bill

### [Calendar](docs/sdks/calendar/README.md)

* [bootstrap](docs/sdks/calendar/README.md#bootstrap) - Public Calendar Bootstrap
* [availability](docs/sdks/calendar/README.md#availability) - Public Calendar Availability
* [createAttendance](docs/sdks/calendar/README.md#createattendance) - Public Calendar Create Attendance
* [rescheduleAttendance](docs/sdks/calendar/README.md#rescheduleattendance) - Public Calendar Reschedule Attendance
* [cancelAttendance](docs/sdks/calendar/README.md#cancelattendance) - Public Calendar Cancel Attendance

### [Companies](docs/sdks/companies/README.md)

* [list](docs/sdks/companies/README.md#list) - List Companies
* [create](docs/sdks/companies/README.md#create) - Create Company
* [get](docs/sdks/companies/README.md#get) - Get Company
* [update](docs/sdks/companies/README.md#update) - Update Company
* [delete](docs/sdks/companies/README.md#delete) - Delete Company

### [Contacts](docs/sdks/contacts/README.md)

* [list](docs/sdks/contacts/README.md#list) - List Contacts
* [create](docs/sdks/contacts/README.md#create) - Create Contact
* [get](docs/sdks/contacts/README.md#get) - Get Contact
* [update](docs/sdks/contacts/README.md#update) - Update Contact
* [delete](docs/sdks/contacts/README.md#delete) - Delete Contact

### [Deals](docs/sdks/deals/README.md)

* [list](docs/sdks/deals/README.md#list) - List Deals
* [create](docs/sdks/deals/README.md#create) - Create Deal
* [listPipelines](docs/sdks/deals/README.md#listpipelines) - List Deal Pipelines
* [get](docs/sdks/deals/README.md#get) - Get Deal
* [update](docs/sdks/deals/README.md#update) - Update Deal
* [delete](docs/sdks/deals/README.md#delete) - Delete Deal

### [Disbursements](docs/sdks/disbursements/README.md)

* [list](docs/sdks/disbursements/README.md#list) - List Disbursements
* [create](docs/sdks/disbursements/README.md#create) - Create Disbursement
* [get](docs/sdks/disbursements/README.md#get) - Get Disbursement
* [update](docs/sdks/disbursements/README.md#update) - Update Disbursement
* [delete](docs/sdks/disbursements/README.md#delete) - Delete Disbursement

### [Estimates](docs/sdks/estimates/README.md)

* [list](docs/sdks/estimates/README.md#list) - List Estimates
* [create](docs/sdks/estimates/README.md#create) - Create Estimate
* [get](docs/sdks/estimates/README.md#get) - Get Estimate
* [update](docs/sdks/estimates/README.md#update) - Update Estimate
* [delete](docs/sdks/estimates/README.md#delete) - Delete Estimate

### [Expenses](docs/sdks/expenses/README.md)

* [list](docs/sdks/expenses/README.md#list) - List Expenses
* [create](docs/sdks/expenses/README.md#create) - Create Expense
* [uploadFile](docs/sdks/expenses/README.md#uploadfile) - Upload Expense Attachment File
* [get](docs/sdks/expenses/README.md#get) - Get Expense
* [update](docs/sdks/expenses/README.md#update) - Update Expense
* [delete](docs/sdks/expenses/README.md#delete) - Delete Expense

### [Inventories](docs/sdks/inventories/README.md)

* [list](docs/sdks/inventories/README.md#list) - List Inventories
* [create](docs/sdks/inventories/README.md#create) - Create Inventory
* [get](docs/sdks/inventories/README.md#get) - Get Inventory
* [update](docs/sdks/inventories/README.md#update) - Update Inventory
* [delete](docs/sdks/inventories/README.md#delete) - Delete Inventory

### [InventoryTransactions](docs/sdks/inventorytransactions/README.md)

* [list](docs/sdks/inventorytransactions/README.md#list) - List Inventory Transactions
* [create](docs/sdks/inventorytransactions/README.md#create) - Create Inventory Transaction
* [get](docs/sdks/inventorytransactions/README.md#get) - Get Inventory Transaction
* [update](docs/sdks/inventorytransactions/README.md#update) - Update Inventory Transaction
* [delete](docs/sdks/inventorytransactions/README.md#delete) - Delete Inventory Transaction

### [Invoices](docs/sdks/invoices/README.md)

* [list](docs/sdks/invoices/README.md#list) - List Invoices
* [create](docs/sdks/invoices/README.md#create) - Create Invoice
* [get](docs/sdks/invoices/README.md#get) - Get Invoice
* [update](docs/sdks/invoices/README.md#update) - Update Invoice
* [delete](docs/sdks/invoices/README.md#delete) - Delete Invoice

### [Items](docs/sdks/items/README.md)

* [list](docs/sdks/items/README.md#list) - List Items
* [create](docs/sdks/items/README.md#create) - Create Item
* [update](docs/sdks/items/README.md#update) - Update Item
* [get](docs/sdks/items/README.md#get) - Get Item
* [delete](docs/sdks/items/README.md#delete) - Delete Item

### [Locations](docs/sdks/locations/README.md)

* [list](docs/sdks/locations/README.md#list) - List Locations
* [create](docs/sdks/locations/README.md#create) - Create Location
* [get](docs/sdks/locations/README.md#get) - Get Location
* [update](docs/sdks/locations/README.md#update) - Update Location
* [delete](docs/sdks/locations/README.md#delete) - Delete Location

### [Meters](docs/sdks/meters/README.md)

* [list](docs/sdks/meters/README.md#list) - List Meters
* [create](docs/sdks/meters/README.md#create) - Create Meter
* [get](docs/sdks/meters/README.md#get) - Get Meter
* [update](docs/sdks/meters/README.md#update) - Update Meter
* [delete](docs/sdks/meters/README.md#delete) - Delete Meter

### [Orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List Orders
* [create](docs/sdks/orders/README.md#create) - Create Orders
* [bulkCreate](docs/sdks/orders/README.md#bulkcreate) - Bulk Create Orders
* [get](docs/sdks/orders/README.md#get) - Get Order
* [update](docs/sdks/orders/README.md#update) - Update Order
* [delete](docs/sdks/orders/README.md#delete) - Delete Order

### [Payments](docs/sdks/payments/README.md)

* [list](docs/sdks/payments/README.md#list) - List Payments
* [create](docs/sdks/payments/README.md#create) - Create Payment
* [get](docs/sdks/payments/README.md#get) - Get Payment
* [update](docs/sdks/payments/README.md#update) - Update Payment
* [delete](docs/sdks/payments/README.md#delete) - Delete Payment

### [Properties](docs/sdks/properties/README.md)

* [list](docs/sdks/properties/README.md#list) - List Properties
* [create](docs/sdks/properties/README.md#create) - Create Property
* [get](docs/sdks/properties/README.md#get) - Retrieve Property
* [update](docs/sdks/properties/README.md#update) - Update Property
* [delete](docs/sdks/properties/README.md#delete) - Delete Property

### [PublicAuth](docs/sdks/publicauth/README.md)

* [getCurrentIdentity](docs/sdks/publicauth/README.md#getcurrentidentity) - Get Current Public Auth Identity

### [PurchaseOrders](docs/sdks/purchaseorders/README.md)

* [list](docs/sdks/purchaseorders/README.md#list) - List Purchase Orders
* [create](docs/sdks/purchaseorders/README.md#create) - Create Purchase Order
* [get](docs/sdks/purchaseorders/README.md#get) - Get Purchase Order
* [update](docs/sdks/purchaseorders/README.md#update) - Update Purchase Order
* [delete](docs/sdks/purchaseorders/README.md#delete) - Delete Purchase Order

### [Reports](docs/sdks/reports/README.md)

* [list](docs/sdks/reports/README.md#list) - List Reports
* [create](docs/sdks/reports/README.md#create) - Create Report
* [get](docs/sdks/reports/README.md#get) - Get Report
* [update](docs/sdks/reports/README.md#update) - Update Report
* [delete](docs/sdks/reports/README.md#delete) - Delete Report

### [Slips](docs/sdks/slips/README.md)

* [list](docs/sdks/slips/README.md#list) - List Slips
* [create](docs/sdks/slips/README.md#create) - Create Slip
* [get](docs/sdks/slips/README.md#get) - Get Slip
* [update](docs/sdks/slips/README.md#update) - Update Slip
* [delete](docs/sdks/slips/README.md#delete) - Delete Slip

### [Subscriptions](docs/sdks/subscriptions/README.md)

* [list](docs/sdks/subscriptions/README.md#list) - List Subscriptions
* [create](docs/sdks/subscriptions/README.md#create) - Create Subscription
* [get](docs/sdks/subscriptions/README.md#get) - Get Subscription
* [update](docs/sdks/subscriptions/README.md#update) - Update Subscription
* [delete](docs/sdks/subscriptions/README.md#delete) - Delete Subscription

### [Tickets](docs/sdks/tickets/README.md)

* [list](docs/sdks/tickets/README.md#list) - List Tickets
* [create](docs/sdks/tickets/README.md#create) - Create Ticket
* [listPipelines](docs/sdks/tickets/README.md#listpipelines) - List Ticket Pipelines
* [get](docs/sdks/tickets/README.md#get) - Get Ticket
* [update](docs/sdks/tickets/README.md#update) - Update Ticket
* [delete](docs/sdks/tickets/README.md#delete) - Delete Ticket
* [updateStatus](docs/sdks/tickets/README.md#updatestatus) - Update Ticket Status

### [Workflows](docs/sdks/workflows/README.md)

* [list](docs/sdks/workflows/README.md#list) - List Workflows
* [createOrUpdate](docs/sdks/workflows/README.md#createorupdate) - Create or Update Workflow
* [listActions](docs/sdks/workflows/README.md#listactions) - List Public Workflow Actions
* [runByRef](docs/sdks/workflows/README.md#runbyref) - Run Workflow
* [getRun](docs/sdks/workflows/README.md#getrun) - Get Workflow Run
* [get](docs/sdks/workflows/README.md#get) - Get Workflow

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

- [`aiEnrich`](docs/sdks/ai/README.md#enrich) - Enrich Company Data
- [`aiScore`](docs/sdks/ai/README.md#score) - Score Company or Deal Data
- [`billsCreate`](docs/sdks/bills/README.md#create) - Create Bill
- [`billsDelete`](docs/sdks/bills/README.md#delete) - Delete Bill
- [`billsGet`](docs/sdks/bills/README.md#get) - Get Bill
- [`billsList`](docs/sdks/bills/README.md#list) - List Bills
- [`billsUpdate`](docs/sdks/bills/README.md#update) - Update Bill
- [`calendarAvailability`](docs/sdks/calendar/README.md#availability) - Public Calendar Availability
- [`calendarBootstrap`](docs/sdks/calendar/README.md#bootstrap) - Public Calendar Bootstrap
- [`calendarCancelAttendance`](docs/sdks/calendar/README.md#cancelattendance) - Public Calendar Cancel Attendance
- [`calendarCreateAttendance`](docs/sdks/calendar/README.md#createattendance) - Public Calendar Create Attendance
- [`calendarRescheduleAttendance`](docs/sdks/calendar/README.md#rescheduleattendance) - Public Calendar Reschedule Attendance
- [`companiesCreate`](docs/sdks/companies/README.md#create) - Create Company
- [`companiesDelete`](docs/sdks/companies/README.md#delete) - Delete Company
- [`companiesGet`](docs/sdks/companies/README.md#get) - Get Company
- [`companiesList`](docs/sdks/companies/README.md#list) - List Companies
- [`companiesUpdate`](docs/sdks/companies/README.md#update) - Update Company
- [`contactsCreate`](docs/sdks/contacts/README.md#create) - Create Contact
- [`contactsDelete`](docs/sdks/contacts/README.md#delete) - Delete Contact
- [`contactsGet`](docs/sdks/contacts/README.md#get) - Get Contact
- [`contactsList`](docs/sdks/contacts/README.md#list) - List Contacts
- [`contactsUpdate`](docs/sdks/contacts/README.md#update) - Update Contact
- [`dealsCreate`](docs/sdks/deals/README.md#create) - Create Deal
- [`dealsDelete`](docs/sdks/deals/README.md#delete) - Delete Deal
- [`dealsGet`](docs/sdks/deals/README.md#get) - Get Deal
- [`dealsList`](docs/sdks/deals/README.md#list) - List Deals
- [`dealsListPipelines`](docs/sdks/deals/README.md#listpipelines) - List Deal Pipelines
- [`dealsUpdate`](docs/sdks/deals/README.md#update) - Update Deal
- [`disbursementsCreate`](docs/sdks/disbursements/README.md#create) - Create Disbursement
- [`disbursementsDelete`](docs/sdks/disbursements/README.md#delete) - Delete Disbursement
- [`disbursementsGet`](docs/sdks/disbursements/README.md#get) - Get Disbursement
- [`disbursementsList`](docs/sdks/disbursements/README.md#list) - List Disbursements
- [`disbursementsUpdate`](docs/sdks/disbursements/README.md#update) - Update Disbursement
- [`estimatesCreate`](docs/sdks/estimates/README.md#create) - Create Estimate
- [`estimatesDelete`](docs/sdks/estimates/README.md#delete) - Delete Estimate
- [`estimatesGet`](docs/sdks/estimates/README.md#get) - Get Estimate
- [`estimatesList`](docs/sdks/estimates/README.md#list) - List Estimates
- [`estimatesUpdate`](docs/sdks/estimates/README.md#update) - Update Estimate
- [`expensesCreate`](docs/sdks/expenses/README.md#create) - Create Expense
- [`expensesDelete`](docs/sdks/expenses/README.md#delete) - Delete Expense
- [`expensesGet`](docs/sdks/expenses/README.md#get) - Get Expense
- [`expensesList`](docs/sdks/expenses/README.md#list) - List Expenses
- [`expensesUpdate`](docs/sdks/expenses/README.md#update) - Update Expense
- [`expensesUploadFile`](docs/sdks/expenses/README.md#uploadfile) - Upload Expense Attachment File
- [`inventoriesCreate`](docs/sdks/inventories/README.md#create) - Create Inventory
- [`inventoriesDelete`](docs/sdks/inventories/README.md#delete) - Delete Inventory
- [`inventoriesGet`](docs/sdks/inventories/README.md#get) - Get Inventory
- [`inventoriesList`](docs/sdks/inventories/README.md#list) - List Inventories
- [`inventoriesUpdate`](docs/sdks/inventories/README.md#update) - Update Inventory
- [`inventoryTransactionsCreate`](docs/sdks/inventorytransactions/README.md#create) - Create Inventory Transaction
- [`inventoryTransactionsDelete`](docs/sdks/inventorytransactions/README.md#delete) - Delete Inventory Transaction
- [`inventoryTransactionsGet`](docs/sdks/inventorytransactions/README.md#get) - Get Inventory Transaction
- [`inventoryTransactionsList`](docs/sdks/inventorytransactions/README.md#list) - List Inventory Transactions
- [`inventoryTransactionsUpdate`](docs/sdks/inventorytransactions/README.md#update) - Update Inventory Transaction
- [`invoicesCreate`](docs/sdks/invoices/README.md#create) - Create Invoice
- [`invoicesDelete`](docs/sdks/invoices/README.md#delete) - Delete Invoice
- [`invoicesGet`](docs/sdks/invoices/README.md#get) - Get Invoice
- [`invoicesList`](docs/sdks/invoices/README.md#list) - List Invoices
- [`invoicesUpdate`](docs/sdks/invoices/README.md#update) - Update Invoice
- [`itemsCreate`](docs/sdks/items/README.md#create) - Create Item
- [`itemsDelete`](docs/sdks/items/README.md#delete) - Delete Item
- [`itemsGet`](docs/sdks/items/README.md#get) - Get Item
- [`itemsList`](docs/sdks/items/README.md#list) - List Items
- [`itemsUpdate`](docs/sdks/items/README.md#update) - Update Item
- [`locationsCreate`](docs/sdks/locations/README.md#create) - Create Location
- [`locationsDelete`](docs/sdks/locations/README.md#delete) - Delete Location
- [`locationsGet`](docs/sdks/locations/README.md#get) - Get Location
- [`locationsList`](docs/sdks/locations/README.md#list) - List Locations
- [`locationsUpdate`](docs/sdks/locations/README.md#update) - Update Location
- [`metersCreate`](docs/sdks/meters/README.md#create) - Create Meter
- [`metersDelete`](docs/sdks/meters/README.md#delete) - Delete Meter
- [`metersGet`](docs/sdks/meters/README.md#get) - Get Meter
- [`metersList`](docs/sdks/meters/README.md#list) - List Meters
- [`metersUpdate`](docs/sdks/meters/README.md#update) - Update Meter
- [`ordersBulkCreate`](docs/sdks/orders/README.md#bulkcreate) - Bulk Create Orders
- [`ordersCreate`](docs/sdks/orders/README.md#create) - Create Orders
- [`ordersDelete`](docs/sdks/orders/README.md#delete) - Delete Order
- [`ordersGet`](docs/sdks/orders/README.md#get) - Get Order
- [`ordersList`](docs/sdks/orders/README.md#list) - List Orders
- [`ordersUpdate`](docs/sdks/orders/README.md#update) - Update Order
- [`paymentsCreate`](docs/sdks/payments/README.md#create) - Create Payment
- [`paymentsDelete`](docs/sdks/payments/README.md#delete) - Delete Payment
- [`paymentsGet`](docs/sdks/payments/README.md#get) - Get Payment
- [`paymentsList`](docs/sdks/payments/README.md#list) - List Payments
- [`paymentsUpdate`](docs/sdks/payments/README.md#update) - Update Payment
- [`propertiesCreate`](docs/sdks/properties/README.md#create) - Create Property
- [`propertiesDelete`](docs/sdks/properties/README.md#delete) - Delete Property
- [`propertiesGet`](docs/sdks/properties/README.md#get) - Retrieve Property
- [`propertiesList`](docs/sdks/properties/README.md#list) - List Properties
- [`propertiesUpdate`](docs/sdks/properties/README.md#update) - Update Property
- [`publicAuthGetCurrentIdentity`](docs/sdks/publicauth/README.md#getcurrentidentity) - Get Current Public Auth Identity
- [`purchaseOrdersCreate`](docs/sdks/purchaseorders/README.md#create) - Create Purchase Order
- [`purchaseOrdersDelete`](docs/sdks/purchaseorders/README.md#delete) - Delete Purchase Order
- [`purchaseOrdersGet`](docs/sdks/purchaseorders/README.md#get) - Get Purchase Order
- [`purchaseOrdersList`](docs/sdks/purchaseorders/README.md#list) - List Purchase Orders
- [`purchaseOrdersUpdate`](docs/sdks/purchaseorders/README.md#update) - Update Purchase Order
- [`reportsCreate`](docs/sdks/reports/README.md#create) - Create Report
- [`reportsDelete`](docs/sdks/reports/README.md#delete) - Delete Report
- [`reportsGet`](docs/sdks/reports/README.md#get) - Get Report
- [`reportsList`](docs/sdks/reports/README.md#list) - List Reports
- [`reportsUpdate`](docs/sdks/reports/README.md#update) - Update Report
- [`slipsCreate`](docs/sdks/slips/README.md#create) - Create Slip
- [`slipsDelete`](docs/sdks/slips/README.md#delete) - Delete Slip
- [`slipsGet`](docs/sdks/slips/README.md#get) - Get Slip
- [`slipsList`](docs/sdks/slips/README.md#list) - List Slips
- [`slipsUpdate`](docs/sdks/slips/README.md#update) - Update Slip
- [`subscriptionsCreate`](docs/sdks/subscriptions/README.md#create) - Create Subscription
- [`subscriptionsDelete`](docs/sdks/subscriptions/README.md#delete) - Delete Subscription
- [`subscriptionsGet`](docs/sdks/subscriptions/README.md#get) - Get Subscription
- [`subscriptionsList`](docs/sdks/subscriptions/README.md#list) - List Subscriptions
- [`subscriptionsUpdate`](docs/sdks/subscriptions/README.md#update) - Update Subscription
- [`ticketsCreate`](docs/sdks/tickets/README.md#create) - Create Ticket
- [`ticketsDelete`](docs/sdks/tickets/README.md#delete) - Delete Ticket
- [`ticketsGet`](docs/sdks/tickets/README.md#get) - Get Ticket
- [`ticketsList`](docs/sdks/tickets/README.md#list) - List Tickets
- [`ticketsListPipelines`](docs/sdks/tickets/README.md#listpipelines) - List Ticket Pipelines
- [`ticketsUpdate`](docs/sdks/tickets/README.md#update) - Update Ticket
- [`ticketsUpdateStatus`](docs/sdks/tickets/README.md#updatestatus) - Update Ticket Status
- [`workflowsCreateOrUpdate`](docs/sdks/workflows/README.md#createorupdate) - Create or Update Workflow
- [`workflowsGet`](docs/sdks/workflows/README.md#get) - Get Workflow
- [`workflowsGetRun`](docs/sdks/workflows/README.md#getrun) - Get Workflow Run
- [`workflowsList`](docs/sdks/workflows/README.md#list) - List Workflows
- [`workflowsListActions`](docs/sdks/workflows/README.md#listactions) - List Public Workflow Actions
- [`workflowsRunByRef`](docs/sdks/workflows/README.md#runbyref) - Run Workflow

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { openAsBlob } from "node:fs";
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.expenses.uploadFile({
    file: await openAsBlob("example.file"),
  });

  console.log(result);
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ai.enrich({
    objectType: "<value>",
  }, {
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
  });

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
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ai.enrich({
    objectType: "<value>",
  });

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
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  try {
    const result = await sanka.ai.enrich({
      objectType: "<value>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.SankaError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.AIErrorResponse) {
        console.log(error.data$.message); // string
        console.log(error.data$.ctxId); // string
        console.log(error.data$.errors); // { [k: string]: any }
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`SankaError`](./src/models/errors/sanka-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (31)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`SankaError`](./src/models/errors/sanka-error.ts)**:
* [`TicketsErrorResponse`](./src/models/errors/tickets-error-response.ts): Bad Request. Applicable to 7 of 124 methods.*
* [`OrdersErrorResponse`](./src/models/errors/orders-error-response.ts): Bad Request. Applicable to 6 of 124 methods.*
* [`ExpensesErrorResponse`](./src/models/errors/expenses-error-response.ts): Applicable to 6 of 124 methods.*
* [`WorkflowsErrorResponse`](./src/models/errors/workflows-error-response.ts): Applicable to 6 of 124 methods.*
* [`ContactsErrorResponse`](./src/models/errors/contacts-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`CompaniesErrorResponse`](./src/models/errors/companies-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`CasesErrorResponse`](./src/models/errors/cases-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`PurchaseOrdersErrorResponse`](./src/models/errors/purchase-orders-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`SlipsErrorResponse`](./src/models/errors/slips-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`BillsErrorResponse`](./src/models/errors/bills-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`DisbursementsErrorResponse`](./src/models/errors/disbursements-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`PublicPropertyErrorResponse`](./src/models/errors/public-property-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`PublicReportErrorResponse`](./src/models/errors/public-report-error-response.ts): Bad Request. Applicable to 5 of 124 methods.*
* [`CalendarErrorResponse`](./src/models/errors/calendar-error-response.ts): Applicable to 5 of 124 methods.*
* [`ItemsErrorResponse`](./src/models/errors/items-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`SubscriptionErrorResponse`](./src/models/errors/subscription-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`EstimatesErrorResponse`](./src/models/errors/estimates-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`InvoicesErrorResponse`](./src/models/errors/invoices-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`PaymentsErrorResponse`](./src/models/errors/payments-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`InventoriesErrorResponse`](./src/models/errors/inventories-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`LocationsErrorResponse`](./src/models/errors/locations-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`InventoryTransactionsErrorResponse`](./src/models/errors/inventory-transactions-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`MetersErrorResponse`](./src/models/errors/meters-error-response.ts): Bad Request. Applicable to 4 of 124 methods.*
* [`AIErrorResponse`](./src/models/errors/ai-error-response.ts): Bad Request. Applicable to 2 of 124 methods.*
* [`PublicAuthErrorResponse`](./src/models/errors/public-auth-error-response.ts): Unauthorized. Applicable to 1 of 124 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Override Server URL Per-Client

The default server can be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Sanka } from "sanka-sdk";

const sanka = new Sanka({
  serverURL: "https://api.sanka.com",
  publicOAuthOrJWTAuth: process.env["SANKA_PUBLIC_O_AUTH_OR_JWT_AUTH"] ?? "",
});

async function run() {
  const result = await sanka.ai.enrich({
    objectType: "<value>",
  });

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
