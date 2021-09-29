<template>
  <nav class="navbar navbar-light">
    <div id="header-container" class="container">
      <router-link class="navbar-brand" :to="{ name: 'RewardList' }">
         <img class="header-logo" :src="'https://uca6b96776629a91e427a203d203.previews.dropboxusercontent.com/p/thumb/ABR09AJVXDjXb-9Llh-Gjcob8fGXEy_FmPo3vL8B_S0fae5t-23G6tELULjR-LGwIpd69n1xZcMOr5FE8Q30JnrrJaOWkD1R265WRyi-NMIaRx7_FfiXRsRbD42BV73gFEZzEu1iEI0h1OncGnO9VKFiX1WxtvlDmPm2p9dkShj8w_OBf6fxRPIcM0VlCMtQHfrRAkvggh-J-ed-MWkgbs26vdoGPpQQl2I0xJdPj5SF6aw2jI3SykrtK15JM9scIL49-nChMwQI6u89mmP2pb6ZG4NyIHfaW5jw3mEXliXfj1KXgJ_Rf5s-do9FcclogA7yX2VRIiI_gY5IMD8dUAVnc-Q1uyjkv1QCeGchnlY8KQ/p.png?fv_content=true&size_mode=5'" />
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          JOHN SMITH
        </li>
      </ul>
      <div id="header-title" class="container">
        <h2 class="text-center">Rewards</h2>
    </div>
   </div>
  </nav>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>

<style scoped>
nav, #header-container {
  padding: 0 0 0 0 !important;
}
h2 {
  color: whitesmoke;
  font-weight: bold;
  margin-left: 45%;
}
#header-title {
  background-color: #008bcc;
  height: 200px;
}
.header-logo {
  height: 50px;
}
</style>