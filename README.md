# my-nodejs-ke-jian-2
```
// 文件相关操作
//   创建文件    fs.appendFile('找加内容的文件及路径'，‘找加的内容’，fcDb(err))
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
