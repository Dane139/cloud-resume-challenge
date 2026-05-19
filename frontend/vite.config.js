import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import postcssNested from 'postcss-nested'
import postcssCustomMedia from 'postcss-custom-media'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "data": path.resolve(__dirname, "src/data"),
      "components": path.resolve(__dirname, "src/components"),
      "pages": path.resolve(__dirname, "src/pages"),
      "css": path.resolve(__dirname, "src/assets/stylesheets"),
      "images": path.resolve(__dirname, "src/assets/images")
    }
  },
  css: {
    postcss: {
      plugins: [
        postcssCustomMedia(),
        postcssNested()
      ],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7071',
        changeOrigin: true
      }
    }
  }
})