const express = require('express')
const router=require('./03路由级别的中间件')
const app = express()

app.use(router)

app.listen(8181, () => {
  console.log('http://127.0.0.1')
})