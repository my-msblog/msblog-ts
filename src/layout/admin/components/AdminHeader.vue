<template>
  <div>
    <div class="left_logo">
      <img src="@/assets/icon2.png" class="icon_logo" alt="">
      <div class="logo_text">{{ $t('bar.title') }}</div>
    </div>
    <div class="ah_right">
      <el-row
        :gutter="10"
        justify="space-around"
        align="middle">
        <el-col :span="5">
          <el-tooltip effect="dark" :content="$t('message.blog_home')" placement="bottom-start">
            <div @click="backHome">
              <el-icon>
                <monitor style="width: 1.3em; height: 1.3em; margin-right: 7px" />
              </el-icon>
            </div>
          </el-tooltip>
        </el-col>
        <el-col :span="12">
          <Language class="ah_change" />
        </el-col>
        <el-col :span="7">
          <div>
            <el-dropdown style="" @command="handleCommand">
              <el-avatar icon="el-icon-user-solid" size="small" />
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="pwd_change">{{ $t('message.change_password') }}</el-dropdown-item>
                  <el-dropdown-item command="logout">{{ $t('message.logout') }}</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { logout } from '@/api/sys';
import { ElMessage } from 'element-plus';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Monitor } from '@element-plus/icons';
import { openFullScreen } from '@/components/loading';

export default defineComponent({
  name: 'AdminHeader',
  components: { Monitor },
  setup() {
    const { t } = useI18n();
    const router = useRouter();
    const store = useStore();
    const data = reactive({});
    const handleCommand = function (command: string) {
      switch (command) {
        case 'pwd_change':
          break;
        case 'logout':
          logout().then(() => {
            store.commit('clearUser');
            ElMessage({
              message: t('message.successful_logout'),
              type: 'success',
              duration: 2 * 1000,
            });
          }).catch((err) => {
            console.error(err);
          });
          openFullScreen(t('being_exited'), goHome);
          break;
        default:
          break;
      }
    };
    const backHome = () => {
      router.push('/home');
    };
    const goHome = () => {
      backHome();
      store.commit('clearUser');
    };
    return {
      data,
      handleCommand,
      backHome,
    };
  }
});
</script>

<style lang="scss">
@import 'src/styles/constant.scss';
.el-row{
  display:flex;
  flex-wrap: wrap;
  height: #{$admin_header_height};
}

.ah_right{
  text-align: center;
  display: block;
  float: right;
  margin-right: 15px;
}
.ah_change{
  color: #000 !important;
  margin: 0 !important;
}

.left_logo{
  float: left;
  text-align: center;
  align-items: center;
  height: #{$admin_header_height};
  display: flex;
  .icon_logo{
    width: 40px;
    margin-left: 20px;
    /*line-height: $admin_header_height;*/
  }
  .logo_text{
    margin-left: 15px;
    text-align: center;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
    color: rgba(0,0,0,0.9);
  }
}
.text{
  // font-weight: bold;
  // font-size: 18px;
  width: 245px;
  text-shadow: 0.05rem 0.05rem 0.1rem rgba(0, 0, 0, 0.3);
  color: rgba(0,0,0,0.9);
  text-decoration: none;
  text-align: center;
  margin-top: auto;
}
</style>
