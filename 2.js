// 文件相关操作
//   创建文件    fs.writeFile('创建的文件名字及放在哪个位置'，‘内容’，fcDb(err))
var fs = require('fs');

fs.writeFile('a.txt','abc',function(err,data){
  console.log(err)
})
