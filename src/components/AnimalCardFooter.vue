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
            <tr>
              <td>10721</td>
              <td>161.151</td>
              <td>GPS</td>
              <td class="hidden-xs-down">2017-01-01</td>
              <td class="hidden-xs-down">2017-04-01</td>
            </tr>
            <tr>
              <td>20184</td>
              <td>161.002</td>
              <td>GPS</td>
              <td class="hidden-xs-down">2017-04-01</td>
              <td class="hidden-xs-down">2017-10-01</td>
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
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>

    <!-- lab ids -->
    <div class="row pad-bottom">
      <div class="col">
        <span class="col-title">Lab-ID</span>
        <p>17-1, 1842, 2017-12</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['animal']
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
