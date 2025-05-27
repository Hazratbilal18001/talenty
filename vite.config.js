import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // or use your local IP like '192.168.1.100'
  },
  plugins: [react()],
});
