<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
*{
  padding:0;
  margin:0;
  border:none;
  text-decoration: none;
  list-style: none;
  font-family: '微软雅黑'
}
  html,body{
    display: flex;
    height:100%;
    width: 100%;
  }
  #app{
    display: flex;
    width: 100%;
    height:100%;
  }
</style>
