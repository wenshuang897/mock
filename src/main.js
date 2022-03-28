import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import myplugin from "./plugins/myplugin.js";
import "./style/index.css" //全局样式
import store from "@/store/store.js"
Vue.use(myplugin)
Vue.config.productionTip = false;
Vue.use(ElementUI);

if(process.env.NODE_ENV =='development'){
  require("./mock")
}
let vm = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
console.log(vm)
