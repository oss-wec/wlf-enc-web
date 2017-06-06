<template lang="html">
  <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
    <div class="container">

    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">WOW</a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Animals</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
      </ul>

      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/encounters/new"><i class="fa fa-fw fa-plus"></i></router-link>
          <!-- <a class="nav-link" href="#"><i class="fa fa-fw fa-bell"></i></a> -->
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#"><i class="fa fa-fw fa-plus"></i></a>
          <div class="dropdown-menu">
            <a class="dropdown-item">New Encounter</a>
            <a class="dropdown-item">New Project</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="fa fa-fw fa-user-circle"></i></a>
        </li>
      </ul>
    </div>

    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style lang="css" scoped>
nav {
  margin-bottom: 25px;
}
</style>
