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
