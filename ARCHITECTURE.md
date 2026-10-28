# GRACELIFE system architecture

## First release foundation

```text
Browser
  └─ Next.js App Router (Server Components by default)
       ├─ proxy.ts: refresh cookie sessions with Supabase Auth
       ├─ auth Server Actions / callback Route Handler
       ├─ server route guards: verified claims + database role check
       └─ Supabase SSR client (publishable key, user cookie)
            ├─ Supabase Auth: identity, PKCE email confirmation, sessions
            └─ Postgres public.profiles: customer/admin role + RLS
```

The browser receives only the Supabase URL and publishable key. The user's session is stored in secure cookies by `@supabase/ssr`. The proxy refreshes sessions; it does not grant access. Protected server layouts and every sensitive Server Action or Route Handler independently verify identity. Admin functions additionally read the database-controlled `profiles.role`. RLS remains the data boundary if a request bypasses the UI.

## Authorization model

- Anonymous visitors can access public pages and published catalogue data once implemented.
- Authenticated customers can read their own profile, orders, and account data.
- Admins can use operational tools after a server-side role check, with matching admin-only database policies on each managed table.
- The signup form accepts a display name only. It never accepts a role. `user_metadata` is user-controlled and is not used for authorization.
- The profile table grants clients SELECT and only column-scoped UPDATE for `full_name` and `updated_at`; clients cannot mutate `role` or `id`.
- The Auth user trigger is a narrowly scoped `SECURITY DEFINER` function with an empty search path and revoked direct execution. It only creates a default customer profile.

## Planned commerce boundaries

```text
Storefront UI → Server Actions / Route Handlers → domain services
                                          ├─ catalogue/pricing
                                          ├─ cart and checkout
                                          ├─ inventory reservation transaction
                                          ├─ order snapshots and status history
                                          └─ payment provider adapter + verified webhooks
                                                     ↓
                                  Supabase Postgres + RLS / Storage
```

Keep one catalogue for Core, Performance, and Street. Use integer minor units for prices, snapshot names/SKUs/prices into order items, and perform authoritative totals on the server. Inventory changes and order creation should be transactional and idempotent. Payment webhooks must verify signatures before changing order state. Public product images can use a public bucket; private customer/admin assets use private buckets and scoped Storage policies.

## Environments and operations

- Use separate Supabase development and production projects; do not point this starter at the unrelated inactive project currently connected to the workspace.
- Keep schema changes in versioned `supabase/migrations/` files and apply them to development before production.
- Configure Auth Site URL/Redirect URLs, email delivery, allowed origins, and password policy per environment.
- Add database-backed RLS policies for every table in exposed schemas. New projects may require explicit Data API exposure and grants; keep RLS enabled regardless.
- Add CI for lint, type checking, tests, and build once the application features are in place. Add monitoring/backups and deployment secrets before launch.

## Initial backlog

1. Select/create the GRACELIFE Supabase project and configure Auth URLs/email.
2. Apply the profile migration and verify signup, confirmation, login, logout, customer isolation, and admin denial/promotion.
3. Build the responsive brand storefront and centralized collections/catalogue.
4. Add product variants, inventory ledger, carts, transactional checkout, orders, and payment-provider integration.
5. Add role-protected operations dashboard and CI/security review.
