<template>
  <div class="mainCon">
    <VabSideBar></VabSideBar>
    <div class="content">
      <div class="header">
        <!-- <div v-for="item in visitedRoutes" :key="item.path">
					{{item.path}}
				</div> -->
        <div><p class="all" @click="click">进入全屏</p></div>
        <VabTabsBar></VabTabsBar>
      </div>
      <div class="rv">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";


export default {
  name: "LayOut",
  data() {
    return {};
  },
  created() {
    // axios.post("/colorfulIcon/getList",{}).then(res=>{console.log(res)},rej=>{console.log(rej);})
    // 输出结果
    // console.log(JSON.stringify(data, null, 4));
  },
  methods: {
    click() {
      if (!screenfull.isEnabled) {
        this.$baseMessage("开启全屏失败", "error");
        return false;
      }
      screenfull.toggle();
      this.$emit("refresh");
    }
  }
};
</script>

<style  scoped>
.mainCon {
  display: flex;
  /* width: 100vw; */
  height: 100vh;
  position: relative;
  padding-top: 115px;
}

.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 235px;
}

.tabs-content {
  width: calc(100%-90px);
  height: 34px;
}

.tabs-content .el-tabs__item {
  box-sizing: border-box;
  height: 34px;
  margin-right: 5px;
  border: 1px solid #dcdfe6;
}
.all {
  width: 100px;
  background: #cbf8e2;
}
.header {
  height: 100px;
  background: rgb(255, 255, 255);
  /* width: calc(100% - 235px); */
  margin-left: 235px;
  flex-shrink: 0;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 997;
}

.rv {
  flex: 1;
  width: calc(100% - 40px);

  /* padding-top: 80px; */
}
</style>
