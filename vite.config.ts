import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  plugins: [
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      prerender: {
        enabled: true,
      },
      pages: [{ path: "/" }],
      // GitHub Pages serves 404.html for unknown paths; the SPA shell boots the router, which renders notFoundComponent.
      spa: { maskPath: "/?shell", prerender: { outputPath: "/404" } },
    }),
    react(),
  ],
});
