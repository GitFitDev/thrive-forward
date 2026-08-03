import { spawn } from 'node:child_process';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = resolve(scriptDirectory, '../../..');
const websiteDirectory = resolve(workspaceRoot, 'apps/website');
const nextEnvPath = resolve(websiteDirectory, 'next-env.d.ts');
const backupPath = resolve(
  workspaceRoot,
  'apps/website-e2e/test-output/next-env.d.ts.e2e-backup',
);
const nextExecutable = resolve(workspaceRoot, 'node_modules/.bin/next');
const port = process.argv[2] || '4300';
const originalNextEnv = readFileSync(nextEnvPath);

mkdirSync(dirname(backupPath), { recursive: true });
writeFileSync(backupPath, originalNextEnv);

const server = spawn(nextExecutable, ['dev', '--port', port], {
  cwd: websiteDirectory,
  env: process.env,
  stdio: 'inherit',
});

let stopping = false;

const restoreNextEnv = () => writeFileSync(nextEnvPath, originalNextEnv);

const stop = (signal) => {
  if (!stopping) {
    stopping = true;
    restoreNextEnv();
    server.kill(signal);
  }
};

process.on('SIGINT', () => stop('SIGINT'));
process.on('SIGTERM', () => stop('SIGTERM'));

server.on('exit', (code, signal) => {
  restoreNextEnv();
  process.exitCode = code ?? (signal ? 0 : 1);
});
