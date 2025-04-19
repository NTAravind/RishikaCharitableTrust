import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
  server: {
    // Enable hot reloading
    hmr: true,
    // Optional: customize port
    host: '0.0.0.0',
    port: 3000,
  }
  
},


)
