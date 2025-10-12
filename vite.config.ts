import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  css: {
    postcss: {
      plugins: [tailwind, autoprefixer]
    }
  },
})