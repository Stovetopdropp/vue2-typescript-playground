import Vue from "vue";

import router from "@modules/core/js/router";
import store from "@modules/core/js/store";

import App from "@modules/core/components/App.vue";

export * from "@modules/core/js/validation";

Vue.config.productionTip = false;


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
