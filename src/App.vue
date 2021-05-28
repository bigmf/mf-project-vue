<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.hello-message {
  width: 100%;
  height: 300px;
  font-size: 30px;
  color: rgb(52, 192, 17);
  text-align: center;
  padding: 30px;
}
</style>
