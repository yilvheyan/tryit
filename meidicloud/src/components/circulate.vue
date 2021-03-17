<template>
	<div class="circulate">
		<ul class="circulateul">
			<li v-for="(i,index) in circulatelist" 
				:class="circulatelistcss"
				@mouseover="circulatelistover(index)">
				<img :src='i.imgsto' />
				<div class="mengbancss"
					@mouseout="circulatelistout"
					v-show="ismengban==index">
					<div class="mengbanzicss">{{i.wensto}}</div>
					<div class="mengbanzicsstwo"
						v-if="idmengbanzicsstwo">
						<div class="mengbanzicsstwocl">{{i.hwensto}}</div>
						<div class="mengbanzicsstwocltwo">{{i.pwensto}}</div>
					</div>
				</div>
			</li>
			<div style="clear: both;"></div>
		</ul>
		
		
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	export default{
		props:['msgcirculate'], 
		data(){
			console.log(this.msgcirculate)
			return{
				circulatelist:store.state.circulatesto[this.msgcirculate[0]],
				circulatelistcss:this.msgcirculate[1],
				ismengban:100,
				idmengbanzicsstwo:false
			}
		},
		methods:{
			circulatelistover(index){
				if(this.msgcirculate[2]=='mengban'){
					this.ismengban=index
				}
			},
			circulatelistout(){
				this.ismengban=100
			}
		},
		mounted(){
			if(this.msgcirculate[1]=='oneyethree'){
				this.idmengbanzicsstwo=true
			}
		}
	}
</script>

<style>
	.circulate{
		width: 100%;
	}
	.circulateul{
		width: 80%;
	    min-width: 1200px;
	    margin: 0 auto;
	    display: flex;
	}
	.oneyeone{
		flex: 1;
		float: left;
		margin-right: 1.5%;
		height: 282px;
		overflow: hidden;
		z-index: 10;
	}
	.oneyeone img{
		width: 100%;
		height: 282px;
	}
	.oneyetwo{
		flex: 1;
		float: left;
		height: 150px;
		overflow: hidden;
		position: relative;
	}
	.oneyetwo img{
		width: 100%;
		height: 150px;
	}
	.oneyethree{
		flex: 1;
		float: left;
		height: 480px;
		overflow: hidden;
		position: relative;
	}
	.oneyethree img{
		width: 100%;
		height: 480px;
	}
	.mengbancss{
		width: 100%;
		height: 100%;
		background: rgba(24, 24, 24, .4);
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
        justify-content: center;
        align-items: center;
	}
	.mengbanzicss{
		color: white;
	}
	.mengbanzicsstwo{
		width: 200px;
		color: white;
	}
	.mengbanzicsstwocl{
		width: 110px;
		height: 60px;
		border: 2px solid white;
		text-align: center;
		font-size: 18px;
		line-height: 60px;
		margin: 0 auto 20px;
	}
</style>