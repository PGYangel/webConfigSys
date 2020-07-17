<template>
    <div>
      <el-card>
        <el-form label-width="140px" ref="form" :model="content">
          <el-form-item label="标题：">
            <el-input v-model="content.title" maxlength="50" class="input800"></el-input>
          </el-form-item>
          <el-form-item label="活动URL：">
            <el-input v-model="content.url" maxlength="50" class="input800">
              <el-link :href="content.url" target="_blank" type="primary" slot="append">链接跳转</el-link>
            </el-input>
          </el-form-item>
          <el-form-item label="数据接口URL：">
            <el-link :href="apiUrl" target="_blank" type="primary">{{apiUrl}}</el-link>
          </el-form-item>
          <el-form-item label="增加文案项：">
            <el-card class="unit" v-for="(item,index) in content.detail" :key="index">
              <el-row class="row">
                <el-col :span="4" align="right">文案：</el-col>
                <el-col :span="15">
                  <el-input type="textarea" :rows="3" placeholder="请输入内容" v-model="item.value"></el-input>
                </el-col>
                <el-col :span="5" align="right">
                  <el-button type="danger" size="mini" @click="delItem(index)">删除</el-button>
                </el-col>
              </el-row>
              <el-row class="row">
                <el-col :span="4" align="right">示意图：</el-col>
                <el-col :span="20">
                  <el-button type="primary" size="mini" @click="uploadImg(index)">上传</el-button>
                </el-col>
                <el-col :span="24" class="imgBox">
                  <img v-if="item.hintImg" :src="content.imgFile+item.hintImg" alt="">
                </el-col>
              </el-row>
            </el-card>
            <el-row class="lastRow">
              <el-button type="primary" icon="el-icon-circle-plus-outline" @click="addItem">增加文案项</el-button>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="submitBtn" @click="modifData">提交</el-button>
          </el-form-item>
        </el-form>
      </el-card>
      <input type="file" @change="getFile" class="hidden" id="fileImg">
    </div>
</template>

<script>
import {getDataForId, uploadImg, modifData} from '@/api/doc'
// import qs from 'qs'
export default {
  name: 'doc-edit',
  data () {
    return {
      content: {},
      imgIndex: 0,
      apiUrl: ''
    }
  },
  activated () {
    this.getData()
  },
  methods: {
    getData () {
      getDataForId(this.$route.params.id).then(res => {
        this.content = JSON.parse(JSON.stringify(res.data))
        this.apiUrl = 'http://webs.yr.dev.q1.com/doc/getDetail/' + this.content.id
      })
    },
    modifData () {
      modifData(this.content).then(() => {
        this.$message({
          message: '修改成功',
          type: 'success'
        })
      })
    },
    addItem () {
      if (!this.content.detail) {
        this.content.detail = []
      }
      this.content.detail.push({value: '', hintImg: ''})
    },
    delItem (index) {
      this.content.detail.splice(index, 1)
    },
    uploadImg (index) {
      this.imgIndex = index
      document.getElementById('fileImg').click()
    },
    getFile (event) {
      let formData = new FormData()
      formData.append('file', event.target.files[0])
      event.target.value = ''
      uploadImg(formData).then(res => {
        if (res.state) {
          this.content.detail[this.imgIndex].hintImg = res.fileName
        }
      })
    }
  }
}
</script>

<style scoped>
.input800{
  width: 800px;
}
.submitBtn{
  width: 800px;
}
.unit{
  margin-top:15px;
  width:800px;
}
.unit .row{
  margin-bottom:15px;
}
.hidden{
    display: none;
  }
.imgBox{
  padding-top:15px;
  text-align: center;
}
.imgBox img{
  max-height:200px;
  max-width:760px;
}
.lastRow{
  margin-top:15px;
}
</style>
