const mongoose = require('mongoose')
const db_Util = 'mongodb://localhost:27017/test'

mongoose.connect(db_Util)

const models = {
    user: {
        'user':{type:String, 'require':true},
        'pwd':{type:String, 'require':true},
        'type':{'type':String, 'require':true},
        //头像
        'avatar':{'type':String},
        // 个人简介或者职位简介
        'desc':{'type':String},
        // 职位名
        'title':{'type':String},
        // 如果你是boss 还有两个字段
        'company':{'type':String},
        'money':{'type':String}
    },
    chat: {
        'chatid':{'type':String, require:true},
        'from':{'type':String,'require':true},
        'to':{'type':String,'require':true},
        'read':{'type':Boolean,default:false},
        'content':{'type':String,'require':true,'default':''},
        'create_time':{'type':Number,'default':Date.now}
    }
}
for (let n in models) {
    mongoose.model(n, new mongoose.Schema(models[n]))
}
module.exports = {
    getModel: function(name) {
        return mongoose.model(name)
    }
}
