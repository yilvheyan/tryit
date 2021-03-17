<template>
	<div class="indexbox">
		<oheader></oheader>
		<obanner class='indexbanner' :msgbanner='indexone'></obanner>
		<obannerz class='indexbannerzcss' :msgbannerz='indexbannerzone'></obannerz>
		<obannerz class='indexbannerzcssone' :msgbannerz='indexbannerztwo'></obannerz>
		<ocirculate class='indocirculatecss' :msgcirculate='indexcirculateone'></ocirculate>
		<obannerz class='indexbannerzcssone' :msgbannerz='indexbannerzthree'></obannerz>
		<ocirculate class='indocirculatecss' :msgcirculate='indexcirculatetwo'></ocirculate>
		<ocirculate class='indocirculatecssthree' :msgcirculate='indexcirculatethree'></ocirculate>
		<ofooter></ofooter>
	</div>
</template>

<script>
	
	import oheader from '../components/header'
	import obanner from '../components/banner'
	import obannerz from '../components/bannerz'
	import ocirculate from '../components/circulate'
	import ofooter from '../components/footer'
	export default{
		data(){
			return{
				indexone:0,
				indexbannerzone:[0,0],
				indexbannerztwo:[0,1],
				indexbannerzthree:[0,2],
				indexcirculateone:[0,'oneyeone'],
				indexcirculatetwo:[1,'oneyetwo','mengban'],
				indexcirculatethree:[2,'oneyethree','mengban']
				
			}
		},
		components:{
			oheader,
			obanner,
			obannerz,
			ocirculate,
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
	.indexbannerzcssone{
		width: 100%;
	    min-width: 1200px;
	    height: 300px;
	    color: black;
	    background: white;
	    
	    z-index: 10;
	}
	.indocirculatecss{
		width: 100%;
		background: white;
		z-index: 10;
	}
	.indocirculatecssthree{
		width: 100%;
		background: white;
		z-index: 10;
		padding-top: 100px;
		box-sizing: border-box;
	}
</style>