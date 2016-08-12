// 这个页面 1，让封装的方法引入 并成功调用。2，成功拿到 表单提交的数据

var http = require('http');
var url2json = require('./url2json');
http.createServer(function(req,res,next){
    console.log('有人来了'+req.url);
    var $_GET = {};
    var url = '';
    if(req.url.indexOf('?')!=-1){
        var arr = req.url.split('?');
        url = arr[0];
        $_GET = url2json.parse(arr[1]);

    }else{
        url = req.url;
    }
    console.log($_GET)
}).listen(8081,function(){
    console.log('端口打开是 ： supervisor 13-get-server.js')
});