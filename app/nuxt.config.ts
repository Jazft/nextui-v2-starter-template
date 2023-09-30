// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/image',
  ],
  devtools: { enabled: true },
  css: [ '/styles/main.css' ]
})