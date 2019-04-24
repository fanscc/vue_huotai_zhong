import Vue from "vue";
import VCharts from "v-charts";

// 地图
import BaiduMap from "vue-baidu-map";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@/styles/index.scss";
import "normalize.css/normalize.css";
import App from "./App.vue";
import router from "./router/index";
import store from "./store";
import "@/icons"; // icon

import "@/permission";

Vue.use(VCharts);
Vue.use(ElementUI);
// 地图
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "aEqbp6FKpETwT7Y8vDYDks8I5SoWxihk"
});

Vue.use(ElementUI, {
  size: "medium"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
