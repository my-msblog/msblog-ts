<template>
  <div>
    <el-card>
      <div class="table_top">
        <span class="u_table_title">{{ $t('pages.user_list') }}</span>
        <div class="u_table_toolbar">
          <el-button type="success" size="mini" @click="handleAddUser">{{ $t('pages.add_user') }}</el-button>
          <el-divider direction="vertical" />
          <el-icon :size="15">
            <refresh-right />
          </el-icon>
        </div>
      </div>
      <el-table
        :data="tableData"
        stripe
        border
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
        <el-table-column property="role" :label="$t('pages.role')" :formatter="setRole" />
        <el-table-column
          :label="$t('pages.operation')"
          fixed="right"
          align="center"
          width="150">
          <template #default="scope">
            <el-switch
              v-model="scope.row.deleted"
              class="table_switch"
              active-color="#13ce66"
              :active-value="0"
              :inactive-value="1"
              :validate-event="false"
              @change="handleStatusChange(scope.row)"
            />
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
    <AddUser
      v-model="data.addFormShow"
      :title="$t('pages.add_user')"
      @addSuccess="handleCurrentChange(data.pagination.page)"
      @close = "data.addFormShow = false"
    />
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  reactive,
  ref
} from 'vue';
import { ElMessage } from 'element-plus';
import { RefreshRight } from '@element-plus/icons';
import AddUser from './AddUser.vue';
import { deleteList, userStatusChange } from '@/api/admin/user-profile';
import { NullArray } from '@/constant/Type';
import { useI18n } from 'vue-i18n';
import { getSex } from '@/constant/enums/sex';
import { StatusDTO, UserProfileVO } from '@/api/model/admin/user-profile';
import { getStatusEnum } from '@/constant/enums/disable';

export default defineComponent({
  name: 'UserForm',
  components: { RefreshRight, AddUser },
  props: {
    tableData: {
      type: Object as PropType<Array<UserProfileVO>>,
      default: NullArray<UserProfileVO>(),
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
    'deletedList',
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
      addFormShow: false,
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
    const handleAddUser = function () {
      data.addFormShow = true;
    };
    const setSex = function (row: UserProfileVO) {
      return getSex(row.sex);
    };
    const setRole = function (row: UserProfileVO) {
      return t('role.' + row.role);
    };
    const handleStatusChange = function (row: UserProfileVO){
      const params: StatusDTO = {
        id: row.id,
        username: row.username,
        status: row.deleted,
      };
      userStatusChange(params).then(()=> {
        ElMessage.success({
          message: t('operation_success'),
          type: 'success'
        });
      });
    };
    return {
      data,
      handleSizeChange,
      handleCurrentChange,
      editUser,
      deleteUser,
      tableRef,
      handleAddUser,
      handleDeselect,
      handleDeleteList,
      handleSelectChange,
      setSex,
      setRole,
      getStatusEnum,
      handleStatusChange,
    };
  }
});
</script>

<style lang="scss" scoped>
.table_top{
  margin-bottom: 10px;
  display: flex;
  .u_table_title{
    display: flex;
    padding-left: 7px;
    font-size: 16px;
    font-weight: 500;
    line-height: 28px;
    text-align: center;
    color: #000000d9;
    cursor: pointer;
  }
  .u_table_toolbar{
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    display: flex;
  }
}

.table_switch{
  margin-right: 10px;
}
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
