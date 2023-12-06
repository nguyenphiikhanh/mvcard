import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: "#000",
        secondary: "#818383",
        accent: "#2178ff",
      },
      dark: {
        primary: "#000",
        secondary: "rgb(31,30,30)",
        accent: "#ff5415",
      },
    },
  },
});
