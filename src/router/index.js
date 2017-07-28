import Vue from 'vue'
import Router from 'vue-router'
import SpecimenLog from '@/components/SpecimenLog'
import NewAnimal from '@/components/NewAnimal'
import NewProject from '@/components/NewProject'

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
    }, {
      path: '/projects/new',
      name: 'NewProject',
      component: NewProject
    }
  ]
})
