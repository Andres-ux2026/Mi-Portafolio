import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://andres-ux2026.github.io',
  base: '/Mi-Portafolio',
  outDir: 'docs',
  vite: {
    plugins: [tailwindcss()],
  },
});
