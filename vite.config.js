import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      // O código chega por bind mount de um HD externo; sem polling
      // o Vite não vê as edições feitas fora do container.
      usePolling: true,
      interval: 300,
    },
  },
})
