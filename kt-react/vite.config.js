import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    // Use the new JSX transform
    jsxImportSource: 'react',
    // Add Babel configuration
    babel: {
      plugins: [
        ['@babel/plugin-transform-react-jsx', { 
          runtime: 'automatic',
          importSource: 'react'
        }]
      ]
    }
  })],
  // Server configuration
  server: {
    port: 3000,
    open: true,
    hmr: {
      overlay: false
    }
  },
  // Build configuration
  build: {
    target: 'es2015',
    minify: 'terser',
    sourcemap: false,
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  // Resolve configuration
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
