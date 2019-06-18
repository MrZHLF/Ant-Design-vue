import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import form from "./modules/form";

export default new Vuex.Store({
  state: {},
  modules: {
    form
  }
});
