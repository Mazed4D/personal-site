// import adapter from '@sveltejs/adapter-netlify';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import importAssets from 'svelte-preprocess-import-assets'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess(), importAssets()],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: true,
			strict: true,
			
		})
	}
};

export default config;
