<template>
	<div class="headerbox">		
		<mt-header title="medicloud">		  
		  <mt-button icon="more" slot="right"></mt-button>
		</mt-header>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	import chuanzhi from '../js/chuanzhi.js'
	export default {
		data(){
			return {
				denglu:store.state.dengnow.yonghu
			}
		},
		methods:{
			dlcli(){
				if(this.denglu=='登录'){
					chuanzhi.$emit('test',true)
				}
			}
		},
		created(){
			this.denglu=store.state.dengnow.yonghu
		},
		mounted(){
//			console.log(this)
			const _this=this
			chuanzhi.$on('setdeng',function(a){
				setTimeout(()=>{
					_this.denglu=store.state.dengnow.yonghu
				},2000)
				
			})
			
		},
		watch:{
			
			denglu:(c,b)=>{
				
//				console.log(c)    //更新后数据
//				console.log(b)	  //更新前数据
				if(c=='米果'){
					console.log(11)
					chuanzhi.$emit('zdenglu',true)
				}else{
					chuanzhi.$emit('zdenglu',false)
				}
				immediate: true
			}
		}
	}
</script>

<style>
	.headerbox{		
		width: 100%;
	}
	.denglu{
		float: right;
		width: 90px;
		height: 40px;
		margin-top: 30px;
		font-size: 20px;
		line-height: 40px;
		text-align: center;
		color: white;
		background: gainsboro;
	}
</style>