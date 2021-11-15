<template>
  <el-card>

  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Announcement'
});
</script>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
interface IAnnouncement{
  context: string;
}
const props = withDefaults(defineProps<IAnnouncement>(), {
  context: 'null'
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
</style>
