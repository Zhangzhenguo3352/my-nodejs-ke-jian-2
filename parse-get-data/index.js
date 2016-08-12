exports.parse = function url2json(str){
    var json = {};
    var arr = str.split('&'); // 因为现在是 text=zhang&password=s
    for(var i=0;i<arr.length;i++){
        var arr2 = arr[i].split('='); // ["text=zhang","password=s"]
        json[arr2[0]] = arr2[1];  // { text: 'zhang', password: '1234567' }
    }
    return json;  // { text: 'zhang', password: '1234567' }
}