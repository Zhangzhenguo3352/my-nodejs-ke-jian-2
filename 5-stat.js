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
