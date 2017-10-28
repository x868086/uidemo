var http=require('http')
var fs=require('fs')
var url=require('url')

var port=process.env.port || 8888;

var server=http.createServer(function(request,response){
    var temp=url.parse(request.url,true)
    var path=temp.pathname
    var query=temp.query
    var method=request.method;
    // console.log(`请求原始内容是:${request}`)
    // console.log(`请求内容格式化后:${path}`)
    // console.log(`请求内容格式化后:${query}`)
 
    if(path==='/index.html'){
        response.setHeader('Content-Type','text/html;charset="utf-8"')
        var stringIndex=fs.readFileSync('./jquery-ajax-loadmore-basic.html','utf-8')
        response.end(stringIndex)
    }

    if(!!query.ctnodes && !!query.length){
        console.log(query.ctnodes +"------"+query.length) /*前台请求传来的查询字符串内容*/
        response.setHeader('Content-Type','text/html;charset="utf-8"')
        
        function resConten(index,length){
            var resString=[];
            if(index>14){ /*前台传来已加载的数据达到阀值时回复full*/
                resString[0]="full"
            }else resString[0]="empty"

            for(var i=1;i<length;i++){
                index ++
                resString[i]=index
            }
            return resString
        }
        var content=resConten(query.ctnodes,query.length)

        response.end(JSON.stringify(content))

    }

    
})

server.listen(port)
// console.log(query)
console.log(`监听 ${port} 成功,请打开http://localhost:${port}`)