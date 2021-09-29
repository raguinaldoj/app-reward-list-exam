<template>
  <div class="home-page">
    <div id="outer-container" class="container">
      <div id="inner-container" class="container">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
#outer-container {
  padding: 10px;
  background-color: rgb(224, 224, 224);
}
</style>
