import * as esbuild from 'esbuild';
import pkg from './package.json' with { type: 'json' };

const banner = `/*! ${pkg.name} v${pkg.version} | (c) ${pkg.author.name} | ${pkg.repository.url} */`;

// Run a build
await esbuild.build({
	// A list of files to bundle
	entryPoints: [
		// Files to bundle...
        'src/js/*.js',
		'src/css/*.css',
	],
	// The root directory for the input files
	outbase: 'src',
	// The root directory for the output files
	outdir: 'dist',
	// The banner to use for JS and CSS files
	banner: {
		js: banner,
		css: banner,
	},
	// If true, bundle files
	bundle: true,
	// If true, right the new file to the harddrive
	// (otherwise, it's stored as a glob that you can do other stuff with)
	write: true,
    // Minify everything
	minify: true,
});
