import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["8bd3-2a09-bac5-3c94-16b4-00-243-91.ngrok-free.app"],
  },
  plugins: [react(), tailwindcss()],
});
