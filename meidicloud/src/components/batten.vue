<template>
	<div class="batten">
		<div v-for="(i,index) in battenlist"
			:class="{'bai':oindex==index}"
			@click="battenclick(index)"
			class="battenli">{{i}}</div>
	</div>
</template>

<script>
	export default{
		props:['tochild'],
		data(){
			return {
				battenlist:['首页','公司简介','消化/呼吸耗材','设备租赁', '加入美迪云' ],
				battenlistegl:['one','two','three','four','five'],
				oindex:this.tochild
			}
		},
		methods:{
			battenclick(index){
				this.$router.push({path:"/"+this.battenlistegl[index]});
			}
		},
		created(){
			
		}
	}
</script>

<style>
	.batten{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 640px;
		height: 60px;
		display: flex;
		z-index: 100;
		background: #ccc;
	}
	.battenli{
		flex: 1;
		text-align: center;
		line-height: 60px;
		font-size: 18px;
	}
	.bai{
		color: blue;
		background: white;
	}
</style>