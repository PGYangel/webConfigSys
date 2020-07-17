<template>
  <div class="app-wrapper">
    <div class="navBox">
      <Nav></Nav>
    </div>
    <div class="rightBox">
      <Top></Top>
      <Main></Main>
    </div>
  </div>
</template>

<script>
import Nav from '@/view/Layout/Nav'
import Main from '@/view/Layout/Main'
import Top from '@/view/Layout/Top'
export default {
  name: 'Layout',
  components: {
    Nav,
    Main,
    Top
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
  .app-wrapper{
    width: 100%;
    height:100%;
    display: flex;
  }
  .navBox{
    flex-basis:200px;
  }
  .rightBox{
    display: flex;
    flex-direction:column;
    flex-grow:1;
  }
</style>
