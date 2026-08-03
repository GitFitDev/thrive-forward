# ThriveForward Consulting Website

The public website for **ThriveForward Consulting LLC**, built with Next.js App Router, React, TypeScript, Tailwind CSS, and Nx. Shared Catalyst/Tailwind UI components live in `packages/components`.

## Prerequisites

- Node.js 22 or newer
- npm

## Install dependencies

From the repository root:

```bash
npm install
```

## Run the website locally

```bash
nx serve website
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The development server supports hot reload, so saved changes appear without restarting the command.

## Build for production

```bash
npm exec nx -- run website:build
```

The optimized application is written to `apps/website/.next`.

To preview the production build locally:

```bash
npm exec nx -- run website:start
```

## Run end-to-end tests

Playwright requires its Chromium test browser. Install it once:

```bash
npm exec playwright -- install chromium
```

Then run the website journeys:

```bash
npm exec nx -- run website-e2e:e2e
```

## Code quality

Type-check the website:

```bash
npm exec nx -- run website:typecheck
```

Lint the website:

```bash
npm exec nx -- run website:lint
```

Type-check the shared component library:

```bash
npm exec nx -- run components:typecheck
```

Run website and component checks together:

```bash
npm exec nx -- run-many -t typecheck,lint -p website,components
```

Format the website projects:

```bash
npm exec nx -- format:write --projects=website,website-e2e,components
```

## Useful Nx commands

Show the website project configuration and available targets:

```bash
npm exec nx -- show project website
```

Open the workspace dependency graph:

```bash
npm exec nx -- graph
```

List every project in the workspace:

```bash
npm exec nx -- show projects
```

Run a target only for projects affected by the current changes:

```bash
npm exec nx -- affected -t typecheck,lint,build,e2e
```

## Main project structure

```text
apps/
├── website/          ThriveForward Next.js website
└── website-e2e/      Playwright end-to-end tests

packages/
└── components/       Shared React and Catalyst components
```

The workspace also contains an API project and shared packages that are independent of the website.

## Configuration

### Configure the canonical site URL

Copy `apps/website/.env.example` to `apps/website/.env.local` and update `NEXT_PUBLIC_SITE_URL` for the deployment domain. It controls canonical URLs, structured data, the sitemap, and robots metadata.

### Configure inquiry storage

Contact inquiries are stored in a Supabase Postgres database. The public site
can insert records, but row-level security prevents visitors from reading,
updating, or deleting inquiry data.

1. Create a Supabase project.
2. Run `supabase/migrations/20260803000000_create_inquiries.sql` in the
   Supabase SQL Editor.
3. Copy `apps/website/.env.example` to `apps/website/.env.local`.
4. Add the project URL and publishable key from the Supabase Connect dialog:

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your-key
```

The publishable key is designed for browser use. Never add a Supabase secret
key or legacy `service_role` key to a `NEXT_PUBLIC_` variable.

The website includes the production project URL and publishable key as safe
browser defaults. To override them for another GitHub Pages environment, create
these repository Actions variables under **Settings → Secrets and variables →
Actions → Variables**:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

The Pages workflow includes those values in the static build. Submitted rows
are available in the Supabase Table Editor under `public.inquiries`.

Before a public launch, consider adding Cloudflare Turnstile or an equivalent
anti-spam challenge in front of anonymous submissions.

## Common issues

### Port 3000 is already in use

Stop the process using port 3000, or run Next.js with another port:

```bash
nx serve website -- --port 4300
```

### Nx reports that the workspace is out of sync

```bash
npm exec nx -- sync
```

### Playwright cannot find Chromium

```bash
npm exec playwright -- install chromium
```
