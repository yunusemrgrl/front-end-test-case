// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Front-End Test Case',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Front-End Test Case' },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          crossorigin: true,
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swa",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap",
        },
      ],
    },
  },
  srcDir: 'app/',
  alias: {
    assets: '~/assets',
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/_fonts.scss" as *;
            @use "~/assets/scss/_breakpoint.scss" as *;
            @use "~/assets/scss/_reset.scss" as *;
            @use "~/assets/scss/_colors.scss" as *;`,
        },
      },
    },
  },

})
