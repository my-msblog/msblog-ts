<template>
  <el-card>
    <el-table
      :data="tableData"
      stripe
      size="mini"
      ref="tableRef"
      @selection-change="handleSelectChange">
      <el-table-column type="selection" width="35" />
      <el-table-column
        type="index"
        width="50"
        :label="$t('pages.No')"
        align="center" />
      <el-table-column property="id" label="id" width="170" />
      <el-table-column property="username" :label="$t('pages.username')" />
      <el-table-column
        property="sex"
        :label="$t('pages.sex')"
        width="60"
        :formatter="setSex"
        align="center"
      />
      <el-table-column property="email" :label="$t('pages.email')" />
      <el-table-column property="phone" :label="$t('pages.phone')" />
      <el-table-column property="role" :label="$t('pages.role')" />
      <el-table-column
        :label="$t('pages.operation')"
        fixed="right"
        align="center"
        width="120">
        <template #default="scope">
          <el-button
            @click="editUser(scope.row)"
            type="text"
            size="small">
            {{ $t('pages.edit') }}
          </el-button>
          <el-button
            @click="deleteUser(scope.row)"
            type="text"
            size="small">
            {{ $t('pages.delete') }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="form_bottom">
      <div class="bot_btn">
        <el-button size="small" @click="handleDeselect">{{ $t('pages.deselect') }}</el-button>
        <el-button size="small" @click="handleDeleteList">{{ $t('pages.batch_delete') }}</el-button>
      </div>
      <el-pagination
        class="bot_page"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5,10]"
        :page-size="pageSize"
        :pager-count="5"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </div>
  </el-card>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref
} from 'vue';
import { ElMessage } from 'element-plus';
import { deleteList } from '@/api/admin/user-profile';
import { nullData } from '@/constant/Type';
import { useI18n } from 'vue-i18n';
import { getSex } from '@/constant/enums/sex';
import { UserProfileVO } from '@/api/model/admin/user-profile-model';

export default defineComponent({
  name: 'UserForm',
  props: {
    tableData: {
      type: Object as PropType<Array<UserProfileVO>>,
      default: nullData<UserProfileVO>(),
      request: true,
    },
    currentPage: { type: Number, default: 1 },
    pageSize: { type: Number, default: 5 },
    total: Number,
  },
  emits: [
    'sizeChange',
    'currentPage',
    'edit',
    'deleted',
    'deletedList'
  ],
  setup(prop, { emit }) {
    const { t } = useI18n();
    const data = reactive({
      pagination: {
        size: 5 as number,
        page: 1 as number,
      },
      selection: {
        idList: [] as Array<number>,
      },
    });
    const tableRef = ref();
    const handleSizeChange = function(size: number) {
      data.pagination.size = size;
      emit('currentPage', data.pagination);
    };
    const handleCurrentChange = function(page: number) {
      data.pagination.page = page;
      emit('currentPage', data.pagination);
    };
    const editUser = function (params: any) {
      emit('edit', params);
    };
    const deleteUser = function (params: any) {
      emit('deleted', params.id);
    };
    const handleDeselect = function () {
      tableRef.value.clearSelection();
    };
    const handleDeleteList = function () {
      if (data.selection.idList.length === 0) {
        ElMessage.warning({
          message: t('message.no_data_selected'),
          type: 'warning'
        });
      } else {
        deleteList(data.selection).then(() => {
          ElMessage.success({
            message: t('operation_success'),
            type: 'success'
          });
          emit('deletedList');
        });
      }
    };
    const handleSelectChange = function (select: Array<UserProfileVO>) {
      data.selection.idList = [];
      select.forEach(element => {
        data.selection.idList.push(element.id);
      });
    };
    const setSex = function (row: UserProfileVO) {
      return getSex(row.sex);
    };
    return {
      data,
      handleSizeChange,
      handleCurrentChange,
      editUser,
      deleteUser,
      tableRef,
      handleDeselect,
      handleDeleteList,
      handleSelectChange,
      setSex,
    };
  }
});
</script>

<style lang="scss">
.el-card__body{
  padding: 10px;
}
.form_bottom{
  overflow:hidden;
  padding: 10px 0 0;
  .bot_btn{
    float: left
  }
  .bot_page{
    float: right;
  }
}
</style>
