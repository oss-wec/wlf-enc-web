<template>
  <div id="app">
    <div class="container">
      <AnimalsFilter></AnimalsFilter>
    </div>
    <div class="container" id="animals">
      <AnimalCards v-for="animal in animalList"
                   v-bind:animal="animal"
                   :key="animal.id"
      ></AnimalCards>
    </div>
    <hr>
    <PaginationContainer></PaginationContainer>
  </div>
</template>

<script>
import AnimalCards from './components/AnimalCards'
import AnimalsFilter from './components/AnimalsFilter'
import PaginationContainer from './components/PaginationContainer'
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
    AnimalCards,
    AnimalsFilter,
    PaginationContainer
  },
  // computed: mapState([ 'animalList' ]),
  computed: {
    ...mapGetters({
      animalList: 'displayData'
    })
  },
  mounted: function () {
    this.$store.dispatch('getAnimals')
  }
  // data () {
  //   return {
  //     animals: [
  //       {
  //         id: 1,
  //         species: 'cbhs',
  //         ndow_id: 4200,
  //         date: '2017-01-01',
  //         hunt_unit: 12,
  //         status: 'alive',
  //         sex: 'male',
  //         age: 'adult'
  //       }, {
  //         id: 2,
  //         species: 'dbhs',
  //         ndow_id: 4201,
  //         date: '2017-01-01',
  //         hunt_unit: 12,
  //         status: 'alive',
  //         sex: 'male',
  //         age: 'adult'
  //       }
  //     ],
  //     apiRes: {}
  //   }
  // },
  // created () {
  //   axios.get('http://localhost:1313/elements')
  //   .then(data => { this.animals = data.data.data })
  //   .catch(err => console.log(err))
  // }
}
</script>

<style>
</style>
