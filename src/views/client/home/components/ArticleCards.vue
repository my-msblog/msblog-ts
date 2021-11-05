<template>
  <div>
    <el-card
      class="card_main"
      v-for="(item, index) in articleList"
      :key="item">
      <div class="article-cover" :class="isRight(index)">
        <el-image fit="fill" :src="item.cover" />
      </div>
      <div class="article-wrapper">
        <div>{{ item.content }}</div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import { ArticleCardVO } from '@/api/model/client/home';

export default defineComponent({
  name: 'ArticleCards',
  props: {
    articleList: {
      type: [] as PropType<Array<ArticleCardVO>>,
      default: [],
    }
  },
  setup(props, { emit }) {
    const data = reactive({

    });
    const isRight = (index: number) => {
      return index % 2 == 0 ? 'left-radius' : 'right-radius';
    };
    return {
      data,
      isRight,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-card{
  border-radius: 8px;
}
.el-card ::v-deep .el-card__body{
  padding: 0;
  display: flex;
  height: 280px;
}
.card_main{
  padding: 0;
  .article-cover {
    overflow: hidden;
    height: 100%;
    display: flex;
    width: 45%;
  }
  .article-wrapper{
    width: 50%;
    font-size: 14px;
    padding: 0 2.5rem;
  }
  .article-wrapper a {
    font-size: 1.5rem;
    transition: all 0.3s;
  }
  .article-wrapper a:hover {
    color: #8e8cd8;
  }
}
.left-radius {
  border-radius: 8px 0 0 8px !important;
  order: 0;
}
.right-radius {
  border-radius: 0 8px 8px 0 !important;
  order: 1;
}
</style>
