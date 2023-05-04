import yaml from '@rollup/plugin-yaml';
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import frontendistahtmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml()]
  },
  integrations: [tailwind(), frontendistahtmlMinify()]
});