<template v-show="list">
  <div class="container"> 
    <div id="header-container" class="container">
      <p class="text-center">Here is the full list of prizes that you can win.</p>
    </div>
    <div class="row">
      <div class="col align-self-center" v-for="(value, key) in rewardList" :key="key" >
          <div id="reward-container" class="text-center rounded">
            <img class="list-image rounded" :src="value.imageUrl" alt="...">
            <div id="container-reward-name" class="container-fluid"> 
              Win a {{value.name}}
            </div>
             <div id="container-reward-button"  class="container-fluid "> 
                 <router-link
                  :to="{ name: 'RewardDetail', params: { id: value._id } }"
                  class="nav-link"
                  active-class="active"
                 >
                   <button type="button" class="btn btn-warning rounded-pill">Redeem ></button>
                </router-link>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { FETCH_REWARD_LIST } from "../store/action.type"

export default {
  name: "RewardList",
  mounted() {
    this.$store.dispatch(FETCH_REWARD_LIST);
  },
  computed: {
    ...mapGetters(["rewardList"])
  },
};
</script>

<style scoped>
.col {
  padding: 10px;
}
#reward-container {
  background-color: whitesmoke;
  width: 320px;
  margin: 0 0 0 8px;
}
.list-image {
  width: 100%;
}
#container-reward-name, #container-reward-button{
  padding: 30px;
  font-size: larger;
  font-weight: bold;
}
button {
  padding: 10px;
  width: 150px;
}
#header-container {
  font-size: 24px;
  padding: 60px;
  background-color: rgb(224, 224, 224);
}
</style>
