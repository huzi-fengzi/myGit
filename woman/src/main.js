// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router/index.js'
import Girl from '@/components/girl'
import Pageend from '@/components/pageend'
import Woman from '@/components/woman'
Vue.config.productionTip = false
Vue.use(Vuex)
var store=new Vuex.Store({
	state:{
		// cname:'Girl',
		// cname2:'Woman',
	},
	mutations:{
			// pageend(state){
			// 	return state.cname='Pageend'
			// },
			// pageend2(state){
			// 	return state.cname2='Pageend2'
			// },
			// girl(state){
			// 	return state.cname='Girl'
			// },
			// woman(state){
			// 	return state.cname2='Woman'
			// },
	}
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  render:c=>c(App)
	// components: {  Girl, Pageend,Girlend },
//template: '<App/>'
})
