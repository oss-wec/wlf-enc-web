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
            <input class="form-control" type="text" v-model="event.status">
          </div>
          <div class="form-group">
            <label>Age</label>
            <input class="form-control" type="text" v-model="event.age">
          </div>
          <div class="form-group">
            <label>Date</label>
            <input class="form-control" type="text" v-model="event.event_date">
          </div>
          <div class="form-group">
            <label>X</label>
            <input class="form-control" type="text" v-model="event.x">
          </div>
          <div class="form-group">
            <label>Y</label>
            <input class="form-control" type="text" v-model="event.y">
          </div>
          <div class="form-group">
            <label>Encounter Method</label>
            <input class="form-control" type="text" v-model="event.enc_method">
          </div>
          <div class="form-group">
            <label>Encounter Reason</label>
            <input class="form-control" type="text" v-model="event.enc_reason">
          </div>
          <div class="form-group">
            <label>Comment</label>
            <input class="form-control" type="text" v-model="event.comments">
          </div>

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
          <div class="card-block">
            <em>ELEMENT / ANIMAL</em>
            <p>NDOW ID: {{ animal.animal_id }}</p>
            <p>Species: {{ animal.species_id }}</p>
            <p>Sex: {{ animal.sex }}</p>

            <em>EVENT / ENCOUNTER</em>
            <p>Status: {{ event.status }}</p>
            <p>Age: {{ event.age }}</p>
            <p>Date: {{ event.event_date }}</p>
            <p>x: {{ event.x }}, y: {{ event.y }}</p>
            <p>Method: {{ event.enc_method }}</p>
            <p>Reason: {{ event.enc_reason }}</p>
            <p>Comments: {{ event.comments }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      animal: {
        animal_id: null,
        species_id: null, // TODO: select component
        sex: null // TODO: select
      },
      event: {
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
}
</script>

<style lang="css">
</style>
