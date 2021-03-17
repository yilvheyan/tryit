<template>
	<div class="headerbox">
		<router-link to="/meidiindex"><img src='../../static/MDC9.png' class="logo"/></router-link>
		<ul>
			<router-link to="/meidiindex"><li>首页</li></router-link>
			<router-link to="/introduce"><li>公司介绍</li></router-link>
			<router-link to="/"><li>消化/呼吸消耗</li></router-link>
			<router-link to="/equipment"><li>设备出租</li></router-link>
			<router-link to="/joinmdc"><li>加入美迪云</li></router-link>
		</ul>
		
	</div>
</template>

<script>
	export default{
		data(){
			return {}
		}
	}
</script>

<style>
	.headerbox{
	    position: fixed;
	    top: 0;
	    left: 0;
		width: 100%;
	    min-width: 1200px;
/*	    height: 80px;*/
	    background: rgba(24, 24, 24, .4);
	    z-index: 99;
	    padding-left: 10px;
	    box-sizing: border-box;
	}
	.logo{
		width: 80px;
		height: 80px;
		display: block;
		float: left;
	}
	.headerbox ul{
		float: left;
    	margin-left: 8%;
	}
	.headerbox ul li{
		height: 80px;
    	font-size: 14px;
    	padding: 0 20px;
    	text-align: center;
    	line-height: 80px;
    	float: left;
    	color: white;
    	cursor: pointer;
	}
</style>