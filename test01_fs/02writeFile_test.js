const fs=require('fs');
fs.writeFile('./test01_fs/file/3.txt','123',function(err){
    console.log(err);
})