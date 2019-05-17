const express = require('express')
const Util = require('./Util')
const Router = express.Router()
const model = require('./model')

const User = model.getModel('user')

Router.get('/userInfo', function (req, res) {
    User.find({}, function(err, data){
        res.json(data)
    })
})
Router.post('/register', function (req, res) {
    const {user, pwd, type} = req.body
    User.findOne({user}, function (err, data) {
        if(data) {
            res.writeHead(200)
            res.write(Util.writeResult({code: 1,msg: '用户名已存在'}))
            res.end()
        } else {
            User.create({user, pwd, type}, function (err, data) {
                if(err) {
                    res.writeHead(500)
                    res.write(Util.writeResult({code:1, msg:'服务器出错了'}))
                    res.end()
                }
                    res.writeHead(200)
                    res.write(Util.writeResult({code: 0, data}))
                    res.end()
            })
        }
    })
})
module.exports = Router
