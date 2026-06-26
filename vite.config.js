import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue2';
import path from 'path';
import { copyFileSync } from 'fs';

export default defineConfig({
  // GitHub Pages 子路径：https://bring-knife-to-work.github.io/suhe_iot/
  base: '/suhe_iot/',
  plugins: [
    vue(),
    {
      name: 'gh-pages-spa-fallback',
      closeBundle() {
        const index = path.resolve(__dirname, 'dist/index.html');
        copyFileSync(index, path.resolve(__dirname, 'dist/404.html'));
      },
    },
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 5173,
    open: false,
  },
});
