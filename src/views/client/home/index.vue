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
          <RefreshRight
            v-if="data.showFailed"
            @click="handleArticles"
            class="btn-reload"
          />
        </el-col>
        <el-col :span="6">
          <Affix>
            <div class="card-main">
              <IdCard
                :article="data.idCardValue.article"
                :category="data.idCardValue.category"
                :tags="data.idCardValue.tag" />
              <Announcement
                class="announcement-card"
                :context="data.announcement"
                :user="data.ann_user"
                :time="data.ann_time" />
            </div>
          </Affix>
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
import RefreshRight from './components/RefreshRight.vue';
import Affix from './components/Affix.vue';
import Announcement from './components/Announcement.vue';
import { getArticlePage, getMainInfo, getAnnouncement } from '@/api/client/home';
import { ArticleCardVO } from '@/api/model/client/home';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'Home',
  components: { ArticleCards, IdCard, RefreshRight, Announcement, Affix },
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const data = reactive({
      pagination: {
        size: 10,
        page: 1,
      },
      idCardValue:{
        article: 0,
        category: 0,
        tag: 0,
      },
      articleList: [] as ArticleCardVO[],
      loading: true,
      showFailed: false,
      announcement: t('message.null_announcement'),
      ann_user: '',
      ann_time: '',
    });
    const handleArticles = () => {
      data.loading = true;
      data.showFailed = false;
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
    const handleHomeCard = () => {
      getMainInfo().then(res => {
        data.idCardValue = res;
      });
    };
    const handleAnnouncement = () => {
      getAnnouncement().then(res => {
        console.log(res);
        console.log(res.announcement);

        if(res.announcement !== undefined){
          data.announcement = res.announcement;
          data.ann_user = res.user;
          data.ann_time = res.time;
        }

      });
    };
    onMounted(() => {
      handleArticles();
      handleHomeCard();
      handleAnnouncement();
    });
    return {
      data,
      handleArticles,
      RefreshRight,
    };
  }
});
</script>

<style lang="scss" scoped>
.el-affix {
  &:deep(div){}

}
.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  height: auto;
  min-width: 1100px !important;
  .el-col {
    display: block;
    .card-main{
      position: static;
      top: 56px;
    }
  }
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
  .btn-reload{
    margin: 5px;
  }
  .announcement-card{
    margin-top: 15px;
  }
}
</style>
