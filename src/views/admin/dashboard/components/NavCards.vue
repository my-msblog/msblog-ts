<template>
  <el-row :gutter="20">
    <el-col
      v-for="(i) in 4"
      :key="i"
      :xs="12"
      :sm="12" 
      :lg="6"
    >
      <el-card shadow="hover">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" type="text">Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 1" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
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
.el-row{
  height: auto;
}
.card-header {
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
