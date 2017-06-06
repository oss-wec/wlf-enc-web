import Vue from 'vue'
import Router from 'vue-router'
import SpecimenLog from '@/components/SpecimenLog'
import NewAnimal from '@/components/NewAnimal'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'SpecimenLog',
      component: SpecimenLog
    }, {
      path: '/encounters/new',
      name: 'NewAnimal',
      component: NewAnimal
    }
  ]
})
