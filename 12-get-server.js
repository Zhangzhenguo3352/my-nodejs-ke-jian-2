// 这个页面主要就是 封装了表单提交 方法
var http = require('http');



http.createServer(function(req,res,next){
    console.log('有人来了'+req.url);
    var $_GET = {};
    var url = ''; // 这个是 存放  /abc 的，如果需要可以拿走用，不过现在没有什么用
    if(req.url.indexOf('?')!==-1){
        var arr = req.url.split('?');
        url = arr[0];
        $_GET = url2json(arr[1]);  //  { text: 'zhang', password: '1234567' }
    }else{
        url = req.url;
    }
    console.log($_GET)
}).listen('8081',function(){
    console.log('启动时打开 supervisor 12-get-server.js')
});