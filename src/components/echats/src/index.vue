<template>
  <div class="base-echart">
    <div ref="eChartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from 'vue';
import { EChartsOption } from 'echarts';
import useEchart from '@/hooks/useEchart';

// 定义props
const props = withDefaults(
  defineProps<{
    options: EChartsOption
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
);

const eChartDivRef = ref<HTMLElement>();

onMounted(() => {
  const { setOptions } = useEchart(eChartDivRef.value!);

  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>
