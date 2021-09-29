import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: "",
          name: "RewardList",
          component: () => import("@/components/RewardList")
        },
        {
          path: "reward-detail/:id",
          name: "RewardDetail",
          component: () => import("@/components/RewardDetail")
        }
      ]
    },
  ]
})
