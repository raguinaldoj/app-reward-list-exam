cl<template>
  <nav class="navbar navbar-light">
    <div id="header-container" class="container">
      <router-link class="navbar-brand" :to="{ name: 'RewardList' }">
         <img class="header-logo" :src="'https://uc96905bb567ea7e42454c147e14.previews.dropboxusercontent.com/p/thumb/ABS-rzZ9exCdHc1rteyikN79phQjdEEVqC-USkXeNQ_7a9Onm8Fx3KWZ0WXwtq3x3QgslbmAVyO-_FzvIyxtsIlT__YYPwyfMJZMZbFT3ZXwV6SAxweGo2WK5W9RDbOh7tqfueRJbK6-dME0N5mx82iCnoQaW00LyrNxC3BusYOMQdyNQaKjCbZf12o1anQVuSu2U_kdBRUo19zU2IlPzvc8TaJFjR-aJu89o4SQUXgjgcNxmnuEyHrCxW7q7aWRRIuXEOjmtPVswDs7tSfeCu7vbCwqobB9WopRzNMqlidCWhTatTiSaoniFfanaFU5LgV7Kq7PxgG-wUPQ4MWr9UTvoHeCfhiF6AFTOm3CN81-xA/p.png?fv_content=true&size_mode=5'" />
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