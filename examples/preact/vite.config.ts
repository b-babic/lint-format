import preactPlugin from "@preact/preset-vite";
import { defineConfig } from "vite";
import compressPlugin from "vite-plugin-compress";
import windiPlugin from "vite-plugin-windicss";

export default defineConfig({
  plugins: [preactPlugin(), windiPlugin(), compressPlugin({ verbose: true })],
  resolve: {
    alias: {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      "@": require("path").resolve(__dirname, "src"),
    },
  },
});
