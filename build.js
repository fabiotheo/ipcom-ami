import { execSync } from "node:child_process";
import * as esbuild from "esbuild";

// 1. Gera os arquivos .d.ts usando tsc
execSync("tsc --emitDeclarationOnly --outDir dist/types", { stdio: "inherit" });

// 2. Build para ESM
esbuild
	.build({
		entryPoints: ["src/index.ts"],
		bundle: true,
		minify: true,
		sourcemap: true,
		format: "esm",
		outfile: "dist/esm/index.js",
		target: ["esnext"],
		platform: "node",
	})
	.catch(() => process.exit(1));

// 3. Build para CommonJS
esbuild
	.build({
		entryPoints: ["src/index.ts"],
		bundle: true,
		minify: true,
		sourcemap: true,
		format: "cjs",
		outfile: "dist/cjs/index.cjs", // Extensão .cjs para CommonJS
		target: ["esnext"],
		platform: "node",
	})
	.catch(() => process.exit(1));
