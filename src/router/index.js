import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import manage from '@/views/manage/manage'
import profile from '@/views/profile/profile'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/manage',
			name: 'manage',
			component: manage
		},
		{
			path: '/profile',
			name: 'profile',
			component: profile
		},
	]
})
