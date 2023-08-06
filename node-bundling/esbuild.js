import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['./src/main.js'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile: 'dist/esbuild-out.js',
});
