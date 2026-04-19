# cf-sync-kit Todo Example

This is a basic standalone example demonstrating how to use `cf-sync-kit` installed from npm.

> **Looking for more examples?** Additional specialized examples are available in the `cf-sync-kit` repository under the [`example/`](https://github.com/Endriur24/cf-sync-kit/tree/main/example)

## Features

- **Basic CRUD operations**: `add`, `update`, `remove` for collections
- **Live sync**: Real-time updates across clients using `useLiveSync`
- **Connection status**: Display connection state with `useConnectionStatus`
- **Multiple collections**: Demonstrates working with both `todos` and `notes` collections
- **Custom API endpoint**: Shows how to add custom Hono routes (complete-all) that broadcast sync events
- **Single-tenant configuration**: All data is shared using `singleTenant: true`

## Key Functions Demonstrated

### Client-side
- `useCollection` - Hook for fetching and managing collection data
- `useLiveSync` - Hook for enabling real-time synchronization
- `useConnectionStatus` - Hook for tracking WebSocket connection state

### Server-side
- `createDurableObject` - Creates a Durable Object for sync state
- `createGetRoomFn` - Creates a function to get the sync room
- Custom Hono routes with `broadcastSyncEvent` for manual sync triggers

## Database Setup

Before running the app, set up the local D1 database:

```bash
npm run db:setup:local
```

This generates migrations from the schema and applies them locally. Run this again if you modify `shared/schema.ts`.

Before running the dev server, generate TypeScript types for Cloudflare bindings:

```bash
npm run cf-typegen
```

To use `db:studio`, update the '<DATABASE_FILENAME>' in `drizzle.config.ts` first.

## Running

```bash
npm run dev
```

## Architecture

```
Request → Hono → Durable Object
                   ↓
             Broadcast sync events
```

This is a standalone starter project using `cf-sync-kit` from npm.
For more specialized examples (authentication, roles, multi-tenant), see the [`cf-sync-kit` repo examples](https://github.com/Endriur24/cf-sync-kit/tree/main/example).
