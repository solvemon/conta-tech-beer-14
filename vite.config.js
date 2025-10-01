import { defineConfig } from 'vite'

export default defineConfig({
  base: '/conta-tech-beer-14/',
  server: {
    open: true,
    port: 3000
  },
  build: {
    assetsDir: 'assets'
  }
})
