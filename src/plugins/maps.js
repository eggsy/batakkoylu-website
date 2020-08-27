import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    region: "TR",
    language: "tr",
    key: process.env.GOOGLE_API_KEY || process.env.$GOOGLE_API_KEY,
    libraries: "places",
  },
});