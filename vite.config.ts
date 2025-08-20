import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Replace 'avocado-tree' with your repo name
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
    },
  },
  base: '/avocado-tree/', // ✅ important for GitHub Pages
})
