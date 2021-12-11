<template>
  <div>
    <div class="banner">
      <p class="a_title">{{ $t('bar.about') }}</p>
    </div>
    <FlowCard class="archive-card">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in timeList"
          :key="index"
          :timestamp="activity.timestamp">
          {{ activity.context }}
        </el-timeline-item>
      </el-timeline>
    </FlowCard>
    
  </div>
  
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  name: 'Archive',
  setup() {
    const data = reactive({
      pagination: {
        size: 10,
        page: 1,
      },
    });
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
  margin: 48px auto 28px auto;
}
</style>
