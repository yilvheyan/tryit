<template>
	<div>
	<head>
		<meta charset="UTF-8">
    	<meta name='renderer' content='webkit'>
    	<meta name="viewport" content="width=640,user-scalable=no"  />
    	<meta http-equiv=X-UA-Compatible content="chrome=1,IE=edge,IE=11">
	</head>
		
		<div class="xiangqingtop">
			<div class="fanhui"
				@click="xiangqclfanhui"><</div>
		</div>
		<div>这里是详情页面 {{msg}}</div>
	</div>
	
</template>

<script>
	import store from '../../vuex/store.js'
	export default {
		data(){
			return {
				msg:store.state.shouye[this.$route.params.id].stop 
			}
		},
		methods:{
			xiangqclfanhui(){
				this.$router.go(-1);
			}
		}
	}
</script>

<style>
.xiangqingtop{
	width: 100%;
	height: 75px;
	background: blue;
	padding-left: 10px;
	box-sizing: border-box;
}
.fanhui{
	color: white;
	height: 75px;
	line-height: 75px;
	text-align: left;
	font-size: 60px;
	width: 20px;
	float: left;
	
}
</style>