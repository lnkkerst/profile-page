// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@unocss/nuxt', '@invictus.codes/nuxt-vuetify'],
  css: ['@unocss/reset/tailwind.css', '/styles/main.scss'],
  vuetify: {
    moduleOptions: {
      treeshaking: true,
      useIconCDN: false,
      autoImport: true
    },
    vuetifyOptions: {}
  },
  experimental: {
    inlineSSRStyles: false
  }
});
