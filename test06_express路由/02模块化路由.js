const express=require('express')
const app=express()

const router=require('./03router')
app.use(router)

app.listen(8081,()=>{
    console.log('服务器已启动');
})