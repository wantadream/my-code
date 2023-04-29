<template>
  <div class="index">
    <div class="index-container">
      <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <el-alert class="info">
            <div
              style="display: flex; align-items: center; justify-content: center"
            >
              <a
                target="_blank"
                href="https://github.com/chuzhixin/vue-admin-better"
              >
                <img
                  style="margin-right: 10px"
                  src="https://img.shields.io/github/stars/chuzhixin/vue-admin-better?style=flat-square&label=Stars&logo=github"
                />
              </a>
              <p>
                愿所有美好纷沓而来！愿疫情早日消散，愿世界重归和平，愿祖国山河无恙！全民抗疫，众志成城，共克时艰！中国加油！
              </p>
            </div>
          </el-alert>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-card shadow="never">
            <div slot="header">
              <span>访问量</span>
            </div>
            <div class="echars"></div>
            <div class="bottom">
              <span>
                日均访问量:454684
              </span>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-card shadow="never">
            <div slot="header">
              <span>授权数</span>
            </div>
            <div class="echars"></div>
            <div class="bottom">
              <span>
                总授权数:
                {{ 6546841 }}
              </span>
            </div>
          </el-card>
        </el-col>
				<el-col
        v-for="(item, index) in iconList"
        :key="index"
        :xs="12"
        :sm="6"
        :md="3"
        :lg="3"
        :xl="3"
      >
        <router-link :to="item.link" target="_blank">
          <el-card class="icon-panel" shadow="never">
            <vab-icon
              :style="{ color: item.color }"
              :icon="['fas', item.icon]"
            ></vab-icon>
            <p>{{ item.title }}</p>
          </el-card>
        </router-link>
      </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>

export default {
  name: "MyIndex",
	data() {
		return {
			iconList: [
          {
            icon: 'video',
            title: '视频播放器',
            link: '/vab/player',
            color: '#ffc069',
          },
          {
            icon: 'table',
            title: '表格',
            link: '/vab/table/comprehensiveTable',
            color: '#5cdbd3',
          },
          {
            icon: 'laptop-code',
            title: '源码',
            link: 'https://github.com/chuzhixin/vue-admin-better',
            color: '#b37feb',
          },
          {
            icon: 'book',
            title: '书籍',
            link: '',
            color: '#69c0ff',
          },
          {
            icon: 'bullhorn',
            title: '公告',
            link: '',
            color: '#ff85c0',
          },
          {
            icon: 'gift',
            title: '礼物',
            link: '',
            color: '#ffd666',
          },

          {
            icon: 'balance-scale-left',
            title: '公平的世界',
            link: '',
            color: '#ff9c6e',
          },
          {
            icon: 'coffee',
            title: '休息一下',
            link: '',
            color: '#95de64',
          },
        ],
		}
	},
};
</script>

<style scoped>
.index {
  height: 1000px;
  background: #f6f8f9;
}
.index-container .info {
  padding: 20px;
  background: #fff;
  margin: 20px 0 20px 0;
  border: 1px solid #ebeef5;
}
.echars {
  height: 115px;
}
</style>