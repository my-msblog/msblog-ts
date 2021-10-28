<template>
  <el-row :gutter="20">
    <el-col
      v-for="(item, index) in data.growCardList"
      :key="index"
      :xs="12"
      :sm="12"
      :lg="6"
    >
      <el-card shadow="hover">
        <template #header>
          <div class="card-header">
            <div class="card-title">
              <span>{{ item.title }}</span>
            </div>
            <el-tag size="mini" :type="item.color">{{ item.action }}</el-tag>
          </div>
        </template>
        <div class="p-4 div-flex justify-between">
          <span class="s-text">${{ item.value }}</span>
          <SvgIcon :name="item.icon" :size="35" />
        </div>
        <div class="p-2 div-flex justify-between">
          <span>总{{ item.title }}</span>
          <span>{{ item.total }}</span>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import { growCardList } from './data';
export default defineComponent({
  name: 'NavCards',
  setup() {
    const data = reactive({
      growCardList,
    });
    return {
      data,
    };
  },
});
</script>

<style lang="scss">
.el-row{
  height: auto;
}
.el-card{
  font-size: 13px;
  .el-card__header{
    padding: 0 12px;
  }
  .el-card__body{
    padding: 12px;
  }
}
.card-header {
  display: flex;
  align-items: center;

  .card-title{
    display: inline-block;
    flex: 1;
    padding: 8px 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.p-4{
  padding: 0.7rem;
  .s-text{
    font-size: 1.5rem;
    line-height: 2.1rem;
  }
}
.p-2{
  padding: 0.5rem;
}
.justify-between {
  justify-content: space-between;
}
.div-flex{
  display: flex;
}
</style>
