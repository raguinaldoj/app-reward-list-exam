import { rewardListService } from "@/common/api.service";
import { FETCH_REWARD_LIST, FETCH_REWARD_LIST_BY_ID, SET_REWARD_LIST, SET_REWARD, SET_LOADING } from "./action.type";

const state = {
  rewardList: [],
  reward:{},
  isLoading: false,
};

const actions = {
  async [FETCH_REWARD_LIST](context) {
    await context.commit(SET_LOADING);
    const { data } = await rewardListService.get();
    await context.commit(SET_REWARD_LIST, data);
    await context.commit(SET_LOADING);
    return data;
  },
  async [FETCH_REWARD_LIST_BY_ID](context, reward) {
    const { data } = await rewardListService.get(reward);
    context.commit(SET_REWARD, data);
    return data;
  },
};

export const mutations = {
  [SET_REWARD_LIST](state, rewards) {
    state.rewardList = rewards;
  },
  [SET_REWARD](state, reward) {
    state.reward = reward;
  },
  [SET_LOADING](state) {
    state.isLoading = !state.isLoading;
  },
};


const getters = {
  rewardList(state) {
    return state.rewardList;
  },
  reward(state) {
    return state.reward;
  },
};


export default {
  state,
  mutations,
  getters,
  actions,
};
