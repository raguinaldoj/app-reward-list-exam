<template v-show="list">
  <div id="main-detail-container" class="container"> 
    <div class="row">
        <div class="col align-self-center">
            <img class="list-image rounded" :src="reward.imageUrl" alt="...">
        </div>
        <div class="col align-self-start">
          <div id="detail-container" class="container rounded">
             <p id="detail-container-name">Win a {{reward.name}}</p>
             <hr/>
             <button type="button" class="btn btn-warning rounded-pill">Redeem ></button>
             <hr/>
             <p>{{reward.quantity}} left in the stock</p>
          </div>
        </div>
    </div>
    <hr/>
     <div class="row">
        <div class="col-md-auto align-self-start">
           <p id="detail-container-description">Description</p>
        </div>
        <div class="col align-self-center">
            <p id="detail-container-description-value" class="text-justify">{{reward.description}}</p>
        </div>
    </div>
  </div>
</template>
<script>
import { FETCH_REWARD_LIST_BY_ID } from '../store/action.type';
import { mapGetters } from "vuex";
export default {
  name: "RewardDetail",
  mounted() {
      this.$store.dispatch(FETCH_REWARD_LIST_BY_ID, this.$route.params.id);
  },
  computed: {
    ...mapGetters(["reward"])
  },
};
</script>

<style scoped>
.row{
  padding: 10px;
}
#main-detail-container{
  padding: 10px;
}
p{
  margin: 0 0 0 0 !important;
}
#detail-container-description-value {
  font-size: 25px;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(175, 175, 175);
}
#detail-container-name, #detail-container-description {
    font-weight: bold;
    padding: 20px 20px 20px 0;
    font-size: 30px;
}
.list-image {
  width: 100%;
}
#detail-container {
  width: 500px;
  height: 250px;
  background-color: whitesmoke;
}
button {
  padding: 15px;
  width: 200px;
}

</style>
