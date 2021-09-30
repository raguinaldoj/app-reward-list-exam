cl<template>
  <nav class="navbar navbar-light">
    <div id="header-container" class="container">
      <router-link class="navbar-brand" :to="{ name: 'RewardList' }">
         <img class="header-logo" src="@/assets/reward-logo.png" />
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