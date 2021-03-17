<template>
	<div class="zhucetan"
		v-if="tanchuang"
		:style="{height:maxheight+'px'}">
		<div class="zhucetancenter">
			<div class="denglutan">登录
				<div class="dengluguanbi"
					@click="gbcli">关闭</div>
			</div>
			
			<div class="xinxitan">
				<span>用户名:</span>
				<input type="text" value="" v-model="textmsg"/>
			</div>
			<div class="xinxitan">
				<span>密码:</span>
				<input type="password" value="" v-model="passmsg"/>
			</div>
			<div style="width: 500px;">
			<button class="butenque"
				@click="butencli">确定</button></div>
			<div class="panduanzh"
				v-if="panduantan">账号密码不对</div>
		</div>	
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	import chuanzhi from '../js/chuanzhi.js'
	export default {
		data(){
			return {
				tanchuang:false,
				panduantan:false,
				maxheight:'',
				textmsg:'',
				passmsg:''
			}
		},
		created(){
			this.maxheight=window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
		},
		mounted(){
			var _this=this;
			chuanzhi.$on('test',function(a){				
				_this.tanchuang=a
			})
			
		},
		methods:{
			gbcli(){
				this.tanchuang=false
			},
			butencli(){
				const dengxinxi=store.state.weiyideng
				if(dengxinxi.zhanghao==this.textmsg&&dengxinxi.passwr==this.passmsg){
					store.commit('setdengnow','米果')
					this.tanchuang=false
					chuanzhi.$emit('setdeng',0)
				}else{
					this.panduantan=true
				}
			}
		}
	}
</script>

<style>
	.zhucetan{
		position: fixed;
		left: 0;
		top: 10px;
		width: 640px;
		background:rgba(0,0,0,0.5);
		padding-left: 12%;
		padding-top: 200px;
	}
	.zhucetancenter{
		z-index: 100;
		background: white;
		width: 500px;
	}
	.denglutan{
		width: 100%;
		height: 50px;
		background: blue;
		text-align: center;
		line-height: 60px;
		font-size: 20px;
		color: white;
	}
	.dengluguanbi{
		float: right;
		width: 35px;
		height: 25px;
		background: white;
		text-align: center;
		line-height: 25px;
		font-size: 12px;
		color: black;
	}
	.xinxitan{
		height: 30px;
		padding-top: 40px;
	}
	.xinxitan span{
		margin-left: 17px;
	}
	.xinxitan input{
		margin-left: 17px;
		height: 21px;
		border:1px solid black;
	}
	.butenque{
		width: 300px;
		height: 60px;
		margin-left:50% ;
		transform: translate(-50%,0);
		background: blue;
		text-align: center;
		line-height: 60px;
		font-size: 20px;
		color: white;
		margin-top:30px;
	}
	.panduanzh{
		width: 100%;
		height: 10px;
		text-align: center;
		color: red;
		font-size: 12px;
		margin-bottom:30px;
	}
</style>