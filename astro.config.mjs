// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // Cámbialo por tu dominio final cuando lo tengas (ej: https://trigra.com)
  site: 'https://trigra-app.web.app',
  integrations: [tailwind()],
  output: 'static',
  vite: {
    build: {
      // No incrustar scripts en el HTML: el CSP de firebase.json solo permite
      // scripts propios desde archivo (script-src 'self').
      assetsInlineLimit: 0,
    },
  },
});
