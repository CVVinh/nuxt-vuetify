import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		components,
		directives,
		icons: {},
		theme: {},
		// Optional: Configure themes, icons, etc. here
	});

	nuxtApp.vueApp.use(vuetify);
});
