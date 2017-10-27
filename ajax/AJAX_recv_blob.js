var xhr=new XMLHttpRequest()
xhr.open('GET','server/js.demo',true)
xhr.responseType='blob';
xhr.onload=function(){
    if(xhr.readyState===4){
        if(xhr.status>=200 && xhr.status<300 || xhr.status ===304){
            var file =new Blob([xhr.response],{type:'image/png'};//将接收到的二进制对象解析成.png格式的图片
        }
    }
}

xhr.send()