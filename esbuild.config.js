#!/usr/bin/env node

const esbuild = require("esbuild");
const svelte = require("esbuild-svelte");

esbuild.context({
  logLevel: "info",
  entryPoints: ["app/javascript/application.js"],
  outdir: 'app/assets/builds',
  sourcemap: true,
  publicPath: "assets",
  bundle: true,
  plugins: [svelte()]
}).then((r) => {
  console.log('✨ Build succeeded.');
  r.watch();
  console.log('watching...');
}).catch(() => process.exit(1));
