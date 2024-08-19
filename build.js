import * as esbuild from 'esbuild';
import { execSync } from 'node:child_process';

// 1. Gera os arquivos .d.ts usando tsc
execSync('tsc --emitDeclarationOnly --outDir dist/types', { stdio: 'inherit' });

// 2. Usa esbuild para fazer o bundling e minificação
esbuild.build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    minify: true,
    sourcemap: true,
    format: 'esm',
    outfile: 'dist/index.js',
    target: ['esnext'],
    platform: 'node',
    external: [],
}).catch(() => process.exit(1));
