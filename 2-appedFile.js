// 文件相关操作
//   创建文件    fs.appendFile('找加内容的文件及路径'，‘找加的内容’，fcDb(err))
var fs = require('fs');

fs.appendFile('a.txt','\n1231231',function(err){
    console.log(err)
});
