<?php
    header('content-type:text/html;charset:utf-8');
    $word = $_GET['word'];
    $pn = $_GET['pn'];
    $url = "http://image.baidu.com/search/acjson?tn=resultjson_com&ipn=rj&ct=201326592&is=&fp=result&queryWord=".$word."&cl=2&lm=-1&ie=utf-8&oe=utf-8&adpicid=&st=&z=&ic=&word=".$word."&s=&se=&tab=&width=&height=&face=&istype=&qc=&nc=&fr=&pn=".$pn."&rn=30&gsm=5a&1513840653654=";

    $content = file_get_contents($url);
    echo $content;

?>