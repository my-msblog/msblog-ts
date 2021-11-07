<template>
  <div>
    <el-card 
      class="card_main" 
      v-for="(item) in articleList"
      :key="item" />
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';

export default defineComponent({
  name: 'ArticleCards',
  props: {
    articleList: {
      type: [] as PropType<Array<any>>,
      defualt: [],
    }
  },
  setup(props, { emit }) {
    const data = reactive({

    });
    return {
      data,
    };
  },
});
</script>
<style lang="sass" scoped>
.card_main{

}
</style>
