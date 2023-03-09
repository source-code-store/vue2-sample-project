import Vue from "vue";

export function createPage(app: any, config: any = {}) {
  Vue.config.productionTip = false;

  const instance = new Vue({
    render: (h) => h(app),
    router: config.router
  }).$mount('#app');

  return {
    instance
  };
}