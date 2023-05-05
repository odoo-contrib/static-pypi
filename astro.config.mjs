import tailwind from "@astrojs/tailwind";
import yaml from '@rollup/plugin-yaml';
import { defineConfig } from 'astro/config';

import frontendistahtmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  site: 'https://odoo-contrib.github.io',
  base: '/static-pypi',
  vite: {
    plugins: [yaml()]
  },
  integrations: [tailwind(), frontendistahtmlMinify()]
});
