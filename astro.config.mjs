// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Cámbialo por tu dominio final cuando lo tengas (ej: https://trigra.com)
  site: 'https://trigra-app.web.app',
  integrations: [tailwind()],
  output: 'static',
});
