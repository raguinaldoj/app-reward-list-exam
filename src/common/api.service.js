import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },

  // setHeader() {
  //   Vue.axios.defaults.headers.common[
  //     "Authorization"
  //   ] = `Token ${JwtService.getToken()}`;
  // },

  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  get(resource) {
    return Vue.axios.get(`${resource}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  get(resource, reward = "") {
    return Vue.axios.get(`${resource}/${reward}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

  put(resource, reward) {
    return Vue.axios.put(`${resource}/${reward}`).catch(error => {
      throw new Error(`ApiService ${error}`);
    });
  },

};

export default ApiService;

export const rewardListService = {
  get() {
    return ApiService.get("rewardList");
  },
  get(reward) {
    return ApiService.get("rewardList", reward)
  },
  put(reward){
    return ApiService.put("rewardList", reward)
  }
};
