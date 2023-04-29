import Vue from "vue";
import ElementUI from "element-ui";

import App from "./App.vue";
import router from "./router";
import store from '@/store/index'
import '@/components/export';
import '@/styles/style.css'
import "element-ui/lib/theme-chalk/index.css";
import "normalcss/reset.css";

Vue.use(ElementUI);

new Vue({
	el: "#app",
	router,
	store,
  render: (h) => h(App),
});
