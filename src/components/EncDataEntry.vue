<template lang="html">
  <div class="container">
    <form class="" action="index.html" method="post">
      <div class="row">
        <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
          <h1>Enter Wildlife Encounter</h1>
          <hr>
          <!-- element / animal section  -->
          <div class="form-group">
            <label>NDOW ID</label>
            <input class="form-control" type="text" v-model="animal.animal_id">
          </div>
          <div class="form-group">
            <label>Species</label>
            <input class="form-control" type="text" v-model="animal.species_id">
          </div>
          <div class="form-group">
            <label>Sex</label>
            <input class="form-control" type="text" v-model="animal.sex">
          </div>

          <!-- event / encounter section -->
          <div class="form-group">
            <label>Status</label>
            <input class="form-control" type="text" v-model="animal.Encounters.status">
          </div>
          <div class="form-group">
            <label>Age</label>
            <input class="form-control" type="text" v-model="animal.Encounters.age">
          </div>
          <div class="form-group">
            <label>Date</label>
            <input class="form-control" type="text" v-model="animal.Encounters.event_date">
          </div>
          <div class="form-group">
            <label>X</label>
            <input class="form-control" type="text" v-model="animal.Encounters.x">
          </div>
          <div class="form-group">
            <label>Y</label>
            <input class="form-control" type="text" v-model="animal.Encounters.y">
          </div>
          <div class="form-group">
            <label>Encounter Method</label>
            <input class="form-control" type="text" v-model="animal.Encounters.enc_method">
          </div>
          <div class="form-group">
            <label>Encounter Reason</label>
            <input class="form-control" type="text" v-model="animal.Encounters.enc_reason">
          </div>
          <div class="form-group">
            <label>Comment</label>
            <input class="form-control" type="text" v-model="animal.Encounters.comments">
          </div>

          <!-- marks dynamic form -->
          <hr>
          <div v-for="(mark, index) in animal.Marks">
            <button type="button" class="close">
              <span>&times;</span>
            </button>
            <div class="form-group">
              <label >Mark Type</label>
              <select class="form-control" v-model="mark.type">
                <option value=""></option>
                <option value="Band">Band</option>
                <option value="Collar">Collar</option>
                <option value="Ear Tag">Ear Tag</option>
                <option value="PIT Tag">PIT Tag</option>
              </select>
            </div>
            <div class="form-group">
              <label>Mark ID</label>
              <input class="form-control" type="text" v-model="mark.id">
            </div>
            <div class="form-group">
              <label>Mark Color</label>
              <input class="form-control" type="text" v-model="mark.color">
            </div>
            <div class="form-group">
              <label>Mark Location</label>
              <input class="form-control" type="text" v-model="mark.location">
            </div>
          </div>

          <button type="button" name="button" class="btn btn-primary" @click="addMark">Add Mark</button>

          <button type="button" name="button" v-on:click="submitAnimal">Submit Data</button>

        </div>
      </div>
    </form>

    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <div class="card">
          <div class="card-header">
            <h4>The Data</h4>
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
      }
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

    addMark () {
      this.animal.Marks.push({
        type: '',
        id: '',
        color: '',
        location: ''
      })
    }
  }
}
</script>

<style lang="css">
</style>
