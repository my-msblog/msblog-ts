module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  //------------
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    // '@vue/standard',
    // '@vue/typescript/recommended'
  ],
  rules: {
    // 禁止使用 var
    'no-var': "error",
    "no-unused-vars": "off",
    'no-extra-semi': 'error',
    '@typescript-eslint/indent': ['error', 2],
    "@typescript-eslint/no-unused-vars": ["off"],//没有使用的参数，不会报错。
    "@typescript-eslint/no-empty-function":["off"], // 方法内部没有逻辑书写，不会报错
    "@typescript-eslint/no-explicit-any":["off"], // ts 定义数据类型为any不报错
    'import/extensions': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-alert': 0,
    'no-multi-spaces': 'error', // 禁止多个空格
    'semi': [2, 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'quotes': ['error', 'single'], // 使用单引号
    'vue/no-unused-vars': 'error',
    'dot-notation':0,
    'import/first':0,
    // 'vue/singleline-html-element-content-newline':0,
    'vue/html-closing-bracket-spacing': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/html-indent': 'error',
    'space-before-function-paren':0,
    'vue/max-attributes-per-line':["error", {
      "singleline": {
        "max": 3,
        "allowFirstLine": true
      },
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    'vue/html-self-closing': 1,
    // render 函数必须有一个返回值
    'vue/require-render-return': 'error',
    //保证 v-bind:key 和 v-for 指令成对出现
    'vue/require-v-for-key': 'error',
    // 检查默认的prop值是否有效
    'vue/require-valid-default-prop': 'error',
    // 保证computed属性中有return语句
    'vue/return-in-computed-property': 'error',
    // 校验 template 根节点
    'vue/valid-template-root': 0,
  }
}
