import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@models': path.resolve(__dirname, 'src/js/models'),
      '@services': path.resolve(__dirname, 'src/js/services'),
      '@collections': path.resolve(__dirname, 'src/js/collections'),
      '@utils': path.resolve(__dirname, 'src/js/utils'),
      '@api': path.resolve(__dirname, 'src/js/api'),
      '@pages': path.resolve(__dirname, 'src/views/pages'),
      '@components': path.resolve(__dirname, 'src/views/components'),
      '@pucoui': path.resolve(__dirname, 'src/views/vendor/pucoui'),
      '@routes': path.resolve(__dirname, 'src/routes'),
    },
  },
})
