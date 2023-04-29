<template>
  <div class="main">
    <div class="top">
      <div class="topTop">
        <div class="time">倒计时</div>
        <div class="lives">剩余次数</div>
      </div>
			<div class="icon">技能图标</div>
			<div class="daAn">
				<div class="input"></div>
				<div class="jineng"></div>
				<div class="button"></div>
			</div>
			<div>
				
			</div>
    </div>
		<div class="statistics">
			<div class="title">STATISTICS</div>
			<div class="chengji">
				<div class="l">Current streak</div>
				<div class="mid">Previous streak</div>
				<div class="r">longest streak</div>
			</div>
			<div class="right">
				rate of corrects answers
			</div>
		</div>
		<div class="history">
			<div class="top">HISTORY</div>
			<div class="historyList"></div>
		</div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Guess",
  data() {
    return {
      title: "GUESS THE LOL"
    };
  }
};
</script>

<style lang='scss' scoped>
.main{
	width: 80%;
	margin: 0 auto;
	background: red;
	.top{
		.topTop{
			width: 100px;
		}
	}
}
</style>