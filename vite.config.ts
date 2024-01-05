import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@api': fileURLToPath(new URL('./api', import.meta.url)),
    },
  },
})
