import { module } from './module';
export default {
  message: {
    language: '中文',
    successful_logout: '成功登出',
    input_phone: '请输入手机号',
    enter_email: '请输入邮箱',
    enter_username: '请输入用户名',
    sms_send_success: '验证码发送成功',
    modified_successfully: '修改成功',
    whether_to_modify_information: '是否修改信息?',
    tips: '提示',
    confirm: '确定',
    cancel: '取消',
    get_captcha: '获取验证码',
    captcha: '验证码',
    introduce_yourself_briefly: '简单的介绍下自己吧'
  },
  pages:{
    ...module.pages.zh,
  },
  bar:{
    title: 'MS BLOG',
    categories: '分类',
    homepage: '首页',
    tags: '标签',
    archives: '归档',
    about: '关于',
    links: '链接',
    login: '登录',
    change_password: '修改密码',
    personal_center: '个人中心',
  },
  router: {
    ...module.route.zh,
  },
  sex: {
    male: '男',
    female: '女'
  },
  role: module.role.zh

};
