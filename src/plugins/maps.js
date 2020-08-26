import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    region: "TR",
    language: "tr",
    key: "AIzaSyDwdp3h2zQ-8A7aFHnTIyOZOV3NOehfots",
    libraries: "places",
  },
});