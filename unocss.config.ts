import transformerAttributifyJsxBabel from "@unocss/transformer-attributify-jsx-babel";
import {
  defineConfig,
  presetAttributify,
  presetTagify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetTypography(),
    presetTagify(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: ["Roboto"],
      },
    }),
    presetAttributify(),
  ],
  transformers: [transformerDirectives(), transformerAttributifyJsxBabel()],
});
