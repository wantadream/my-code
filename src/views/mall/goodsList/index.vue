<template>
  <div>
    <input type="button" value="更改名字" @click="change" />
  </div>
</template>

<script>
export default {
  name: "goodsList",
  data() {
    return {
      food: {
        id: 1,
        name: "冰激凌"
      },
			a:0
    };
  },
	created(){
		
	},
  methods: {
    change() {
      this.food.name = "棒棒糖";
    },
		fn1(){
			let a=setInterval(() => {
				console.log(this.a++ +'秒');
			}, 100);
			setTimeout(() => {
				clearInterval(a)
			}, 2000);
		},
    async fn() {
      console.log(0);

      await new Promise(resolve => {
        setTimeout(() => {
          console.log(1);
          resolve();
        }, 1000);
      });

      setTimeout(() => {
        console.log(2);
      }, 0);

      console.log(3);
    }
  },
  watch: {
    // 第一种方式：监听整个对象，每个属性值的变化都会执行handler
    // 注意：属性值发生变化后，handler执行后获取的 newVal 值和 oldVal 值是一样的
    // food: {
    //   // 每个属性值发生变化就会调用这个函数
    //   handler(newVal, oldVal) {
    //     console.log("oldVal:", oldVal);
    //     console.log("newVal:", newVal);
    //   },
    //   // 立即处理 进入页面就触发
    //   immediate: true,
    //   // 深度监听 属性的变化
    //   deep: true
    // },
    // // 第二种方式：监听对象的某个属性，被监听的属性值发生变化就会执行函数
    // // 函数执行后，获取的 newVal 值和 oldVal 值不一样
    // "food.name"(newVal, oldVal) {
    //   console.log("oldVal:", oldVal); // 冰激凌
    //   console.log("newVal:", newVal); // 棒棒糖
    // }
  }
};
</script>

<style scoped>
</style>