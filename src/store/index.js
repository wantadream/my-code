import Vue from 'vue';
import Vuex from 'vuex';
// import {routes} from '@/router';
Vue.use(Vuex)

const files = require.context("./modules", false, /\.js$/);
const modules = {};
files.keys().forEach((key) => {
	
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});
Object.keys(modules).forEach((key) => {
	
  modules[key]["namespaced"] = true;
});
// console.log(modules,11);
const store = new Vuex.Store({
  modules,
});

// const store = new Vuex.Store({
//   state: {
//     routes:[...routes]
//   },
//   mutations: {
//     increment(routes) {
//       console.log(routes);
//     },
//   },
//   actions: {
//     incrementAsync({ commit }) {
//       setTimeout(() => {
//         commit("increment");
//       }, 1000);
//     },
//   },
//   getters: {
//     getCount: (state) => state.routes,
//   },
// });


export default store