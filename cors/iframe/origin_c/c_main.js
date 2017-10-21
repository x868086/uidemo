var http=require('http')
var fs=require('fs')
var url=require('url')

var port=process.env.port || 8881;

var server=http.createServer(function(request,response){
    var temp=url.parse(request.url,true)
    var path=temp.pathname
    var query=temp.query
    console.log(`请求原始内容是:${request}`)
    console.log(`请求内容格式化后:${path}`)
    console.log(query.index)
    console.log(query.length)

    if(path==='/c_index.html'){
        response.setHeader('Content-Type','text/html;charset="utf-8"')
        var stringIndex=fs.readFileSync('./c_index.html','utf-8')
        response.end(stringIndex)
    }
    
    
})

server.listen(port)
console.log(`监听 ${port} 成功,请打开http://localhost:${port}`)
console.log('this is c index')