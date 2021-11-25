# msblog-ts


- Get the project code

```bash
git clone https://github.com.cnpmjs.org/my-msblog/msblog-ts.git
```
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### ⚡️core

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



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
