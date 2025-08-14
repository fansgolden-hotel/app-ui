import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "sass:color";
          @use "@/styles/base/base.scss" as *;
          @use "@/styles/base/reset.scss" as *;
          @use "@/styles/abstracts/variables.scss" as *;
          @use "@/styles/abstracts/themes.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  base: "/app-ui/"
})
