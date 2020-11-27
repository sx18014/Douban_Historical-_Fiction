import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouer from 'vue-router'
import column from 'components/column/column'
import funnel from 'components/funnel/funnel'
import heat from 'components/heat/heat'
import point from 'components/point/point'
import relation from 'components/relation/relation'
import lineyear from 'components/lineyear/lineyear'
import dashboard from 'components/dashboard/dashboard'
import multipleColumn from 'components/multipleColumn/multipleColumn'
import {DatePicker} from 'element-ui'

Vue.component(DatePicker.name, DatePicker)

Vue.use(VueRouer)
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    color: ['#EE82EE', '#40E0D0', '#7FFFAA', '#FF4500', '#F08080']
  }
});
const router = new VueRouer({
  routes: [{
    path: '/column',
    component: column
  }, {
    path: '/funnel',
    component: funnel
  }, {
    path: '/heat',
    component: heat
  }, {
    path: '/point',
    component: point
  }, {
    path: '/dashboard',
    component: dashboard
  }, {
    path: '/multipleColumn',
    component: multipleColumn
  }, {
    path: '/lineyear',
    component: lineyear
  },{
    path: '/relation',
    component: relation
  }],
  linkActiveClass: 'active'
})
new Vue({
  router,
  store,
  template: '<App>',
  components: {
    App
  },
  data: {
    eventHub: new Vue(),
    charts: []
  }
}).$mount('#app')

router.push('dashboard')
