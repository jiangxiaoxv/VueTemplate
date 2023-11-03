<template>
  <slot name="default">
    <div class="layout-wrap">
      <router-view v-slot="{ Component }">
        <transition>
          <!-- <keep-alive> -->
          <component :is="Component" />
          <!-- </keep-alive> -->
        </transition>
      </router-view>
    </div>
  </slot>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {})
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  border: 0;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style scoped lang="less">
.layout-wrap {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>
