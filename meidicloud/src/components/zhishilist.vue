<template>
	<div> 
		<div class="zslist">
			<el-tree class='aaa' :data="data1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
		</div>
		<div class="rigth"
			:class="{'yanse':isyanse}"></div>
		</div>
</template>

<script>
	import store from '../vuex/store.js'
	import chuanzhi from '../js/chuanzhi.js'
	export default {
	props:['m'],
    data() {
      return {
      	isyanse:false,
        data1:[],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    created(){
    	if(this.m=='zsstore'){
    	this.data1=store.state.zsstore
    	}if(this.m=='xiangmu'){
    	this.data1=store.state.xiangmu
    	}
    },
    methods: {
      handleNodeClick(data) {
      	if(this.m=='zsstore'){
	        console.log(data.label);
	        if(data.label=='阿里云centos,域名解析绑定'||data.label=='xshell远程链接服务器'||data.label=='安装node,mongodb,git远程仓及配置'){
	        	const deng=store.state.dengnow.yonghu
	        	if(deng=='登录'){
	        		chuanzhi.$emit('test',true)
	        	}else{
	        		this.$router.push({path:'/zsxiangqing/'+data.label})
	        	}
	        }else if(data.children==undefined){
	        	this.$router.push({path:'/zsxiangqing/'+data.label})
	        }
	    }if(this.m=='xiangmu'){
	    	console.log(data.label)
    		if(data.label=='meidicloud'){
    			console.log(111)
	        	this.$router.push({path:'/meidiindex'})
	        }else if(data.label=='gcldgame'){
    			const deng=store.state.dengnow.yonghu
	        	if(deng=='登录'){
	        		chuanzhi.$emit('test',true)
	        	}else{
	        		alert('暂不提供')
	        	}
	        }
    	}
      }
    }
  };
</script>

<style>
	.zslist{
		width: 300px;
	}
	.rigth{
		float: right;
		width: 100px;
		height: 100px;
	}
	.yanse{
		background: red;
	}
	.el-tree-node__label{
		font-size: 20px !important;
	}
	.el-tree-node__content{
		height: 50px !important;
		
	}
</style>