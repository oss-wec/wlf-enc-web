import Vue from 'vue'
import Router from 'vue-router'
import SpecimenLog from '@/components/SpecimenLog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SpecimenLog',
      component: SpecimenLog
    }
  ]
})
