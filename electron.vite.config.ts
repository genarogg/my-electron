import { resolve } from "path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";

// crea un funcion para cargar un json

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],

    resolve: {
      alias: {
        "@dbManager": resolve("src/main/config/dbManager.ts"),
        "@model": resolve("src/main/models/index.ts"),
      },
    },
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: {
        "@renderer": resolve(__dirname, "src/renderer/src"),
        "@redux": resolve(
          __dirname,
          "src/renderer/src/components/state/redux.tsx"
        ),
        "@provider": resolve(
          __dirname,
          "src/renderer/src/components/state/provider.tsx"
        ),
        "@form": resolve(
          __dirname,
          "src/renderer/src/components/nano/form/index.tsx"
        ),
        "@btn": resolve(
          __dirname,
          "src/renderer/src/components/nano/btn/index.tsx"
        ),
        "@nano": resolve(
          __dirname,
          "src/renderer/src/components/nano/index.tsx"
        ),
        "@electron": resolve(
          __dirname,
          "src/renderer/src/components/electron/index.tsx"
        ),
        "@formSkeleton": resolve(
          "src/renderer/src/components/nano/skeleton/formSkeleton.tsx"
        ),

        "@components": resolve(__dirname, "src/renderer/src/components"),
      },
    },

    plugins: [react()],
  },
});
