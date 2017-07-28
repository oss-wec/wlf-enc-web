<template lang="html">
  <div class="card-footer">
    <!-- table row -->
    <div class="row pad-bottom">
      <!-- marks table  -->
      <div class="col-md-12 col-lg-6">
        <p class="col-title">marks</p>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Color</th>
              <th>Type</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mark in animal.marks">
              <td>{{ mark.mark_id }}</td>
              <td>{{ mark.mark_color }}</td>
              <td>{{ mark.mark_type }}</td>
              <td>right ear</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- devices table -->
      <div class="col-md-12 col-lg-6">
        <p class="col-title">devices</p>

        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Freq</th>
              <th>Type</th>
              <th class="hidden-xs-down">On</th>
              <th class="hidden-xs-down">Off</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="device in animal.devices">
              <td>{{ device.serial_num }}</td>
              <td>{{ device.frequency }}</td>
              <td>{{ device.type }}</td>
              <td class="hidden-xs-down">{{ humanDate(device.inservice) }}</td>
              <td class="hidden-xs-down">{{ humanDate(device.outservice) }}</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

    <!-- map row -->
    <div class="row pad-bottom">
      <div class="col-12">
        <div id="map"></div>
      </div>
    </div>

    <!-- comments row -->
    <div class="row pad-bottom">
      <div class="col">
        <span class="col-title">Comments:</span>
        <p>{{ animal.comments }}</p>
      </div>
    </div>

    <!-- lab ids -->
    <div class="row pad-bottom">
      <div class="col">
        <span class="col-title">Lab-IDs:</span>
        <p>
          <span v-for="id in animal.labids">{{ id }}  </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  props: ['animal'],

  methods: {
    humanDate (date) {
      date = moment(date).format('l')
      if (date === 'Invalid date') return 'n/a'
      return date
    }
  }
}
</script>

<style lang="css">
#map {
  height: 20vh;
  border: 1px solid #2196f3;
}
.col-title {
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 115%;
}

.pad-bottom {
  padding-bottom: 10px;
}
</style>
