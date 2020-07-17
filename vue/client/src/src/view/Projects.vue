<template>
  <div class="bg">
    <div class="listBox">
      <div class="unit" v-for="(item,index) in list" :key="index">
        <el-row>
          <img src="http://webs.yr.dev.q1.com/images/logo.png" alt="">
        </el-row>
        <el-row>
          <h6>{{item.name}}</h6>
        </el-row>
        <el-row>
          <el-button type="primary" @click="gotoSys(item.projectId)">进入管理</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {getList} from '@/api/projects'

export default {
  name: 'projects',
  data () {
    return {
      list: []
    }
  },
  created () {
    // console.log(this.getCookie('user_token'))
    // console.log(this.getCookie('test'))
    getList().then(res => {
      this.list = res
    })
  },
  methods: {
    gotoSys (id) {
      this.$router.push('/home')
    },
    getCookie (name) {
      let allcookies = document.cookie
      // 索引长度，开始索引的位置
      let pos = allcookies.indexOf(name)

      // 如果找到了索引，就代表cookie存在,否则不存在
      if (pos !== -1) {
        // 把pos放在值的开始，只要给值加1即可
        // 计算取cookie值得开始索引，加的1为“=”
        pos = pos + name.length + 1
        // 计算取cookie值得结束索引
        var end = allcookies.indexOf(';', pos)

        if (end === -1) {
          end = allcookies.length
        }
        // 得到想要的cookie的值
        var value = unescape(allcookies.substring(pos, end))
      }
      return value
    }
  }
}
</script>

<style scoped>
  .bg {
    display: flex;
    width: 100%;
    height: 100%;
    background: url('../assets/bg.jpg') no-repeat center top;
    justify-content: center;
    align-items: center;
  }

  .listBox {
    display: flex;
    padding:50px;
    flex-wrap:wrap;
  }

  .unit {
    width: 120px;
    background:#fff;
    padding:25px;
    margin:15px;
    border-radius: 10px;
    box-shadow:5px 5px 10px #1f1f1f;
  }
  .unit .el-row{
    text-align: center;
  }
  .unit h6{
    font-size:18px;
    padding-top:10px;
    padding-bottom:10px;
  }
</style>
