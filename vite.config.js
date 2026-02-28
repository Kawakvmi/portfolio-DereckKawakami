import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// IMPORTANTE:
// Troque "portfolio-dereck-kawakami" pelo nome EXATO do seu repo no GitHub.
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-dereck-kawakami/",
});