<template lang="html">
  <div class="card" :class="animal.species" :id="'card' + animal.id" v-on:click="logInfo" :style="styleObject">
    <div class="card-block">
      <div class="row">
        <!-- species and id -->
        <div class="col-4 col-md-3 col-lg-2">
          <span class="label"><p>{{ animal.species }}</p></span>
          <span class="block field upper">
            <!-- {{ animal.species }}-{{ animal.ndow_id }} -->
            {{ animal.ndow_id }}
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
        <div class="col-2 hidden-md-down">
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
        frog: '#1b5233;',
        snake: '#21653f',
        toad: '#28784b',
        turtle: '#2e8b47',
        lizard: '#349e63',
        bat: '#012345',
        musteloid: '#123456',
        rodent: '#234567',
        moleshrew: '#345678',
        lagomorph: '#456789',
        carnivore: '#d35400',
        ungulate: '#8a714b',
        migratoryupland: '#dab10d',
        upland: '#F1C40F',
        raptor: '#612e76',
        nearpasserine: '#703688',
        passerine: '#7f3d9b',
        seabird: '#8e44ad',
        shorebird: '#9b50ba',
        waterfowl: '#a563c1'
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

  computed: {
    styleObject: function () {
      if (this.isActive) {
        return {
          backgroundColor: this.colors[this.animal.subclass],
          color: '#fff',
          border: `1px solid ${this.colors[this.animal.subclass]}`
        }
      }
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

.rbhs {
  border: 1px solid #7d4fff;
  border-left: 10px solid #7d4fff;
}

.mtli {
  border: 1px solid #FFA726;
  border-left: 10px solid #FFA726;
}

.prgn {
  border: 1px solid #90358b;
  border-left: 10px solid #90358b;
}

.cbhs {
  border: 1px solid #45d1ff;
  border-left: 10px solid #45d1ff;
}

.muld {
  border: 1px solid #2e7d32;
  border-left: 10px solid #2e7d32;
}

.mtgt {
  border: 1px solid #294ff6;
  border-left: 10px solid #294ff6;
}

.rmel {
  border: 1px solid #E53935;
  border-left: 10px solid #E53935;
}

.blbr {
  border: 1px solid #795548;
  border-left: 10px solid #795548;
}

.dbhs {
  border: 1px solid #FFD54F;
  border-left: 10px solid #FFD54F;
}

.active {
  background-color: blue;
  color: white;
}

.card-footer {
  color: black;
  background-color: '#ffffff';
}
</style>
