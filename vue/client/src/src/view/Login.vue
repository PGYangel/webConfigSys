<template>
    <div class="bg">
      <div class="loginBox">
        <el-row>
          <h1>网站管理系统</h1>
        </el-row>
        <el-form ref="form" :model="form" :rules="rules">
          <el-row>
            <el-form-item prop="userName">
              <el-input v-model="form.userName" placeholder="请输入用户名" maxlength="30"></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item prop="password">
              <el-input v-model="form.password" placeholder="请输入密码" maxlength="30" show-password></el-input>
            </el-form-item>
          </el-row>
          <el-row class="btn">
            <el-button type="primary" @click="submitLogin">登录</el-button>
          </el-row>
        </el-form>
      </div>
    </div>
</template>

<script>
import {login} from '@/api/users'
import {setCookie, delCookie} from '@/util/cookies'
export default {
  name: 'login',
  data () {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          {required: true, message: '请输入用户名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      }
    }
  },
  activated () {
    delCookie('login_token')
    delCookie('userName')
  },
  methods: {
    submitLogin () {
      this.$refs['form'].validate(valid => {
        if (!valid) return false
        login(this.form).then(res => {
          if (!res.state) {
            this.$message({
              message: '用户密码错误',
              type: 'warning'
            })
            return false
          }
          setCookie('login_token', res.token, res.cookieExp)
          setCookie('userName', res.userName, res.cookieExp)
          this.$store.commit('setUserInfo', res)
          this.$router.push('/projects')
        })
      })
    }
  }

}
</script>

<style scoped>
  .bg{
    display: flex;
    width: 100%;
    height:100%;
    background:url('../assets/bg.jpg') no-repeat center top;
    justify-content: center;
    align-items:center;
  }
  h1{
    text-align: center;
    font-size:34px;
    padding-bottom:20px;
  }
  .loginBox{
    width: 385px;
    padding:20px;
    background:#fff;
    border-radius: 10px;
    box-shadow:5px 5px 10px #1f1f1f;
  }
  .btn button{
    width: 100%;
  }
</style>
