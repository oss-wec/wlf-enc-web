<template lang="html">
  <div>
    <Navigation></Navigation>

    <div class="container">
      <h2>New Animal Data Entry</h2>
      <p class="text-muted">
        This form is used to enter an animal encounter (capture,
        observation, mortality, etc...) into the Wildlife Encounters
        database. Follow the instructions (found here). The help text
        after each input should provide a hint as what data should be
        entered in that field. 
      </p>
      <hr>

      <EncDataEntry></EncDataEntry>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'
import EncDataEntry from './EncDataEntry'

export default {
  name: 'NewAnimal',

  components: {
    Navigation,
    EncDataEntry
  }
}
</script>

<style lang="css" scoped>
</style>
