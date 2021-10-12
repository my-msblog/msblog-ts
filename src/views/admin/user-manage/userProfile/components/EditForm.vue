<template>
  <el-dialog :title="title" :v-model="dialogFormVisible">
    {{ formDataProp }}
    <el-form
      ref="formRef"
      :model="data.formData"
      :rules="data.rule"
      inline-message
      :status-icon="true"
      size="medium"
      label-width="100px">
      <el-row :gutter="14">
        <el-col :span="24">
          <el-form-item label="id：" prop="id">
            <el-input
              v-model="data.formData.id"
              readonly
              :disabled='true'
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="用户名：" prop="username">
            <el-input
              v-model="data.formData.username"
              placeholder="请输入用户名"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="性别：" prop="sex">
            <el-radio-group v-model="data.formData.sex" size="medium">
              <el-radio
                v-for="(item, index) in data.sexOptions"
                :key="index"
                :label="item.label">
                {{  item.value }}
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="邮箱：" prop="email">
            <el-input
              v-model="data.formData.email"
              placeholder="请输入邮箱"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="24">
          <el-form-item label="手机号：" prop="phone">
            {{ data.formData.phone }}
            <el-input
              v-model="data.formData.phone"
              placeholder="请输入手机号"
              clearable
              :style="{width: '100%'}" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户角色" prop="role">
            <el-select
              v-model="data.formData.role"
              placeholder="请选择用户角色"
              clearable
              :style="{width: '100%'}">
              <el-option
                v-for="(item, index) in data.roleOptions"
                :key="index"
                :label="item.value"
                :value="item.label"
                :disabled="item.disabled" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import {
  defineComponent,
  toRefs,
  PropType,
  reactive,
  ref,
  computed,
  inject,
} from 'vue';
import Props from '../props';
import { UserProfileVO, UserProfileVOImpl } from '@/api/model/admin/user-profile-model';
import { useI18n } from 'vue-i18n';
import { editFormRule, sexOptions, roleOptions } from './data';
import { ElMessageBox } from 'element-plus';
import { adminChangeUser } from '@/api/admin/user-profile';
import { UserTableChangeDTO } from '@/api/model/user-info-model';
import { RoleId } from '@/constant/enums/role';

export default defineComponent({
  name: 'EditForm',
  props: {
    ...Props,
    formDataProp: {
      type: Object as PropType<UserProfileVO>,
      default: UserProfileVOImpl
    }
  },
  emits: [ 'close', 'afterChange' ],
  setup(props, { emit }) {
    const { t } = useI18n();
    const propRef = toRefs(props);
    const formRef = ref();
    const formDataRef = propRef.formDataProp;
    const data = reactive({
      rule: editFormRule,
      sexOptions: sexOptions,
      roleOptions: roleOptions,
      formData: {
        id: formDataRef.value.id,
        username: formDataRef.value.username,
        sex: formDataRef.value.sex,
        phone: formDataRef.value.phone,
        email: formDataRef.value.email,
        role: formDataRef.value.role,
      }
    });

    const formData = inject<UserProfileVO>('editData');
    const handleClose = function () {
      emit('close');
      formRef.value.clearValidate();
      formRef.value.resetFields();
    };
    const handleConfirm = function () {
      ElMessageBox.confirm(t('message.whether_to_modify_information'), t('pages.tips'), {
        confirmButtonText: t('message.confirm'),
        cancelButtonText: t('message.cancel'),
        type: 'warning',
      }).then(() => {
        // const params: UserTableChangeDTO = {
        //   id: formData.id,
        //   username: formData.username,
        //   sex: formData.sex,
        //   phone: formData.phone,
        //   email: formData.email,
        //   roleId: RoleId[formData.role],
        //
        // };
        // console.log(params);
        console.log(data.formData);

        // adminChangeUser(params).then(()=>emit('afterChange'));
      });
      handleClose();
    };
    return {
      data,
      formRef,
      formData,
      handleClose,
      handleConfirm,
    };
  }
});
</script>

<style lang="scss" scoped>
.el-row{
  height: auto;
}
</style>
