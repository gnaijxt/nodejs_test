const express=require('express')

const app=express();

app.get('/user',(req,res)=>{
    res.send({
        name:'zs',
        age:18
    })
})
app.post('/user',(req,res)=>{
    res.send('请求成功')
})

app.get('/', (req, res) => { 
    // 通过 req.query 可以获取到客户端发送过来的 查询参数 ‘/’表示ip根目录
    // 注意：默认情况下，req.query 是一个空对象
    console.log(req.query)
    res.send(req.query)
  })
  
  
  // 注意：这里的 :id 是一个动态的参数
  app.get('/user/:id/:username', (req, res) => {
    // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
    console.log(req.params)
    res.send(req.params)
  })

app.listen(8081,()=>{
    console.log('启动');
})