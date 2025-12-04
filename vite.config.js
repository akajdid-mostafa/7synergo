import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'ui-vendor': ['swiper', 'animate.css'],
        },
        chunkSizeWarningLimit: 600,
      },
    },
    chunkSizeWarningLimit: 600,
  },
  base: '/',
  assetsInclude: ['**/*.ttf', '**/*.woff', '**/*.woff2'],
})
