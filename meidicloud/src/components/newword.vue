<template>
	<div>
		<div class="mastlist"
			@click="mastlistclick(index)"
			v-for="(i,index) in formastlist">
			<img class="leftimg" :src="i.img"/>
			<div class="mastrigth">
				<h3>{{i.stoh3}}</h3>
				<p>{{i.stop}}</p>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	export default {
		data(){
			return{
				formastlist:store.state.shouye,
				isbianyuan:false
			}
		},
		methods:{
			mastlistclick(index){
				this.$router.push({path:'/xiangqing/'+(index+1)})
			}
		}
	}
</script>

<style>
	.mastlist{
		padding: 10px;
		box-sizing: border-box;
		width: 640px;
		height: 180px;
		border:#CCCCCC solid 1px;
	}
	.leftimg{
		float: left;
		width: 160px;
		height: 160px;
	}
	.mastrigth{
		padding-left: 10px;
		box-sizing: border-box;
		float: left;
		width: 440px;
		height: 160px;
		overflow: hidden;
	}
	h3{
		text-align: center;
	}
	p{
		text-indent:2em;
	}
	
</style>