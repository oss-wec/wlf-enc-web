<template lang="html">
  <div class="container">

    <form>
      <div class="form-group row">
        <label class="col-sm-2 col-form-label">NDOW ID</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.animal_id">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>enter the NDOW ID for this animal</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Species</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.species_id">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>select a species from the dropdown</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Sex</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.sex">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>select a sex from the dropdown</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Status</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.Encounters.status">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>select the life status of the animal</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Age</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.Encounters.age">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>select a categorical age from the dropdown</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Date</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.Encounters.event_date">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>select the date of the encounter</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Encounter Method</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.Encounters.enc_method">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>select the method used to observe the animal</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Encounter Reason</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.Encounters.enc_reason">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>select the reason for the encounter</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Easting</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.Encounters.x">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>the NAD83 Easting of the encounter</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Northing</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.Encounters.y">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>the NAD83 Northing of the encounter</small></p>
        </div>
      </div>

      <div class="form-group row">
        <label class="col-sm-2 col-form-label">Comments</label>
        <div class="col-sm-6">
          <input type="text" class="form-control" v-model="animal.Encounters.comments">
        </div>
        <div class="col-sm-4">
          <p class="form-text text-muted"><small>any miscellaneous notes pertaining to the encounter</small></p>
        </div>
      </div>

      <!-- start marks data entry module -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showMarks')">
          Marks Module
        </h4>
        <div class="card-block" v-if="showMarks">

          <div class="p-card" v-for="(mark, index) in animal.Marks" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
            <div class="p-card-header">
              <button type="button" class="close" @click="deleteMark(index)">
                <span>&times;</span>
              </button>

              <h5>Mark {{ index + 1 }}</h5>
            </div>
            <div class="p-card-block">
              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Mark Type</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.type">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what type of mark was used</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Mark ID</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.id">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what is the ID of the mark</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Mark Color</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.color">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>what color is the mark</small></p>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-sm-2 col-form-label">Mark Location</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" v-model="mark.location">
                </div>
                <div class="col-sm-4">
                  <p class="form-text text-muted"><small>where was the mark applied</small></p>
                </div>
              </div>
            </div>
          </div>

          <button type="button" name="button" class="btn btn-primary" @click="addMark">Add Mark</button>
        </div>
      </div>
      <!-- end marks data entry module -->

      <!-- start devices data entry module -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showDevices')">
          Devices Module
        </h4>
        <div class="card-block" v-if="showDevices">
          Devices stuff
        </div>
      </div>
      <!-- end devices data entry module -->

      <!-- biometrics -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showBiometrics')">
          Biometrics Module
        </h4>
        <div class="card-block" v-if="showBiometrics">
          Biometrics
        </div>
      </div>
      <!-- end biometrics -->

      <!-- vitals -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showVitals')">
          Vitals Module
        </h4>
        <div class="card-block" v-if="showVitals">
          vitals
        </div>
      </div>
      <!-- end vitals -->

      <!-- samples -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showSamples')">
          Samples Module
        </h4>
        <div class="card-block" v-if="showSamples">
          samples
        </div>
      </div>
      <!-- end samples -->

      <!-- medications -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showMeds')">
          Medications Module
        </h4>
        <div class="card-block" v-if="showMeds">
          medications
        </div>
      </div>
      <!-- end medications -->

      <!-- injury -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showInjuries')">
          Injuries Module
        </h4>
        <div class="card-block" v-if="showInjuries">
          injuries
        </div>
      </div>
      <!-- end injury -->

      <!-- mortality -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showMortalities')">
          Mortalities Module
        </h4>
        <div class="card-block" v-if="showMortalities">
          mortalities
        </div>
      </div>
      <!-- end mortality -->

      <!-- necropsy -->
      <div class="card">
        <h4 class="card-header" @click="toggleVisibility('showNecropsy')">
          Necropsy Module
        </h4>
        <div class="card-block" v-if="showNecropsy">
          necropsy
        </div>
      </div>
      <!-- end necropsy -->

      <button type="button" name="button" v-on:click="submitAnimal">Submit Data</button>
    </form>

    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h4>Model</h4>
          </div>
          <div>
            <pre><code>{{ $data }}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      animal: {
        animal_id: null,
        species_id: null, // TODO: select component
        sex: null, // TODO: select
        Marks: [{
          type: 'Ear Tag',
          id: '1',
          color: 'red',
          location: 'ear'
        }],
        Encounters: {
          status: null, // TODO: select
          age: null,
          event_date: null, // TODO: calander
          x: null,
          y: null,
          enc_method: null, // TODO: select
          enc_reason: null, // TODO: select
          comments: null // TODO: textarea
        }
      },
      showMarks: false,
      showDevices: false,
      showBiometrics: false,
      showVitals: false,
      showSamples: false,
      showMeds: false,
      showInjuries: false,
      showMortalities: false,
      showNecropsy: false
    }
  },

  methods: {
    jsonData: function (data) {
      return JSON.stringify(data, true, 2)
    },

    submitAnimal: function () {
      const animal = JSON.stringify(this.animal)
      console.log(animal)

      axios.post('http://localhost:1313/events/test', this.animal)
      .then(res => console.log(res))
      .catch(err => console.log(err.response.data))
    },

    toggleVisibility (toggle) {
      this[toggle] = !this[toggle]
    },

    addMark () {
      this.animal.Marks.push({
        type: '',
        id: '',
        color: '',
        location: ''
      })
    },

    deleteMark (id) {
      this.animal.Marks.splice(id, 1)
    },

    oddIndex (index) {
      return index % 2 !== 0
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  margin-bottom: 5px;
}

.p-card {
  padding: 5px 15px 0 15px;
  border-radius: 5px;
}

.p-card-header {
  padding-top: 5px;
  padding-bottom: 5px;
  /*border-bottom: 1px solid lightgrey;*/
  margin-bottom: 10px;
}

.p-card-odd {
  background-color: #F7F7F9;
}
</style>
