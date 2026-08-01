# ThriveForward Consulting Website

The public website for **ThriveForward Consulting LLC**, built with React, TypeScript, Vite, Tailwind CSS, and Nx.

## Prerequisites

- Node.js 20 or newer
- npm

## Install dependencies

From the repository root:

```bash
npm install
```

## Run the website locally

```bash
npm exec nx -- run website:serve
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

The development server supports hot reload, so saved changes appear without restarting the command.

## Build for production

```bash
npm exec nx -- run website:build
```

The production files are written to `apps/website/dist`.

To preview the production build locally:

```bash
npm exec nx -- run website:preview
```

## Test the website

Run the website unit tests:

```bash
npm exec nx -- run website:test
```

Run tests in watch mode:

```bash
npm exec nx -- run website:test -- --watch
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

Run type-checking and linting together:

```bash
npm exec nx -- run-many -t typecheck,lint -p website,website-e2e
```

Format the website projects:

```bash
npm exec nx -- format:write --projects=website,website-e2e
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
npm exec nx -- affected -t typecheck,lint,test,build
```

## Main project structure

```text
apps/
├── website/          ThriveForward React website
└── website-e2e/      Playwright end-to-end tests

packages/
└── components/       Shared React and Catalyst components
```

The workspace also contains an API project and shared packages that are independent of the website.

## Common issues

### Port 4200 is already in use

Stop the process using port 4200, or run Vite with another port:

```bash
npm exec nx -- run website:serve -- --port=4300
```

### Nx reports that the workspace is out of sync

```bash
npm exec nx -- sync
```

### Playwright cannot find Chromium

```bash
npm exec playwright -- install chromium
```
