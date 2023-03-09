module.exports = {
  "root": true,
  "globals": {
    "$": true,
  },
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript"
  ],
  "parserOptions": {
    "parser": "@typescript-eslint/parser"
  },
  rules: {
    // override/add rules settings here, such as:
    'vue/no-unused-vars': 'off',
    "no-unused-vars": "off",
    "vue/multi-word-component-names": "off",
    "vue/first-attribute-linebreak": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/html-indent": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/html-self-closing": "off",
    "vue/attributes-order": "off",
    "vue/order-in-components": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/mustache-interpolation-spacing": "off",
    "vue/no-template-shadow": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/attribute-hyphenation": "off",
    "vue/max-attributes-per-line": "off",
    "vue/v-bind-style": "off",
    "vue/v-on-style": "off",
    "vue/html-quotes": "off",
    "vue/no-multi-spaces": "off",
    "vue/no-v-html": "off",
    "vue/component-definition-name-casing": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/no-useless-template-attributes": "warn",
    "vue/valid-v-show": "warn",
    "no-undef": "warn"
  },
  // parserOptions: {
  //   parser: '@typescript-eslint/parser',
  //   ecmaVersion: 6,
  //   sourceType: 'module',
  //   ecmaFeatures: {}
  // }
}