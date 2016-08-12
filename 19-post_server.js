// post 表单提交的特点
/*
  发送数据: 分块发送

	接收: 分块接收

	get数据比post数据先到达
*/

var http = require('http');
http.createServer(function(req,res,next){
  console.log('有人来了'+req.url);

  var str = '';
  req.addListener('data',function(s){
    str+=s;
  })

  req.addListener('end',function(){
    console.log(str);  // username=zhang&password=123
  });
}).listen(8081,function(){
  console.log('您打开了 supervisor 19-post_server.js 的服务')
})
