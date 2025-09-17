import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: ['~/assets/css/tailwind.css'], // Path to your global CSS file
	vite: {
		plugins: [tailwindcss()],
		// vue: {
		// 	customElement: true,
		// },
		// vueJsx: {
		// 	mergeProps: true,
		// },
		vue: {
			template: {
				transformAssetUrls,
			},
		},
		css: { preprocessorOptions: { scss: {} } },
	},
	build: {
		transpile: ['vuetify'],
	},
	modules: [
		'@nuxt/content',
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/icon',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/test-utils',
		(_options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				// @ts-expect-error
				config.plugins.push(
					vuetify({
						autoImport: true,
						styles: { configFile: 'assets/css/vuetify.scss' },
					})
				);
			});
		},
	],
	typescript: {
		typeCheck: true,
	},
});
