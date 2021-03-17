import Vue from 'vue'; 
import Vuex from 'vuex';


Vue.use(Vuex);
const state={
	stobanner:[
		"../../static/7.jpg",
		"../../static/6.jpg",
		"../../static/5.jpg",
		"../../static/4.jpg"
	],
	stobannerz:[
		[
			{
				mast:'打造第一医疗云平台'
			},{
				mast:'为什么选择 MDC',
				children:`
					今天即可拥有世界顶级医疗设备,领先同侪,MDC创新的业务模式可以让你集中精力发展医疗技术,
					投资购买设备、专家团队支持、市场宣传等事情交由MDC的专业团队完成!
				`
			},{
				mast:'合作单位',
				children:`我们与超过450家以上的医院进行了合作，2016年全年服务病人超过5000人`
			}
		],
		[
			{
				mast:'严谨但不保守',
				children:`
					工作中的每个方面都时刻彰显着我们的作风
				`
			}
		],
		[
			{
				mast:'触碰世界尖端医疗技术',
				children:`
					在这里，你将接触并不断追赶世界先进医疗科技发展的步伐，
					感受医学进步的魅力，并亲自将它们带到需要的患者身边
				`
			}
		],
		[
			{
				mast:'加入美迪云',
				children:`
					给自己一个惊喜，给世界一个惊喜
				`
			},
			{
				children:`
					在美迪云工作，不同于你曾经做过的任何一份工作。你将受到挑战，你将得到启发，
					你的自豪感将油然而生。 因为无论你在美迪云从事什么工作，你都将成为我们非凡事业
					的其中一员!
				`
			},
			{
				mast:'我们可以做的不仅是医疗业务'
			}
		]
	],
	circulatesto:[
		[
			{
				imgsto:'../../static/zjtd.png',
				wensto:'徐州附属三院'
			},
			{
				imgsto:'../../static/ylsb.jpg',
				wensto:'徐州附属三院'
			},
			{
				imgsto:"../../static/xctd.jpg",
				wensto:'徐州附属三院'
			}
		],
		[
			{
				imgsto:"../../static/hz1.png",
				wensto:'徐州附属三院'
			},
			{
				imgsto:"../../static/hz2.jpg",
				wensto:'武警总队医院'
			},
			{
				imgsto:"../../static/hz3.png",
				wensto:'北大人民医院'
			},
			{
				imgsto:"../../static/hz4.jpg",
				wensto:'大同第二医院'
			},
			{
				imgsto:"../../static/hz5.jpg",
				wensto:'临汾市人民医院'
			},
			{
				imgsto:"../../static/hz6.jpg",
				wensto:'涿州市医院'
			},
			{
				imgsto:"../../static/hz7.jpg",
				wensto:'怀远县人民医院'
			},
			{
				imgsto:"../../static/hz8.jpg",
				wensto:'邯郸市中心医院'
			}
		],
		[
			{
				imgsto:'../../static/sb.jpg',
				hwensto:'设备租赁',
				pwensto:'投资少，零风险、灵活的租赁方式、权威专家技术支持、方便快捷'
			},
			{
				imgsto:"../../static/gs.jpg",
				hwensto:'加入美迪云',
				pwensto:'耗材销售、市场专员、市场专员、医疗器械售后工程师、云销售'
			}
		]
		
	],
	xinxisto:[
			{
				titlesto:'MDC始终以“打造第一‘医疗云’共享平台”为奋斗目标',
				pstoone:`北京美迪云医疗科技有限公司（以下简称MDC）是一家创新型的高科技医疗企业。
						   公司业务领域涵盖医疗设备租赁、科室发展整体解决方案提供以及医疗设备及耗
						   材销售等多个领域。
				`,
				pstotwo:`MDC始终以“打造第一‘医疗云’共享平台”为奋斗目标，
						创新的将IT界“云共享”理念引入医疗领域。此种创新的模式不仅可以让国内更多的患
						者能够在第一时间享受到国际一流的医疗服务，而且也更加符合国家当前建设资源集
						约化社会的要求以及大力发展共享经济的目标。
				`
			},
			{
				titlesto:'MDC创新的运作方式解决“一号难求、一床难求”',
				pstoone:`近几年，伴随着国内经济的不断发展，人民生活水
						平的不断提高，大众对自身健康的关注度及投入度也在不断增加。
						根据有关部门的数据统计，近年来，我国人均医疗费用的年度增
						长率为14.33%—18.24%，远超我国人均GDP的增长率。医疗投入
						的不断增加也使更多的医院得以发展。但这仍未改变我们医疗资源
						分布不均的现状，二、三线城市所享受的医疗资源也远远不及一线
						大城市。但我国的大部分人口还都集中在二、三线城市居住。这也
						就造成了现在大城市、大医院“一号难求、一床难求”但其他医院
						“门可罗雀”的现象。MDC创新型的运作方式正可以解决这一问题。
						MDC上接各设备供应商，下连各医院， “云共享”的模式可以让更多
						的医院在第一时间拥有媲美顶尖大医院医疗设备的同时掌握更加先进
						的医疗技术，从根本上改善现有医疗资源严重分布不均的现状，造福
						当地百姓。
				`
			},
			{
				titlesto:'2017 MDC2.0网络系统将隆重上线',
				pstoone:`经过两年多的探索，MDC已经取得了可喜的成就，
						但我们不断追求完美的脚步不会停止。2017年，MDC2.0网络
						系统将隆重上线，在新的网络系统模式下，MDC与医院、病患间
						的联系将更加紧密，响应速度将更加快速，运作模式将更加便捷，
						更加符合当今的医疗需求。
				`
			},
			{
				titlesto:'传统的颠覆者，业界的领头羊',
				pstoone:`MDC就是这样一份不仅可以给您带来机遇也能给您带来
						荣耀的工作。MDC的工作，将不同于以往您从事的任何一份工作，
						在这里，你将接触并不断追赶世界先进医疗科技发展的步伐，感受
						医学进步的魅力，并亲自将它们带到需要的患者身边。在这里，
						没有不敢想，只有不敢做；没有发展边界，只有不断突破自我。
						在这里，不会有阻碍您发展的天花板，不会有阻挡您前进的绊脚石，
						有的是更加专业的技能培训，更大的发展空间，更广阔的施展平台，
						更好的职业发展前景。加入我们，您将发现不一样的自己！！
				`,
				pstotwo:`MDC是一支年轻的团队，但我们拥有远大的理想。
						我们希望能够通过自己的力量改变中国医疗资源分配不均的现状，
						我们渴望通过自己的努力为更多基层的百姓带去高质量的医疗服务，
						甚至是“生的希望”。我们是传统的颠覆者，我们是业界的领头羊。
				`
			},
			{
				titlesto:'日益进取，不断创新，造福国人！',
				pstoone:`日益进取，不断创新是MDC人共同的理念及不变的追求。未来，MDC将继续努力，
						为更多患者提供更为优质的医疗服务，造福国人。
				`
			}
	],
	shouye:[
		{
			id:'1',			
			img:"../../static/img/8da120283d6006aa4cdecef2216f0d0.jpg",
			stoh3:'vue路由简介和使用方法',
			stop:'我我我我我我'
		},
		{
			id:'2',
			img:"../../static/img/068ea6b5d853abf3ed6dc74a0f5d1c9.jpg",
			stoh3:'JS全局复制粘贴板的精简兼容实现',
			stop:'JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现12345678'
		},
		{
			id:'3',
			img:"../../static/img/cf791fdac00d6151e48c32b0e8ba5fc.jpg",
			stoh3:'JS全局复制粘贴板的精简兼容实现',
			stop:'JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现12345678'
		},
		{
			id:'4',
			img:"../../static/img/efebf1058d257fa9d11553fc229ac0b.jpg",
			stoh3:'JS全局复制粘贴板的精简兼容实现',
			stop:'JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现JS全局复制粘贴板的精简兼容实现12345678'
		}
		
	],
	zsstore:[{
          label: '前端',
          children: [
            {
	            label: 'MVCMVPMVVM'	            
          	},
          	{
	            label: 'HTML'
          	},
          	{
	            label: 'CSS'
          	},
          	{
	            label: 'JS',
	            children: [
	            {label: '数组'},
	            {label: '字符串'},
	            {label: '正则'},
	            {label: '日期和Math函数'},
	            {label: '强制和隐性转换'},
	            {label: 'BOM'},
	            {label: 'DOM'},
	            {label: '浏览器兼容性'},
	            {label: 'this问题及改变'},
	            {label: '原型'},
	            {label: 'jsonp'},
	            {label: '面向对象'},
	            {label: '闭包函数'}
	            ]
          	},
          	{
	            label: 'jqurey',
	            children: [
	            {label: '三级 1-1-1'}
	            
	            ]
          	},
          	{
	            label: 'vue',
	            children: [
	            	{label: '基础'},
	            	{label: '模板'},
	            	{label: '常用'},
	            	{label: '细节'},
	            	{label: 'vuex,axios'}
	            ]
          	},
          	{
	            label: '数据请求ajxa',
	            children: [{label: '三级 1-1-1'}]
          	},
          	{
	            label: 'git使用以远程gitHub为例',
	            children: [
	            	{label: 'git指令'},
	            	{label: 'TortoiseGit'}
	            ]
          	},
	        {
		        label: '页面优化'	            
	        },
	        {
		        label: '前端存储'	            
	        }
          ]
        }, {
          label: '后端',
          children: [{
            label: 'npm,npx,cnpm,nvm的使用'
          }, {
            label: 'node使用'
          }]
        }, {
          label: '数据库',
          children: [{
            label: '基本操作增删改查'
          }]
        }, {
          label: '框架',
          children: [{         	
            label: 'Element'
            },{
            label: 'MintUI'
            },{
            label: 'BootstrapVue'
          }]
        }, {
          label: 'ES6',
          children: [{
            label: '新增'
          },{
            label: 'Promise'
          }]
        }, {
          label: '微信语言'
        },{
          label: '远程linux',
          children: [{
            label: '阿里云centos,域名解析绑定',
          },{
            label: 'xshell远程链接服务器',
          },{
            label: '安装node,mongodb,git远程仓及配置',
          }]
        }
        
	],
	zsxiangqing:{
		mvcpvm:[
			{
				szmast:'MVC',
				children:[
					{img:"../../../static/MVC1.png"},
					{img:"../../../static/MVC2.png"},
					{img:"../../../static/MVC3.png"},
					{img:"../../../static/MVC4.png"},
					{img:"../../../static/MVC5.png"},
					{img:"../../../static/MVC6.png"},
					{img:"../../../static/MVP.png"},
					{img:"../../../static/MVVM.png"}
				]
			}
		],
		HTMLll:[
			{
				szmast:`
					HTML 
					1.html由浏览器去解析，存在兼容性问题
					2.html文件的后缀名可以是 .html 或 .htm
					3.它是一个标记语言，并非编程语言 
					标签 
					1.标签是由尖括号包围的关键词比如 <html>
					2.标签分为单标签和双标签 <br/>   <p></p>
					3.标签之间可以相互嵌套，切记不准许穿插嵌套  <div><p></br></p></div>
					 
					属性
					    1.<标签名 属性名1="属性值" 属性名2="属性值" ... 属性名N="属性值">
					      	<!– 输出内容…  -->
					      </标签名>
					    2.所有关于样式的属性，我们均可以不去记忆，有单独的css可以完成
					  
					注释 重要
					    1.html    <!--   被注释的内容    -->
					    2.为了提高代码的可读性
					 
					html文档特性
					    1.在源码中所敲空格和回车都只起一个空格的作用，写再多也没有效果
					    2.切记不要使用空格去排版
					 
					文档命名规则
					    第一个字符必须是字母，之后的字符可以是数字，字母，下划线(还可以有点  .)
					 
					文档主体结构h5
					<!DOCTYPE html>    文档声明头，告知浏览器下面所写的代码用那个版本去解析
					<html>
					    <head>填写公共属性信息,用户所查看不到的内容，填写在这里面</head>
					    <body>凡是想让用户查看的信息，我们填写在body里</body>
					</html>
					 
					head中的内容
					<meta charset="UTF-8">   设置中文字符集
					<meta http-equiv="refresh" content="5;url=https://www.baidu.com">   自动刷新及跳转
					<title></title>  设置网页标题的标签
					  
					body中的内容
					 
					<h1~6>填写标题内容</h1~6> 独占一行  样式上字体较大，文字加粗。对搜索引擎有很好的优化作用！但是一个页面仅限用一次
					<p>填写段落内容</p>   独占一行
					<br/>  单标签   具有换行效果
					<pre></pre>   按照html源码中的格式展现在浏览器上！
					<hr/>  单标签 显示一条与父标签等宽的水平线
					<span></span> 无意义的行及标签 不会独占一行
					<div></div>  无意义的块及标签 独占一行
					 
					        非重点
					        粗体标签	<b></b>
					        斜体标签	<i></i>
					        下划线标签	<u></u>
					        删除线标签	<del></del>
					        上标标签		<sup></sup>
					        下标标签		<sub></sub>
					 
					字符实体
					    用于显示是一些有特殊意义的符号，在源码中所写的内容不能直接显示在页面当中，就需要用到字符实体
					    常用的字符实体：
					        空格：  
					        <   :  <
					        >   :  >
					        &   :  &
					        ￥  :  ¥   中国钱的单位
					 
					a链接标签
					    <a href="填写链接地址" target="设置打开方式" title="用于对链接的描述">链接名称</a>
					    href ：
					            1.可填写具体的网络地址
					            2.还可以填写相对地址
					            3.可以填写绝对地址
					            4.什么都不填写，代表当前页面的
					            5.填写#号，代表当前页面刷新
					 
					    target：
					            1._blank  新页面打开
					            2._self   默认形式，代表在当前打开新的页面
					 
					    title：当用户鼠标放在链接上时，会有一个小提示。提示的内容就是我们所填写的值
					 
					锚点链接
					    需要现在页面当中设置锚
					        <a name="自定义锚的名字"></a>
					 
					    想要跳转至某个锚的时候
					        <a href="文件地址#要跳转的锚的名称">自定义文字</a>
					  
					图片标签
					    <img src="填写图片地址" alt="对图片的简单介绍">
					 
					    src：
					        1.可以填写网络地址
					        2.可以填写当前服务器上的相对地址
					 
					    alt：
					        在图片没有加载时，自动显示alt中的内容，给用户友好体验
					        搜索引擎在搜索优化时，能够更好更准确的知道当前图片的内容，更加容易让搜索引擎收录
					  
					热点地图   非重点
					需要在img标签中填写usemap属性  属性值 "#自定义的名称"
					<map name="等于usemap中自定义的名称，不带#号"  id="与我们的name值相同">
					    <area shape="热点类型" coords="根据热点的形状，填写不同个数的值" href="跳转地址"/>
					</map>
					    定义id的目的，是为了让更多的浏览器支持热点地图标签
					    shape：
					        rect   矩形
					        circle   圆形
					        poly  多边形
					 
					    coords：
					        矩形，两个点确定一个矩形   x1,y1,x2,y2
					        圆形，一个点加上一个半径   x,y,r
					        多边形，根据我们想要画的多边形的顶点来确定具体的点的个数
					 
					列表标签
					    <ul>
					        <li></li>
					        <li></li>
					        <li></li>
					    </ul>
					    列表标签是固定搭配结构，在ul和li或li和li直接都不要填写其他内容，容易造成意想不到的后果
					    <ol>
					        <li></li>
					        <li></li>
					        <li></li>
					    </ol>
					    <dl>
					        <dt></dt>
					        <dd></dd>
					    </dl>
					 
					表格标签
					  <table>
						<caption></caption>
						<tr>
						   <th></th>
					       <th></th>
					    </tr>
					    <tr>
						   <td rowspan=""  colspan=""></td>
					       <td></td>
					     </tr>
					  </table>
					 
					  table同样是固定搭配格式，中间不要放任何代码
					  caption 表的标题内容所展示位置
					  th 表头所存放的位置   字体会加粗，默认会居中对齐
					 
					  使用合并时，一定注意将多余的代码删除
					  rowspan  跨行合并
					  colspan  跨列合并
					  
					form表单   重点
					 
					    所有的表单均需要写在form标签对中
					    <form>
					        表单内容
					    </form>
					        action：填写提交地址，如果不填写，代表提交至当前页面
					        method：提交方式，get或post   默认是get
					                get 通过url把用户所填写的表单内容进行传输，速度快，但是安全性不高并且传输内容较少，最多8万个字符
					                post 加密方式提交，相对比较安全，但是速率较慢。并且我们在传输过程中查看不到传输的内容
					 
					    表单中的公共属性
					        name：所有的表单我们均需要填写name属性(提交功能的表单除外)，若没有name属性，则无法把对应的值提交至服务器。
					        value：默认值。
					        maxlength:设置用户填写的最大长度，长度单位为字符个数（中英文通用！），但在实际项目开发中，不推荐大家使用。
					 
					        readonly:
					        readonly 属性规定输入字段为只读,但其value值仍会被表单提交
					        readonly属性只针对text、password和textarea有效
					 
					        disabled:
					        disabled属性规定禁用该表单元素，其value值不会被表单提交
					        disabled属性对所有表单元素均有效，包括包括select, radio, checkbox, button等
					        使用disabled属性后表单元素背景会变成灰色
					 
					 
					    单行文本框
					    <input type="text" name="起一个名字"/>
					 
					    密码框
					    <input type="password" name=""/>
					 
					    多行文本框
					        与单行文本框相对比，填写的内容让用户查看到的更多。
					    <textarea name=""></textarea>
					 
					    单选框
					        name：同一组单选框要使用相同name名称。
					        value：单选框提交数据与其他框不同，它是没有值的！所以需要我们手动定义值，这时候就需要用到value。
					        checked：若想要设置默认选项，就在对应的表单上填写checked属性。
					    <input type="radio"  name=""  value=""  checked="checked" />
					 
					    复选框
					        name：同一组复选框要求名称相同，并且名字后面一定要加上一个英文的 [] , 为了解决重名问题。
					        value：多选框本身同样是没有值，需要我们提前自定义。
					        checked：用于选择默认选项的。
					        <input type="checkbox" name="like[]" value="0" checked="checked"/>
					 
					    下拉菜单
					    select：代表下拉菜单框
					    option：具体的菜单选项
					    value：填写value后台才能对应接收到数据
					    <select name="cs" id="" >
					         <option value="zz">郑州</option>
					         <option value="sh">上海</option>
					         <option value="bj">北京</option>
					    </select>
					 
					    浏览框
					    <input  type="file"   name="" />
					 
					    隐藏表单
					    name：自定义的名字
					    value：是服务器所给我们指定好的值
					    <input type="hidden" name="" value=""/>
					 
					 
					    提交按钮
					    	<input  type= "submit"   name=""   value=""/>
					       <button type=“submit”>提交</button>
					    重置按钮
					    	<input  type= "reset"   name=""   value=""/>
					    	<button type="reset">重置</button>
					    普通按钮
					    	<input  type= "button"   name=""   value=""/>
					    	<button type="button">普通按钮</button>
					 
					 
					    用于与表单标签实现绑定关系
					        需要在绑定表单当中自定义一个id
					        for：该 label想要与那个表单进行绑定时，把对应的表单的id填写在for上
					    <label for=""></label>
 
			`}
		],
		CSSll:[
			{
				szmast:'CSS',
				children:[
					{szmast:`透明度:
						opacity:0.5 //特点是他的所有子盒子都受影响
						background: rgb(225,225,225,0.9); //子盒子不受影响
					`},
					{szmast:`
						文字首行缩进:text-indent:2em
						超出部分隐藏用...替代:
						overflow: hidden;text-overflow:ellipsis;white-space:nowrap;
						改变鼠标样子:
						cursor: pointer  手指
						cursor其他取值  
						auto                    ：标准光标  
						default                 ：标准箭头  
						pointer, hand                   ：手形光标  
						wait                     ：等待光标  
						text                      ：I形光标  
						vertical-text          ：水平I形光标  
						no-drop                ：不可拖动光标  
						not-allowed           ：无效光标  
						help                     ：帮助光标  
						all-scroll         ：三角方向标  
						move                     ：移动标  
						crosshair           ：十字标

					`},
					{szmast:`
						盒子水平垂直居中:
						方法一：父子盒子都写:display: inline-block; vertical-align: middle;
				 		方法二： 子绝父相
				 		方法三：父盒子：display: table-cell;子盒子：display: inline-block;
				                 方法四：子绝父相    子：top:50% left:50% transform: translate(-50%,-50%);
				                 方法五：父盒子：display: flex;justify-content: center;align-items: center;
					
					`}
				]
			},
			{
				szmast:'CSS3',
				children:[
					{szmast:`选择器:
						p:nth-child(2):选择属于其父元素的第二个 <p> 元素
						p:nth-last-child(2) :选择属于其父元素的倒数第二个 <p> 元素
						div p :选择div内的所有p元素
						p:before :在每个 <p> 元素的内容之前插入内容
						p:after :在每个 <p> 元素的内容之后插入内容
					`},
					{szmast:`动画:
						.xxx{
//							position: absolute;  /*一定是定位*/
							animation:tupiangongrun 0.9;   /*tupiangongrun动画名字*/
							-webkit-animation:tupiangongrun 0.9s; /*设置周期时间*/
							-webkit-animation-fill-mode:forwards;
							animation-iteration-count:2;      /* 循环次数*/
							animation-direction:alternate;       /*这行和下行*/
							-webkit-animation-direction:alternate; /*正反动画*/
							animation-timing-function:ease-in-out;  /*这行和下行*/
							-webkit-animation-timing-function:ease-in-out;/*设置运行状态'匀速还是变速'*/
						}
						@keyframes tupiangongrun
							{
								
								from {left: 0px;}
								to {left: 100px;}
								
								/*以下是间隔动画*/
								/*0%, 20%{left: 0px;}*/
								0%,50% {left: -142px;}
								52%,100% {left: 0px;}
							}
							
						@-webkit-keyframes tupiangongrun /* Safari and Chrome */
							{
								/*0%, 20%{left: 0px;}*/
								0%,50% {left: -142px;}
								52%,100% {left: 0px;}
							}
						更多细节观看:
						https://www.html.cn/book/css/properties/animation/index.htm
					`}
				]
			}
		],
		oarry:[
			{
				szmast:'数组操作',
				children:[
					{szmast:'var aa=[]'},
					{szmast:'var arrayObj = new Array()'},
					{szmast:'var arrayObj = new Array([size])'}
				]
			},
			{
				szmast:'访问数组',
				children:[
					{szmast:'var test=arrayObj[1]; //获取数组的元素值'}
				]
			},
			{
				szmast:'令数组为空',
				children:[
					{szmast:'假若有个aa的数组  令 aa=[]   则aa原有的数据都会消失'}
				]
			},
			{
				szmast:'添加，删除数组元素（push,unshift,pop,shift）',
				children:[
					{szmast:'arrayObj. push(aa);// 将一个或多个新元素添加到数组结尾，并返回数组新长度      后面添加'},
					{szmast:'arrayObj.unshift(aaaa);// 将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度    前面添加'},
					{szmast:'arrayObj.pop(); //移除最后一个元素并返回该元素值'},
					{szmast:'arrayObj.shift(); //移除最前一个元素并返回该元素值，数组中元素自动前移'}
				]
			},
			{
				szmast:'增 删 改（改变原有的数组）splice()',
				children:[
					{szmast:'splice(n,m):从索引n开始(包含n),删除m个元素,原有数组改变'},
					{szmast:'splice(n,m,x) :从索引n开始(包含n)，删除m个内容，把新增加的内容x放在索引n的前面'}
				]
			},
			{
				szmast:'截取数组（不改变原有数组）slice(n,m)',
				children:[
					{szmast:'slice(n,m):（截取）从索引n开始（包含n）,找到索引为m处（不包含m）,然后把找到的内容作为一个新的数组返回'}
				]
			},
			{
				szmast:'数组排序（改变原有数组）sort()',
				children:[
					
					{szmast:'arrayObj.sort(); //对数组元素排序，返回数组地址'}
				]
			},
			{
				szmast:'数组倒叙（改变原有数组）reverse()',
				children:[
					{szmast:'arrayObj.reverse(); //反转元素（最前的排到最后、最后的排到最前），返回数组地址'}
				]
			},
			{
				szmast:'数组排序',
				children:[
					{szmast:'原理：数组遍历，拿出其中一个和其余的作比较，如果有相同往下走，如果没有则把这个数放到另一个数组里'},
					{szmast:`例子：function sort(oarry){
									var oa=0;
									for (i=0;i<oarry.length;i++) {
										for (j=0;j<oarry.length;j++) {
											if(oarry[i]<oarry[j]){
												oa=oarry[i]; oarry[i]=oarry[j]; oarry[j]=oa;
											}}}
									}`}
				]
			},
			{
				szmast:'数组去重（利用indexOf判断是否存在于新数组中）',
				children:[
					{szmast:'原理：遍历数组，建立新数组，利用indexOf判断是否存在于新数组中，不存在则push到新数组，最后返回新数组'},
					{szmast:`例子：function sort(ar){
									var ret = [];
								    for (var i = 0, j = ar.length; i < j; i++) {
								        if (ret.indexOf(ar[i]) === -1) {
								            ret.push(ar[i]);
								        }
								    }							 
								    return ret;
								}		
								var a=sort(ar);`}
				]
			},
			{
				szmast:'数组中每个元素出现的次数',
				children:[
					{szmast:'原理：遍历数组，去重=>建立新数组=>再遍历计数'},
					{szmast:`例子：function arrayCnt(arr) {
					                var newArr = [];
					                //进行数组去重
					                for(var i = 0; i < arr.length; i++) {
					                    if(newArr.indexOf(arr[i]) == -1) {
					                        newArr.push(arr[i])}
					                    }
					                //建立newarr2长度同newArr且每个数都是0
					                var newarr2 = new Array(newArr.length);
					                for(var t = 0; t < newarr2.length; t++) {
					                    newarr2[t] = 0;
					                }
					                //判断每一个元素在数组中出现的次数
					                for(var p = 0; p < newArr.length; p++) {
					                    for(var j = 0; j < arr.length; j++) {
					                        if(newArr[p] == arr[j]) {newarr2[p]++;}}
					                }
					                for(var m = 0; m < newArr.length; m++) {
					                    console.log(newArr[m] + "重复的次数为：" + newarr2[m]);
					                }
					            }`}
				]
			},
			{
				szmast:'数组浅拷贝',
				children:[
					{szmast:'特点：简单复制，两者相互影响'},
					{szmast:`例子：var arr1 = ["前端","安卓","苹果"];
									var arr2 = arr1;
									arr2[0] = "后端";
									console.log("原始值：" + arr1 );//后端,安卓,苹果
									console.log("新值：" + arr2);//后端,安卓,苹果`}
				]
			},
			{
				szmast:'数组一维深拷贝（slice，concat）',
				children:[
					{szmast:'特点：两者互不影响，但是只局限一维'},
					{szmast:`例子：   var arr1 = ["前端","安卓","苹果"];
									var arr2 = arr1.slice(0);
									//或者改为var arr2 = arr1.concat();
									arr2[0] = "后端";
									console.log("原始值：" + arr1 );//前端,安卓,苹果
									console.log("新值：" + arr2);//后端,安卓,苹果`}
				]
			},
			{
				szmast:'数组深拷贝 一维以上',
				children:[
					{szmast:'特点：两者互不影响'},
					{szmast:`例子：   function clone(obj) { 
									    if(obj === null) return null 
									    if(typeof obj !== 'object') return obj;
										if(obj.constructor === Date) return new Date(obj); 
										if(obj.constructor === RegExp) return new RegExp(obj);
										var newObj = new obj.constructor ();  //保持继承链
										for (var key in obj) {
										    if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
											  var val = obj[key];
											  newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
										    }
										}  
										return newObj;  
									}; 
									var arr1 = [{"name":"张三",'xiao':[{'name':'小王'}]},{"name":"李四"}];//原数组
									var arr2 = clone(arr1);
									arr2[0].xiao[0].name = '王五';`}
				]
			}
		
		],
		vuechuangjian:[
			{
				szmast:'起步',
				children:[
					{szmast:'<script src="https://unpkg.com/vue/dist/vue.js">'},
					{szmast:`npm操作步骤:
							npm install -g vue
							npm install -g vue-cli
							vue init webpack my-project  （如果这一步出现vue不是内部文件，就在计算机中找vue.cmd 并且将vue.cmd的路径放在path环境中 	)						
							cd my-project
							npm install
							npm run dev`}				
				]
			},{
				szmast:'创建实例',
				children:[
					{szmast:`1. var vm=new Vue({
									el:"#box",
									data:{
										msg:"我是测试实例方法的数据",
										}
								});`},
					{szmast:`2.export default{
									data(){
										return {}
									}
								}`}
				]
			},{
				szmast:'指令与渲染',
				children:[
					{szmast:`{{msg}} ：数据绑定，与script中的data里的msg对应`},
					{szmast:`v-model：数据绑定 随时改变数据`},
					{szmast:`v-if ：显示和隐藏 直接对DOM操作`},
					{szmast:`v-else ：必须在v-if前提下出现，不然无效 一个判断语句，也是显示和隐藏`},
					{szmast:`v-else-if ：必须在v-if前提下出现，不然无效 一个判断语句，也是显示和隐藏`},
					{szmast:`v-show ：等价于css中的display:block || none`},
					{szmast:`@或者v-on ：事件绑定`},
					{szmast:`v-bind ：绑定属性  主要是用于 href src class
									v-bind:value="name"：将能绑定给value
									v-bind:class="[aa,bb]":表示绑定两个claa名
									v-bind:class="{'aa':isaa}"：判断isaa是否为真
									如果为true 则将aa绑定这个class`},
					{szmast:`v-for ：v-for="i in person"或者v-for="(arr,index) in person"或者v-for="(i,key,index) in person"
									括号里有一个数：表示属性值
									括号里有两个数：表示   (属性值   索引值)
									括号里有三个数：表示   (属性值  属性名  索引值)
									person：必须是数组形式`},
					{szmast:`自定义条件渲染：例如v-haha：   
											Vue.directive('haha',function(el){
													//el   谁使用的我的指令
													console.log(el)
													el.style.color='blue';
													el.style.backgroundColor='red';
												});`},
					{szmast:`	<!-- 阻止单击事件冒泡 -->
								<a v-on:click.stop="doThis"></a>
								<!-- 提交事件不再重载页面 -->
								<form v-on:submit.prevent="onSubmit"></form>
								<!-- 修饰符可以串联  -->
								<a v-on:click.stop.prevent="doThat"></a>
								<!-- 只有修饰符 -->
								<form v-on:submit.prevent></form>
								<!-- 添加事件侦听器时使用事件捕获模式 -->
								<div v-on:click.capture="doThis">...</div>
								<!-- 只当事件在该元素本身（而不是子元素）触发时触发回调 -->
								<div v-on:click.self="doThat">...</div>`}
				]
			},{
				szmast:'属性与方法',
				children:[
					{szmast:`data:{msg:"这是我的数据"} ：存储数据的容器`},
					{szmast:`methods:{     	 事件执行容器
						click:function(){alert("111111")}
					}`}	,
					{szmast:`生命周期 ：
						beforeCreate	//在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
						created	//实例已经创建完成之后被调用。（axios请求在创建实例之后）
					 	beforeMount 	//在挂载开始之前被调用：相关的 render 函数首次被调用。
					 	mounted	//el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
						beforeUpdate	//数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
						updated	//由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作
						beforeDestroy 	//实例销毁之前调用。在这一步，实例仍然完全可用。
						destroyed		//Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。`},
					{szmast:`component和template的对比     component就是让这个实例可以用，如果是多个组件要加 s    
							var a=Vue.extend({   //构造了一个组件
								template:'<div><h3>此处省略五十万字！！！</h3></div>'  
							});
							Vue.component('tomany',a)    此时就可以使用<tomany></tomany>`},
					{szmast:`简单的完整的例子:
								import batten from '../../components/batten' //引入
								export default {
									components:{
										batten
									},
									data(){
										return{}
									},
									methods:{     	// 事件执行容器
										click:function(){alert("111111")}
									},
									mounted(){    //周期
										
									}
								}`
					}
				]
			},
			{
				szmast:'组件',
				children:[
					{szmast:`全局组件:
							var a=Vue.extend({   //构造了一个组件
								template:'<div><h3>此处省略五十万字！！！</h3></div>'  
							});
							Vue.component('tomany',a)    此时谁都可以调用<tomany></tomany>`},
					{szmast:`局部组件:
							new Vue({
							  	el: '#app',
							  	components: {'component-a': ComponentA}
								})   此时只有只有app这个组件才能调用component-a`},
					{szmast:`组件传值`},
					{szmast:`父子传值:
						props    例子：<a-child v-bind:m='msg1'></a-child>
										components:{
													'a-child':{
													    props:['m'],  // m 就是我从父级取到的数据
														template:'<div>{{m}}</div>'
													}
												}          简单的来说就是绑定m=msg1 然后子组件props:['m']，此时m和msg1的数据一样`},
					{szmast:`兄弟传值:
						chuanzhi.$on('test', function (msg) {     接收
						  console.log(msg)
						})
						chuanzhi.$emit('test', 'hi')  发送，第一个参数对应,chuanzhi是一个空js文件,需要引入`},
					{szmast:`例子:
						发送组件: 
								 import chuanzhi from '../js/chuanzhi.js'
							  	 chuanzhi.$emit("text",0)
					 	接收组件: 
					 			 import chuanzhi from '../js/chuanzhi.js'
					 			 chuanzhi.$on('text',function(a){
					 			 	//内容在a参数中
					 			 }
					`}
				]
			},
			{
				szmast:'路由',
				children:[
					{szmast:`<router-link to=''></router-link>  等价于 <a href=""></a>
							使用router-link to=''是to后面接的路径一定要写全（如果是访问子路径，主路径也要写上）`},
					{szmast:`<router-view></router-view>或者<router-view/>  :路由载体，一般和router.({path:''})使用）`},
					{szmast:`js中this.$router.push({path:''}) 实现跳转`},
					{szmast:`$router.go(1)  : 页面前进后退，-1表示后退一步，0表示刷新1表示前进一步，2表示前进两步`},
					{szmast:`三种路由方式:动态匹配,嵌套路由,编程式路由`},
					{szmast:`动态匹配路由:
							export default new Router({
							    mode:"history",
							  routes: [
							    {
							      path: '/goods/:goods_id',//通过id不同引入对应的内容
							      name: 'Goodlists',
							      component: Goodlists
							    }
							  ]
							})
							//这种方式适用于模板格式一样但是内容不一样,
					`},
					{szmast:`嵌套路由:
						{
				            path:"/green",
				            component:green,
				            children:[
				                {
				                    path:"organic",   //二级路由以及之后的都没有 '/'   
				                    component:organic
				                }
				        }//简单的来说就是路由中含有路由,
				        //注意:<router-link to="/父路由的地址名字/要去的子路由的名字"></router-link>
				        //父级路由也得写上
					`},
					{szmast:`编程式路由:
						$router.push(“name”);
						$router.push({path:”name”});
						$router.push({path:”name”?a=123}); //传参
						$router.push({path:”name”，query:{a=123}});
						$router.go();`}
				]
			}
		],
		vuemuban:[
			{
				szmast:'模板',
				children:[
					{szmast:`
						<template>
							<div>
							<head>
								<meta charset="UTF-8">
						    	<meta name='renderer' content='webkit'>
						    	<meta name="viewport" content="width=640,user-scalable=no"  />
						    	<meta http-equiv=X-UA-Compatible content="chrome=1,IE=edge,IE=11">
							</head>								
								<div class="xiangqingtop">
									<div class="fanhui"
										@click="cli"><</div>
								</div>
								<div>这里是详情页面 {{msg}}</div>
								<div>这里是详情页面 {{msg1}}</div>
								<div>这里是详情页面 {{msg2}}</div>
							</div>				
						</template>
						
						<script>
							import store from '../../vuex/store.js'
							import xxx from 'xxx1'  //引入组件的.vue可以略
							import xxx2 from 'xxx3'  //引入组件的.vue可以略
							export default {
								data(){
									return {msg:0,msg1:1,msg2:''}
								},
								methods:{//事件容器	
									cli(){}
								},
								computed:{//计算属性
									//擅长处理的场景：一个数据受多个数据影响
									msg2(){
										return this.msg+this.msg1
									}
								},
								watch:{//监听
									//擅长处理的场景：多个数据受一个数据影响
									this.msg1=msg //当msg发生变化时,msg1也会发生变化
								},
								components:{//声明引入组件
									xxx,xxx2
								},
								created(){//创建时(生命周期的8个环节之一)
									axios.get('/api/xxx', {})
								    .then(res => {
								    	console.log(res)
								    })
								}
							}
						</script>
					`}
				]
			}
		
		],
		vuechangyong:[
			{
				szmast:'组件归递(解决树形数据)',
				children:[
					{szmast:`
						<div v-for="(i,index) in list">		
							<div v-if="isindex=index"
								v-for="c in i.children"></div>
						</div>
						//循环中嵌套循环,点击谁,对应的子循环显示
					`}
				]
			},
			{
				szmast:'跨域请求',
				children:[
					{szmast:`
						在config=>index.js=>proxyTable{}里面写入
						'/api': {
					        target: 'http://127.0.0.1:3000',//设置你调用的接口域名和端口号 别忘了加http
					        changeOrigin: true,
					        pathRewrite: {
					          '^/api': ''//这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://40.00.100.100:3002/user/add'，直接写‘/api/user/add’即可
					        }
					      }
						
					`}
				]
			}
		
		],
		vuexsto:[
			{
				szmast:'vuex数据共享',
				children:[
					{szmast:`
						操作: 
						npm install --save-dev vuex
						
						import Vue from 'vue'; 
						import Vuex from 'vuex';
						// 需要注册vuex到vue中
						Vue.use(Vuex);
						const state={a:1,b:2};
						const mutations={
							set1(){state.a=10},
							set2(){state.b=10}
						};
						const actions={
							setMutation(context){
								context.commit('set1')
							}
						};
						export default new Vuex.Store({
							state,mutations,actions
						})
					`},
					{szmast:`
						组件使用: 
						import store from '../../vuex/store.js'
						store.commit('set2')  //调用store中的mutations
						store.dispatch('setMutation') //调用store中的actions					
					`}
				]
			}
		
		],
		zifuchuan:[
			{
				szmast:'创建方法',
				children:[
					{szmast:`var str=new String()`},
					{szmast:`var str ='';`}
				]
			},
			{
				szmast:'操作方法',
				children:[
					{szmast:`charAt;通过索引找下标                  语法：str.charAt(index)`},
					{szmast:`charCodeAt   作用：通过索引找字符，找到后转为Unicode编码
							语法：str.charCodeAt(index)`},
					{szmast:`indexOf   	作用：通过字符找下标(从左往右找这个字符首次出现的位置)
									语法：字符串.indexOf(searchValue,fromIndex)
									参数：searchValue要查找的字符
									fromIndex从哪个位置开始找，这个参数若无默认为0,
									返回值：如果找到：返回一个数字（表示坐标）如果没有返回-1`},
					{szmast:`lastIndexOf   用法同上`},
					{szmast:`slice		作用：截取字符串（原有字符串不变）		
									语法;var ostr=str.slcie(m,n)
									参数：从m处截取到n处（不包含n）`},
					{szmast:`subString  	用法同上
									与slice的区别：1、slice起始位置不能大于结束位置，而substring起始位置可以大于结束位置`},
					{szmast:`substr		作用：截取字符串
									语法：字符串.substr(m，count)
									参数：从索引m处截取以count个字符，若无参数会把整个字符串返回（克隆）
									返回：返回取到的字符串，原字符不变。`},
					{szmast:`toLowerCase	作用：把字符串转成小写
									语法：var aa=str.toLowerCase()
									参数：无参
									返回：返回字符串转成小写的结果，原来的字符串没有变化。`},
					{szmast:`toUpperCase	作用：把字符串转成大写     用法同上`},
					{szmast:`replace()	作用：匹配，替换
									语法：var result = str.replace(/a/g, '9');
									参数：在全局下找到a然后用9替换   
									返回：返回一个字符串，原有的字符串不变`},
					{szmast:`match()	作用：匹配
									语法：let str="antzone";  var aa=str.match("zon")   console.log(aa);     返回结果 ['zon']
									参数：在全局下找到a然后用9替换   
									返回：返回一个数组，原有的字符串不变`}
				]
			}
		],
		riqiandmath:[
			{
				szmast:'Math函数',
				children:[
					{szmast:`向上取整 Math.ceil()`},
					{szmast:`向下取整 Math.floor()`},
					{szmast:`四舍五入  Math.round`},
					{szmast:`绝对值：Math.abs()`},
					{szmast:`比较最大值 Math.max(a,b)  最小值 ：Math.min(a,b)`},
					{szmast:`0~1的随机数 Math.random()    如：let aa=10*Math.random(),0~10的随机数`}
				]
			},{
				szmast:'data日期',
				children:[
					{szmast:`获取当前时间   var myDate=new Date();`},
					{szmast:`获取某一个具体的时间   var myDate = new Date(2016, 5, 30, 20, 30, 45);   2016年6月30日20点30分45秒`},
					{szmast:`getDate()从 Date 对象返回一个月中的某一天  如：document.write(myDate.getDate()）`},
					{szmast:`getDay()从 Date 对象返回一周中的某一天 (0 ~ 6) `},
					{szmast:`getMonth()从 Date 对象返回月份 (0 ~ 11)`},
					{szmast:`getFullYear()从 Date 对象返回年份`},
					{szmast:`getHours()返回 Date 对象的小时 (0 ~ 23)`},
					{szmast:`getMinutes()返回 Date 对象的分钟 (0 ~ 59)`},
					{szmast:`getSeconds()返回 Date 对象的秒数 (0 ~ 59)`},
					{szmast:`getTime()返回 1970 年 1 月 1 日至今的毫秒数`},
					{szmast:`parse()返回1970年1月1日午夜到指定日期（字符串）的毫秒数`},
					{szmast:`以上是获取时间,设置时间是直接将get改为set`}
				]
			}
		],
		qiangzhuanhua:[
			{
				szmast:'判断数据类型',
				children:[
					{szmast:`typeof()
						特点：返回的结果都是string类型，也就是说typeof（typeof（1））  
						string    两次使用typeof 返回的一定是string 类型`},
					{szmast:`jQuery.type
						用法和特点与typeof 一样   	 需要引入jq框架`}
				]
			},
			{
				szmast:'强制转化',
				children:[
					{szmast:`Number:
						 （1）如果是布尔值，true和false分别被转换为1和0
						 （2）如果是数字值，返回本身。
						 （3）如果是null，返回0.
						 （4）如果是undefined，返回NaN。
						 （5）如果既有数字又有其他的，则返回NaN`},
					{szmast:`parseInt   特点:
							和以上一样  不过他只算整数，小数点后面的一律不算`},
					{szmast:`parseFloat  特点
								用法和以上差不多，只要是以数字开头，他就能获取数字的那一部分 如：
								parseFloat（12.5aa） =》12.5     parseFloat（aa12.5）  =》NaN`},
					{szmast:`toString 特点
							除undefined和null之外的所有类型的值都具有toString()方法，其作用是返回对象的字符串表示`},
					{szmast:`String  将任何类型的值转换为字符串
						  （1）如果有toString()方法，则调用该方法（不传递radix参数）并返回结果
						  （2）如果是null，返回”null”
						  （3）如果是undefined，返回”undefined”`},
					{szmast:`Boolean：
						以下值会被转换为false：false、”"、0、NaN、null、undefined，其余任何值都会被转换为true`}
				]
			},
			{
				szmast:'隐式转化',
				children:[
					{szmast:`== ：相对等于:
						 先转化成同一类型再进行比较 true表示1    false NaN   undefined 表示0`},
					{szmast:`===  ：不转换，直接比较:
							false NaN   undefined 0 他们都不相等`},
					{szmast:` 逻辑操作符（!、&&、||）
								先转换成boolean  再比较`},
					{szmast:`关系操作符（<, >, <=, >=）`}
				]
			}
		],
		zhengze:[
			{
				szmast:'表达式',
				children:[
					{szmast:`var reg=/^abc$/gi:
						正则表达式 :  /  /
					    ^ :表示开始, $ :表示结束  
						g :表示全局查找， i :表示不区分大小写
						search:表示搜索,有返回1,没有返回-1
						test:表示匹配,合理的返回true ,不合理返回false
					例如:var str="ba";var reg1=/a/g;var reg2=/c/g;
						document.write(str.search(reg1));  //1
						document.write(str.search(reg2));  //-1
						document.write(str.test(reg1));  //true`}
				]
			},
			{
				szmast:'方法',
				children:[
					{szmast:`[0-9]:0-9`},
					{szmast:`[a-z]:a-z`},
					{szmast:`[A-Z]:A-Z`},
					{szmast:`[a-zA-Z0-9]:组合表达,0-9,a-z,A-Z 都符合`},
					{szmast:`[\u4e00-u9fa5]：匹配中文`},
					{szmast:`\d=[0-9];
							\^D=[^0-9];
							\w:匹配字母数字和下划线						//一般用于游戏姓名注册
							\W:不匹配字母数字和下划线
							\s:匹配空白字符,空格,制表符和换行符(\n)
							\S:除了空白字符以外都匹配; 
							量词
							{n,m}:至少出现n次，最多出现m次
							{n,}:至少出现n次，无上线
							*：任意个数；
							?：0次或者1次 				reg=/a?/
							+:至少出现一次；
							{n}：正好n次`}
				]
			},
			{
				szmast:'特殊例子',
				children:[
					{szmast:`身份证号:/^[1-9][0-9]{16}[0-9x]$/`},
					{szmast:`手机号:/^1[3|5|7|8]\d{9}$/`},
					{szmast:`qq号:/^2\d{9}$/`},
					{szmast:`邮箱:/^\w+@[0-9a-zA-Z]+\.com$/`}
					
				]
			}
		],
		thiswenti:[
			{
				szmast:'this指向',
				children:[
					{szmast:`谁在调用函数,该函数的this就指向谁
						例子:function a(){var user = "追梦子";
								console.log(this.user); //undefined
								console.log(this); //Window}
							a();  //=> Window.a() `},
					{szmast:`例子2:
						var o = { user:"追梦子",
							fn:function(){
							  console.log(this);  //追梦子 }}
						o.fn();   //o在调用这个函数this指向o`}
					
				]
			},
			{
				szmast:'改变this指向',
				children:[
					{szmast:`1.用_this=this:
						场合:函数中包含函数,外函数this指向某个作用域,恰好内函数也需要指向这个作用域
						zidongyuanze(zidong){
						var _this=this  //这是vue中的一部分this指向最外层DOM
						var osettime
							osettime=setInterval(()=>{
								_this.aa  :可以拿到
								//这是闭包函数.指向Windows
								但是zidongyuanze是他的底层作用域,他可以调用zidongyuanze
								内的常量和变量
							})
					`},
					{szmast:`2.call apply  bind:
						相同点：第一个参数为作用域，就是指向谁不,
						不同点:
						call():后面可以接多个参数，立即执行
						apply():只有两个参数，第二个参数以数组形式
						bind():后面可以接多个参数，但是并不马上执行
						例子:var a = {user:"追梦子",fn:function(a,b){
							console.log(this.user+a+b); //追梦子 }}
							var b = a.fn;
							b.call(a);  //追梦子undefinedundefined
							b.call(a,1,2);//追梦子12
							b.apply(a);  //追梦子undefinedundefined
							b.apply(a,[3,2]);//追梦子32
							b.bind(a);   //什么都没有
							var c=b.bind(a,4,5);
							c();        //追梦子4,5
						`}
					
				]
			}
		],
		jsonpl:[
			{
				szmast:'同源策略:所谓同源是指，域名，协议，端口相同',
				children:[
					{szmast:`协议：http  https
							端口：8080端口之类
							域名：www.baidu.com   www.aaa.cn  之类
					`}
					
				]
			},
			{
				szmast:'原理：',
				children:[
					{szmast:`由于同源策略 ajxa不能进行跨域请求，jsonp动态创建script标签,利用script标签的src属性可以获取任何域下的js脚本
					`}
					
				]
			},
			{
				szmast:'使用：',
				children:[
					{szmast:`
						 $.ajax({
				             type: "get",
				             async: false,
				             url: "http://flightQuery.com/jsonp/flightResult.aspx?code=CA1998",
				             dataType: "jsonp",
				             jsonp: "callback",//传递给请求处理程序或页面的，用以获得jsonp回调函数名的参数名(一般默认为:callback)
				             jsonpCallback:"flightHandler",//自定义的jsonp回调函数名称，默认为jQuery自动生成的随机函数名，也可以写"?"，jQuery会自动为你处理数据
				             success: function(json){}
					`}
					
				]
			},
			{
				szmast:'缺点：',
				children:[
					{szmast:`
						 2.1它只支持GET请求而不支持POST等其它类型的HTTP请求
						2.2它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。
						 2.3 jsonp在调用失败的时候不会返回各种HTTP状态码。
						 2.4缺点是安全性低
					`}
					
				]
			},
			{
				szmast:'应用场合：',
				children:[
					{szmast:`
						获取其他域名下的数据
					`}
					
				]
			}
		],
		yuanxing:[
			{
				szmast:'原型：',
				children:[
					{szmast:`
						每个函数都有一个prototype属性，这个prototype属性就是指向他的原型
					`}
					
				]
			}
		],
		mianxiangduixiang:[
			{
				szmast:'面向对象（封装，继承，多态）',
				children:[]
			},
			{
				szmast:'封装',
				children:[
					{szmast:`1.简单的封装（定义）:
						var cat1 = {};
					    cat1.name = '阿黄';
					    cat1.sex = '男';
					    cat1.age = 11;
					    //cat2也同样具有三个属性
					    var cat2 = {};
					    cat2.name = '小黑';
					    cat2.sex = '女';
					    cat2.age = '10';
						优缺点:
						1.如果有多个对象，写起来就比较麻烦，
						2.是实例和原型之间没有任何联系
					`},
					{szmast:`2.原始模型封装（在1的基础上进行改进）
						function Cat(name,sex,age){
					        return {
					            name:name,
					            sex:sex,
					            age:age
					        }					
					    }
					    var cat1 = Cat('小黄','男','11');
					    var cat2 = Cat('小黑','女','10');
					    alert(cat1.name);
						优缺点:
					    cat1和cat2没有什么内在联系，不能反应他们是同一原型对象的实例
					`},
					{szmast:`3.构造函数的封装
						function Cat(name,age,sex){
						    this.name = name;
						    this.sex = sex;
						    this.age = age;
						}
						var cat1 = new Cat('小黄','男','11');
						var cat2 = new Cat('小黑','女','10');
						优缺点:
					    如下:function Cat(name,age,sex){
						    this.name = name;
						    this.sex = sex;
						    this.age = age;
						    this.type = '猫科动物';
						}
						var cat1 = new Cat('小黄','男','11');
						var cat2 = new Cat('小黑','女','10');
						简单的来说就是:this.type = '猫科动物'是共同部分
						每次生成一个实例都会重复执行this.type = '猫科动物'
						造成资源的浪费,
					`},
					{szmast:`4.构造函数+Prototype模式
						function Cat(name,age,sex){
						    this.name = name;
						    this.sex = sex;
						    this.age = age;
						}
						//构造函数中如果有些都是相同的,(如上的猫科动物)
						我们把它放到prototype中
						Cat.prototype.type = "猫科动物";
						var cat1 = new Cat('小黄','男','11');
						var cat2 = new Cat('小黑','女','10');
						consle.log(cat1.type)   //猫科动物
						每个构造函数都会有一个prototype
					`},
					{szmast:`isPrototypeOf():
						这个方法用来判断，某个proptotype对象和某个实例之间的关系
						如下:
						alert(Cat.prototype.isPrototypeOf(cat1)); //true
						alert(Cat.prototype.isPrototypeOf(cat2)); //true
					`},
					{szmast:`hasOwnProperty():
						每个实例对象都有一个hasOwnProperty()方法，用来判断某一个属性到底是本地属性，还是继承自prototype对象的属性
						如下:
						alert(cat1.hasOwnProperty("name")); // true 表示本地有
						alert(cat1.hasOwnProperty("type")); // false
					`}
					
				]
			},
			{
				szmast:'构造函数继承和非构造函数继承',
				children:[
					{szmast:`
						构造函数和非构造函数的区别:
						构造函数:
						1.用new关键字调用,如:var prince=new Prince();
						2.函数内部可以使用this关键字(如上this指向prince)
						3.默认不用return返回值(也可以用,一般用this)
						4.首字母大写
					`},
					{szmast:`
						构造函数和非构造函数的区别:
						非构造函数:
						1.不用new关键字调用,如:var prince=new Prince();
						2.函数内部一般不用可以使用this关键字(不确定this指向,造成变量混乱)
						3.默认用return返回值
						4.首字母小写
					`},
					{szmast:`
						个人理解构造函数和非构造函数的区别在于new的使用:
						如下:
						function Person(){
						    consle.log(this)
						  }
						  var person=new Person();  //person
						  Person()    //windon
						
						
					`}
				]
			},
			{
				szmast:'构造继承',
				children:[
					{szmast:`
						如下两个例子:
						1.function Animal(){this.species = "动物";}
						2.function Cat(name,color){
					　　　　this.name = name;
					　　　　this.color = color;}
						'猫'也是动物,如何让'猫'继承'动物'呢
					`},
					{szmast:`
						1.构造函数绑定:
						第一种方法也是最简单的方法，使用call或apply方法，将父对象的构造函数绑定在子对象上，
						即在子对象构造函数中加一行:
						代码如下:
						function Cat(name,color){
					　　　　Animal.apply(this, arguments);
					　　　　this.name = name;
					　　　　this.color = color;
					　　}
					　　var cat1 = new Cat("大毛","黄色");
					　　alert(cat1.species); // 动物
					`},
					{szmast:`
						2.prototype模式:
						如果"猫"的prototype对象，指向一个Animal的实例，
						那么所有"猫"的实例，就能继承Animal了:
						代码如下:
						Cat.prototype = new Animal();  Cat继承了Animal的属性
					　　Cat.prototype.constructor = Cat;
					　　var cat1 = new Cat("大毛","黄色");
					　　alert(cat1.species); // 动物
					
						注:Cat.prototype.constructor = Cat;第二句
						任何一个prototype对象都有一个constructor属性，
						指向它的构造函数。如果没有"Cat.prototype = new Animal();"
						这一行，Cat.prototype.constructor是指向Cat的；
						加了这一行以后，Cat.prototype.constructor指向Animal
						但是我们运行的是Cat,我们想要的是Cat.prototype.constructor指向Cat
						同时,每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性
						例如:
						alert(cat1.constructor == Cat.prototype.constructor); // true
						我们之所以加第二句是为了保证致继承链不紊乱（cat1明明是用构造函数Cat生成的)
						 因此我们必须让cat1.constructor=>Cat
					`},
					{szmast:`
						2.prototype模式:
						如果"猫"的prototype对象，指向一个Animal的实例，
						那么所有"猫"的实例，就能继承Animal了:
						代码如下:
						Cat.prototype = new Animal();  Cat继承了Animal的属性
					　　Cat.prototype.constructor = Cat;
					　　var cat1 = new Cat("大毛","黄色");
					　　alert(cat1.species); // 动物
					
						注:Cat.prototype.constructor = Cat;第二句
						任何一个prototype对象都有一个constructor属性，
						指向它的构造函数。如果没有"Cat.prototype = new Animal();"
						这一行，Cat.prototype.constructor是指向Cat的；
						加了这一行以后，Cat.prototype.constructor指向Animal
						但是我们运行的是Cat,我们想要的是Cat.prototype.constructor指向Cat
						同时,每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性
						例如:
						alert(cat1.constructor == Cat.prototype.constructor); // true
						我们之所以加第二句是为了保证致继承链不紊乱（cat1明明是用构造函数Cat生成的)
						 因此我们必须让cat1.constructor=>Cat
					`},
					{szmast:`3.直接继承prototype:
						第三种方法是对第二种方法的改进。由于Animal对象中，
						不变的属性都可以直接写入Animal.prototype。所以，
						我们也可以让Cat()跳过 Animal()，直接继承Animal.prototype:
						代码如下:
						function Animal(){ }
　　						Animal.prototype.species = "动物";
						
						Cat.prototype = Animal.prototype;
					　　Cat.prototype.constructor = Cat;
					　　var cat1 = new Cat("大毛","黄色");
					　　alert(cat1.species); // 动物
						优点:将Cat.prototype和Animal.prototype绑到一块
						不用执行Animal这个实例,减少内存消耗,
						缺点:将两者绑到一块,意味着Cat.prototype改变,Animal.prototype也会改变
						如:Cat.prototype.constructor = Cat;,此时Animal.prototype.constructor = Cat;
						这样子也不是我们太想要的结果,
					`},
					{szmast:`4.利用空对象作为中介:
						由于"直接继承prototype"存在上述的缺点，所以就有第四种方法，
						利用一个空对象作为中介
						代码如下:
						function Animal(){ }
　　						Animal.prototype.species = "动物";
						
						var F = function(){};  
						　　F.prototype = Animal.prototype;
							//F的prototype是Animal.prototype,F有Animal.prototype属性
						　　Cat.prototype = new F();
							//Cat获得F的所有属性
						　　Cat.prototype.constructor = Cat;
							//保证继承链不紊乱
						优点:F()为空,不占内存,Cat.prototype不等于Animal.prototype
						两者互不影响
						
						将上述代码封装一下:
						function extend(Child, Parent) {
					　　　　var F = function(){};
					　　　　F.prototype = Parent.prototype;
					　　　　Child.prototype = new F();
					　　　　Child.prototype.constructor = Child;
					　　　　Child.uber = Parent.prototype;
					　　}
						解释:Child.uber = Parent.prototype;
						是为子对象设一个uber属性，这个属性直接指向父对象的prototype属性。
						这等于在子对象上打开一条通道，可以直接调用父对象的方法。这一行放在这里，
						只是为了实现继承的完备性，纯属备用性质
					`},{
						szmast:`至于用那种最好看场景而定,
						1比较适合继承的量比较少,
						2内存足够可以考虑第二种
						第四种也挺好的`
					}
				]
			},
			{
				szmast:'非构造函数继承',
				children:[
					{szmast:`寄生组合继承`},
					{szmast:`
						如下例子:
						var Chinese = {nation:'中国'};
						var Doctor ={career:'医生'};
						请问怎样才能让"医生"去继承"中国人"，也就是说，我怎样才能生成一个"中国医生"的对象？
						这里要注意，这两个对象都是普通对象，不是构造函数，无法使用构造函数方法实现"继承"
						
						解决:object()方法(寄生组合继承)
						function object(o) { 建立一个函数,这函数继承括号内的函数
					　　　　function F() {}
					　　　　F.prototype = o;
					　　　　return new F();
					　　}
						var Doctor = object(Chinese);  //重新定义  Doctor
						Doctor.career = '医生';			//给Doctor属性
						
						再如下例子:
						function clone(obj){
							function F(){};
							F.prototype = obj;
							return new F;
						}
						
						var Chinese = {
						　　　　nation:'中国',
						　　　　createBirthPlaces : function(){
						　　　　	return ['北京','上海','香港'];
						　　	}
						　　};			
						var Doctor = clone(Chinese);
						Doctor.career = '医生';
						Doctor.birthPlaces = Chinese.createBirthPlaces();			
						console.log(Doctor.birthPlaces);
						//[ "北京", "上海", "香港" ]
						Doctor.birthPlaces.push('大连');
						console.log(Doctor.birthPlaces);
						//[ "北京", "上海", "香港", "大连" ]
						console.log(Chinese.createBirthPlaces());
						//[ "北京", "上海", "香港" ]
						
					`}
				]
			},
			{
				szmast:'深浅拷贝继承',
				children:[
					{szmast:`
						
					`}
					
				]
			},
			{
				szmast:'多态',
				children:[
					{szmast:`
						每个函数都有一个prototype属性，这个prototype属性就是指向他的原型
					`}
					
				]
			}
		],
		bibaosto:[
			{
				szmast:'了解几个概念：作用域链，执行环境和活动对象',
				children:[
					{szmast:`
						作用域链：
						每个函数都是一个作用域  a（）=>{b（）=>{}} a函数中有一个b函数，
						函数嵌套函数，作用域中有作用域，这就形成一个作用域链。作用域链
						用来指定执行环境有权访问的所有变量和函数的访问顺序，作用域链的
						最前端，始终是当前代码执行环境的变量对象        简单的来说就是a函数
						中有一个b函数，b函数有权获取a函数中的变量
					`},
					{szmast:`
						执行环境：
						简单的理解就是局部和全局        
						全局执行环境是最外围的一个执行环境，
						通常被认为是window对象
					`}
				]
			},
			{
				szmast:`
					概念:
					闭包是指有权访问另一个函数作用域变量的函数，
					创建闭包的通常方式，是在一个函数内部创建另一个函数
					注:自执行函数是一个特殊的闭包函数
				`,
				children:[
					{szmast:`
						简单的理解一下:函数中return一个函数,这个return的
						函数就是闭包函数,像函数中有setTimeout setInterval
						之类的函数如下例子
					`},
					{szmast:`
						function A(){var x = 1;
					        return function(){
					            x++;
					            console.log(x); }
					    }
					    var m1 = A();//第一次执行A函数
					    m1();//2
					    m1();//3
					    var m2 = A();//第二次执行A函数
					    m2();//2
					    m1();//4       闭包函数下m1的变量没有被销毁，销毁的方法就是令m1=null
					
						普通函数：function A(){
							        var x = 1;
							            x++;
							            console.log(x);
							    }
							    var m1 = A();//第一次执行A函数
							    m1();//2
							    m1();//2      第一次执行结束之后函数变量都已经被销毁了
					
					`}
				]
			}
		],
		TortoiseGit:[
			{
				szmast:'基本使用',
				children:[
					{szmast:`
						详细安装流程:
						https://www.cnblogs.com/wupenglei-5/p/8744801.html
					`},
					{szmast:`
						使用指令:
						创建版本库 :git init
						添加文件到版本库:git add  xx   git commit xxxx
						注:xx表示文件(如:aa.txt),当然也可以写成git add . :表示所有文件
						git commit:添加到分支,(如:git commit -m 'aaa':添加到aa分支中)
						查看仓库状态:git status
						常用的还有
						pwd:查看当前所在git所在位置. 
						cd xxx  表示到哪里去(一些linux系统常用指令)
						ll或者ls:查看所有文件(如果是ls -a:表示显示包括隐藏的文件)
						mkdir:创建文件(Windows不可用)
						echo:表示写内容(如echo'aa'>>aa.txt:写aa追加到aa.txt文件中)
						cat:表示显示文件内容
						日常工作流程:
						git status:  先看看当前状态
						如果没有在本地仓库暂存区就git add xxx
						注:如果是临时开发,但不确定用不用就放在暂存区
						如果不需要我们可以用 git reset HEAD xxx 
						将暂存区的文件回归到工作区
						然后将工作区弄干净:git checkout xxx
						接下来就放到本地仓: git commit -m 'xxx'
						(-m :表示描述)
						如果已经提交到本地仓但是需要复原,
						:git log:找到回到原来的那次commit 复制后面的一堆字符
						然后git reset --hard xxx (xxx:表示那一堆字符)
						
						清除文件:git rm  
						上传: git commit  -m 'xxx'
						以上连个步骤清除工作区文件和仓库文件
						
					`}
				]
			},
			{
				szmast:'常见问题',
				children:[
					{szmast:`
						多人上传冲突问题:
						https://blog.csdn.net/qq_18229381/article/details/80547044
					`},
					{szmast:`
						上传master时不要勾选修改上次提交,不然无法推送
					`}
					
				]
			}
		],
		yemianyouhuasto:[
			{
				szmast:'优化代码',
				szmast:'从设计实现层面简化页面 :例子：清除浮动div clear：both；会造成空div很多，最好用伪元素处理',
				szmast:'合理设置HTTP缓存',
				szmast:'资源合并与压缩',
				szmast:'减少HTTP请求：图片合拼',
				szmast:'将外部脚本置底  外部引入放在body下面',
				szmast:'异步请求',
				szmast:'单页面Javascript css分析，需要什么就加载什么。proxy',
			}
		],
		qianduancunchusto:[
			{
				szmast:'cookie、sessionstorage、localstorage，indexedDB',
				children:[
					{
						szmast:`不同点:`,
						szmast:`
							存储周期和作用域不同： 
							  cookie默认的有效期非常短，存在于web浏览器会话期间  当然可以设置时间
							  localStorage有效期：永不失效，除非web应用主动删除  
							  sessionStorage有效期：     窗口关闭就消失
						`,
						szmast:`
							存储空间大小不同：
  							cookie最大4k，sessionstorage 和localstorage可以达到5m甚至是更大
						`,
						szmast:`
							sessionStorag,localstorage特点：
							1) 同源策略限制。若想在不同页面之间对同一个sessionStorage进行操作，这些页面必须在同一协议、同一主机名和同一端口下
						   2) 单标签页限制。sessionStorage操作限制在单个标签页中，在此标签页进行同源页面访问都可以共享sessionStorage数据
						   3) 只在本地存储。seesionStorage的数据不会跟随HTTP请求一起发送到服务器，只会在本地生效，并在关闭标签页后清除数据
						   4) 存储方式。seesionStorage的存储方式采用key、value的方式。value的值必须为字符串类型
						   5) 存储上限限制：不同的浏览器存储的上限也不一样，但大多数浏览器把上限限制在5MB以下
						`,
					},
					{
						szmast:`使用方法:`,
						szmast:`
							cookie:
							
						`,
						szmast:`
							存储空间大小不同：
  							cookie最大4k，sessionstorage 和localstorage可以达到5m甚至是更大
						`,
						szmast:`
							sessionStorag,localstorage特点：
							1) 同源策略限制。若想在不同页面之间对同一个sessionStorage进行操作，这些页面必须在同一协议、同一主机名和同一端口下
						   2) 单标签页限制。sessionStorage操作限制在单个标签页中，在此标签页进行同源页面访问都可以共享sessionStorage数据
						   3) 只在本地存储。seesionStorage的数据不会跟随HTTP请求一起发送到服务器，只会在本地生效，并在关闭标签页后清除数据
						   4) 存储方式。seesionStorage的存储方式采用key、value的方式。value的值必须为字符串类型
						   5) 存储上限限制：不同的浏览器存储的上限也不一样，但大多数浏览器把上限限制在5MB以下
						`,
					}
				]
			}
		]
	
	},
	zsxiangqinghou:{
		npxilie:[
			{
				szmast:'npm',
				children:[
					{szmast:`
						安装:node包含npm,安装node就等于包含npm
						安装node:https://nodejs.org/en/download
						选择你想要的版本,最好将node路径写入环境变量中
					`},
					{szmast:`
						查看版本:npm -v
						npm install(或者 i) 安装模块
						npm uninstall 卸载模块
						npm update 更新模块
						npm outdated 检查模块是否已经过时
						npm ls 查看安装的模块
						npm init 在项目中引导创建一个package.json文件
						npm help 查看某条命令的详细帮助
						npm root 查看包的安装路径
						npm config 管理npm的配置路径
						npm cache 管理模块的缓存
						npm start 启动模块
						npm stop 停止模块
						npm restart 重新启动模块
						npm test 测试模块
						npm version 查看模块版本
						npm view 查看模块的注册信息
						npm adduser  用户登录
						npm publish 发布模块
						npm access 在发布的包上设置访问级别
						npm package.json的语法
						
						npm install gulp :默认安装最新版本
						npm install gulp@3.9.1:安装指定版本,如:3.9.1版本
					`}
				]
			},
			{
				szmast:'npx',
				children:[
					{szmast:`
						安装:npm install -g npx
					`},
					{szmast:`
						研究中
					`}
				]
			},
			{
				szmast:'cnpm',
				children:[
					{szmast:`
						淘宝镜像
						安装:npm install -g cnpm --registry=https://registry.npm.taobao.org
						添加路径到path环境中
					`},
					{szmast:`
						验证:cnpm -v
					`}
				]
			}
		],
		nodesto:[
			{
				szmast:'node',
				children:[
					{szmast:`
						安装node:https://nodejs.org/en/download
						选择你想要的版本,最好将node路径写入环境变量中
					`},
					{szmast:`
						使用:
						 查看版本 node -v
						 
						运行:
						(1.cnpm instal  express-generator -g  （只需安装一次）)
						2.express 你的项目名字
						3.cd 你的项目名称
						4.cnpm install(或者npm install)             补齐依赖
						5.npm start（或者是node app）         启动项目,(其中app为主要项目)
						
						下载成功后默认的是ejs:
						将ejs文件改为html:
						npm i ejs
						npm i path
						app.set('views', path.join(__dirname, 'views'));
						//将views文件作为可视图
						app.set('view engine', 'jade');
						app.engine('.html', require('ejs').renderFile);
						//用html替代ejs
						app.use("/static",express.static(path.join(__dirname,'static')));
						//将static作为公共文件
						
						app.get("/",function(req,res,next){
							res.render("index")
						});
						
						将module.exports=app;=>app.listen(5000,'127.0.0.1')
						意思是:监听5000端口启动node服务器
						
						重新执行 node app
						
					`}
				]
			},
			{
				szmast:'node连接数据库',
				children:[
					{szmast:`
						操作:
						npm i nongodb
						var db=require("./modle/db.js");
						
						db.js内容如下:
						var mongo=require("mongodb");//@2.2.11
						var MongoClient = mongo.MongoClient;
						var dbName = 'webapp';
						function _connectDB(callback) {
						    var url = settings.dburl;   //从settings文件中，都数据库地址
						    //settings.js文件内容是:
						    //module.exports = {
							//    "dburl" : "mongodb://localhost:27017"
							//} 有时上传的路径不是本地,这样子比较方便
						    //连接数据库
						    MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
						        if (err) {
						            callback(err, null);
						            return;
						        }
						        callback(err, db);
						    });
						}
						//以上是连接数据库
						
						//添加数据:
						_connectDB(function (err, db) {
					    	const col = db.db(dbName);
					        col.collection(collectionName).insertOne(json, function (err, result) {
					            callback(err, result);
					            db.close(); //关闭数据库
					        })
					    })
						
						细节请看db.js
					`}
				]
			},
			{
				szmast:'获得前端请求并上传数据',
				children:[
					{szmast:`
						当前端请求find时查找并发送数据:
						上传数据用一般用post请求,
						app.get('/find', function (req, res, next) {
							db.find( applujing ,{},function(err,result){
							    res.json({"result":result,'num':applujing});	    
							});
						});
					`}
				]
			}
		]
		
	},
	zsxiangqingshuju:{
		mongodb:[
			{
				szmast:'下载',
				children:[
					{szmast:`
						https://www.mongodb.com/download-center/community
					`},
					{szmast:`
						运行:打开第一个cmd:输入:mongod -storageEngine mmapv1 -dbpath c:\mongodb
						打开第二个cmd:输入:mongo
						注:第一句只是将数据存储在什么位置接下来都在
						第二个cmd中运行
					`}
				]
			},
			{
				szmast:'数据库',
				children:[
					{szmast:`
						show dbs: 查看所有数据库
						use xxx :到某个数据库下
						
						use xxx
						db.dropDatabase()  :删除数据库(先到该数据库下再删)
					`}
				]
			},
			{
				szmast:'集合',
				children:[
					{szmast:`
						创建集合:
						db.table1.insert({'a':1})
						或者db.table2  
						
						查看集合:
						show collections 
						或者show tables
						
						删除集合:
						db.xxx.drop()
						
					`}
				]
			},
			{
				szmast:'文档',
				children:[
					{szmast:`
						添加文档:
						db.table1.insert({'a':1})  添加一条
						db.user.insertMany([{'a':1},{'a':2},{'a':3}]) 添加多条
						
						删除文档:
						db.user.deleteOne({ 'age': 8 })#第一个包含有 'age': 8的文档
						
						db.user.deleteMany( {'addr.country': 'China'} ) #只要有内嵌文档，且内容含有country': 'China'的全都删除
						db.user.deleteMany({"_id":{"$gte":3}})#删除id大于等于3的所有
						
						db.user.deleteMany({}) #等于是清空该集合（表）
						
						查看文档:
						db.user.find({条件}}) 符合条件的都显示
						
					`}
				]
			},
			{
				szmast:'逻辑符',
				children:[
					{szmast:`
						大于等于之类:
						$gt:大于
						$lt:小于
						$gte:大于或等于
						$lte:小于或等于 						 
						 如查询j大于3,小于4:
						db.things.find({j : {$lt: 3}});
						db.things.find({j : {$gte: 4}});
						
						对查询结果进行排序：sort()  1代表升序、-1代表降序
						db.user.find().sort({"name":1,})
						db.user.find().sort({"age":-1,'_id':1})
						
						分页：limit表示取多少个document，skip代表跳过几个document
						db.user.find().limit(2).skip(0)#前两个
						db.user.find().limit(2).skip(2)#第三个和第四个
						db.user.find().limit(2).skip(4)#第五个和第六个
						
						获取数量：count()
						db.user.find({'age':{"$gt":30}}).count()
						如果年龄大于30的有30条数据,则显示30
						 
						更多细节:
						https://www.cnblogs.com/zhuminghui/p/8330429.html
						
					`}
				]
			}
		]
		
	},
	zsxiangqingkuangjia:{
		Elementsto:[
			{
				szmast:'Element使用',
				children:[
					{szmast:`
						https://element.eleme.cn/#/zh-CN/component/layout
					`},
					{szmast:`
						运行:
						npm i element-ui -S
						
						在main.js文件中引入:
						import ElementUI from 'element-ui';
						import 'element-ui/lib/theme-chalk/index.css';						
						Vue.use(ElementUI);
						就可以直接使用
						
						
						更多插件:
						https://blog.csdn.net/hjh15827475896/article/details/78207066
					`}
				]
			}
		],
		MintUI:[
			{
				szmast:'MintUI使用',
				children:[
					{szmast:`
						https://mint-ui.github.io/#!/en
					`},
					{szmast:`
						运行:
						npm install mint-ui -S
						
						在main.js文件中引入:
						import Vue from 'vue';
						import Mint from 'mint-ui';
						Vue.use(Mint);
						就可以直接使用
						
						// 按需引入部分组件
						(直接在组件中引入)
						import { Cell, Checklist } from 'minu-ui';
						Vue.component(Cell.name, Cell);
						Vue.component(Checklist.name, Checklist);
						
						更多插件:
						https://blog.csdn.net/hjh15827475896/article/details/78207066
					`}
				]
			}
		],
		BootstrapVue:[
			{
				szmast:'BootstrapVue使用',
				children:[
					{szmast:`
						https://bootstrap-vue.js.org/docs/
					`},
					{szmast:`
						运行:
						npm i vue bootstrap-vue bootstrap
						
						在main.js文件中引入:
						import Vue from 'vue'
						import BootstrapVue from 'bootstrap-vue'
						Vue.use(BootstrapVue)
						import 'bootstrap/dist/css/bootstrap.css'
						import 'bootstrap-vue/dist/bootstrap-vue.css'
						就可以直接使用
						
						更多插件:
						https://blog.csdn.net/hjh15827475896/article/details/78207066
					`}
				]
			}
		]
		
	},
	zsxiangqingES6:{
		xinzeng:[
			{
				szmast:'var let const',
				children:[
					{szmast:`
						区别:
						var :ES5之前使用,现在也能用
						let: 用来定义变量
						const:用来定义常量,并且const声明常量之后就必须立即初始化！
					`}
				]
			},
			{
				szmast:'省略function',
				children:[
					{szmast:`
						aa:function(){}  等价于  aa(){}
						aa=function(a){}  等价于  aa=(a)=>{}
						function a(a,b)  等价于 a(a,b)=>{}
					`}
				]
			},
			{
				szmast:'数组合并(...)',
				children:[
					{szmast:`
						let a=[1],b=[2],c=[3]
						let d=[...a,...b,...c]
						console.log(d)  //[1,2,3]
						let o1 = { a: 1, b: 2, c: 3 };
						let o2 = {...o1, d: 4};
						console.log(o2)  //{a: 1, b: 2, c: 3,d: 4}						
					`}
				]
			},
			{
				szmast:'字符串转数组',
				children:[
					{szmast:`
						let a=[..."hello"]
						console.log(a) //["h","e","l","l","o"]
					`}
				]
			},
			{
				szmast:'数组自身组合copyWithin',
				children:[
					{szmast:`
						定义:
						copyWithin(被覆盖起始位置，选取的数据起始位置，选取额数据结束位置)
						截取数组的一段数据，并覆盖到指定位置
						const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
						arr1.copyWithin(1, 3, 6)
						结果是:[1,4,5,6,5,6,7,8,9,10,11]
						copyWithin后面接的三个参数都是索引值
						第一参数:索引1  就是arr1中的2开始替换
						第二参数:索引3 就是arr1中的4开始截取(包含4)
						第三参数:索引6 就是arr1中的7结束(不包含7)
						所以就是 4,5,6
						截取了三个数,就替换三个,
						所以2,3,4就被4,5,6替换,总体长度不变
						就相当于ES5中的slice(n,m)和splice(n,m,x)
						很明显他有局限性.
					`}
				]
			},
			{
				szmast:'find(),findIndex(),fill()',
				children:[
					{szmast:`
						定义:
						[1, 2, 3, 4].find((value, index, arr) => {}
						value：每一次迭代查找的数组元素。
						index：每一次迭代查找的数组元素索引。
						arr：被查找的数组。
						返回结果如果有是成立的第一个元素
						如果没有返回undefined
						var a=[1, 2, 3, 4].find((value, index, arr) => {
							return value>1   //
						}
						console.log(a)  //2
						
						findIndex :用法同上,
						只是如果有返回的是索引
						如果没有返回-1
						
						arr.fill(value, start, end)
						value：填充值。
						start：填充起始位置，可以省略。
						end：填充结束位置，可以省略，(不包含)
						如:
						const arr1 = [1, 2, 3, 4, 5]
						arr1.fill(7)
						结果是[7,7,7,7,7]
						arr1.fill(7,1)
						结果是[1,7,7,7,7]
						arr1.fill(7,1,4)
						结果是[1,7,7,7,5]
					`}
				]
			},
			{
				szmast:'数组遍历,keys(),values(),entries()',
				children:[
					{szmast:`
						定义:
						keys():返回索引
						values():返回元素
						entries():返回索引和元素
						如:
						const arr1 = ['a', 'b', 'c']
						for (let index of arr1.keys()) {
						  console.log(index);//0,1,2
						}
						//注:let index of arr1.keys()等价于let index in arr1
						for (let index of arr1.values()) {
						  console.log(index);//a,b,c
						}
						//注:let index of arr1.values()和没有values()一样
						for (let [index,val] of arr1.values()) {
						  console.log(index,val);//0,a  1,b  2,c
						}
						
						而外再提一个indexOf() 
						返回改元所在的索引
						如果没有返回-1
						如:
						const arr1 = ['a', 'b', 'c']
						let a=arr1.indexOf(a)
						console.log(a) // 0
						
						
						
						更多关于ES6 
						http://es6.ruanyifeng.com/
					`}
				]
			}
		],
		promisesto:[
			{
				szmast:'基本使用',
				children:[
					{szmast:`
						const p1 =new Promise(function(resolve, reject){
						  console.log(1)
						  resolve();  //表示如果console执行
						  			  //成功后干什么
						});						
						p2.then(console.log(2))
						//成功后执行console.log(2)
  						 .catch(console.log(3))
  						 //如果失败就执行console.log(3)
  						 
  						console.log(4)
  						
  						以上结果是 1,4,2
  						Promise和其他是异步编程,
  						p2和console.log(4)几乎同时运行
  						p2和then后的内容又是同步编程
  						执行完p2后才执行then后的内容
  						(如果p2后面添加多个then,多个then之间也是异步)
  						
  						又如:
  						const p2 = new Promise((resolve,reject)=>{
							setTimeout(()=>{
								console.log(1);
								resolve();
							}, 3000);							  
						})
						p2.then(()=> {
						  console.log(4);
						});
						console.log(3)
						//结果是 3,1,4
  						
					`}
				]
			},
			{
				szmast:'Promise中含有Promise',
				children:[
					{szmast:`
						如:
						const p1 = new Promise((resolve, reject)=>{
						  console.log(1)
						  resolve();
						});		
						const p2 = new Promise((resolve, reject)=>{
						  console.log(2)
						  resolve(p1);
						})
						p1.then(()=> {
						  console.log(3);
						});
						p2.then(()=> {
						  console.log(4);
						});
						结果是 1,2,3,4
						原因:
						当p2的resolve方法将p1作为参数时
						p1的状态决定了p2的状态。如果p1的状态是pending，
						那么p2的回调函数就会等待p1的状态改变；
						如果p1的状态已经是resolved或者rejected，
						那么p2的回调函数将会立刻执行
						
						p1的状态就是p2的状态.	
						
						
						
						更多关于promise
						http://es6.ruanyifeng.com/#docs/promise
					`}
				]
			}
		]
	},
	linuxsto:{
		alifuwuqi:[
			{
				szmast:'购买准备',
				children:[
					{szmast:`
						购买阿里云ECS和域名
						操作步骤:
						F:\node.js视屏教程\全栈最后一公里 - Nodejs 项目的线上服务器部署与发布
						备案预计25天到一个月
					`}
				]
			},
			{
				szmast:'域名解析',
				children:[
					{szmast:`
						定义:就是将域名转换成ip地址
						如:(域名就相当于现实生活中的市名：杭州市
							ip地址相当于邮局内部的编码：杭州-311201
							如果别人问，你是哪个市的。
							我说，杭州市。
							别人一下就记住了。
							如果我说，311201。)
						步骤:
						1进入阿里云管理控制台 ——云解析DNS，选择需要解析的域名——解析
						2添加两条解析，打码的地方添自己服务器的公网IP
					`}
				]
			},
			{
				szmast:'需要检查服务的端口是否开启',
				children:[
					{szmast:`
						1进入管理控制台——云服务器ECS——实例，这里有可以管理你的实例
						2操作——更多——安全组配置——配置规则
					`}
				]
			}
		],
		xshelllian:[
			{
				szmast:'xshell使用',
				children:[
					{szmast:`
						不记住密码操作:
						下载,打开,输入ip地址,输入远程链接密码
						
						记住密码操作:
						文件下面有个+号,点击他输入主机ip
						点击用户身份认证,输入远程链接密码
					`}
				]
			}
		],
		anzhuangruanjian:[
			{
				szmast:'node安装',
				children:[
					{szmast:`
						yum install epel-release    
						yum install nodejs
						node -v  查看node版本(应该是最低版本)
					`}
				]
			},
			{
				szmast:'node版本管理',
				children:[
					{szmast:`
						Windows:gnvm
						2、以管理员身份运行node.js，输入gnvm version
						3、安装多个版本。命令：gnvm install latest 1.0.0-x86 1.0.0-x64 5.10.1
						4、查看版本，gnvm ls
						5、切换版本，gnvm use 5.10.1
						6、卸载本地版本，gnvm uninstall 5.10.1
						7、更新最新的版本，gnvm update latest
					`},
					{szmast:`
						linux:n
						2、安装:npm install -g n
						3、查看版本: n -V
						4、更新到最新版本:n stable
						5、更新到指定版本:n  v6.0.0 (或者n 6.0.0 )
					`}
				]
			},
			{
				szmast:'MongoDB安装',
				children:[
					{szmast:`
						1.yum -y update（更新updata）
						touch /etc/yum.repos.d/mongodb-org.repo(创建仓库文件)
						2.vi /etc/yum.repos.d/mongodb-org-3.4.repo（打开这个文件）
						3.（放入内容保持并退出）
						[mongodb-org-3.4]                                                                    
						name=MongoDB Repository
						baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
						gpgcheck=1
						enabled=1
						gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc
						注:退出操作:输入a =>安esc =>输入:wq!
						4.yum install -y mongodb-org  （安装MongoDB）
						5.vi /etc/mongod.conf     =>    127.0.0.1-->0.0.0.0 (配置文件：只改了这个) 
						6.chkconfig mongod on(设置开机启动)
						7.service mongod start  （能正常启动）
						
						mongodb的相关指令与Windows相同
					`}
				]
			},
			{
				szmast:'PM2安装',
				children:[
					{szmast:`
						npm install -g pm2  安装指令
						pm2 start app.js  # 启动app.js应用程序
						pm2 stop app.js  # 关闭app.js应用程序
						pm2 restart app.js # 重启app.js应用程序
					`}
				]
			},
			{
				szmast:'git作为远程仓',
				children:[
					{szmast:`
						安装远程仓:
						// 安装git
						yum install -y git 
						// 查看git版本
						git --version
						// 创建git用户
						adduser git
						// 设置git用户密码
						passwd git
						//建立git文件
						cd /home
						mkdir git
						//建立.ssh文件
						cd git
						mkdir .ssh
						chmod 775 .ssh
						touch .ssh/authorized_keys
						chmod 664 .ssh/authorized_keys
						vi .ssh/authorized_keys
						然后将所有登陆用户的公钥保存在
						authorized_keys 中，一行一个
						(注:该公钥是git本地仓的公钥)
						
						cd /home
						mkdir mycode
						chown git mycode/ #更改所属用户
						cd mycode
						git init --bare test.git  #初始化仓库
						chown -R git test.git  #更改所属用户
						
						
					`}
				]
			}
		]
	},
	
	xiangmu:[
		{label: 'vue',
          children: [
            {label: 'meidicloud'},
            {label: 'gcldgame'}
            ]
          }
	],
	dengnow:{
		yonghu:'登录',
		zhanghao:'miguo',
		passwr:136330
	},
	weiyideng:{
		yonghu:'米果',
		zhanghao:'miguo',
		passwr:136330
	}



}

const mutations={
	setdengnow(state,mm){
		state.dengnow.yonghu=mm	
	}
}

export default new Vuex.Store({
	state,
	mutations
})
