import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxt/ui", "@pinia/nuxt", "@nuxtjs/google-fonts"],
  vite: { plugins: [tailwindcss()] },
  css: ["./app/assets/css/main.css"],

  googleFonts: {
    families: {
      Mulish: [300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    download: true,
    inject: true,
  },
});
