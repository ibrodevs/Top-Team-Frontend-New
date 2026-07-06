import { defineConfig } from "vite";

export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://top-team-play.base44.app",
        changeOrigin: true,
        secure: true
      },
      "/ws-user-apps": {
        target: "wss://top-team-play.base44.app",
        changeOrigin: true,
        ws: true,
        secure: true
      }
    }
  }
});
