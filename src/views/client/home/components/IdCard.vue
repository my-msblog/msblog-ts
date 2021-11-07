<template>
  <el-card>
    <div />
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IdCard',
  setup() {
    return { };
  }
});
</script>

<style lang="scss" scoped>
.el-card__body {
  padding: 10px;
  height: auto;
}
.el-card:hover{
   box-shadow:0 4px 12px 12px rgba(7,17,27,.15)
}
</style>
