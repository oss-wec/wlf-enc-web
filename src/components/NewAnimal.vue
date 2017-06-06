<template lang="html">
  <div>
    <Navigation></Navigation>

    <div class="container">
      <h2>New Animal Data Entry</h2>
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
