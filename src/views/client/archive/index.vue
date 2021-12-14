<template>
  <div>
    <div class="banner">
      <p class="a_title">{{ $t('bar.about') }}</p>
    </div>
    <FlowCard class="archive-card">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in data.list"
          :key="index"
          :hollow="true"
          :type="handleColor(index)"
          placement="top"
          :timestamp="dateFormat(activity.timestamp, 'yyyy-MM-dd')">
          <el-card @click="handleCardClick(activity.id)">
            <h4>{{ activity.context }}</h4>
            <p> {{ activity.timestamp }}</p>
          </el-card>
          <br>
        </el-timeline-item>
      </el-timeline>
    </FlowCard>
    
  </div>
  
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { getArchivePage } from '@/api/client/acrhive';
import { BaseDTO } from '@/api/model/core';
import { AcrhiveVO } from '@/api/model/client/acrhive';
import { dateFormat } from '@/utils/DateUtils';

export default defineComponent({
  name: 'Archive',
  setup() {
    const data = reactive({
      pagination: {
        size: 10,
        page: 1,
      },
      list: [] as AcrhiveVO[],
    });
    const handleArchivePage = function(dto: BaseDTO) {
      getArchivePage(dto).then((res) => {
        data.list = res.list;
      });
    };
    const handleColor = function(index: number): string {
      const type = index % 4;
      switch (type){
        case 0:
          return 'primary';
        case 1:
          return 'success';
        case 2:
          return 'warning';
        case 3:
          return 'danger';
        default:
          return 'info';
      }
    };
    const handleCardClick = function(id: number){
      //路由跳转，文章页面
    };
    onMounted(() => {
      handleArchivePage(data.pagination);
    });
    return {
      data,
      handleColor,
      dateFormat,
      handleCardClick,
    };
  },
});
</script>
<style lang="scss" scoped>
@media(min-width: 715px){
  .banner {
    height: 350px;
    overflow: hidden;
    text-align: center;
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
.archive-card{
  margin: 48px 250px 68px 250px;
  text-align: left;
  .el-card{
    padding: 10px;
    &:deep(.el-card__body){
      padding: 15px;
      h4{
        margin: 15px 0;
      }
      p{
        color: rgb(85, 79, 79);
        margin: 10px 0;
      }
    }
  }
  .el-card:hover{
    box-shadow:0 5px 8px 6px rgb(6 16 26 / 12%);
  }
}
</style>
