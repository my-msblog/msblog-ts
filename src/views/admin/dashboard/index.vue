<template>
  <div>
    <NavCards />
    <div class="pie-echart">
      <el-card>
        <BaseEcharts :options="options" />
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import NavCards from './components/NavCards.vue';
export default defineComponent({
  name: 'Dashboard',
  components: { NavCards },
  props: {
    title: Object as PropType<string>,
    xLabels: [] as PropType<string[]>,
    values: [] as PropType<any[]>,
  },
  setup(props) {
    const options = computed(() => {
      return {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
    });
    return {
      options,
    };
  }
});
</script>

<style lang="scss" scoped>
.pie-echart{
  margin-top: 10px;
  width: calc(100%);
}
</style>
