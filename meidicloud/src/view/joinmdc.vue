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
			<div class="info" style="margin: 30px 0; ">{{info}}</div>							
			
			<!--图片文字流-->
			<div style="padding-left: 13px;box-sizing: border-box;">
				<div v-for=" p in pitrues" class="jo_pli">
					<div class="jo_pit">
						<img :src="p.inage" />
					</div>
					<div v-if="p.centone" class="pdiv">{{p.centone}}</div>					
				</div>
				<div style="clear: both;"></div>
			</div>
			<!--底部-->
			<div class="boten" >{{info2}}</div>	
		<batten :tochild='toinfo'></batten>
	</div>	
</template>

<script>
	import batten from '../components/batten'
	export default {
		components: {
			batten

		},
		data() {
			return {
				pitrues:[
					{
						inage:'../../static/jo1.jpg',
						centone:'我们致力于让更多国人足不出市享受高新医疗技术',
					},
					{
						inage:'../../static/jo2.jpg',
						centone:'我们致力于让更多医院拥有更先进的诊疗水平',
					},
					{
						inage:'../../static/jo3.jpg',
						centone:'我们更致力于改变现今国内医疗水平差异格局',
					},
					{
						inage:'../../static/jo4.jpg',
						centone:'轻松愉悦的工作环境,舒展身心,快乐工作',
					}
				],
				info: '在美迪云工作，不同于你曾经做过的任何一份工作。你将受到挑战，你将得到启发，你的自豪感将油然而生。 因为无论你在美迪云从事什么工作，你都将成为我们非凡事业的其中一员!',				
				info2:"京ICP备16054230号-2 ©medi-cloud.cn ALL Rights Reserved 北京美迪云医疗科技有限公司 版权所有",
				btitle: '加入美迪云',
				binfo1:'给自己一个惊喜，给世界一个惊喜',
				toinfo: 4
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
	.jo_pli{
		float: left;
		margin-right: 13px;
	}
	.jo_pit{
		width: 300px;
		height: auto;
	}
	.jo_pit img{
		width: 300px;
		height: auto;
	}
	.pdiv{
		text-indent: 2em;
		padding-top: 5px;
		box-sizing: border-box;
		width: 300px;
		word-wrap:break-word; 
		word-break:break-all; 
		overflow: hidden;
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