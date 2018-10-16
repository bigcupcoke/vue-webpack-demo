<template>
  <div id="app">
	<surveyNav></surveyNav>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-view name="a"></router-view>
  </div>
</template>

<script>
import surveyNav from '@/components/surveyNav'
export default {
  name: 'App',
  components: {
	  surveyNav,
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
