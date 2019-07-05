// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: [
        'plugin:vue/essential'
    ],
    plugins: [
        'vue',
        'html'
    ],
    rules: {
        'generator-star-spacing': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-trailing-spaces': 0,
        'space-before-function-paren': 0,
        'indent': ['error', 4]
    }
}
