import { defineConfig } from 'vite'

export default defineConfig({
  root: './src', // tell Vite to use the `src/` folder as the root
  build: {
    outDir: '../dist', // this is where `npm run build` will output the files
    emptyOutDir: true
  },
  server: {
    port: 5173,
    strictPort: true
  }
})
