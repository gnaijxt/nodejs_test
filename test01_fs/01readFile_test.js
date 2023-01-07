const fs=require('fs');
fs.readFile('./test01_fs/file/1.txt','utf-8',function(err,dataStr){
    console.log(err);
    console.log('-----------');
    console.log(dataStr);
})