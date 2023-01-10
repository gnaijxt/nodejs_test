const express=require('express')
const app=express()

//挂载路由
app.get('/',(req,res)=>{
    res.send('hello get')
})
app.post('/',(req,res)=>{
    res.send('hello post')
})

app.listen(8081,()=>{
    console.log('服务器已启动');
})