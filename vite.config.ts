import { defineConfig } from 'vite'
import { tanstackRouter } from '@tanstack/router-plugin'
import { tanstackStart } from '@tanstack/react-start/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    tanstackRouter(),
    tsconfigPaths(),
    tanstackStart(), // Vinxi will auto-detect the provider or use Node.js by default
  ],
})

