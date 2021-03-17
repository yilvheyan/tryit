<template>
	<div>
		<div>明天设计如果上个月31天是谁且不是周六  只需保存两样东西到数据库
			一个是名字列表bleftlist，一个是天数列表hanglist</div>
		<div class="toubu gong">
			<div v-for="i in toulist" class="toubulist gonggonglist">{{i}}</div>
		</div>
		<div class="bateen gong">
			<div class="battenleft">
				<div v-for="i in bleftlist"
					class="gonggonglisttop hanglistbu">{{i}}</div>
			</div>
			<div class="mastone">
				<div v-for="(i,index) in hanglist" 
					class="gonggonglistbatten  hanglistbu"
					:class="{'gaibian':index<oindex}">{{i}}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
//	import storing from '../vuex/storing.js'
	export default {
		data(){
			return{
				
				oindex:'',
				bleftlist:[],
				toulist:['姓名','星期一','星期二','星期三','星期四','星期五','星期六','星期七'],
				hanglist:[],				
				lielist:['星期一','星期二','星期三','星期四','星期五','星期六','星期七']
			}			
		},
		mounted(){
			var _this=this
			var a=[];
			var oa=['齐莎','郭元鹏','达晓东','阿娇','齐莎','郭元鹏','达晓东','阿娇']
			var settime=function(year,mou){	    //设置某月某日是星期几			
				var odatef = new Date(); 
					odatef.setFullYear(year); 
					odatef.setDate(1);          //设置某月一号是星期几
					odatef.setMonth(mou) 
				var fday = odatef.getDay(); 
					for(var i=1;i<fday;i++){   		
		        		a.push('')
		        }
				var odateflist = new Date(year,mou,0).getDate();
				odatef.setDate(odateflist);
				console.log(111111)
				console.log(odatef.getDay())
				
			}
			var fuday=function(){
				var  day = new Date();   
				var nowday=day.getDate()
				var mou=day.getMonth()				
				var year=day.getFullYear()
				settime(year,mou)
				_this.oindex=nowday+a.length-1
				var daycount = new Date(year,mou,0).getDate();
				console.log(daycount)
	        	for(var i=1;i<=daycount;i++){   		
	        		_this.hanglist.push(i)
	        	}
	        	_this.hanglist=a.concat(_this.hanglist)
//	        	console.log(_this.hanglist)
	        	var onuma=Math.ceil(_this.hanglist.length/7)
	        	for(var i=0;i<onuma;i++){   		
	        		_this.bleftlist.push(oa[i])
	        	}
	        	console.log(_this.bleftlist.length)
			}			
			fuday();	
		},
		methods:{
			dianji(index,oindex){
					console.log(index)
					console.log(oindex)
					console.log(this.hanglist[index].work[oindex].contentone)
			}
		}
	}
</script>

<style>
	.body{
		margin: 0;
		padding: 0;
	}
	.toubu{
		border:1px solid black;
		display: flex;
	}
	.toubulist{
		flex: 1;
		text-align: center;
		line-height: 40px;
	}
	.bateen{
		display: flex;
	}
	.battenleft{
		float: left;
		flex: 1;
	}
	.mastone{
		float: left;
		border:1px solid black;
		flex: 7;
	}
	.hanglistbu{
		float: left;
		height: 40px;
		text-align: center;
		line-height: 40px;
		border-bottom: 1px solid black;
		border-right: 1px solid black;
	}
	
	.gonggonglisttop{
		width: 100%;
	}
	.gonggonglistbatten{
		width: 78.5px;
	}
	.gong:after{
	    content:"";
	    display:block;
	    height:0;
	    clear:both;
	    visibility:hidden;
	
	}
	.gong{zoom:1}
	.gaibian{
		background: #CCCCCC;
	}
</style>