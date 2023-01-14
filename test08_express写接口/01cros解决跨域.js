const express = require('express')
const router = express.Router()

// GET 接口
router.get('/get', (req, res) => {
  // 通过 req.query 获取客户端发送到服务器的数据
  const query = req.query
  res.send({
    status: 0,						// 0 表示处理成功，1 表示处理失败
    msg: 'GET 请求成功！',	// 状态的描述
    data: query,					// 需要响应给客户端的数据
  })
})

// POST 接口
router.post('/post', (req, res) => {
  // 通过 req.body 获取请求体中包含的 url-encoded 格式的数据
  // 意在路由模块之前配置中间件url-encoded
  const body = req.body
  res.send({
    status: 0,
    msg: 'POST 请求成功！',
    data: body,
  })
})

// DELETE 接口
router.delete('/delete', (req, res) => {
  res.send({
    status: 0,
    msg: 'DELETE请求成功',
  })
})

module.exports = router