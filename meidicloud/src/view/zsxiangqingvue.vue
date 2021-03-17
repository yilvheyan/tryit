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
		<div>这里是知识部分详情页面{{msg}}</div>
	<div class="szbian"
		v-for="(i,index) in szxiangqinglist">
			<h3 class="szlistmast">{{i.szmast}}</h3>
			<div v-for="(c,index) in i.children" 
				class="text-wrapper">
				{{c.szmast}}
				<img :src='c.img' />
				<!--<img src="../../../static/MVC1.png" />-->
			</div>
		</div>
	</div>
	
</template>

<script>
	import store from '../vuex/store.js'
	export default {		
		data(){
			return {
				szxiangqinglist:'',
				msg:'',
				szxiangqinglistchild:''
			}
		},
		mounted(){
			if(this.$route.params.id=='MVCMVPMVVM'){
				this.szxiangqinglist=store.state.zsxiangqing.mvcpvm;
			}if(this.$route.params.id=='HTML'){
				this.szxiangqinglist=store.state.zsxiangqing.HTMLll;
			}if(this.$route.params.id=='CSS'){
				this.szxiangqinglist=store.state.zsxiangqing.CSSll;
			}if(this.$route.params.id=='数组'){
				this.szxiangqinglist=store.state.zsxiangqing.oarry;
			}if(this.$route.params.id=='基础'){
				this.szxiangqinglist=store.state.zsxiangqing.vuechuangjian;
			}if(this.$route.params.id=='字符串'){
				this.szxiangqinglist=store.state.zsxiangqing.zifuchuan;
			}if(this.$route.params.id=='日期和Math函数'){
				this.szxiangqinglist=store.state.zsxiangqing.riqiandmath;
			}if(this.$route.params.id=='强制和隐性转换'){
				this.szxiangqinglist=store.state.zsxiangqing.qiangzhuanhua;
			}if(this.$route.params.id=='正则'){
				this.szxiangqinglist=store.state.zsxiangqing.zhengze;
			}if(this.$route.params.id=='this问题及改变'){
				this.szxiangqinglist=store.state.zsxiangqing.thiswenti;
			}if(this.$route.params.id=='jsonp'){
				this.szxiangqinglist=store.state.zsxiangqing.jsonpl;
			}if(this.$route.params.id=='原型'){
				this.szxiangqinglist=store.state.zsxiangqing.yuanxing;
			}if(this.$route.params.id=='面向对象'){
				this.szxiangqinglist=store.state.zsxiangqing.mianxiangduixiang;
			}if(this.$route.params.id=='闭包函数'){
				this.szxiangqinglist=store.state.zsxiangqing.bibaosto;
			}if(this.$route.params.id=='基础'){
				this.szxiangqinglist=store.state.zsxiangqing.vuechuangjian;
			}if(this.$route.params.id=='模板'){
				this.szxiangqinglist=store.state.zsxiangqing.vuemuban;
			}if(this.$route.params.id=='常用'){
				this.szxiangqinglist=store.state.zsxiangqing.vuechangyong;
			}
//			if(this.$route.params.id=='细节'){
//				this.szxiangqinglist=store.state.zsxiangqing.vuexsto;
//			}
			 if(this.$route.params.id=='vuex,axios'){
				this.szxiangqinglist=store.state.zsxiangqing.vuexsto;
			}if(this.$route.params.id=='git指令'){
				this.szxiangqinglist=store.state.zsxiangqing.TortoiseGit;
			}
//			if(this.$route.params.id=='TortoiseGit'){
//				this.szxiangqinglist=store.state.zsxiangqing.TortoiseGit;
//			}
			if(this.$route.params.id=='页面优化'){
				this.szxiangqinglist=store.state.zsxiangqing.yemianyouhuasto;
			}if(this.$route.params.id=='前端存储'){
				this.szxiangqinglist=store.state.zsxiangqing.qianduancunchusto;
			}
			//以下是后端
			if(this.$route.params.id=='npm,npx,cnpm,nvm的使用'){
				this.szxiangqinglist=store.state.zsxiangqinghou.npxilie;
			}if(this.$route.params.id=='node使用'){
				this.szxiangqinglist=store.state.zsxiangqinghou.nodesto;
			}
			//以下是数据库
			if(this.$route.params.id=='基本操作增删改查'){
				this.szxiangqinglist=store.state.zsxiangqingshuju.mongodb;
			}
			//以下是框架
			if(this.$route.params.id=='Element'){
				this.szxiangqinglist=store.state.zsxiangqingkuangjia.Elementsto;
			}if(this.$route.params.id=='MintUI'){
				this.szxiangqinglist=store.state.zsxiangqingkuangjia.MintUI;
			}if(this.$route.params.id=='BootstrapVue'){
				this.szxiangqinglist=store.state.zsxiangqingkuangjia.BootstrapVue;
			}
			//以下是ES6
			if(this.$route.params.id=='新增'){
				this.szxiangqinglist=store.state.zsxiangqingES6.xinzeng;
			}if(this.$route.params.id=='Promise'){
				this.szxiangqinglist=store.state.zsxiangqingES6.promisesto;
			}
			//以下是linux
			if(this.$route.params.id=='阿里云centos,域名解析绑定'){
				this.szxiangqinglist=store.state.linuxsto.alifuwuqi;
			}if(this.$route.params.id=='xshell远程链接服务器'){
				this.szxiangqinglist=store.state.linuxsto.xshelllian;
			}if(this.$route.params.id=='安装node,mongodb,git远程仓及配置'){
				this.szxiangqinglist=store.state.linuxsto.anzhuangruanjian;
			}
		},
		methods:{
			xiangqclfanhui(){
				this.$router.push({path:'/知识'});
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
.szbian{
	border: 5px solid blue;
	margin-top: 20px;
	border-radius: 10px;
	padding-left: 10px;
	padding-bottom: 30px;
	box-sizing: border-box;
}
.szlistmast{
	text-align: left;
}
.text-wrapper {
  white-space: pre-line;
}
img{
	width: 100%;
}
</style>