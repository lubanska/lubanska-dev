import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  theme: {
    colors: {
      // Dark shades
      ink: "#0e0e0f",
      midnight: "#2b2b2e",
      slate: "#3a3a3d",

      // Bright shades
      smoke: "#f1f1f0",
      ivory: "#e2e2e5",
      pearl: "#d1d1d4",
    },
  },
  shortcuts: {
    "shadow-thin":
      "text-shadow-[-0.5px_-0.5px_0_#f1f1f0,0.5px_-0.5px_0_#f1f1f0,-0.5px_0.5px_0_#f1f1f0,0.5px_0.5px_0_#f1f1f0]",
    "shadow-thick":
      "text-shadow-[-1px_-1px_0_#f1f1f0,1px_-1px_0_#f1f1f0,-1px_1px_0_#f1f1f0,1px_1px_0_#f1f1f0]",
  },
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: "google",
      fonts: {
        title: "Oswald",
        content: ["Source Sans Pro", "Source Sans Pro:200,300,500"],
      },
    }),
  ],
});
