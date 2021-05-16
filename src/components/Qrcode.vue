<template>
  <div class="qrcode">
    <img src="../assets/qrcode.png" alt="qrcode" />
    <div class="slogan">扫描二维码👆<br />获得更佳使用体验</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.qrcode {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.slogan {
  color: white;
  font-size: larger;
  font-weight: bolder;
  background: #ffa3a6;
}
</style>