const express = require('express')

const app = express()

app.get('/user', function (req, res) {
    res.write('你好')
    res.end()
})

app.listen('10086', function () {
    console.log('启动成功')
})
