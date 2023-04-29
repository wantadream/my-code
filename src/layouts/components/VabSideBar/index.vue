<template>
  <div class="l">
    <el-menu default-active="2" :router="true" class="el-menu-vertical-demo">
      
			<template v-for="route in routes">
        <VabSideBarItem
          :key="route.path"
          :full-path="route.path"
          :item="route"
        />
      </template>

   
    </el-menu>
  </div>
</template>

<script>

export default {
  name: "VabSideBar",
  computed: {
    a() {
      
      return "sf";
    },
    routes() {
      return this.$store.state.routes.routes;
    }
  },
  created() {
    
  }
};
</script>

<style scoped>

.l {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  width: 235px;
  background: seagreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
.l > * {
  min-height: 50px;
  width: 100%;
  line-height: 50px;
  /* border-bottom: black 1px solid; */

  /* text-align: center; */
}
</style>