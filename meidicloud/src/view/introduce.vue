<template>
	<div class="indexbox">
		<oheader></oheader>
		<obanner class='indexbanner' :msgbanner='introduceone'></obanner>
		<obannerz class='indexbannerzcss' :msgbannerz='introducebannerone'></obannerz>
		<div class="main">
			<div class="maintitle">
				<p>公司简介</p>
			</div>
			<div class="mainxinxi">
			<oxinxi></oxinxi>
			</div>
		</div>
		<ofooter></ofooter>
	</div>
</template>

<script>
	
	import oheader from '../components/header'
	import obanner from '../components/banner'
	import obannerz from '../components/bannerz'
	import ofooter from '../components/footer'
	import oxinxi from '../components/xinxi'
	export default{
		data(){
			return{
				introduceone:1,
				introducebannerone:[1,0]
			}
		},
		components:{
			oheader,
			obanner,
			obannerz,
			oxinxi,
			ofooter
		}
	}
</script>

<style>
	.indexbox{
		
		position: relative;
	}
	.indexbanner{
		width: 100%;
	    min-width: 1200px;
	    position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    height: 650px;
	    z-index: -1;
	}	
	.indexbannerzcss{
		width: 100%;
	    min-width: 1200px;
	    height: 650px;
	    color: white;
	}
	.main{
		width: 100%;
		background: white;
		z-index: 10;
		padding-top: 90px;
		box-sizing: border-box;
	}
	.maintitle{
		width: 1200px;
		margin: 0 auto;
		border-bottom: 1px solid gainsboro;
		padding-left: 80px;
		box-sizing: border-box;
		height: 57px;
		text-align: left;
		font-size: 30px;
		line-height: 57px;
	}
	.mainxinxi{
		width: 1200px;
		margin: 0 auto;
		padding-left: 80px;
		box-sizing: border-box;
	}
</style>