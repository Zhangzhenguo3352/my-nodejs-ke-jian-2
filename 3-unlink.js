// 文件相关操作
//   删除文件    fs.unlink('删除的文件及路径'，fcDb(err))
var fs = require('fs');

fs.unlink('a.txt',function(err){
  console.log(err)
});
