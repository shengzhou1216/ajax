// ajax封装
function ajax(method,url,data,success) {
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    }catch(e) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    if(method == "get" && data) {
        url += '?' + data;
    }

    xhr.open(method,url,true);
    if(method == 'get') {
        xhr.send();
    }else {
        xhr.setRequestHeader('content-type','application/x-www.form-unlencoded');
        xhr.send(data);
    }

    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4) {
            if(xhr.status == 200) {
                success && success(xhr.responseText);
            }else {
                console.log('出错了：' + xhr.status);
            }
        }
    }
}