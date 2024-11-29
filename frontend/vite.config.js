import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://anime-1-68v6.onrender.com',
        changeOrigin: true,
        secure: false,
      }
    },
  },
})
