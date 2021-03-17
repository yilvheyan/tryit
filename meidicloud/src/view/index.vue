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
			</div>
			<!--title-->
			<div class="title">{{title}}</div>
			<div class="info">{{info}}</div>
			<!--swipe-->
			<div style="width: 640px; height:235px; display: block;">
				<mt-swipe :show-indicators="false">
					<mt-swipe-item v-for="(picture, index) in pictures"><img style="width: 640px; display: block;" :src="picture" /></mt-swipe-item>
				</mt-swipe>
			</div>
			<!--title-->
			<div class="title">{{title1}}</div>
			<div class="info" style="text-align: center;">{{info1}}</div>
			<!--swipe-->
			<div style="width: 640px; height:373px; display: block;">
				<mt-swipe :show-indicators="false">
					<mt-swipe-item v-for="(picturehz, index) in pictureshz"><img style="width: 640px; display: block;" :src="picturehz" /></mt-swipe-item>
				</mt-swipe>
			</div>			
			<div class="boten" >{{info2}}</div>			
		<!--<zhucetan></zhucetan>-->
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
				title: '为什么选择 MDC',
				info: '快速拥有进口医疗设备,MDC创新的业务模式可以让你集中精力发展医疗技术,投资购买设备、专家团队支持、市场宣传等事情交由MDC的专业团队完成!',
				title1: '合作单位',
				info1: '我们与超过1000家以上的医院进行了合作，服务病人超过20000人',
				info2:"京ICP备16054230号-2 ©medi-cloud.cn ALL Rights Reserved 北京美迪云医疗科技有限公司 版权所有",
				btitle: '创建新型医疗云平台',
				pictures: ['../../static/1.jpg', '../../static/1.jpg', '../../static/1.jpg', '../../static/1.jpg', '../../static/1.jpg'],
				toinfo: 0,
				pictureshz:['../../static/hz1.png','../../static/hz2.jpg',]
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