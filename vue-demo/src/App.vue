<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view name="header"></router-view>
    <router-view class="app-content"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.app-content{
  margin-top: 50px;
}
</style>
