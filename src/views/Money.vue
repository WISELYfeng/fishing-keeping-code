<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount"></NumberPad>
      <Types :value.sync="record.type"></Types>
      <Notes @update:value="onUpdateNotes"></Notes>
      <Tags :dataSource.sync="tags" @update:value="onUpdateTags"></Tags>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component } from 'vue-property-decorator';

type Record = {
  tags:string[]
  notes:string
  type:string
  amount:number
}
@Component({
  components:{Tags, Types,Notes,NumberPad}
})
export default class Money extends Vue {
  tags = ['衣','食','住','行','旅游'];
  record: Record = {
    tags:[],
    notes:'',
    type:'-',
    amount:0
  };
  onUpdateTags(value:string[]){
    this.record.tags = value;
  }
  onUpdateNotes(value:string){
    this.record.notes = value;
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>

<style lang="scss" scoped>
</style>