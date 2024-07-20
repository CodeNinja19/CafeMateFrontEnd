import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: 'https://cafe-mate-back-end.vercel.app',
        changeOrigin: true,
        secure: false,
        
      },
    },
  },
  // some other configuration
})

