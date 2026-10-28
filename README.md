# GRACELIFE

A Next.js storefront and auth foundation for the GRACELIFE brand. This project includes a branded landing page, email/password authentication, email confirmation, protected account routes, admin authorization, and Supabase-backed session handling.

## Features

- Landing page for the GRACELIFE brand
- Sign up and sign in with email/password
- Email confirmation flow
- Protected account route
- Admin-only route protection
- Supabase session management via server and proxy clients
- Database migrations for auth profile setup and role enforcement

## Tech stack

- Next.js 16
- React 19
- TypeScript
- Supabase

## Getting started

1. Install Node.js 22 or later.
2. Copy `.env.example` to `.env.local`.
3. Add your Supabase project values:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL=http://localhost:3000`
4. Install dependencies:

```bash
npm install
```

5. Start the app:

```bash
npm run dev
```

6. Open `http://localhost:3000` in your browser.

## Supabase setup

In your Supabase project:

- Set the Site URL to `http://localhost:3000`
- Add `http://localhost:3000/auth/confirm` to Redirect URLs
- Configure email auth and password policy before production use

> Never place a secret service-role key in a `NEXT_PUBLIC_*` environment variable.

## Admin access

Create a user through the app, then promote that profile in the database as needed. The role restriction is intentionally enforced server-side.

## Project structure

- `app/` – App Router pages and route handlers
- `lib/` – shared auth and Supabase utilities
- `supabase/migrations/` – database migrations
- `proxy.ts` – request middleware for session refresh

## Architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for boundaries, auth flow, and product roadmap details.
