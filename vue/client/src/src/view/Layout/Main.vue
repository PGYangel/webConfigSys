<template>
    <div class="wrap">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
.wrap{
  flex-grow: 1;
  padding:10px;
  overflow:auto;
}
</style>
