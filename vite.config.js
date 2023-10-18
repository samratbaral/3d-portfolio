import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({base: "/3d-portfolio/",plugins: [react()],});

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/3d-portfolio/',
  }

  if (command !== 'serve') {
    config.base = '/react-vite-gh-pages/'
  }

  return config
})
