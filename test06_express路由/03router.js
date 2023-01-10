//这是路由模块
const express=require('express')

//创建路由对象
const router=express.Router()

//挂载具体路由
router.get('/user/list',(req,res)=>{
    res.send('get user list')
})
router.post('/user/add',()=>{
    res.send('post user add')
})

module.exports=router