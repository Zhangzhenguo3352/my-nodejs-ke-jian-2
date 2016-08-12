// 这个页面 去除了自己切分方法，改用系统自带的 querystring: =》（谷歌翻译：这个意思是查询字符串） 切分方法
// 需要知道的是 这种系统自带的 方法速度比自己写的，更快
var http = require('http');
var querystring = require('querystring');

http.createServer(function(req,res,next){
    console.log('有人来了'+req.url);
    var $_GET = {};
    var url = '';
    if(req.url.indexOf('?')!==-1){
      var arr = req.url.split('?');
      url = arr[0];
      $_GET = querystring.parse(arr[1]);
    }else{
      url = req.url;
    }
    console.log($_GET);
}).listen(8081,function(){
  console.log('端口打开为： supervisor 15-get-server.js');
})
