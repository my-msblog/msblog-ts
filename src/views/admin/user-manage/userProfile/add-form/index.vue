<template>
  <el-dialog :title="title" :v-model="dialogFormVisible">
    12
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Props from '../props';
export default defineComponent({
  name: '',
  props: {
    ...Props,
  },
  setup() {
    return { };
  }
});
</script>

<style>

</style>
