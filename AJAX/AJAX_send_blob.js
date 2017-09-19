var xhr=new XMLHttpRequest()
xhr.open('POST','server/js.demo',true)
xhr.onload=function(){
    if(xhr.readyState===4){
        if(xhr.status>=200 && xhr.status<300 || xhr.status ===304){
            //...
        }
    }
}

var file=new Blob(['hello world'],{type:'text/plain'})

xhr.send(file)