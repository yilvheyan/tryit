<template>
	<div class="bannerzcss">
		<div class="bannerzmain">
			<p id="ph">{{main}}</p>
			<p v-if="ischildren" class="bannerzp">{{children}}</p>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	export default{
		props:['msgbannerz'], 
		data(){
			console.log(this.msgbannerz)
			return {
				main:store.state.stobannerz[this.msgbannerz[0]][this.msgbannerz[1]].mast,
				children:'',
				ischildren:false
				
			}
		},
		mounted(){
			if(this.msgbannerz.length==2){
				this.ischildren=true;
				this.children=store.state.stobannerz[this.msgbannerz[0]][this.msgbannerz[1]].children
			}
		}
	}
</script>

<style>
	.bannerzcss{
		position: relative;
	}
	.bannerzmain{
		position: absolute;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);		
		font-size: 30px;
	}
	.bannerzcss p{
		width: 1000px;
		margin: 10px auto 0;
		font-size: 12px;
		text-align: center;
	}
	#ph{
		font-size: 30px;
	}
	.bannerzp{
		margin-top: 10px;
	}
</style>