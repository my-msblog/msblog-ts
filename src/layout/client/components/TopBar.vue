<template>
  <div>
    Template
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
export default defineComponent({
  name: '',
  setup() {
    const aa = ref(null);
    const srt = 'dsadas';
    const data = { name: '' };
    const dd = computed(() => {
      let d:any = 'dasd';
      let i:number = (d).length;
      const res = (srt as string).length;
      return res;
    });
    return { data };
  }
});
</script>

<style lang="scss" scoped>

</style>
