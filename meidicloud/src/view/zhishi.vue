<template>
	<div>
	<head>
		<meta charset="UTF-8">
    	<meta name='renderer' content='webkit'>
    	<meta name="viewport" content="width=640,user-scalable=no"  />
    	<meta http-equiv=X-UA-Compatible content="chrome=1,IE=edge,IE=11">
	</head>
	
		
		<topheader></topheader>
		<div class="box">
			<zhishilist :m='msg1'></zhishilist>
		</div>		
		<batten :aaa='xinxi'></batten>
		<zhucetan></zhucetan>
	</div>
</template>

<script>
	import topheader from '../components/topheader'
	import zhishilist from '../components/zhishilist'
	import batten from '../components/batten'
	import zhucetan from '../components/zhucetanchuang'
	export default {
		components:{
			topheader,
			zhishilist,
			batten,
			zhucetan
			
		},
		data(){
			return{
				xinxi:1,
				msg1:'zsstore'
			}
		}
	}
</script>

<style>
	.box{
		padding-top: 100px;
		box-sizing: border-box;
	}
</style>