<template>
  <div class="cfi">
    <el-row :gutter="20">
      <el-col :span="24">
        <el-divider content-position="left"
          >点击图标即可复制源码</el-divider
        ></el-col
      >

      <el-col :span="24">
        <el-form :inline="true" label-width="80px" @submit.native.prevent>
          <el-form-item label="图标名称">
            <el-input v-model="queryForm.title"></el-input>
          </el-form-item>
          <el-form-item label-width="0">
            <el-button native-type="submit" type="primary" @click="queryData"
              >搜索</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>

      <el-col
        v-for="(item, index) in queryIcon"
        :key="index"
        :xs="6"
        :sm="8"
        :md="2"
        class="lastCol"
      >
        <el-card
          shadow="hover"
          style="cursor:pointer"
          @click.native="handleCopyIcon(index, $event)"
        >
          <vab-colorful-icon
            :icon-class="
              `https://fastly.jsdelivr.net/gh/chuzhixin/zx-colorful-icon@master/${item}.svg`
            "
          />
        </el-card>
        <div class="icon-text">{{ item }}</div>
      </el-col>

      <el-col :span="24">
        <el-pagination
          :background="background"
          :current-page="queryForm.pageNo"
          :page-size="queryForm.pageSize"
          :page-sizes="[72, 144, 216, 288]"
          :layout="layout"
          :total="total"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getIconList } from "@/api/icon";
import clip from '@/utils/clipboard'
export default {
  name: "ColorfulIcon",
  data() {
    return {
      layout: "total, sizes, prev, pager, next, jumper",
      total: 0,
      background: true,
      queryIcon: [],
      queryForm: {
        pageNo: 1,
        pageSize: 72,
        title: ""
      }
    };
  },
  created() {
    // eslint-disable-next-line

    this.fetchData();
  },
  methods: {
    queryData() {
      this.queryForm.pageNo = 1;
      this.fetchData();
    },
    handleSizeChange(val) {
      this.queryForm.pageSize = val;
      this.fetchData();
    },
    handleCurrentChange(val) {
      this.queryForm.pageNo = val;
      this.fetchData();
    },
    async fetchData() {
      const { data, totalCount } = await getIconList(this.queryForm);
      this.queryIcon = data;
      this.allIcon = data;
      this.total = totalCount;
    },
    handleCopyIcon(index, event) {
      // console.log(event);
      const copyText = `<vab-colorful-icon icon-class="${this.queryIcon[index]}" />`
      this.copyText = copyText;
      clip(copyText,this.$message,event);
    }
  }
};
</script>

<style lang='scss' scoped>
.cfi {
  ::v-deep {
    .el-card__body {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center; /* 垂直居中 */
      justify-content: center; /* 水平居中 */

      svg:not(:root) {
        font-size: 16px;
        font-weight: bold;
        color: $base-color-gray;
        text-align: center;
        vertical-align: middle;
        pointer-events: none;
        cursor: pointer;
      }

      .svg-external-icon {
        width: 20px;
        height: 18px;
      }
    }
  }

  .icon-text {
    height: 30px;
    margin-top: 0px;
    overflow: hidden;
    font-size: 12px;
    line-height: 30px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
