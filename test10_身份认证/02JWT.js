const express=require('express')
const app=express()

// jsonwebtoken 用于生成 JWT 字符串
// express-jwt 用于将 JWT 字符串解析还原成 JSON 对象
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')

// 密钥为任意字符串
const secretKey = 'Jiang'

app.post('/api/login', (req, res) => {
    // ...省略登录失败情况下的代码
    res.send({
      status: 200,
      message: '登录成功',
      // jwt.sign() 生成 JWT 字符串
      // 参数：用户信息对象、加密密钥、配置对象-token有效期
      // 尽量不保存敏感信息，因此只有用户名，没有密码
      token: jwt.sign({username: userInfo.username}, secretKey, {expiresIn: '10h'})
    })
  })

const cors=require('cors')
app.use(cors())

app.listen(8181,()=>{
    console.log('启动');
})