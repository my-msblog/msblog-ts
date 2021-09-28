<template>
  <div>
    <div class="a_banner">
      <p class="a_title">{{ $t('bar.about') }}</p>
    </div>
    this is categories
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'About',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.a_banner{
  left: 0;
  right: 0;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  background: #fff url('~@/assets/background/tags.jpeg') no-repeat fixed center center;
  .a_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 350px;
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
