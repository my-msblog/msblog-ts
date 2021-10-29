<template>
  <div style="padding: 0.5rem">
    <NavCards />
    <div class="pie-echart">
      <FlowAnalysis />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import NavCards from './components/NavCards.vue';
import FlowAnalysis from './components/FlowAnalysis.vue';
export default defineComponent({
  name: 'Dashboard',
  components: { NavCards, FlowAnalysis },
  props: {
    title: Object as PropType<string>,
    xLabels: [] as PropType<string[]>,
    values: [] as PropType<any[]>,
  },
  setup(props) {

    return {
    };
  }
});
</script>

<style lang="scss" scoped>
.pie-echart{
  margin-top: 10px;
  padding: 6px;
  width: calc(100%);
}
</style>
