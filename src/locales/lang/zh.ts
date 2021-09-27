import { module } from './module';
export default {
  message: {
    language: '中文',
    successful_logout: '成功登出',
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
