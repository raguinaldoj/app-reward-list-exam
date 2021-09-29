<template>
  <div id="app">
    <Header />
      <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/TheHeader.vue";
import Footer from "./components/TheFooter.vue";

export default {
  components: { Header, Footer },
  name: 'App'
}
</script>