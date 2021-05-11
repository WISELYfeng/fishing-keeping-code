<template>
  <Layout>
    <div>
      <Icon name="left"></Icon>
      <span>编辑标签</span>
    </div>
    <Notes></Notes>
  </Layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Notes from "@/components/Money/Notes.vue";
import tagListModel from "@/models/tagListModel";

@Component({
  components: { Notes },
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.push("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
</style>