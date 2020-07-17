<template>
    <div class="wrap" >
      <el-form :model="form" ref="ruleForm" label-width="100px">
        <el-form-item label="标题">
          <el-input v-model="form.title" placeholder="请输入标题" maxlength="50"></el-input>
        </el-form-item>
        <el-form-item label="活动URL">
          <el-input v-model="form.url" placeholder="请输入活动URL" maxlength="200"></el-input>
        </el-form-item>
        <el-row class="btn">
          <el-button type="primary" @click="addData">添加</el-button>
        </el-row>
      </el-form>
    </div>
</template>

<script>
import {addDoc} from '@/api/doc'
export default {
  name: 'doc-add',
  data () {
    return {
      form: {
        title: '',
        url: ''
      }
    }
  },
  methods: {
    addData () {
      addDoc(this.form).then(res => {
        if (res.state) {
          this.$message({
            message: '添加成功',
            type: 'success'
          })
          this.$emit('flush')
        }
      })
    }
  }
}
</script>

<style scoped>
  .btn button{
    width: 100%;
  }
</style>
