<template>
  <div>
    <div class="a_banner">
      <p class="a_title">
        {{ $t('bar.categories') }}
        &nbsp;-&nbsp;
        {{ data.titleType }}
      </p>
    </div>
    <el-row>
      <el-col>
        <CategoryCard />
      </el-col>
    </el-row>
    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { getArticleByCategoryId } from '@/api/client/category';
import { ArticleCategoryVO } from '@/api/model/client/category';
import CategoryCard from '../components/CategoryCard.vue';
export default defineComponent({
  name: 'ArticleCategoryList',
  component: [ CategoryCard ],
  setup() {
    const router = useRouter(); 
    const categoryId = router.currentRoute.value.params.id as string;
    const data = reactive({
      titleType: '',
      articleList: [] as ArticleCategoryVO[],
    });
    const handleInitCategotyList = function() {
      getArticleByCategoryId(categoryId).then((res) =>{
        data.articleList = res;
      });
    };
    onMounted(() => {
      handleInitCategotyList();
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
  background: #fff url('~@/assets/background/category-list.png') no-repeat center/100%;
  .a_title{
    color: #fff;
    display:block;
    justify-content: center;
    margin-top: 200px;
    font-size: 2.2rem;
    font-weight: bold;
  }
}
</style>
