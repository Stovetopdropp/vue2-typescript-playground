import Vue from "vue";
import App from "@modules/core/components/App.vue";
import router from "@modules/core/js/router";
import store from "@modules/core/js/store";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
