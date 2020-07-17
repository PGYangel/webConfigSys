<template>
    <div class="wrap">
      <el-card>
        <el-row>
          <el-button type="primary" @click="addDialog = true">新增</el-button>
        </el-row>
      </el-card>
      <el-card class="mtop20">
        <el-table :data="list" stripe border>
          <el-table-column prop="title" label="标题"></el-table-column>
          <el-table-column label="活动URL">
            <template slot-scope="scope">
              <el-link type="primary" :href="scope.row.url" target="_blank">{{scope.row.url}}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="API">
            <template slot-scope="scope">
              <el-link type="primary" :href="'http://webs.yr.dev.q1.com/doc/getDetail/'+scope.row.id" target="_blank">{{'http://webs.yr.dev.q1.com/doc/getDetail/'+scope.row.id}}</el-link>
            </template>
          </el-table-column>
          <el-table-column label="操作" width="180" align="center">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="gotoEdit(scope.row.id)">编辑</el-button>
              <el-popconfirm
                confirmButtonText='好的'
                cancelButtonText='不用了'
                @onConfirm="delData(scope.row.id)"
                icon="el-icon-info"
                iconColor="red"
                :title="'您确定删除（ '+scope.row.title+' ）文案管理项么？'">
                <el-button size="mini" type="danger" slot="reference">删除</el-button>
              </el-popconfirm>
            </template>
          </el-table-column>
        </el-table>
        <pagination :pagination="queryData" @pageChange="pageChange"></pagination>
      </el-card>
      <el-dialog title="新增文案管理项" :visible.sync="addDialog">
        <Add @flush="flushList"></Add>
      </el-dialog>
    </div>
</template>

<script>
import Add from '@/view/DocManage/Add'
import Pagination from '@/components/Pagination'
import {getList, delDoc} from '@/api/doc'
export default {
  name: 'doc-list',
  components: {
    Add,
    Pagination
  },
  data () {
    return {
      queryData: {
        pageSize: 10,
        pageIndex: 1,
        total: 0
      },
      addDialog: false,
      list: []
    }
  },
  activated () {
    this.getList()
  },
  methods: {
    getList () {
      getList(this.queryData).then(res => {
        this.list = res.data
        this.queryData.total = res.total
      })
    },
    flushList () {
      this.getList()
    },
    gotoEdit (id) {
      this.$router.push({path: `/doc/edit/${id}`})
    },
    delData (id) {
      delDoc({id}).then(() => {
        this.getList()
        this.$message({
          message: '删除成功',
          type: 'success'
        })
      })
    },
    pageChange (val) {
      this.queryData = val
      this.getList()
    }
  }
}
</script>

<style scoped>
.mtop20{
  margin-top:20px;
}
</style>
