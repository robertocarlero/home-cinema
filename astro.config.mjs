import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import robotsTxt from 'astro-robots-txt';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://homecinema.solutions',
	integrations: [react(), sitemap(), robotsTxt()],
	vite: {
		plugins: [tailwindcss()],
	},
	output: 'server',
	adapter: netlify({
		edgeMiddleware: true,
	}),
});
