import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      external: '@mediapipe/face_mesh',
    },
  },
  plugins: [react(), tailwindcss()],
  publicDir: './public/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
