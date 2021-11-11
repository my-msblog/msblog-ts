<template>
  <el-card>
    <div class="wapper">
      <el-avatar 
        shape="square"
        :size="70"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <div class="wapper-name">MS</div>
      <div class="wapper-motto">这个人很懒，什么都没有留下</div>
    </div>
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
.el-card{
   border-radius: 8px;
}
.el-card__body {
  padding: 10px;
  height: auto;
}
.el-card:hover{
   box-shadow:0 4px 12px 12px rgba(7,17,27,.15)
}
.wapper{
  font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Lato,Roboto,PingFang SC,Microsoft YaHei,sans-serif!important;
  .wapper-name{
    font-size: 1.375rem;
    margin-top: 7px;
  }
  .wapper-motto{
    font-size: 0.75rem;
    margin: 7px 0;
  }
}
</style>
