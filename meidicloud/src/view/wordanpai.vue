<template>
	<div>
	<head>
		<meta charset="UTF-8">
    	<meta name='renderer' content='webkit'>
    	<meta name="viewport" content="width=640,user-scalable=no"  />
    	<meta http-equiv=X-UA-Compatible content="chrome=1,IE=edge,IE=11">
	</head>
	
		
		<topheader></topheader>
		<div class="xiandenglu"
			v-if="isbox==false">请先登录</div>
		<div class="box" 
			v-if="isbox">
			<datedata></datedata>
		</div>		
		<batten :aaa='xinxi'></batten>
		<zhucetan></zhucetan>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	import chuanzhi from '../js/chuanzhi.js'
	import topheader from '../components/topheader'
	import datedata from '../components/datedata'
	import batten from '../components/batten'
	import zhucetan from '../components/zhucetanchuang'
	export default {
		components:{
			topheader,
			datedata,
			batten,
			zhucetan
			
		},
		data(){
			return{
				xinxi:3,
				isbox:false,
				dengfour:'',
				denglu:store.state.dengnow.yonghu
			}
		},
		mounted(){
			var _this=this
			chuanzhi.$on('zdenglu',function(a){
				_this.isbox=a
			})
		}
	}
</script>

<style>
	.box{
		padding-top: 100px;
		box-sizing: border-box;
	}
	.xiandenglu{
		padding-top: 100px;
		width: 640px;
		font-size: 23px;
		text-align: center;
	}
</style>