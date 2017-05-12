import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  animalList: [],

  filterSpecies: '',

  pagination: {
    itemsPerPage: 10, // hard coded, but this will be selectable
    currentPage: 1, // will always start at 1
    visiblePages: 5 // will default to 5 for now...
  }
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
  },

  displayData: (state, getters) => {
    const cp = state.pagination.currentPage
    const ipp = state.pagination.itemsPerPage

    return getters.filterBySpecies.slice(cp * ipp - ipp, cp * ipp)
  },

  numRecords: (state, getters) => {
    return getters.displayData.length
  },

  pgTotalItems: (state, getters) => {
    return getters.filterBySpecies.length
  },

  pgTotalPages: (state, getters) => {
    return Math.ceil(getters.pgTotalItems / state.pagination.itemsPerPage)
  },

  recordsRange: (state, getters) => {
    const cp = state.pagination.currentPage
    const ipp = state.pagination.itemsPerPage

    return {
      begin: (cp * ipp - ipp) + 1,
      end: cp * ipp > getters.pgTotalItems ? getters.pgTotalItems : cp * ipp
    }
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
  },

  changePage ({ commit }, payload) {
    commit('setCurrentPage', { page: payload.page })
  },

  changeItemsPerPage ({ commit }, payload) {
    commit('setItemsPerPage', { items: payload.items })
  }
}

const mutations = {
  setAnimals (state, { animals }) {
    state.animalList = animals
  },

  setFilterSpecies (state, payload) {
    state.filterSpecies = payload.species
  },

  setCurrentPage (state, payload) {
    state.pagination.currentPage = payload.page
  },

  setItemsPerPage (state, payload) {
    state.pagination.itemsPerPage = payload.items
  }
}

export default new Vuex.Store({ state, getters, actions, mutations })
