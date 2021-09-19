export default {
  setCodeKey(state: any, code: string) {
    state.code_key = code;
  },
  clearUser(state: any) {
    sessionStorage.clear();
    state.user_id = 0;
    state.username = '';
    state.user_token = '';
    state.user_email = '';
    state.user_phone = '';
    state.user_introduction = '';
    state.permission_menu = [];
  },
};
