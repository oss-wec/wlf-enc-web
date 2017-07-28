<template lang="html">
  <div>
    <Navigation></Navigation>

    <div class="container">
      <h2>Enter A New Project</h2>
      <p class="text-muted">
        Use this form to enter a new project. A project is a collection of animals all captured for
        the same reason. For instance, all mule deer captured in Area 12 in 2016 belong to the
        Area 10 MULD - 2016 project.
      </p>
      <hr>

      <form>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Project Name</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" v-model="name" placeholder="Spring Mtns MULD - 2016">
          </div>
          <div class="col-sm-4">
            <p class="form-text text-muted"><small>enter a name for the new project</small></p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Start Date</label>
          <div class="col-sm-6">
            <input type="date" class="form-control" v-model="startDate">
          </div>
          <div class="col-sm-4">
            <p class="form-text text-muted"><small>what date did the project start</small></p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">End Date</label>
          <div class="col-sm-6">
            <input type="date" class="form-control" v-model="endDate">
          </div>
          <div class="col-sm-4">
            <p class="form-text text-muted"><small>what date did the project end</small></p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Description</label>
          <div class="col-sm-6">
            <textarea class="form-control" rows="4" v-model="description" placeholder="Capture 15 MULD to monitor movements for potential wildlife overpass."></textarea>
          </div>
          <div class="col-sm-4">
            <p class="form-text text-muted"><small>a thourough description of the project</small></p>
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-2 col-form-label">Location</label>
          <div class="col-sm-6">
            <input type="text" class="form-control" v-model="location" placeholder="Spring Mountains">
          </div>
          <div class="col-sm-4">
            <p class="form-text text-muted"><small>specifically, where is this project occuring</small></p>
          </div>
        </div>

      </form>

      <pre><code>{{ $data }}</code></pre>
      <pre><code>{{ structure }}</code></pre>
    </div>
  </div>
</template>

<script>
import Navigation from './Navigation'

export default {
  name: 'NewProject',

  components: {
    Navigation
  },

  data () {
    return {
      name: null,
      startDate: null,
      endDate: null,
      description: null,
      location: null
    }
  },

  computed: {
    structure () {
      return {
        proj_name: this.name,
        proj_desc: this.description,
        proj_loc: this.location,
        proj_start: this.startDate,
        proj_end: this.endDate
      }
    }
  }
}
</script>

<style lang="css">
</style>
