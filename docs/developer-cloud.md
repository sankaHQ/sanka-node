# Developer Cloud release candidate

This SDK adds the V2 Developer Cloud contract. SDK installation alone does not
enable paid execution. Check availability in the intended workspace before
starting a run. Free local migration continues through `sanka-sdk/migrate`.

```typescript
import Sanka from "sanka-sdk";

const client = new Sanka({ apiKey: process.env["SANKA_API_TOKEN"] });
const workspaceId = "YOUR_INTERNAL_WORKSPACE_UUID";
const availability = await client.developerCloud.getAvailability({ workspaceId });
console.log(availability.result.data);
```

`enabled`, `repairEnabled`, `certificationEnabled` and `fleetEnabled` report
current admission. Existing history and receipts remain readable while disabled.
API tokens need the matching `migrate:cloud:read` or `migrate:cloud:write` scope.

Upload an explicitly approved ZIP snapshot with `uploadSource`. Pass its base64
bytes, `sha256`, and optional full `revision` in `body`; the ZIP limit is 8 MiB.
The revision is a caller-declared claim. Its digest pins the actual uploaded bytes;
it does not independently prove Git provenance. Source upload is free and starts
no worker. Exclude credentials and use the returned source ID and SHA-256.

After the user has approved this exact source and cap:

```typescript
const response = await client.developerCloud.createRun({
  workspaceId,
  idempotencyKey: "YOUR_STABLE_APPROVED_INTENT_KEY",
  body: {
    sourceId: "UPLOADED_SOURCE_UUID",
    sourceSha256: "UPLOADED_SOURCE_SHA256",
    maxCredits: 100,
    timeoutSeconds: 60,
  },
});
console.log(response.result.data.id, response.result.data.status);
```

Keep the key and exact request after a lost response. Replaying that intent returns
the same run; changing its source or cap conflicts. Do not automatically increase
the cap or replace the key. Read persisted terminal state and the final receipt
before reporting completion. Cancellation is a request; poll until it settles.

| Workflow | `client.developerCloud` methods |
| --- | --- |
| Run | `createRun`, `listRuns`, `getRun`, `cancelRun` |
| Evidence | `listEvents`, `getReceipt`, `listArtifacts`, `getArtifact` |
| Certificate | `listCertificateKeys`, `getCertificate`, `revokeCertificate` |
| Fleet | `createFleet`, `listFleets`, `getFleet`, `cancelFleet`, `retryFleet` |

Repair uses `createRun.body.repair` with a pinned parent/candidate, failing gate
and allowed paths. Certification uses `.certification` and
`verificationProfile: "independent-http-replay-v1"`. Read the generated request
models for the complete profile. An issued certificate covers only the recorded
scenarios and limitations. Verify its signature offline using the CLI and public
key, and read revocation status before relying on it.

Compute is 100 credits per active worker-minute, rounded once per run. A successful
Repair adds 1,000 credits and durable certificate issuance adds 2,000; both also
use compute. Failed gates earn no premium. The entire compute/premium reservation
fits within `maxCredits`; unused credits are released. Re-reading evidence is free.

A Fleet contains 1–20 explicitly selected repository labels, full revisions and
child requests. Its cap equals the sum of child caps, reserved atomically. Set
concurrency from 1 to 5; the workspace-wide active-worker limit remains five.
Fleet adds no surcharge. A partial result remains partial. After settlement,
`retryFleet` creates a new Fleet for the selected failed keys with a newly approved
cap equal to their original caps; successful children retain their old receipts.

`getArtifact` returns a stream for binary output. Compare downloaded size and
SHA-256 with `listArtifacts` before using the contents. Source, logs and output are
retained for seven days; receipts and certificate metadata retain their identities.
No SDK method creates a repository PR, merges, deploys or purchases credits.
