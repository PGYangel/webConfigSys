<template>
    <div class="wrap">
      <el-menu @select="handleSelect"
               background-color="#545c64"
               text-color="#fff"
               active-text-color="#ffd04b">
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span >欢迎</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>文案管理</span>
          </template>
          <el-menu-item index="/doc/list">
            <i class="el-icon-s-flag"></i>
            <span >文案列表</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-star-on"></i>
            <span>新闻管理</span>
          </template>
          <el-menu-item index="/news/list">
            <i class="el-icon-s-flag"></i>
            <span >新闻列表</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push(keyPath[keyPath.length - 1])
    }
  }
}
</script>

<style scoped>
.wrap{
  display: flex;
  height:100%;
  width: 100%;
}
.el-menu{
  height:100%;
  width: 100%;
}
</style>
