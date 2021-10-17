<template>
  <el-dialog :title="title" :v-model="dialogFormVisible">
    <el-form
      ref="formRef"
      :model="formData"
      :rules="data.rule"
      inline-message
      :status-icon="true"
      size="medium"
      label-width="100px">
      <el-row :gutter="14">
        <el-col :span="24">
          <el-form-item label="用户名：" prop="username">
            <el-input
              v-model="data"
              placeholder="请输入用户名"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleReset">{{ $t('button.reset') }}</el-button>
        <el-button @click="handleClose">{{ $t('button.cancel') }}</el-button>
        <el-button type="primary" @click="handleConfirm">{{ $t('button.confirm') }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref
} from 'vue';
import Props from '../props';
export default defineComponent({
  name: '',
  props: {
    ...Props,
  },
  emit: [ 'close' ],
  setup(props, { emit }) {
    const formRef = ref();
    const data = reactive({
      rule: []
    });
    const handleClose = function (){
      emit('close');
      handleReset();
    };
    const handleReset = () => {
      formRef.value.clearValidate();
      formRef.value.resetFields();
    };
    const handleConfirm = () => {
      handleClose();
    };
    return {
      formRef,
      data,
      handleClose,
      handleConfirm,
      handleReset,
    };
  }
});
</script>

<style>

</style>
