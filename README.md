# 2017-7-31
```
这里 启动 命令最好用 supervisor 启动
  例如：
    supervisor 15-get-server.js

```

```
// 文件相关操作
//  找加内容     fs.appendFile('找加内容的文件及路径'，‘找加的内容’，fcDb(err))
var fs = require('fs');

fs.appendFile('a.txt','\n1231231',function(err){
    console.log(err)
});

```

```
// 文件相关操作
//   创建文件    fs.writeFile('创建的文件名字及放在哪个位置'，‘内容’，fcDb(err))
var fs = require('fs');

fs.writeFile('a.txt','abc',function(err,data){
  console.log(err)
})

```

```
// 文件相关操作
//   删除文件    fs.unlink('删除的文件及路径'，fcDb(err))
var fs = require('fs');

fs.unlink('a.txt',function(err){
  console.log(err)
});

```

```
// 文件相关操作
//   判断文件是否存在   fs.exists('判断的文件'，fcDb(isHave))
var fs = require('fs');

fs.exists('1.js',function(isHave){
  console.log(isHave) //存在返回 true
});
```

```
// 文件相关操作
//   查看文件状态   fs.stat('查看的文件'，fcDb(err,文件的相关信息如大小、创建时间))
/*
{
  dev: 16777220,
  mode: 33188,
  nlink: 1,
  uid: 501,
  gid: 20,
  rdev: 0,
  blksize: 4096,
  ino: 14446329,
  size: 223,   //文件的大小
  blocks: 8,
  atime: Thu Aug 11 2016 22:34:50 GMT+0800 (CST), // access time 访问文件时间为
  mtime: Thu Aug 11 2016 22:34:49 GMT+0800 (CST),// modiefied time 最后修改时间
  ctime: Thu Aug 11 2016 22:34:49 GMT+0800 (CST), //create time 创建时间
  birthtime: Thu Aug 11 2016 21:17:18 GMT+0800 (CST) // 文件创建时间（出生日期）
}
*/
var fs = require('fs');

fs.stat('2.js',function(err,data){
  console.log(data)
})
```

```
// 文件相关操作
//   创建文件夹  fs.mkdir('创建文件夹 创建 到哪里'，fcDb(err))

var fs = require('fs');

fs.mkdir('file',function(err){
  console.log(err)
})

```

```
// 文件相关操作
//   重命名  fs.rename('重命名-前名字'，’重命名-后名字’，fcDb(err))
var fs = require('fs');
fs.rename('file-2','file',function(err){
  console.log(err)
})

```

```
// 文件相关操作
//   删除目录（感觉好像在操作 git）  fs.rename('删除的目录’，fcDb(err))
var fs = require('fs');
fs.rmdir('1111',function(err){
  console.log(err)
})

```

```
const fs=require('fs');

fs.appendFile('fs_dd.js','console.log("well");',function(err){
    console.log(err);
});console.log("well");console.log("well")

```

```
//这个 页面 不能运行因为，我这里这是说明 jquery 是 第三方模块
var jquery=require('jquery');

console.log(jquery);

```

```
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

```

```
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

```

```
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

```

```

// 这个页面 1，让封装的方法引入 并成功调用。2，成功拿到 表单提交的数据

var http = require('http');
var url2json = require('parse-get-data');
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
    console.log($_GET);
}).listen(8081,function(){
    console.log('端口打开是 ： supervisor 14-get-server.js')
});
```

```

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

```

```


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

```

```
// 分解讲解, 第一步 url.parse(path,true)

var url = require('url');

var str = 'http://localhost:8081/name=zhang&age=13';

console.log(url.parse(str,true));
/*
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'localhost:8081',
  port: '8081',
  hostname: 'localhost',
  hash: null,
  search: '?name=zhang&age=13',
  query: { name: 'zhang', age: '13' },
  pathname: '/abc',
  path: '/abc?name=zhang&age=13',
  href: 'http://localhost:8081/abc?name=zhang&age=13'
}
*/


```

```

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

```


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>智能社——http://www.zhinengshe.com</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <style>

    </style>
    <script>

    </script>
</head>
<body>
<form action="http://localhost:8081/abc">
    user:
    <input type="text" name="username">
    <br>
    password:
    <input type="password" name="password">
    <br>
    <input type="submit">
</form>
</body>
</html>



```

```
// 添加了 querystring 转换 成 json 对象
// post 表单提交的特点
/*
  发送数据: 分块发送

	接收: 分块接收

	get数据比post数据先到达
*/

var http = require('http');
var querystring = require('queryString');
http.createServer(function(req,res,next){
  console.log('有人来了'+req.url);

  var POST = {};

  var str = '';
  req.addListener('data',function(s){
    str+=s;
  })

  req.addListener('end',function(){
    //console.log(str);  // username=zhang&password=123
    POST = querystring.parse(str); //
    console.log(POST) // { username: 'zhang', password: '123' }
  });
}).listen(8081,function(){
  console.log('您打开了 supervisor 19-post_server.js 的服务')
})
```


```
// 添加了 querystring 转换 成 json 对象
// post 表单提交的特点
/*
  发送数据: 分块发送

	接收: 分块接收

	get数据比post数据先到达
*/

var http = require('http');
var querystring = require('queryString');
http.createServer(function(req,res,next){
  console.log('有人来了'+req.url);

  var POST = {};

  var str = '';
  req.addListener('data',function(s){
    str+=s;
  })

  req.addListener('end',function(){
    //console.log(str);  // username=zhang&password=123
    POST = querystring.parse(str); //
    console.log(POST) // { username: 'zhang', password: '123' }
  });
}).listen(8081,function(){
  console.log('您打开了 supervisor 19-post_server.js 的服务')
})
```
