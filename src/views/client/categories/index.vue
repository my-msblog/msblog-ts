<template>
  <div>
    <div class="a_banner">
      <p class="a_title">{{ $t('bar.categories') }}</p>
    </div>
    <FlowCard class="categories-card">
      <h1>{{ $t('pages.article_category') }} - {{ data.category_count }}</h1>
      
    </FlowCard>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'About',
  setup() {
    const data = reactive({
      category_count: 0,
    });
    return {
      data,
    };
  }
});
</script>

<style lang="scss" scoped>
.a_banner{
  height: 350px;
  overflow: hidden;
  text-align: center;
  animation: header-effect 1s;
  background: #fff url('~@/assets/background/categories.png') no-repeat center/100%;

  .a_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 200px;
    font-size: 24px;
    font-weight: bold;
  }
}
.categories-card{
  margin: 48px 250px 68px 250px;
  padding: 15px 10px 10px !important;
  text-align: center;
}
</style>
