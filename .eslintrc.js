module.exports = {
  root: true,
  parserOptions: {
    //parser: 'babel-eslint',
    parser: "@typescript-eslint/parser",
    sourceType: 'module',
    ecmaVersion: 2020,
  },
  // This parser must be used, otherwise typescript will not recognize @ and :
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
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
    '@vue/typescript/recommended'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-var': "error",// 禁止使用 var
    "no-unused-vars": "off",
    '@typescript-eslint/explicit-module-boundary-types':0,
    '@typescript-eslint/indent': ['error', 2],
    "@typescript-eslint/no-unused-vars": ["off"],//没有使用的参数，不会报错。
    "@typescript-eslint/no-empty-function":["off"], // 方法内部没有逻辑书写，不会报错
    "@typescript-eslint/no-explicit-any":["off"], // ts 定义数据类型为any不报错
    'import/extensions': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'no-alert': 0,
    'comma-spacing': 2, // 逗号后空格
    'semi-spacing': [0, { before: false, after: true }],// 分号后空格
    '@typescript-eslint/no-var-requires': 0,
    "array-bracket-spacing": ["error","always"],//括号内留空
    "object-curly-spacing": ["error","always"],
    'no-multi-spaces': 'error', // 禁止多个空格
    'semi': [2, 'always'],
    'comma-dangle': ['error', 'only-multiline'],
    'brace-style': [2, '1tbs', {'allowSingleLine': true}],
    'quotes': ['error', 'single'], // 使用单引号
    'dot-notation':0,
    'import/first':0,
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
    'vue/singleline-html-element-content-newline':0,
    'vue/html-closing-bracket-spacing': 'error',
    'vue/mustache-interpolation-spacing': 'error',
    'vue/html-indent': 'error',
    'space-before-function-paren':0,
    'no-irregular-whitespace':0,
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
    'vue/require-render-return': 'error',// render 函数必须有一个返回值
    'vue/require-v-for-key': 'error',//保证 v-bind:key 和 v-for 指令成对出现
    'vue/require-valid-default-prop': 'error',// 检查默认的prop值是否有效
    'vue/return-in-computed-property': 'error',// 保证computed属性中有return语句
    'vue/valid-template-root': 0,  // 校验 template 根节点
  }
}
