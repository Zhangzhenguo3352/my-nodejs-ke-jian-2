/**
 * Created by strive-智能社 on 2016/7/24.
 */
const fs=require('fs');

//fs.readFile(路径,[编码],fnCb)
fs.readFile('test.html','utf-8',function(err,data){
    //console.log(err);
    if(err){
        //有错
        console.log('404');
    }else{
        //没错
        console.log(data);
    }
});
