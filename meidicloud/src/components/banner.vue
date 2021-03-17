<template>
	<div>
		<div class="banner">
			<ul>
				<li>
					<img :src="oimg" />
				</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	import store from '../vuex/store.js'
	export default {
		props:['msgbanner'], 
		data(){
			return {
				oimg:store.state.stobanner[this.msgbanner]
			}
		}
	}
</script>

<style>
	.banner{
		width: 100%;
	    min-width: 1200px;
	    position: fixed;
	    left: 0;
	    top: 0;
	    right: 0;
	    height: 650px;
	    z-index: -1;
	}
	ul,ol,li{
		list-style: none;
	    margin: 0;
	    padding: 0;
	}
	.banner img{
		width: 100%;
	    min-width: 1200px;
	    height: 650px;
	}
</style>