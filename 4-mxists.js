// 文件相关操作
//   判断文件是否存在   fs.exists('判断的文件'，fcDb(isHave))
var fs = require('fs');

fs.exists('1.js',function(isHave){
  console.log(isHave) //存在返回 true
});
