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
			<div class="cf_titlebox">
				<h1>公司简介：</h1>
				<div v-for="text in texts">
					<h2>{{text.hc}}</h2>
					<p>{{text.centone}}</p>
					<p v-if="text.centtwo">{{text.centtwo}}</p>
					<p v-if="text.centthree">{{text.centthree}}</p>
				</div>
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
					hc:'MDC始终以“创建新型共享平台”为奋斗目标',
					centone:'北京美迪云医疗科技有限公司（以下简称MDC）是一家创新型的高科技医疗企业。公司业务领域涵盖医疗设备租赁、科室发展整体解决方案提供以及医疗设备及耗材销售等多个领域。',
					centtwo:'MDC始终以“创建新型共享平台”为奋斗目标，创新的将IT界“云共享”理念引入医疗领域。此种创新的模式不仅可以让国内更多的患者及时享受到优质的医疗服务，而且也更加符合国家当前建设资源集约化社会的要求以及大力发展共享经济的目标。'
				},
				{
					hc:'MDC创新的运作方式解决“一号难求、一床难求”',
					centone:'近几年，伴随着国内经济的不断发展，人民生活水平的不断提高，大众对自身健康的关注度及投入度也在不断增加。根据有关部门的数据统计，近年来，我国人均医疗费用的年度增长率为14.33%—18.24%，远超我国人均GDP的增长率。医疗投入的不断增加也使更多的医院得以发展。但这仍未改变我们医疗资源分布不均的现状，二、三线城市所享受的医疗资源也远远不及一线大城市。但我国的大部分人口还都集中在二、三线城市居住。这也就造成了现在大城市、大医院“一号难求、一床难求”但其他医院“门可罗雀”的现象。MDC创新型的运作方式正可以解决这一问题。MDC上接各设备供应商，下连各医院， “云共享”的模式可以让更多的医院在快速拥有媲美大医院医疗设备的同时掌握更加先进的医疗技术，从根本上改善现有医疗资源严重分布不均的现状，造福当地百姓。'
				},
				{
					hc:'2017 MDC2.0网络系统隆重上线',
					centone:'经过两年多的探索，MDC已经取得了可喜的成就，但我们不断追求完美的脚步不会停止。2017年，MDC2.0网络系统隆重上线，在新的网络系统模式下，MDC与医院、病患间的联系将更加紧密，响应速度将更加快速，运作模式将更加便捷，更加符合当今的医疗需求。'
				},
				{
					hc:'把握机遇，突破挑战',
					centone:'MDC就是这样一份不仅可以给您带来机遇也能给您带来荣耀的工作。MDC的工作，将不同于以往您从事的任何一份工作，在这里，你将接触并不断追赶前沿医疗科技发展的步伐，感受医学进步的魅力，并亲自将它们带到需要的患者身边。在这里，没有不敢想，只有不敢做；没有发展边界，只有不断突破自我。在这里，不会有阻碍您发展的天花板，不会有阻挡您前进的绊脚石，有的是更加专业的技能培训，更大的发展空间，更广阔的施展平台，更好的职业发展前景。加入我们，您将发现不一样的自己！！',
					centtwo:'MDC是一支年轻的团队，但我们拥有远大的理想。我们希望能够通过自己的力量改变中国医疗资源分配不均的现状，我们渴望通过自己的努力为更多基层的百姓带去高质量的医疗服务，甚至是“生的希望”。'
				},
				{
					hc:'日益进取，不断创新，造福国人！',
					centone:'日益进取，不断创新是MDC人共同的理念及不变的追求。未来，MDC将继续努力，为更多患者提供更为优质的医疗服务，造福国人'
				}
				],
				toinfo: 1,
				info2:"京ICP备16054230号-2 ©medi-cloud.cn ALL Rights Reserved 北京美迪云医疗科技有限公司 版权所有",
				btitle: '严谨但不保守',
				binfo1:'工作中的每个方面都时刻彰显着我们的作风'			
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
		text-indent: 2em;
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