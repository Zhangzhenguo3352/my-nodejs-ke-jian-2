const fs=require('fs');

fs.appendFile('fs_dd.js','console.log("well");',function(err){
    console.log(err);
});console.log("well");console.log("well")
