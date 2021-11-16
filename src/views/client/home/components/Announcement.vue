<template>
  <el-card>
    <div class="ann-title">
      <el-icon class="bell-icon" :size="18" color="rgb(102, 177, 255)"><BellFilled /></el-icon>
      {{ $t('message.announcement') }}
    </div>
    <div class="ann-context">
      {{ props.context }}
    </div>
  </el-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Announcement',
  components: {}
});
</script>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { BellFilled } from '@element-plus/icons';
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
  font-size: 0.875rem;
  height: auto;
  // font-family: -apple-system,BlinkMacSystemFont,Segoe UI,
  // Helvetica Neue,Lato,Roboto,PingFang SC,Microsoft YaHei,sans-serif!important;
}
.el-card__body {
  padding: 10px;
  height: auto;
}
.el-card:hover{
  box-shadow:0 4px 12px 12px rgba(7,17,27,.15)
}
.ann-title{
  display: flex;
  font-size: var(--el-font-size-medium);
  align-items: center;
  margin: 7px 0;
  .bell-icon{
    margin-right: 5px;
  }
}
.ann-context{
  font-size: var(--el-font-size-base);
  word-wrap: break-word;
  word-break: normal;
  text-align: left;
}
</style>
