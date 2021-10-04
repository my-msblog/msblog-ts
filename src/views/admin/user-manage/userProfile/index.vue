<template>
  <div>
    <el-button type="success" size="small" @click="handleAddUser">{{ $t('message.add_user') }}</el-button>
    <UserTable
      :tableData="data.tableData"
      :current-page="data.currentPage"
      :page-size="data.pageSize"
      :total="data.total"
      @currentPage="handleCurrentPage"
      @sizeChange="handleCurrentPage"
      @edit="handleEdit"
      @deleted="handleDelete"
      @deletedList="handleDeleteList"
      class="u_form" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { adminUserPage, deletedUser } from '@/api/admin/user-profile';
import { ElMessage } from 'element-plus';
import { UserProfileVO } from '@/api/model/admin/user-profile-model';
import { Role } from '@/constant/enums/role';
import UserTable from './user-table/index.vue';
import { useI18n } from 'vue-i18n';
import { BaseDTO } from '@/api/model/core';
import * as sex from '@/constant/enums/sex';
export default defineComponent({
  name: 'UserProfile',
  components: { UserTable },
  setup() {
    const { t } = useI18n();
    const data = reactive({
      formShow: false,
      tableData: [] as UserProfileVO[],
      currentPage: 1,
      pagination: {
        page: 1,
        size: 5,
      } as BaseDTO,
      total: { type: Number, default:10 },
      pageSize: 5,
    });
    const handleAddUser = function () {
      data.formShow = true;
    };
    const handleUserPage = function (pagination: BaseDTO) {
      data.pagination = pagination;
      adminUserPage(data.pagination).then((res) => {
        data.tableData = res.list;
        data.currentPage = res.pageNum;
        data.pageSize = res.pageSize;
        data.total = res.total;
        data.tableData.forEach(item => {
          item.sex = sex.getSex(item.sex);
          item.role = Role[item.role];
        });
      });
    };
    const handleDelete = function (id: number) {
      deletedUser({ id: id }).then(() => {
        handleUserPage(data.pagination);
        ElMessage.success({
          message: t('message.operation_success'),
          type: 'success'
        });
      });
    };
    const handleCurrentPage = function (pagination: BaseDTO) {
      handleUserPage(pagination);
    };
    const handleDeleteList = function () {
      handleUserPage(data.pagination);
    };
    onMounted(() => {
      handleUserPage(data.pagination);
    });
    return {
      data,
      handleAddUser,
      handleUserPage,
      handleCurrentPage,
      handleDelete,
      handleDeleteList,
    };
  }
});
</script>

<style>
.u_form{
  margin-top: 15px;
}
</style>
