<template lang="html">
  <nav>
    <ul class = "pagination justify-content-center">
        <li class="page-item">
          <a href="#" class="page-link" @click.prevent="vuexPageChanged(1)">&laquo;</a>
        </li>

        <li v-for="n in paginationRange" class="page-item" :class="activePage(n)">
          <!-- <a href="#" class="page-link" @click.prevent="pageChanged(n)">{{ n }}</a> -->
          <a href="#" class="page-link" @click.prevent="vuexPageChanged(n)">{{ n }}</a>
        </li>

        <li class="page-item">
          <a href="#" class="page-link" @click.prevent="vuexPageChanged(lastPage)">&raquo;</a>
        </li>
    </ul>
    <p class="text-muted text-center">
      records: {{ recordsRange.begin }} - {{ recordsRange.end }} of {{ pgTotalItems }}
    </p>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

const lowerBound = (num, limit) => {
  return num >= limit ? num : limit
}

export default {
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: Number,
    itemsPerPage: Number,
    totalItems: Number,
    visiblePages: {
      type: Number,
      default: 5,
      coerce: (val) => parseInt(val)
    }
  },
  computed: {
    ...mapState({
      pagination: state => state.pagination
    }),

    ...mapGetters([
      'pgTotalItems',
      'pgTotalPages',
      'recordsRange'
    ]),

    lastPage () {
      return this.pgTotalPages
    },

    paginationRange () {
      let start = this.pagination.currentPage - this.pagination.visiblePages / 2 <= 0
        ? 1 : this.pagination.currentPage + this.pagination.visiblePages / 2 > this.lastPage
        ? lowerBound(this.lastPage - this.pagination.visiblePages + 1, 1) : Math.ceil(this.pagination.currentPage - this.pagination.visiblePages / 2)

      let range = []

      for (let i = 0; i < this.visiblePages && i < this.lastPage; i++) {
        range.push(start + i)
      }

      return range
    }
  },
  methods: {
    activePage (pageNum) {
      return this.pagination.currentPage === pageNum ? 'active' : ''
    },

    pageChanged (pageNum) {
      this.$emit('page-changed', pageNum)
    },

    vuexPageChanged (pageNum) {
      this.$store.dispatch('changePage', { page: pageNum })
    }
  }
}
</script>

<style lang="css">
</style>
