<div align="center"> 
    <a href="https://github.com/my-msblog/msblog-ts"> 
        <img alt="Logo" width="200" height="200" src="https://ms-1258904389.cos.ap-nanjing.myqcloud.com/202111272341359.png">
    </a> 
<br> <br>

[![license](https://raster.shields.io/badge/LICENSE-MIT-green.svg)](LICENSE)
<h1>MS BLOG</h1>
</div>

## :book:简介
基于SpringBoot+vue3+TypeScript开发的前后端分离的博客系统，是一个免费开源博客系统，使用了最新的`vue3`,`vue/cli5`,`TypeScript`
等主流技术开发，覆盖了大多当前流行的技术包括`vuex`，`vue router`，`i18n`，`echarts`，`axios`
等，适合初学者学习。

## :white_circle:特性
- **技术栈**：使用 Vue3和vue/cli 等前端前沿技术开发
- **TypeScript**: 应用程序级 JavaScript 的语言
- **国际化**：内置完善的国际化方案

## :airplane: 预览
- [msblog-ts](https://github.com/my-msblog/msblog-ts) 前端GitHub预览地址
- [msblog-server](https://github.com/my-msblog/msblog-server) 后端预览地址

## 开始使用

- 获取项目代码

```bash
git clone https://github.com.cnpmjs.org/my-msblog/msblog-ts.git
```
- 安装依赖
```
cd msblog-ts

yarn install
```

- 运行
```
yarn serve
```

- 打包
```
yarn build
```

- 格式化代码
```
yarn lint
```

## ⚡️core

|  说明 | 技术 |
|  :----:  | :----: |
| 框架 | vue3 |
|  脚手架 | vue/cli@5.0.0-beta.4 |
|  语言 | TypeScript@4.1.5 |
| ui框架 | element-plus@1.1.0-beta.19|

## 📚目录结构

```
# msblog-ts
├─ .env.dev           # 开发环境
├─ .env.prod          # 生产环境
├─ .env               # 环境配置
├─ .eslintrc.js       # eslint
├─ public
│  ├─ favicon.ico
│  ├─ index.html
├─ src
│  ├─ api             # api 接口
│  ├─ assets          # 静态资源
│  ├─ components      # 全局组件
│  ├─ constant        # 常量/枚举
│  ├─ hooks           # hook
│  ├─ layout          # 布局
│  ├─ locales         # 国际化
│  ├─ plugins         # 插件
│  ├─ router          # 路由
│  ├─ store           # vuex store
│  ├─ styles          # 全局样式
│  ├─ utils           # 全局公共方法
│  └─ views           # 所有页面
│  ├─ App.vue         # 入口页面
│  ├─ main.ts         # 入口文件
│  └─ shims-vue.d.ts  # 模块注入
├─ tsconfig.json      # ts 编译配置
└─ vue.config.js      # vue-cli 配置
```
## 🚀Git 贡献提交规范
- 参考  [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范  ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))
    - `feat` 增加新功能
    - `fix` 修复问题/BUG
    - `style` 代码风格相关无影响运行结果的
    - `perf` 优化/性能提升
    - `refactor` 重构
    - `revert` 撤销修改
    - `test` 测试相关
    - `docs` 文档/注释
    - `chore` 依赖更新/脚手架配置修改等
    - `workflow` 工作流改进
    - `ci` 持续集成
    - `types` 类型定义文件更改
    - `wip` 开发中


## ⌛后台整合

- [msblog-server](https://github.com/my-msblog/msblog-server) - 基于 SpringBoot，结合了shiro+jwt、mybatis-plue、redis、和swagger-ui等进行开发的后端整合。

## 📄License

[MIT © MS-2021](./LICENSE)

## :nut_and_bolt: Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
