// 分解讲解, 第二步 url.format(json)
// 它的位置可以 随意调换,它打印的结果 还是一样
var url = require('url');

var json = {
  protocol:'http',     // 协议
  pathname:'abc.html', // 路径
  hostname:'baidu.com', //主机名
  port:8080        // 端口


}
console.log(url.format(json)) // http://baidu.com:8080/abc.html
