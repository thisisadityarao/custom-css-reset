import * as esbuild from 'esbuild';

// Run a build
await esbuild.build({
  // A list of files to bundle
  entryPoints: [
    // Files to bundle...
    'src/reset.css',
  ],
  // The root directory for the input files
  outbase: 'src',
  // The root directory for the output files
  outdir: 'dist',
  // The output file extension
  outExtension: { '.css': '.min.css' },
  // If true, bundle files
  bundle: true,
  // If true, right the new file to the harddrive
  // (otherwise, it's stored as a glob that you can do other stuff with)
  write: true,
  // Minify everything
  minify: true,
});
