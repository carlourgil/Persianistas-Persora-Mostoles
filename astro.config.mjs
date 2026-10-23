import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  site: 'https://persianistasmostoles.madrid',
  output: 'static',
  srcDir: './astro',
  publicDir: './client/public',
  outDir: './dist/public',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [react()],
  devToolbar: { enabled: false },
  server: { host: '127.0.0.1', port: 4321 },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./client/src', import.meta.url)),
        '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
      },
    },
  },
});
