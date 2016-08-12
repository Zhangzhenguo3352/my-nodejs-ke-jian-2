
// 这个页面 显示了 系统 自带的 url 相关操作,下面三个 打印出来 可以看看都有什么
// 1,    urlLib.parse(req.url,true)
// 2,    urlLib.resolveObject(req.url,true)
// 3,    urlLib.format(req.url,true)
var http = require('http');
var urlLib = require('url');
http.createServer(function(req,res,next){
  console.log('有人来了'+req.url);
  var $_GET = {};
  var url = '';

  $_GET = urlLib.parse(req.url,true).query; //    { username: 'zhang', password: '333' }
  url = urlLib.parse(req.url,true).pathname; //     /abc
  console.log($_GET); // 结果 { username: 'zhang', password: '333' }

  //console.log( urlLib.parse(req.url,true))
    /*
      这是打印的结果
      Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: '?username=zhang&password=123',
        query: { username: 'zhang', password: '123' },
        pathname: '/abc',
        path: '/abc?username=zhang&password=123',
        href: '/abc?username=zhang&password=123'
      }

    */
// console.log( urlLib.resolveObject(req.url,true))
    /*
    这是打印的结果
    Url {
     protocol: null,
     slashes: undefined,
     auth: null,
     host: null,
     port: null,
     hostname: null,
     hash: undefined,
     search: '?username=zhang&password=123',
     query: 'username=zhang&password=123',
     pathname: '/abc',
     path: '/abc?username=zhang&password=123',
     href: '/abc?username=zhang&password=123'
   }
    */

 //console.log( urlLib.format(req.url,true))
    /*
      这是打印的结果
      /abc?username=zhang&password=123
    */

}).listen(8081,function(){
  console.log('打开的文件是： supervisor 16-get-server.js');
})
