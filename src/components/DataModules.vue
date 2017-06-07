<template lang="html">
  <div>
    <div class="p-card" v-for="(device, index) in devices" v-bind:class="{ 'p-card-odd': oddIndex(index) }">
      <div class="p-card-header">
        <button type="button" class="close" @click="deleteMark(index)">
          <span>&times;</span>
        </button>
        <h5>Device {{ device.index + 1 }}</h5>
      </div>
      <div class="p-card-body">
        <p>{{ device.id }} : {{ device.freq }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataModules',

  data () {
    return {
      devices: [{
        id: 1,
        freq: 111.111
      }, {
        id: 2,
        freq: 222.222
      }],

      schema: {
        fields: [{
          type: 'input',
          inputType: 'text',
          label: '',
          model: 'first name',
          required: true,
          // validator: VueFormGenerator.validators.string,
          styleClasses: 'col-xs-6'
        }]
      }
    }
  },

  methods: {
    deleteMark (index) {
      this.devices.splice(index, 1)
    },

    oddIndex (index) {
      return index % 2 !== 0
    }
  }
}
</script>

<style lang="css" scoped>
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
