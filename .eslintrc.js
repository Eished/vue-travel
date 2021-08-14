// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',

    'comma-dangle': ['error', 'only-multiline'],
    // never（默认）不允许尾随逗号
    // always 需要尾随逗号
    // "only-multiline"允许（但不要求）, 后面跟括号则不允许
    // "always-multiline" 后面跟括号也需要

    // anonymous 针对匿名函数表达式 (比如 function () {})。
    // named 针对命名的函数表达式 (比如 function foo () {})。
    // asyncArrow 针对异步的箭头函数表达式 (比如 async () => {})。
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'always',
      },
    ],
    'no-new': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  globals: {
    document: true,
    window: true,
    Vue: true,
  },
}
