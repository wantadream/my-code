<template>
  <component
    :is="menuComponent"
    v-if="!item.hidden"
    :item="item"
		
    :full-path="fullPath"
    :route-children="routeChildren"
  >
    <template v-if="item.children && item.children.length">
      <VabSideBarItem
        v-for="route in item.children"
        :key="route.path"
        :full-path="handlePath(route.path)"
        :item="route"
				
      >
        
      </VabSideBarItem>
    </template>
  </component>
</template>

<script>
import { isExternal } from "@/utils/validate";
import path from "path-browserify";
export default {
  name: "VabSideBarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    fullPath: {
      type: String,
      default: ""
    }
  },
  computed: {
    menuComponent() {
			// 三个条件与，结果为true 返回VabMenuItem 否则返回VabSubmenu
			// 第一个条件，children中需要显示的元素数量为0或1 则为true
			// 第二个条件 	
      if (				
        this.handleChildren(this.item.children, this.item) &&
        (!this.routeChildren.children || this.routeChildren.notShowChildren) &&
        !this.item.alwaysShow
      ) {
        return "VabMenuItem";
      } else {
        return "VabSubmenu";
      }
    }
  },
  methods: {
		
    handleChildren(children = [], parent) {
			// 如果子节点为null 那就把空数组赋值给children
      if (children === null) children = [];
			// 把子节点里hidden属性不为true的元素给showChildren，
			// showChildren 需要显示的元素
      const showChildren = children.filter(item => {
        if (item.hidden) {
          return false;
        } else {
					
					
          this.routeChildren = item;
					
          return true;
        }
      });
			// 如果showChildren的长度为1 返回true
      if (showChildren.length === 1) {
        return true;
      }
			// 如果showChildren的长度为0 那就把父节点的属性给routeChildren
			// 然后添加属性，path：notShowChildren，
			// 返回true

			// 其余情况返回false
      if (showChildren.length === 0) {
        this.routeChildren = {
          ...parent,
          path: "",
          notShowChildren: true
        };
        return true;
      }
      return false;
    },
    handlePath(routePath) {
      if (isExternal(routePath)) {
        return routePath;
      }
      if (isExternal(this.fullPath)) {
        return this.fullPath;
      }
      return path.resolve(this.fullPath, routePath);
    }
  }
};
</script>

<style scoped>
</style>