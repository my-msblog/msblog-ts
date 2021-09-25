<template>
  <div>
    <div class="ui_banner">
      <p class="ui_title">{{ $t('message.personal_center') }}</p>
    </div>
    <el-card class="user_info_m">
      <el-row :gutter="20">
        <el-col :span="4">
          <el-avatar :size="80" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ store.getters.getUsername }}
          </p>
          <span>
            <el-tag size="small" :type="Number(store.getters.getUserSex) === 1 ? '' : 'danger'">
              {{ sex.getSex(store.getters.getUserSex) }}
            </el-tag>
          </span>
        </el-col>
        <el-col :span="2"> <el-tag effect="dark">{{ data.roleName }}</el-tag></el-col>
      </el-row>
    </el-card>
    <el-card class="user_info_o">
      <el-row :gutter="20">
        <el-col :span="4">
          <p class="title_info">{{ $t('message.user_info') }} </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font" />
        <el-col :span="2" class="text_el-col name-font">
          <el-button type="text" icon="el-icon-edit" @click="data.dialogFormVisible = true">{{ $t('message.edit') }}</el-button>
        </el-col>
      </el-row>
      <!-- 分割线 -->
      <el-divider />
      <el-row :gutter="20">
        <el-col :span="4">
          <p  class="left_title"> {{ $t('message.phone') }}: </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ store.getters.getPhone }}
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <p  class="left_title"> {{ $t('message.email') }}: </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ use.store.getters.getEmail }}
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <p class="left_title"> {{ $t('message.registration_time') }}: </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ use.store.getters.getUserCreateTime }}
          </p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="4">
          <p class="left_title"> {{ $t('message.introduction') }}: </p>
        </el-col>
        <el-col :span="18" class="text_el-col name-font">
          <p class="name-p">
            {{ use.store.getters.getUserIntroduction }}
          </p>
        </el-col>
      </el-row>
    </el-card>
    <user-edit-form
      :title="use.t('message.edit_info')"
      v-model="data.dialogFormVisible"
      :form-data="data.formData"
      @close-form="data.dialogFormVisible = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { getRole } from '@/api/client/user-info';
import { authentication } from '@/api/sys';
import { useStore } from 'vuex';
import UserEditForm from './user-edit-form/index.vue';
import { Role } from '@/constant/enums/role';
import * as sex from '@/constant/enums/sex';

export default defineComponent({
  name: 'UserInfo',
  components: { UserEditForm },
  setup() {
    const store = useStore();
    const data = reactive({
      dialogFormVisible: false,
      formData: {
        id: store.getters.getUserId,
        username: store.getters.getUsername,
        sex: store.getters.getUserSex,
        email: store.getters.getEmail,
        phone: store.getters.getPhone,
        code: '',
        introduction: store.getters.getUserIntroduction,
      },
      roleName: '',
    });
    const loadUserInfo = function() {
      authentication().then();
      getRole().then((res) => {
        data.roleName = Role[res];
      });
    };
    onMounted(() => {
      loadUserInfo();
    });
    return {
      data,
      sex,
      store,
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
