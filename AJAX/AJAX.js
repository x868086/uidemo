var xhr=new XMLHttpRequest()
xhr.responseType='text';//设置请求后服务器返回的数据格式
xhr.timeout=3000;//设置请求超时时间为3000毫秒，超时后自动结束
xhr.onreadystatechange=function(){
    if(xhr.readyState===4){
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status===304){
            console.log(xhr.responseText)//xhr.responseType设置为json时这里用xhr.response获取传回的数据
        }                               //xhr.responseType设置为Document时，用xhr.resonseXML获取传回的数据
        else {
            console.log(xhr.status.text)
        }
    }
}
xhr.ontimeout=function(e){
    //....
}
xhr.onerror=function(e){
    //......
}
xhr.onprogress=function(e){
    //......
}

//get方法
xhr.open('get',encodeURI('someURL'),true)
xhr.send()

//post方法
xhr.open('post',url,true)
xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
xhr.send(encodeURI('someURL'))
