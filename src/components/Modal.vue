<template>
    <div>
        <b-button  v-b-modal.modal-confirmation class="btn btn-warning rounded-pill">
            Redeem >
        </b-button>
        <b-modal hide-footer  @hidden="resetModal" id="modal-confirmation" centered title="Are you sure?">
            <template #modal-title>
                <div v-if="!isShowConfirmedModal" class="container text-center ">
                    <h3 >Are you sure?</h3>
                </div>
                 <div v-else class="container text-center">
                    <h3 >Congratulations!</h3>
                </div>
            </template>
            <div v-if="!isShowConfirmedModal" class="container">
                 <div id="modal-cotainer-img" class="container">
                 <b-img center thumbnail fluid :src="reward.imageUrl" rounded="circle" alt="..."></b-img>
                </div>
                <div id="modal-cotainer-buttons" class="container">
                    <div class="row">
                        <div class="col align-self-center text-center">
                                <b-button  @click="showConfirmedModal" v-b-modal.modal-confirmed class="btn btn-warning rounded-pill btn-sm">
                                    yes
                                </b-button>
                        </div>
                        <div class="col align-self-center text-center">
                                <b-button @click="$bvModal.hide('modal-confirmation')" class="btn btn-secondary rounded-pill btn-sm">
                                    cancel
                                </b-button>
                        </div>
                    </div>
                </div>
            </div>
             <div v-else class="container">
                 <div id="modal-cotainer-img" class="container text-center">
                      <h5>Win a {{reward.name}}</h5>
                </div>
                <div id="modal-cotainer-buttons" class="container text-center">
                       <router-link
                            :to="{ name: 'RewardList'}"
                            class="nav-link"
                            active-class="active"
                        >
                       <b-button class="btn btn-warning rounded-pill btn-sm ">
                             More Prizes
                        </b-button>
                       </router-link>
                </div>
            </div>
        </b-modal>
</div>
</template>
<script>
import { mapGetters } from "vuex";
import { UPDATE_REWARD } from '../store/action.type';

export default {
 name: 'Modal',
 data() {
    return {
      isShowConfirmedModal: false,
    };
  },
  methods:{
    showConfirmedModal() {
      console.log('asdsadas1: ', this.reward._id);     
      this.isShowConfirmedModal = !this.isShowConfirmedModal;
      this.$store.dispatch(UPDATE_REWARD, this.reward._id);
    },
    resetModal() {
        this.isShowConfirmedModal = false;
    }
  },
  computed: {
    ...mapGetters(["reward"])
  },
}
</script>

<style scoped>

#modal-cotainer-img{
    padding: 50px;
}
#modal-cotainer-buttons{
    padding: 20px 0 20px 0;
}
img{
    height: 200px;
    width: 200px;
}
h3 {
    margin-left: 125px;
}
button {
  padding: 15px;
  width: 200px;
}
</style>
