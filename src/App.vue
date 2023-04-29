<template>
  <router-view></router-view>
</template>

<script>



export default {
  name: 'App',
	data() {
		return {
			input:"",
			bind:{
					clearable:false,
					disabled:true,placeholder:'xxx'
			}
		}
	},
}

</script>

<style scoped>

</style>
