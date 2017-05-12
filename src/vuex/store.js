import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  // animalList: [
  //   {
  //     id: 1,
  //     species: 'cbhs',
  //     ndow_id: 4200,
  //     date: '2017-01-01',
  //     hunt_unit: 12,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }, {
  //     id: 2,
  //     species: 'rbhs',
  //     ndow_id: 4201,
  //     date: '2017-01-01',
  //     hunt_unit: 12,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }, {
  //     id: 3,
  //     species: 'dbhs',
  //     ndow_id: 4201,
  //     date: '2017-01-01',
  //     hunt_unit: 12,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }, {
  //     id: 4,
  //     species: 'mtgt',
  //     ndow_id: 4201,
  //     date: '2017-01-01',
  //     hunt_unit: 12,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }, {
  //     id: 5,
  //     species: 'muld',
  //     ndow_id: 4201,
  //     date: '2017-01-01',
  //     hunt_unit: 13,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }, {
  //     id: 6,
  //     species: 'rmel',
  //     ndow_id: 4201,
  //     date: '2017-01-01',
  //     hunt_unit: 13,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }, {
  //     id: 7,
  //     species: 'prgn',
  //     ndow_id: 4201,
  //     date: '2017-01-01',
  //     hunt_unit: 13,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }, {
  //     id: 8,
  //     species: 'blbr',
  //     ndow_id: 4201,
  //     date: '2017-01-01',
  //     hunt_unit: 14,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }, {
  //     id: 9,
  //     species: 'mtli',
  //     ndow_id: 4201,
  //     date: '2017-01-01',
  //     hunt_unit: 14,
  //     status: 'alive',
  //     sex: 'male',
  //     age: 'adult'
  //   }
  // ]
  animalList: [],
  filterSpecies: ''
}

const getters = {
  area13: state => {
    return state.animalList.filter(animal => animal.species === 'muld')
  },
  filterBySpecies: state => {
    if (state.filterSpecies === '') {
      return state.animalList
    }
    return state.animalList.filter(animal => animal.species === state.filterSpecies)
  }
}

const actions = {
  getAnimals ({ commit }) {
    axios.get('http://localhost:1313/elements')
    .then(response => commit('setAnimals', { animals: response.data.data }))
    .catch(err => console.log(err))
  },
  setFilter ({ commit }, payload) {
    commit('setFilterSpecies', { species: payload.species })
  }
}

const mutations = {
  setAnimals (state, { animals }) {
    state.animalList = animals
  },
  setFilterSpecies (state, payload) {
    state.filterSpecies = payload.species
  }
}

export default new Vuex.Store({ state, getters, actions, mutations })
