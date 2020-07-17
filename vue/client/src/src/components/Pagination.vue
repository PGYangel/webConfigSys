<template>
  <div class="pages">
    <el-pagination
      background
      @current-change="pageIndexChange"
      @size-change="pageSizeChange"
      :current-page="pagination.pageIndex"
      :page-size="pagination.pageSize"
      :total="pagination.total"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  methods: {
    pageIndexChange (val) {
      this.pagination.pageIndex = val
      this.$emit('pageChange', this.pagination)
    },
    pageSizeChange (val) {
      this.pagination.pageSize = val
      this.$emit('pageChange', this.pagination)
    }
  }
}
</script>
<style scoped>
  .pages {
    margin-top: 20px
  }
</style>
