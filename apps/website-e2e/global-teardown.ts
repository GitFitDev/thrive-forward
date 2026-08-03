import { existsSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { workspaceRoot } from '@nx/devkit';

export default function globalTeardown() {
  const nextEnvPath = resolve(
    workspaceRoot,
    'apps/website/next-env.d.ts',
  );
  const backupPath = resolve(
    workspaceRoot,
    'apps/website-e2e/test-output/next-env.d.ts.e2e-backup',
  );

  if (existsSync(backupPath)) {
    writeFileSync(nextEnvPath, readFileSync(backupPath));
    rmSync(backupPath);
  }
}
