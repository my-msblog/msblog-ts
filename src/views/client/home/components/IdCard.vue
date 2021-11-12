<template>
  <el-card>
    <div class="wapper">
      <el-avatar 
        shape="square"
        :size="70"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      <div class="wapper-name">MS</div>
      <div class="wapper-motto">这个人很懒，什么都没有留下</div>
      <div class="blog-info">
        <div class="blog-info-item" v-for="(item, index) in data.infoList" :key="index">
          <div class="blog-info-item-title">{{ item.title }}</div>
          <div class="blog-info-item-value">{{ item.value }}</div>
        </div>
      </div>
      <el-button 
        class="btn-add"
        type="success"
        size="medium"
        round>等等</el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';
import { nullData } from '@/constant/Type';

export default defineComponent({
  name: 'IdCard',
  props: {
    article: {
      type: Number as PropType<number>,
      default: nullData<number>(0),
    },
    category: {
      type: Number as PropType<number>,
      default: nullData<number>(0),
    },
    tags: {
      type: Number as PropType<number>,
      default: nullData<number>(0),
    }
  },
  setup(props) {
    const { t } = useI18n();
    const data = reactive({
      infoList: {
        article: {
          title: t('pages.article'),
          value: 0,
        },
        categroy: {
          title: t('pages.categroy'),
          value: 0,
        },
        tags: {
          title: t('pages.tags'),
          value: 0,
        },
      }
    });
    watchEffect(() => {
      const watchProp = props;
      data.infoList.article.value = watchProp.article;
      data.infoList.categroy.value = watchProp.category;
      data.infoList.tags.value = watchProp.tags;
    });
    return {
      data,
    };
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
  .blog-info{
    display: flex;
    justify-self: center;
    .blog-info-item{
      flex: 1;
      text-align: center;
      font-size: 0.875rem;
      .blog-info-item-title{
        padding: 10px;
        font-weight: 500 ;
      }
      .blog-info-item-value{
        font-size: 1.25rem;
      }
    }
  }
  .btn-add{
    width: 100%;
    height: 25px !important;
    margin: 15px 7px 0;
    padding: 3px;
  }
}
</style>
