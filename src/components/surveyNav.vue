<template>
	<ul class="navigator">
		<li class="nav-tab" v-for='tab in tabs' :key='tab.link'>
			<router-link :to='{name: tab.link}'>{{ tab.msg }}</router-link>
		</li>
	</ul>
</template>

<script>
const log = console.log.bind(console)
export default {
  	name: 'surveyNav',
	mounted: function (){
	  log('nav init')
  },
  data () {
    return {
      tabs: [
		  {
			  msg: '问卷管理',
			  link: 'manage',
		  },
		  {
			  msg: '我的问卷',
			  link: 'profile',
		  }
	  ]
    }
  },
}
</script>

<style <style>
.navigator {
	background: orange;
}
</style>

