<template>
	<div class="box">
		<head>
			<meta charset="UTF-8">
			<meta name='renderer' content='webkit'>
			<meta name="viewport" content="width=640,user-scalable=no" />
			<meta http-equiv=X-UA-Compatible content="chrome=1,IE=edge,IE=11">
		</head>
		<div class="headerbox">		
			<mt-header title="medicloud"></mt-header>
		</div>
			<!--//banner-->
			<div style="position: relative;">
				<img style="width: 640px; display: block;" src="../../static/banner.jpg" />
				<div class="batitle">{{btitle}}</div>
				<div class="binfo">{{binfo1}}</div>
			</div>
			<!--title-->
			<div class="cf_titlebox" style="padding-right: 10px;">
				<h1>租赁介绍：</h1>
				<h4>我们的优势：</h4>
				<div v-for="text in texts">
					<h4>{{text.hc}}</h4>
					<p v-if="text.centone">{{text.centone}}</p>
					<p v-if="text.centtwo">{{text.centtwo}}</p>
					<p v-if="text.centthree">{{text.centthree}}</p>
				</div>				
			</div>	
			<div style="width: 640px;height: 314px;">
					<img src="../../static/liucheng.png" style="width: 640px;height: 314px;"/>
			</div>
			<div class="boten" >{{info2}}</div>			
		<batten :tochild='toinfo'></batten>
	</div>	
</template>

<script>
	import topheader from '../components/topheader'
	import newword from '../components/newword'
	import batten from '../components/batten'
	import zhucetan from '../components/zhucetanchuang'
	export default {
		components: {
			topheader,
			newword,
			batten,
			zhucetan

		},
		data() {
			return {
				texts:[
				{
					hc:'为您提供设备整体解决方案，通过医疗设备云共享的方式，极大降低医院的设备使用成本',
					centone:'降低了医院设备使用成本;',
					centtwo:'提升了医院设备更新速度;',
					centthree:'节约了医院设备维护成本;',
				},
				{
					hc:'为您提供设备整体解决方案，通过医疗设备云共享的方式，极大降低医院的设备使用成本',
					centone:'降低了医院设备使用成本;',
					centtwo:'提升了医院设备更新速度;',
					centthree:'节约了医院设备维护成本;',
					centfour:'提升了医院设备更新速度;',
					centfive:'节约了医院设备维护成本;',
				},
				{
					hc:'这些悬而未决的问题，都是院方设备购买的风险，都有可能成为制约医疗机构引进先进医疗设备、提升医疗机构医疗服务水平的瓶颈。'					
				},
				{
					hc:'通过引入美迪云的设备整体解决方案，这些后顾之忧都不复存在。 美迪云能使得医院用更低的成本，在更低的风险下，提前受益与一线城市医疗机构同等级别的进口设备。'					
				},
				{
					hc:'美迪云为各家医院所提供的方案，是由我们美迪云的专业顾问团队，通过实地走访，了解院方运营的实际情况、设备需求的情况后，以大数据的客户需求分析为支撑，为医院提供满足市场需求的整体设备解决方案。通过云共享来实现设备的随用随取，将成为获取产业用品高性价比的方式，也会成为医疗机构解决设备更新过慢行之有效的方式。'					
				},
				{
					hc:'公司地址：北京市昌平区回龙观东大街腾讯众创空间A座522室'					
				}
				],
				toinfo: 2,
				info2:"京ICP备16054230号-2 ©medi-cloud.cn ALL Rights Reserved 北京美迪云医疗科技有限公司 版权所有",
				btitle: '触碰新型前沿医疗技术',
				binfo1:'在这里，你将接触并不断追赶先进医疗科技发展的步伐，感受医学进步的魅力，并亲自将它们带到需要的患者身边'			
			}
		}
	}
</script>

<style>
	.box {
		padding-bottom: 60px;
		box-sizing: border-box;
	}
	
	.batitle {
		width: 640px;
		height: 30px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translateX(-50%) translateY(-50%);
		text-align: center;
		color: white;
		background: rgba(0, 0, 0, 0.2);
		font-size: 30px;
	}
	.binfo{
		width: 640px;
		height: 30px;
		position: absolute;
		top: 60%;
		text-align: center;
		color: white;
		background: rgba(0, 0, 0, 0.2);
		font-size: 18px;
	}
	.cf_titlebox{
		width: 640px;
		padding-left: 30px;
		box-sizing: border-box;
		text-align: left;
	}
	.cf_titlebox p{
		/*text-indent: 2em;*/
		color: #CCCCCC;
	}
	.title {
		width: 640px;
		height: 50px;
		text-align: center;
		font-size: 30px;
		margin-top: 40px;
	}
	
	.info {
		width: 640px;
		height: 50px;
		padding: 0 15px;
		box-sizing: border-box;
		text-align: justify;
		text-indent: 2em;
	}
	.boten{
		padding-top: 10px;
		box-sizing: border-box;
		width: 640px;
		height: 60px;
		background: black;
		color: white;
		text-align: center;
	}
</style>