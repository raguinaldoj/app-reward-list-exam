import Vue from "vue";
import Vuex from "vuex";

import rewardList from "./rewardList.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    rewardList,
  }
});
