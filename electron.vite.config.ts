import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

// crea un funcion para cargar un json



export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve('src/renderer/src'),
        '@redux': resolve('src/renderer/src/components/state/redux.tsx'),
        '@provider': resolve('src/renderer/src/components/state/provider.tsx')
      }
    },
    plugins: [react()]
  }
})