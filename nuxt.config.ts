import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",
  modules: ["@unocss/nuxt", (_options, nuxt) => {
    nuxt.hooks.hook("vite:extendConfig", config => {
      // @ts-expect-error vuetify
      config.plugins.push(vuetify({ autoImport: true }));
    });
  }],
  css: ["@unocss/reset/tailwind.css", "/styles/main.scss"],
  build: {
    transpile: ["vuetify"],
  },
  experimental: {
    inlineSSRStyles: false,
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
