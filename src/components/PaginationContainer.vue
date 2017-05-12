<template lang="html">
  <div class="container">

    <pagination :current-page="pageOne.currentPage"
                :total-pages="pageOne.totalPages"
                @page-changed="pageOneChanged">
    </pagination>
    
  </div>
</template>

<script>
import Pagination from './Pagination'

export default {
  components: { Pagination },

  data () {
    return {
      pageOne: {
        currentPage: 1,
        totalPages: 10
      }
    }
  },

  methods: {
    pageOneChanged (pageNum) {
      this.pageOne.currentPage = pageNum
    }
  }

}
</script>

<style lang="css">
</style>
