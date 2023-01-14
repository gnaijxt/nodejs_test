const qs = require('querystring')	// 导入 Node.js 内置的 querystring 模块

const bodyParser = (req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1. 定义一个 str 字符串，专门用来存储客户端发送过来的请求体数据
  let str = ''
  // 2. 监听 req 的 data 事件，str 中存放的是完整的请求体数据
  req.on('data', (chunk) => {
    str += chunk
  })
  // 3. 监听 req 的 end 事件（请求体发送完毕后自动触发）
  req.on('end', () => {
    req.body = qs.parse(str)	// 把字符串格式的请求体数据，解析成对象格式，不解析的话是 name=zs&gender=%6Eksskk
      //将解析出来的数据挂载在req.body上，供下游中间件访问
    next()
  })
}

module.exports = bodyParser