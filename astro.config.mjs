// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://swamppay.io',
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
  },
});
