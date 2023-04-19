import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api20230419144326.azurewebsites.net",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
