module.exports = {
  presets: [
    /**
     * references:
     * 
     * https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app
     * https://github.com/browserslist/browserslist#queries
     * https://babeljs.io/docs/options#targets
     */
    ['@vue/cli-plugin-babel/preset', {
      useBuiltIns: 'usage',
      targets: {
        "chrome": "58",
        "ie": "11"
      }
    }]
  ]
}
