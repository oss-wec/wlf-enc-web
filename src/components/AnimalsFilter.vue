<template lang="html">
  <div class="animal-filters">
    <div class="row">
      <div class="col-2">
        <label>Field</label>
        <input type="text" name="field" class="form-control" v-model="field">
      </div>
      <div class="col-2">
        <label>Expression</label>
        <input type="text" name="Expression" class="form-control" v-model="expression">
      </div>
      <div class="col-4">
        <label>Criteria</label>
        <input type="text" name="Criteria" class="form-control" v-model="criteria">
      </div>
      <div class="col-2 d-flex align-items-end justify-content-center">
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-plus fa-fw"></i>
          </button>
          <button type="button" class="btn btn-secondary">
            <i class="fa fa-minus fa-fw"></i>
          </button>
        </div>
      </div>
      <div class="col-2 d-flex align-items-end">
        <button name="button" class="btn btn-primary btn-block" @click="filter()">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      field: 'hunt unit',
      expression: '=',
      criteria: '12'
    }
  },
  methods: {
    filter () {
      this.$store.dispatch('setFilter', { species: this.criteria })
    }
  }
}
</script>

<style lang="css">
.animal-filters {
  padding-bottom: 15px;
  margin-bottom: 10px;
  border-bottom: 1px solid grey;
}
</style>
