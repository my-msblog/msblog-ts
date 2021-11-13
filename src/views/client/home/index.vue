<template>
  <div>
    <div class="home-banner">
      <h3 class="title">欢迎来到我的个人网站</h3>
      <h3 class="titles">这个人很懒，什么都没有说明，试试往下滑动！</h3>
    </div>
    <div class="home_main">
      <el-row class="el-row" :gutter="10">
        <el-col :span="18">
          <ArticleCards :article-list="data.articleList" v-loading="data.loading" :loading="data.loading" />
          <div v-if="data.showFailed" @click="handleArticles">Loading Failed</div>
        </el-col>
        <el-col :span="6">
          <IdCard 
            :article="data.idCardValue.article"
            :category="data.idCardValue.categroy"
            :tags="data.idCardValue.tags" />
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import ArticleCards from './components/ArticleCards.vue';
import IdCard from './components/IdCard.vue';
import { getArticlePage } from '@/api/client/home';
import { ArticleCardVO } from '@/api/model/client/home';

export default defineComponent({
  name: 'Home',
  components: { ArticleCards, IdCard },
  setup() {
    const router = useRouter();
    const data = reactive({
      pagination: {
        size: 10,
        page: 1,
      },
      idCardValue:{
        article: 3,
        categroy: 4,
        tags: 5,
      },
      articleList: [] as ArticleCardVO[],
      loading: true,
      showFailed: false,
    });
    const handleArticles = () => {
      data.loading = true;
      window.setTimeout(() =>{
        if(data.loading){
          data.showFailed = true;
          data.loading = false;
        }
      }, 5000);  
      getArticlePage(data.pagination).then((res) => {
        data.articleList = res.list;
        data.loading = false;
        data.showFailed = false;
      });
    };
    onMounted(() => {
      handleArticles();
    });
    return {
      data,
      handleArticles,
    };
  }
});
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  min-width: 1100px !important;
}
.home-banner {
  left: 0;
  right: 0;
  height: 100vh;
  background: #fff url("../../../assets/background/home.jpg") no-repeat fixed center center;
  text-align: center;
  color: #fff !important;
  animation: header-effect 1s;

  .title {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 300px;
    margin: auto;
    bottom: 0;
    color: #fff;
    font-size: 24px;
    font-weight: 500;
  }

  .titles {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    right: 0;
    top: 350px;
    margin: auto;
    bottom: 0;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
  }
}

.home_main {
  max-width: 1100px;
  margin: 48px auto 28px;
}
</style>
