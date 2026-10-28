# GRACELIFE Digital Flagship

An incremental Next.js App Router foundation for the GRACELIFE storefront. The first slice implements email/password Auth, email confirmation, session refresh, account protection, admin authorization, and profile RLS. Product catalogue, checkout, inventory, and the full dashboard are later phases.

## Start locally

1. Install Node.js 22 or later and npm.
2. Copy `.env.example` to `.env.local` and set a GRACELIFE Supabase project URL and publishable key.
3. Install dependencies with `npm install`.
4. The initial profile migration is already applied to the GRACELIFE project created for this app. Apply later migration files before deploying schema changes.
5. In Supabase Auth URL Configuration, set the Site URL to `http://localhost:3000` and add `http://localhost:3000/auth/confirm` to Redirect URLs. Add production origins when deploying.
6. Run `npm run dev`.

Email confirmation is expected by default. Configure email delivery and password policy in the selected Supabase project's Auth settings before inviting real customers. Never put a secret/service-role key in `NEXT_PUBLIC_*` variables.

To enable the admin page, create a trusted user through signup, then promote that user's profile using the SQL comment at the bottom of the migration. Role changes are deliberately unavailable to normal application clients.

## System architecture

See [ARCHITECTURE.md](./ARCHITECTURE.md) for boundaries, authorization flow, data ownership, and the staged commerce plan.
