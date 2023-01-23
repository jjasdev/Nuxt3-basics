export default defineNuxtConfig({
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      title: "Nuxt Dojo",
      meta: [{ name: "description", content: "Everything about Nuxt 3" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
