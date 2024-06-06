import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: './src/lib/components',
			$assets: './src/lib/assets'
		}
	},
	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/styles/variables.scss'; @import 'src/styles/mixins.scss'; `
		}
	})
};

export default config;
