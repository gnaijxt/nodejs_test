const express=require('express')
const path=require('path')
const app=express()

//访问路径是http://localhost:8081/aaa.html
// app.use(express.static(path.join(__dirname,'file')))


//访问路径是http://localhost:8081/test/aaa.html
app.use('/test',express.static(path.join(__dirname,'file')))

app.listen(8081,()=>{
    console.log('启动');
})