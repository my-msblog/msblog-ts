<template>
  <div>
    <div class="banner">
      <p class="a_title">{{ $t('bar.about') }}</p>
    </div>
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Archive',
  setup() {
        
  },
});
</script>
<style lang="scss" scoped>
@media(min-width: 715px){
  .banner {
    position: absolute;
    top: -60px;
    left: 0;
    right: 0;
    height: 400px;
    background-color: #49b1f5 !important;
    animation: header-effect 1s;
    background: url("~@/assets/background/archive.jpg") center center / cover no-repeat
  }
  .a_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 200px;
    font-size: 24px;
    font-weight: bold;
  }
}

</style>
