<template lang="html">
  <div>
    <Navigation></Navigation>

    <div class="container">
      <AnimalsFilter></AnimalsFilter>
    </div>

    <div class="container" id="animals">
      <AnimalCards v-for="animal in animalList" v-bind:animal="animal" :key="animal.id"></AnimalCards>
    </div>

    <hr>

    <PaginationContainer></PaginationContainer>
  </div>
</template>

<script>
import Navigation from './Navigation'
import AnimalCards from './AnimalCards'
import AnimalsFilter from './AnimalsFilter'
import PaginationContainer from './PaginationContainer'
import { mapGetters } from 'vuex'

export default {
  name: 'SpecimenLog',

  components: {
    Navigation,
    AnimalCards,
    AnimalsFilter,
    PaginationContainer
  },

  computed: {
    ...mapGetters({
      animalList: 'displayData'
    })
  },

  mounted: function () {
    this.$store.dispatch('getAnimals')
  }
}
</script>

<style lang="css">
</style>
