import Vue from "vue";
import Vuetify from "vuetify/lib";

// import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#E1306C",
      },
      dark: {
        primary: "#E1306C",
      },
    },
  },
});

export default vuetify;
