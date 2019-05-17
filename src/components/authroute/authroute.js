import React from 'react'
import axios from 'axios'

class AuthRoute extends React.Component{
    componentDidMount() {
        const pathArr = ['/login', '/register']
        if (pathArr.indexOf(this.props.location.pathname) > -1) {
            return null
        }
        axios.get('/user/userInfo').then ((res) => {
            if (res.status === 200) {
                console.log(res)
                if (res.data.code == 1) {
                    this.props.history.push('/login')
                } else {
                    //登录
                }
            }

        })
    }
    render (){
        return (<></>)
    }
}

export default AuthRoute
