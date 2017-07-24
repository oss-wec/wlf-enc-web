<template lang="html">
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <div class="container">

    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">wlf</a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to="{ name: 'SpecimenLog' }" class="nav-link">Animal Log</router-link>
        </li>
      </ul>

      <ul class="navbar-nav">
        <!-- <li class="nav-item" v-popover:notify>
          <a class="nav-link" href="#"><i class="fa fa-fw fa-bell"></i></a>
          <popover name="notify">Hello</popover>
        </li> -->

        <li class="nav-item" v-popover:plus>
          <a class="nav-link" href="#"><i class="fa fa-fw fa-plus"></i></a>
          <popover name="plus">
            <router-link :to="{ name: 'NewAnimal' }" class="dropdown-item">Encounter</router-link>
          </popover>
        </li>

        <!-- <li class="nav-item" v-popover:user>
          <a class="nav-link" href="#"><i class="fa fa-fw fa-user-circle"></i></a>
          <popover name="user">
            <li class="dropdown-item">User stuff</li>
          </popover>
        </li> -->
      </ul>
    </div>

    </div>
  </nav>
</template>

<script>
import { navbar } from 'vue-strap'

export default {
  components: {
    navbar
  },

  name: 'Navigation'
}
</script>

<style lang="css" scoped>
nav {
  margin-bottom: 25px;
}

</style>
