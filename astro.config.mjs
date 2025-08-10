// https://astro.build/config
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { template } from './src/settings';

export default defineConfig({
    integrations: [react(), tailwind(), sitemap()],
    site: template.website_url,
    base: template.base,
});