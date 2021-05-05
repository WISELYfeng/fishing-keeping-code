<template>
  <div>
    <router-link to="/money">
    <svg>
      <use xlink:href="#label" />
    </svg>
    首页|
    </router-link>
    <router-link to="/labels">标签|</router-link>
    <router-link to="/statistics">统计</router-link>
  </div>
</template>

<script lang="ts">
import x from '@/assets/icons/label.svg'
console.log(x)
export default {};
</script>

<style lang="sass" scoped>
</style>