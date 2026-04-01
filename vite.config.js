import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    base: process.env.NODE_ENV === 'production' && process.env.GITHUB_ACTIONS 
      ? '/DigiTools/' 
      : '/', 
  }
})