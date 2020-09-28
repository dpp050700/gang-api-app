<template>
  <div id="app-container">
    <LayoutApp />
  </div>
  <!-- <router-view /> -->
</template>

<script>
import LayoutApp from './layout/index'
export default {
  components: {
    LayoutApp
  },
  data() {
    return {
      name: '111'
    }
  }
}
</script>

<style lang="less">
@import './assets/style/reset.less';
#app-container {
  height: 100vh;
  overflow: hidden;
}
</style>
