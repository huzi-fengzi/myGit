import Vue from 'vue'
import Router from 'vue-router'
import Theme from '../components/theme'
import Girl from '../components/girl'
import Woman from '../components/woman'
import Pageend from '@/components/pageend'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Theme',
      component: Theme
    },
		{
		  path: '/girl',
		  name: 'Girl',
		  component: Girl,
		},
		{
		  path: '/woman',
		  name: 'Woman',
		  component: Woman,
		},
    {
		  path: '/pageend',
		  name: 'Pageend',
		  component: Pageend,
		}
  ]
})
