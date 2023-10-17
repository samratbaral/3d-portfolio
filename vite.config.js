import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/samratbaral/3d-portfolio/",
  plugins: [react()],
});
