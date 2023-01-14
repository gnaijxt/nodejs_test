const express=require('express')
const app=express()

const session = require('express-session')
app.use(
  session({
    secret: 'Bruce', // secret 的值为任意字符串
    resave: false,
    saveUninitalized: true,
  })
)

//向session存数据
app.post('/api/login', (req, res) => {
    req.session.user = req.body  //用户的信息
    req.session.isLogin = true  //用户的登录状态
    res.send({ 
        status: 0,
        msg: 'login done' 
    })
})


// 向session取数据
app.get('/api/username', (req, res) => {
    if (!req.session.isLogin) {
      return res.send({ status: 1, msg: 'fail' })
    }
    res.send({ 
        status: 0, 
        msg: 'success', 
        username: req.session.user.username 
    })
})

// 清空session
app.post('/api/logout', (req, res) => {
    // 清空当前客户端的session信息
    req.session.destroy()
    res.send({
        status: 0, 
        msg: 'logout done' 
    })
})

app.listen(8181,()=>{
    console.log('启动');
})