// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://garutako.com',
    vite: {
        plugins: [tailwindcss()],
        build: {
            sourcemap: true,
        },
    },
    integrations: [sitemap()],
    i18n: {
        locales: ['en', 'fr'],
        defaultLocale: 'en',
        routing: {
            prefixDefaultLocale: true,
            redirectToDefaultLocale: true,
        },
    },
    prefetch: {
        defaultStrategy: 'hover',
        prefetchAll: true,
    },
});
