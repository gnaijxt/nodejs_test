const express = require('express')
const router = express.Router()

// 路由级别的中间件
router.use((req, res, next)=>{
    console.log('Time:' + Date.now())
    next()
})

router.get('/user', (req, res) => {
    res.send('User page.')
})

module.exports = router