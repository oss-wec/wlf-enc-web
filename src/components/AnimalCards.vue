<template lang="html">
  <div class="card" :class="animal.species" :id="'card' + animal.id" v-on:click="logInfo" :style="styleObject">
    <div class="card-block">
      <div class="row">
        <!-- species and id -->
        <div class="col-4 col-md-3 col-lg-3">
          <span class="label"><p>{{ animal.species }}</p></span>
          <span class="block field upper">
            <!-- {{ animal.species }}-{{ animal.ndow_id }} -->
            ID: {{ animal.ndow_id }}
          </span>
        </div>

        <!-- date -->
        <div class="col-4 col-md-3 col-lg-2">
          <span class="label">Date</span>
          <span class="block field">{{ humanDate(animal.date) }}</span>
        </div>

        <!-- hunt unit -->
        <div class="col-2 col-md-2 col-lg-1">
          <span class="label">HU</span>
          <span class="block field">{{ animal.hunt_unit }}</span>
        </div>

        <!-- status -->
        <div class="col-2 col-md-3 col-lg-2 hidden-sm-down">
          <span class="label">Status</span>
          <span class="block field">{{ animal.status }}</span>
        </div>

        <!-- sex -->
        <div class="col-2 hidden-md-down">
          <span class="label">Sex</span>
          <span class="block field">{{ animal.sex }}</span>
        </div>

        <!-- age  -->
        <div class="col-1 hidden-md-down">
          <span class="label">Age</span>
          <span class="block field">{{ animal.age }}</span>
        </div>

        <!-- chevron -->
        <div class="col-1 col-md-1">
          <i class="fa fa-chevron-right" v-bind:id="'toggle' + animal.id"></i>
        </div>
      </div>
    </div>
    <animal-card-footer v-if="isActive" v-bind:animal="animal"></animal-card-footer>
  </div>
</template>

<script>
import AnimalCardFooter from './AnimalCardFooter'
import moment from 'moment'

export default {
  components: {
    AnimalCardFooter
  },

  props: ['animal'],

  data () {
    return {
      isOpen: false,
      isActive: false,
      colors: {
        snake: '#138a72',
        amphibian: '#16a085',
        turtle: '#19b698',
        lizard: '#1ccdaa',
        bat: '#493b2b',
        musteloid: '#564735',
        ungulate: '#69543e',
        rodent: '#796148',
        lagomorph: '#896e52',
        carnivore: '#997b5b',
        shrewform: '#a58768',
        owls: '#432051',
        raptor: '#522863',
        waterfowl: '#612f76',
        shorebird: '#703688',
        seabird: '#7f3d9a',
        upland: '#8e44ad',
        passerine: '#9b51ba',
        pico: '#a563c1',
        hummingbird: '#b076c8',
        salmonid: '#20638f',
        ostariophysian: '#2472a4',
        cyprinodontiformes: '#2980b9',
        perciformes: '#2e8ece',
        misc_fish: '#409ad5',
        bivalve: '#727f80',
        gastropod: '#7f8c8d',
        crustacean: '#409ad5'
      }
    }
  },

  methods: {
    logInfo () {
      this.isActive = !this.isActive
      // if (this.isActive) console.log('API CALL: localhost:1313/elements/' + this.animal.id)
    },
    humanDate (date) {
      date = moment(date).format('l')
      if (date === 'Invalid date') return 'n/a'
      return date
    }
  },
//
  computed: {
    styleObject () {
      const color = this.colors[this.animal.grouping]
      const style = {
        borderWidth: '5px 1px 1px 1px',
        borderStyle: 'solid',
        borderColor: color
      }

      if (this.isActive) {
        style.color = '#fff'
        style.backgroundColor = color
      }

      return style
    }
  }
}
</script>

<style lang="css" scoped>
.card {
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}

.card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.block {
  display: block;
}

.label {
  position: absolute;
  top: -12px;
  left: 15px;
  font-size: 13px;
  font-weight: 200;
  letter-spacing: .1em;
}

.field {
  position: absolute;
  top: 8px;
}

.upper {
  text-transform: uppercase;
}

.card-footer {
  color: black;
  background-color: '#ffffff';
}
</style>
