<template>
	<div>
		<div v-for="(i,index) in xinxilist">
			<div class="xinxititle">{{i.titlesto}}</div>
			<div class="xinxipone">{{i.pstoone}}</div>
			<div class="xinxipone"
				 v-if="isxinxipone==index">{{i.pstotwo}}</div>
		</div>
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	export default{
		data(){
			return{
				xinxilist:store.state.xinxisto,
				isxinxipone:100
			}
		},
		mounted(){
			for (var i=0;i<this.xinxilist.length;i++) {
				if(this.xinxilist[i].pstotwo==undefined){
					this.isxinxipone=100
				}else{
					this.isxinxipone=i
				}
			}
		}
	}
</script>

<style>
	.xinxititle{
		margin-top: 30px;
		text-align: left;
		font-size: 25px;
	}
	.xinxipone{
		margin-top: 30px;
		text-align: left;
		background: white;
		text-indent:2em;
	}
</style>