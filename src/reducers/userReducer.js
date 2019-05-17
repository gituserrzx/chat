import axios from 'axios'

const initState = {
    user: '',
    pwd: '',
    type: '',
    msg: '',
    isAuth: ''
}
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
export const user = (state = initState, action) => {
    switch(action.type) {
        case REGISTER_SUCCESS:
            return {...state, msg:'', isAuth: true,...action.data}
        case ERROR_MSG:
            return {...state, msg: action.msg, isAuth: false}
    }
    return state
}
function errorMsg (msg) {
    return {
        msg,
        type: ERROR_MSG
    }
}
function registerSuc(data) {
    console.log(data)
    return {
        type: REGISTER_SUCCESS,
        data
    }
}
export function register ({user, pwd, repwd, type}) {
    // console.log(user, pwd, type)
    if (!user || !pwd || !type) {
        return errorMsg('用户名和密码必须输入')
    }
    if (pwd !== repwd) {
        return errorMsg('密码和确认密码不同')
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
            .then((res) => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(registerSuc({user, pwd, type}))
                } else {
                    dispatch(errorMsg(res.data.msg))
                }
            })
    }
}
