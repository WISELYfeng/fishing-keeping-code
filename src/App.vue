<template>
  <div id="app">
    <router-view />
    <Qrcode v-if="qrcodeVisible"></Qrcode>
  </div>
</template>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  line-height: 1.5;
  background: #f5f5f5;
}
</style>

<script lang="ts">
import Vue from "vue";
import { Component } from 'vue-property-decorator';
import Qrcode from '@/components/Qrcode.vue';

@Component({
  components:{Qrcode}
})
export default class App extends Vue {
  qrcodeVisible:boolean = false;
  created() {
    if (document.documentElement.clientWidth > 500) {
      this.qrcodeVisible = true;
    }
  }
}
</script>