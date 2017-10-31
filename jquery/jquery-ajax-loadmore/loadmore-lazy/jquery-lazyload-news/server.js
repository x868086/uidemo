var http=require('http')
var fs=require('fs')
var url=require('url')

var port=process.env.port || 8888;

var server=http.createServer(function(request,response){
    var temp=url.parse(request.url,true)
    var path=temp.pathname
    var query=temp.query
    var method=request.method;
    console.log(`请求原始内容是:${request}`)
    console.log(`请求内容格式化后:${path}`)
    console.log(query.color)

    var news = [
		{
			link: 'http://view.inews.qq.com/a/20160830A02SEB00',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531730377_150120/0',
			title: '中国轰6K研发险些被俄罗斯发动机厂商卡脖子',
			brif:  '近日，轰6K＂战神＂轰炸机首次公开亮相。在中国...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://view.inews.qq.com/a/20160828A007LB00',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531727868_150120/0',
			title: '传奇导弹专家冯·布劳恩：其实到美国后曾被当局忽视',
			brif: '小火箭出品本文作者：邢强博士原文标题：布劳恩博...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
			title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
			brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
			brif: '嚣张（aggressive）这个词，腐国海军当...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
			brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '中国武警2016年征兵宣传片震撼首发',
			brif: '中国武警2016年征兵宣传片震撼首发'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
			brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
			brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
		},
		{
			link: 'http://xw.qq.com/mil/20160830033420/MIL2016083003342001',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531646423_150120/0',
			title: '中国空军演习加快反导能力建设 韩媒：或针对“萨德',
			brif: '中国空军演习加快反导能力建设 韩媒：或针对“萨德'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '外媒称中国已经决心造出世界先进的航空发动机',
			brif: '资料图：2012年11月14日，第九届中国国际...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '为了喝酒，应该海军当年那些水兵也是蛮拼的……',
			brif: '嚣张（aggressive）这个词，腐国海军当...'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '西媒臆断老挝“弃华投美” 认为现政府更亲越南',
			brif: '西媒臆断老挝“弃华投美” 认为现政府更亲越南'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '中国武警2016年征兵宣传片震撼首发',
			brif: '中国武警2016年征兵宣传片震撼首发'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？',
			brif: '韩国多次宣称“一旦开战三天内消灭朝鲜空军”，靠谱吗？'
		},
		{
			link: 'http://xw.qq.com/mil/20160830028700/MIL2016083002870002',
			img: 'http://inews.gtimg.com/newsapp_ls/0/531644649_150120/0',
			title: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识',
			brif: '韩促朝停止诋毁韩国元首 批其丧失最基本礼仪常识'
		}

	]

    if(path==='/index.html'){
        response.setHeader('Content-Type','text/html;charset="utf-8"')
        var stringIndex=fs.readFileSync('./lazyload-news.html','utf-8')
        response.end(stringIndex)
    }

    // if(query.color==='random'){
    //     response.setHeader('Content-Type','text/html;charset="utf-8"')
    //     function getRandColor(){
    //         var colorDict='0123456789abcdef';
    //         var color='#'
    //         for(var i=0;i<6;i++){
    //           var index=Math.floor(Math.random()*16);
    //           color=color+colorDict[index];
    //         }
    //         return color;
    //       }
    //       var content=getRandColor()//返回生成的随机色
    //     response.end(content)
    // }

    // if(query.index){
    //     response.setHeader('Content-Type','text/html;charset="utf-8"')
    //     function renderLi(index){
    //         var string=``;
    //         for(var i=0;i<5;i++){
    //             string += `<li>数据${++index}</li>`
    //         }
    //         return string
    //     }
    //     var content=renderLi(query.index)
    //     response.end(content)
    // }

    
})

server.listen(port)
// console.log(query)
console.log(`监听 ${port} 成功,请打开http://localhost:${port}`)