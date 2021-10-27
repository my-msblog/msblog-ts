<template>
  <BaseEcharts :options="options" />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
export default defineComponent({
  name: 'Map',
  props: {},
  setup(){
    onMounted(async() => {
      const json = (await (await import('./china.json')).default) as any;
    });
  }
});
</script>

<style>

</style>