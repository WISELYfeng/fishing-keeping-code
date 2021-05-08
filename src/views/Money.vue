<template>
  <div>
    <Layout class-prefix="layout">
    <NumberPad></NumberPad>
     <Types kind="-"></Types>
     <Notes></Notes>
     <Tags></Tags>
    </Layout>
  </div>
</template>

<script lang="ts">
import NumberPad from '@/components/Money/NumberPad.vue';
import Types from '@/components/Money/Types.vue';
import Notes from '@/components/Money/Notes.vue';
import Tags from '@/components/Money/Tags.vue';
export default {
  components: { NumberPad, Types, Notes, Tags },

};
</script>

<style lang="scss">
  .layout-content{
    display: flex;
    flex-direction: column-reverse;
  }
</style>

<style lang="scss" scoped>
  
</style>