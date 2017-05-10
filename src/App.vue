<template>
  <div id="app">
    <div class="container" id="animals">
      <AnimalCards v-for="animal in animals"
                   v-bind:animal="animal"
                   :key="animal.id"
      ></AnimalCards>
    </div>
  </div>
</template>

<script>
import AnimalCards from './components/AnimalCards'
import AnimalsFilter from './components/AnimalsFilter'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    AnimalCards,
    AnimalsFilter
  },
  data () {
    return {
      animals: [
        {
          id: 1,
          species: 'cbhs',
          ndow_id: 4200,
          date: '2017-01-01',
          hunt_unit: 12,
          status: 'alive',
          sex: 'male',
          age: 'adult'
        }, {
          id: 2,
          species: 'dbhs',
          ndow_id: 4201,
          date: '2017-01-01',
          hunt_unit: 12,
          status: 'alive',
          sex: 'male',
          age: 'adult'
        }
      ],
      apiRes: {}
    }
  },
  created () {
    axios.get('http://localhost:1313/elements')
    .then(data => { this.animals = data.data.data })
    .catch(err => console.log(err))
  }
}
</script>

<style>
</style>
