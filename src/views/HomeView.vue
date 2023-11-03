<template>
  <div class="tw-flex tw-items-center tw-justify-center home-wrap">
    <div>欢迎来到嵩山实验室</div>
    <div class="tw-ml-18">
      <el-button type="primary" @click="handleClick">去about页面</el-button>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
// 如果只是用组件 API，您需要手动导入样式
import 'element-plus/es/components/button/style/css'

const router = useRouter()
function handleClick() {
  console.log('去about页面')
  router.push('/about')
}
</script>

<style lang="less" scoped>
.home-wrap {
  @apply tw-w-full tw-h-full;
  @apply tw-text-red-500;
  font-size: 30px;
}
</style>
