import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vite-portfolio-ghp/', // ← ここを修正！
  plugins: [react()],
})
