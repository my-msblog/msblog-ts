<template>
  <FlowCard>
    <div class="article-item-cover">
      <router-link :to="'/articles/' + item.id">
        <el-image class="on-hover" fit="fill" :src="item.cover" />
      </router-link>
    </div>
    <div class="article-item-info">
      <div>
        <router-link :to="'/articles/' + item.id">
          {{ item.articleTitle }}
        </router-link>
      </div>
      <el-icon :size="14"><SvgIcon name="type" size="15" color="#0000008a" /></el-icon>
    </div>
  </FlowCard>
</template>
<script lang="ts">
import { ArticleCategoryVO } from '@/api/model/client/category';
import { NullObject } from '@/constant/Type';
import { defineComponent, PropType } from 'vue';
import { Calendar } from '@element-plus/icons';
export default defineComponent({
  name: 'CategoryCard',
  props: {
    item: {
      type: Object as PropType<ArticleCategoryVO>,
      default: NullObject<ArticleCategoryVO>(),
    }
  },
  setup() {
        
  },
});
</script>

<style lang="scss" scoped>

</style>
