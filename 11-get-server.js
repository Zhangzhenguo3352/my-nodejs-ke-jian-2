//这个页面说明一个问题 ，nodejs 是这样获取 表单提交的数据的，php 显得更加简单，但nodejs 显得更加灵活
const http=require('http');

http.createServer(function(req,res){
    console.log('有人来了:'+req.url);
    var $_GET={};
    var url='';
    if(req.url.indexOf('?')!=-1){
        var arr = req.url.split('?'); //[ '/abc', 'text=sds&password=ssds' ]
        url = arr[0]; //    /abc
        var arr2 = arr[1].split('&');
        for(var i=0;i<arr2.length;i++){
            var arr3 = arr2[i].split('=');
            //arr3[0] =》 text 、 password
            //arr3[1] =》  value1 、 value2
            $_GET[arr3[0]]=arr3[1]; // { text: 'zhang', password: '1234567' }

        }
    }
    //这个相当于下面的 php的方式
    // console.log($_GET)  //{ text: 'zhang', password: '1234567' }
    //===========================


    var text = $_GET['text'];
    var password = $_GET['password'];
    console.log(text);
    console.log(password)
}).listen(8081,function(){
    console.log('启动时打开 supervisor 11-get-server.js')
});