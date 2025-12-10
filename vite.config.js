import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  assetsInclude: ['**/*.svg', '**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.webp'], // Include multiple image formats
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets')
    }
  },
  server: {
    fs: {
      // Allow serving files from the project root
      strict: false
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'] // Pre-bundle React dependencies
  }
})