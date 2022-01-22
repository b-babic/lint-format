import preactPlugin from "@preact/preset-vite";
import { defineConfig, UserConfig } from "vite";
import windiPlugin from "vite-plugin-windicss";
import visualizer from "rollup-plugin-visualizer";

export default defineConfig(({ command }) => {
  const config: UserConfig = {
    plugins: [preactPlugin(), windiPlugin()],
    resolve: {
      alias: {
        // Object literal property "@" is valid for alias, hence eslint-disable.
        // eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-var-requires
        "@": require("path").resolve(__dirname, "src"),
      },
    },
    server: {
      port: 3000,
    },
  };

  // Overrides based on command
  if (command === "build") {
    config.plugins?.push(
      visualizer({
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
    );
  }

  return config;
});
