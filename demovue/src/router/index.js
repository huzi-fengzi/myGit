import Vue from 'vue'
import Router from 'vue-router'
import Theme from '../components/theme'
import Girl from '../components/girl'
import Woman from '../components/woman'
import Girlend from '../components/girlend'
import Womanend from '../components/womanend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Theme',
      component: Theme     
    },
		{
		  path: '/girlend',
		  name: 'Girlend',
		  component: Girlend,
		},
		{
		  path: '/womanend',
		  name: 'Womanend',
		  component: Womanend,
		},
  ]
})
