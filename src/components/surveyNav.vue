<template>
	<el-menu :default-active="activeIndex" class="navigator" mode="horizontal"
		background-color="orange"
	@select="handleSelect">
		<el-menu-item v-for='(tab, index) in tabs' :key='tab.link' :index='index.toString()'>
			<router-link :to='{ name: tab.link }'>{{ tab.msg}} {{ [ index ]}}</router-link>
		</el-menu-item>
	</el-menu>
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
	  ],
	  activeIndex: '0',
    }
  },
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>

<style>
.navigator {
	/* background: orange; */
	position: relative;
}
.navigator::before {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    z-index: -1;
    -webkit-filter: blur(20px);
    filter: blur(20px);
    background: rgba(255,0,0,.5);
}
</style>

