<template>
  <div>
    <h2>{{title}}</h2>
    <el-input
      :value="curVal"
      @input="(value) => $emit('input', value)"
			v-bind="bind"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: "MyInput",
  props: ["value",'bind','title'],
  data() {
    return {
      curVal: this.value,
    };
  },
  watch: {
    value: {
      handler(val) {
        this.curVal = val;
      },
    },
  },
}
</script>

<style scoped></style>
