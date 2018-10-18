<template>
  <div id="app">
	<surveyNav></surveyNav>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-view name="a"></router-view>
	<main>
		<blockquote>
			“The only way to get rid of a temptation[…]”
			<footer>—
				<cite>
					Oscar Wilde,
					The Picture of Dorian Gray
				</cite>
			</footer>
		</blockquote>
	</main>
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
main {
	// background: hsla(0,0%,100%, 0.3);
	position: relative;
	    position: absolute;
    top: 100px;
	left: 100px;
	overflow: hidden;
}


main::before {
    content: '';
	position: absolute;

    top: 0; right: 0; bottom: 0; left: 0;
	background: rgba(255,0,0,.5); /* for debugging */
	filter: blur(20px);
	opacity: 0.5;
	z-index: -1;
	// margin: -30px;

}
</style>
