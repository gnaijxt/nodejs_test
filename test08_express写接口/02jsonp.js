const express = require('express')

const app = express()

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// 必须在配置 cors 中间件之前，配置 JSONP 的接口
app.get('/api/jsonp', (req, res) => {
  // 定义 JSONP 接口具体的实现过程
  const funcName = req.query.callback	// 1. 得到函数的名称
  const data = { name: 'zs', age: 22 }	// 2. 定义要发送到客户端的数据对象
  const scriptStr = `${funcName}(${JSON.stringify(data)})`	// 3. 拼接出一个函数的调用
  res.send(scriptStr)		// 4. 把拼接的字符串，响应给客户端
})

// 一定要在路由之前，配置 cors 这个中间件，从而解决接口跨域的问题
const cors = require('cors')
app.use(cors())

// 导入路由模块
const router = require('./01cros解决跨域')
// 把路由模块，注册到 app 上
app.use('/api', router)

app.listen(8181, () => {
    console.log('express server running at http://127.0.0.1')
})