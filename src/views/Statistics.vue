<template>
  <div>
    <Layout>
      <Tabs
        class-prefix="type"
        :data-source="recordTypeList"
        :value.sync="type"
      ></Tabs>
      <Tabs
        class-prefix="interval"
        :data-source="intervalList"
        :value.sync="interval"
      ></Tabs>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tabs from "@/components/Tabs.vue";
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';

@Component({
  components: { Tabs },
})
export default class Statistics extends Vue {
  type = "-";
  interval = "day";
  intervalList = intervalList;
  recordTypeList = recordTypeList;
}
</script>

<style lang="sass" scoped>
</style>