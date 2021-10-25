<template>
  <el-row>
    <el-col  v-for="i in 3" :key="i">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name {{ i }}</span>
            <el-button class="button" type="text">Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'NavCards'
};
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
