import Vue from "vue";

const components = require.context("../components", true, /\.vue$/);

components.keys().forEach((fileName) => {
	const componentConfig = components(fileName);
  Vue.component(componentConfig.default.name, componentConfig.default);
});


const layoutComponents = require.context("@/layouts/components", true, /\.vue$/);

layoutComponents.keys().forEach((fileName) => {
	const componentConfig = layoutComponents(fileName);

  Vue.component(componentConfig.default.name, componentConfig.default);
});