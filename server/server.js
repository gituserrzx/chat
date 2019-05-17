const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const userRouter = require('./user')

app.use(bodyParser.json())
app.use(cookieParser())
app.use('/user', userRouter)
app.listen('10086', function () {
    console.log('启动成功')
})
