<template>
  <div class="tabs-bar-container">
    <el-tabs
      v-model="tabActive"
      type="card"
      data-name="ele"
      class="tabs-content"
      @tab-click="handleTabClick"
      @tab-remove="handleTabRemove"
    >
      <el-tab-pane
        v-for="item in visitedRoutes"
        class="a"
        :key="item.path"
        :label="item.meta.title"
        :name="item.path"
        :closable="!isAffix(item)"
      >
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import screenfull from "screenfull";
import { mapGetters, mapState } from "vuex";
import path from "path-browserify";

export default {
  name: "VabTabsBar",
  data() {
    return {
      affixtabs: [],
      tabActive: ""
    };
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$baseMessage("开启全屏失败", "error");
        return false;
      }
      screenfull.toggle();
      this.$emit("refresh");
    },
    addtabs() {
      const { name } = this.$route;

      if (name) {
        // this.$store.commit('tabsBar/addVisitedRoute',this.$route)
        // this.$sotre.commit('tabsBar/addVisitedRoutes',this.$route)
        this.$store.commit("tabsBar/addVisitedRoute", this.$route);
      }

      return false;
    },
    handleTabClick(tab) {
      const route = this.visitedRoutes.filter((item, index) => {
        if (tab.index == index) return item;
      })[0];
      if (this.$route.path !== route.path) {
        this.$router.push({
          path: route.path,
          query: route.query,
          fullPath: route.fullPath
        });
      } else {
        return false;
      }
    },
    async handleTabRemove(tabActive) {
      let view;
      this.visitedRoutes.forEach(item => {
        if (tabActive == item.path) view = item;
      });
      const { visitedRoutes } = await this.$store.dispatch(
        "tabsBar/delRoute",
        view
      );
      if (this.isActive(view)) {
        this.toLastTag(visitedRoutes, view);
      }
    },
    isAffix(tab) {
      return tab.meta && tab.meta.affix;
    },
    isActive(route) {
      return route.path === this.$route.path;
    },
    toLastTag(visitedRoutes) {
      const latestView = visitedRoutes.slice(-1)[0];
      if (latestView) {
        this.$router.push(latestView);
      } else {
        this.$router.push("/");
      }
    },
    filterAffixtabs(routes, basePath = "/") {
      let tabs = [];
      routes.forEach(route => {
        if (route.meta && route.meta.affix) {
          const tagPath = path.resolve(basePath, route.path);
          tabs.push({
            fullPath: tagPath,
            path: tagPath,
            name: route.name,
            meta: { ...route.meta }
          });
        }
        if (route.children) {
          const temptabs = this.filterAffixtabs(route.children, route.path);
          if (temptabs.length >= 1) {
            tabs = [...tabs, ...temptabs];
          }
        }
      });
      return tabs;
    },
    inittabs() {
      const affixtabs = (this.affixtabs = this.filterAffixtabs(this.routes));
      for (const tag of affixtabs) {
        if (tag.name) {
          this.$store.dispatch("tabsBar/addVisitedRoute", tag);
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      visitedRoutes: "tabsBar/visitedRoutes",
      routes: "routes/routes"
    }),
    ...mapState({
      // visitedRoutes:state=>state.visitedRoutes
    }),
    num() {
      return 1;
    }
    // visitedRoutes() {
    //   return this.$store.state.tabsBar.visitedRoutes;
    // }
  },
  created() {
    // console.log(this.visitedRoutes)
  },
  watch: {
    $route: {
      handler() {
        this.inittabs();
        this.addtabs();

        let tabActive = "";
        this.visitedRoutes.forEach(item => {
          if (item.path === this.$route.path) {
            tabActive = item.path;
          }
        });
        this.tabActive = tabActive;
      },
      immediate: true
    }
  }
};
</script>

<style lang='scss' scoped>

.tabs-bar-container {
  position: relative;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  height: $base-tabs-bar-height;
  padding-right: $base-padding;
  padding-left: $base-padding;
  user-select: none;
  background: $base-color-white;
  border-top: 1px solid #f6f6f6;

  ::v-deep {
    .fold-unfold {
      margin-right: $base-padding;
    }
  }

  .tabs-content {
    width: calc(100% - 90px);
    height: $base-tag-item-height;

    ::v-deep {
      .el-tabs__nav-next,
      .el-tabs__nav-prev {
        height: $base-tag-item-height;
        line-height: $base-tag-item-height;
      }

      .el-tabs__header {
        border-bottom: 0;

        .el-tabs__nav {
          border: 0;
        }

        .el-tabs__item {
          box-sizing: border-box;
          height: $base-tag-item-height;
          margin-right: 5px;
          line-height: $base-tag-item-height;
          border: 1px solid $base-border-color;
          border-radius: $base-border-radius;
          transition: padding 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) !important;
          &.is-active {
            border: 1px solid $base-color-blue;
          }
        }
      }
    }
  }

  .more {
    display: flex;
    align-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>