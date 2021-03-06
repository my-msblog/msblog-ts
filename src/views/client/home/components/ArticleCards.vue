<template>
  <div>
    <el-card
      class="card_main"
      v-for="(item, index) in articleList"
      :key="item">
      <div class="article-cover" :class="isRight(index)">
        <el-skeleton
          style="width: 100%"
          :loading="loading"
          animated
          :count="3">
          <template #template>
            <el-skeleton-item variant="image" style="width: 100%; height: 100%" />
            <div style="padding: 14px">
              <el-skeleton-item variant="h3" style="width: 100%" />
              <div class="empty_div" />
            </div>
          </template>
          <template #default>
            <el-image class="on-hover" fit="fill" :src="item.cover" />
          </template>
        </el-skeleton>
      </div>
      <div class="article-wrapper">
        <div>
          <router-link to="" class="article-title">{{ item.title }}</router-link>
        </div>
        <div class="article-info">
          <el-icon :size="13"><Calendar /></el-icon>
          &nbsp;{{ +item.createTime }}
          <span class="separator">|</span>
          <el-icon :size="14"><SvgIcon name="type" size="15" color="#0000008a" /></el-icon>
          &nbsp;{{ item.typeName }}
          <div 
            class="article-tag" 
            v-for="( tag, index) in item.tagVOList" 
            :key="index">
            <span class="separator" v-if="tagsExceeds(index)">|</span>
            <el-icon v-if="tagsExceeds(index)"><CollectionTag /></el-icon>
            <span v-if="tagsExceeds(index)">{{ tag.nameZh }}</span>
          </div>
          <div class="article-tag" v-if="showMore(item.tagVOList.length)">
            <span class="separator">|</span>
            <el-icon><More /></el-icon>
          </div>
        </div>
        <div class="article-context">
          {{ item.content }}
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import { ArticleCardVO } from '@/api/model/client/home';
import { Calendar, More, CollectionTag } from '@element-plus/icons';

export default defineComponent({
  name: 'ArticleCards',
  props: {
    articleList: {
      type: [] as PropType<Array<ArticleCardVO>>,
      default: [],
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: true,
    }
  },
  components: { Calendar, CollectionTag, More },
  setup(props, { emit }) {
    const data = reactive({
      loading: true,
      tagsLengths: 2,
    });
    const isRight = (index: number) => {
      return index % 2 == 0 ? 'left-radius' : 'right-radius';
    };
    const tagsExceeds = function(index: number){
      return index < data.tagsLengths;
    };
    const showMore = (index: number): boolean => {
      return index > data.tagsLengths;
    };
    return {
      data,
      isRight,
      tagsExceeds,
      showMore,
    };
  },
});
</script>
<style lang="scss" scoped>
.el-card{
  border-radius: 8px;
  margin-bottom: 20px;
}
.el-card:hover{
  box-shadow:0 4px 12px 12px rgba(7,17,27,.15)
}
.el-card {
  &:deep(.el-card__body) {
    padding: 0;
    display: flex;
    height: 250px;
    align-items: center;
  }
}
.card_main{
  padding: 0;
  .article-cover {
    overflow: hidden;
    height: 100%;
    display: flex;
    width: 45%;
    .empty_div{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: auto;
      height: 16px;
    }
    .on-hover{
      width: 100%;
      transition: all .6s;
    }
  }
  .article-wrapper{
    width: 50%;
    padding: 0 2.5rem;
    text-align: left;
    font-size: 14px;
    transition: all .3s;
    .article-context{
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
    .article-title{
      text-decoration: none;
      color: #000;
    }
    .article-info{
      display: flex;
      align-items: center;
      padding: 7px 0;
      color: rgba(0,0,0,.54);
      .separator{
          margin: 0 6px;
      }
      .article-tag{
        display: flex;
        align-items: center;
      }
    }
  }
  .article-wrapper a {
    font-size: 1.5rem;
    transition: all 0.3s;
  }
  .article-wrapper a:hover {
    font-size: 1.5rem;
    transition: all 0.3s;
    color: #8e8cd8;
  }
}
.card_main:hover .on-hover{
  transform: scale(1.1);
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
