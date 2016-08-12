// 文件相关操作
//   删除目录（感觉好像在操作 git）  fs.rename('删除的目录’，fcDb(err))
var fs = require('fs');
fs.rmdir('1111',function(err){
  console.log(err)
})
