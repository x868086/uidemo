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

    if(path==='/index.html'){
        response.setHeader('Content-Type','text/html;charset="utf-8"')
        var stringIndex=fs.readFileSync('./index.html','utf-8')
        response.end(stringIndex)
    }

    if(query.color==='random'){
        response.setHeader('Content-Type','text/html;charset="utf-8"')
        function getRandColor(){
            var colorDict='0123456789abcdef';
            var color='#'
            for(var i=0;i<6;i++){
              var index=Math.floor(Math.random()*16);
              color=color+colorDict[index];
            }
            return color;
          }
          var content=getRandColor()//返回生成的随机色
        response.end(content)
    }

    if(query.index){
        response.setHeader('Content-Type','text/html;charset="utf-8"')
        function renderLi(index){
            var string=``;
            for(var i=0;i<5;i++){
                string += `<li>数据${++index}</li>`
            }
            return string
        }
        var content=renderLi(query.index)
        response.end(content)
    }

    
})

server.listen(port)
// console.log(query)
console.log(`监听 ${port} 成功,请打开http://localhost:${port}`)