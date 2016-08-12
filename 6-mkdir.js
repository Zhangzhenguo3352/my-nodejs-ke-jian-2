// 文件相关操作
//   创建文件夹  fs.mkdir('创建文件夹 创建 到哪里'，fcDb(err))

var fs = require('fs');

fs.mkdir('file',function(err){
  console.log(err)
})
