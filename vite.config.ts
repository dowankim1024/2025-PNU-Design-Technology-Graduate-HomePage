import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // 상대 경로로 빌드하도록 설정
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
