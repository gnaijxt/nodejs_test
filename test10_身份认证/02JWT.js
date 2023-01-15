const express=require('express')
const app=express()

// jsonwebtoken 用于生成 JWT 字符串
// express-jwt 用于将 JWT 字符串解析还原成 JSON 对象
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 密钥为任意字符串
const secretKey = 'Jiang'

// unless({ path: [/^\/api\//] }) 指定哪些接口无需访问权限
//只要配置成功了express-jwt这个中间件，就可以把解析出来的用户信息挂载到req.user属性上
app.use(expressJWT({ secret: secretKey }).unless({ path: [/^\/api\//] }))

app.post('/api/login', (req, res) => {
  // ...省略登录失败情况下的代码
  const userinfo=req.body
  res.send({
    status: 200,
    message: '登录成功',
    // jwt.sign() 生成 JWT 字符串
    // 参数：用户信息对象、加密密钥、配置对象-token有效期
    // 尽量不保存敏感信息，因此只有用户名，没有密码
    token: jwt.sign({username: userInfo.username}, secretKey, {expiresIn: '10h'})
  })
})


// 当 express-jwt 中间件配置成功后，即可在那些有权限的接口中，使用 req.user 对象，来访问从 JWT 字符串中解析出来的用户信息
app.get('/admin/getinfo', (req, res) => {
  console.log(req.user)
  res.send({
    status: 200,
    message: '获取信息成功',
    data: req.user,
  })
})
 
const cors=require('cors')
app.use(cors())

app.listen(8181,()=>{
    console.log('启动');
})