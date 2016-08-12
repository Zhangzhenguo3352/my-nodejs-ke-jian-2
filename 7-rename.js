// 文件相关操作
//   重命名  fs.rename('重命名-前名字'，’重命名-后名字’，fcDb(err))
var fs = require('fs');
fs.rename('file-2','file',function(err){
  console.log(err)
})
