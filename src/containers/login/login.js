import React from 'react'
import '../../style/css/index.css'
import Logo from '../../components/logo/logo.js'
import {List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
class Login extends React.Component{
    state={
        user: '',
        pwd: ''
    }
    render() {
        return (<div>
            <Logo />
            <WingBlank>
                <List>
                    <WhiteSpace/>
                        <InputItem  onChange={v => this.handleChange('user', v)}>用户名</InputItem>
                    <WhiteSpace/>
                        <InputItem type={'password'} onChange={v => this.handleChange('pwd', v)}>密码</InputItem>
                </List>
                <WhiteSpace/>
                    <Button onClick={this.handleLogin} type={'primary'}>登录</Button>
                <WhiteSpace/>
                    <Button onClick={this.handleRegister} type={'primary'}>注册</Button>
            </WingBlank>
        </div>)
    }
    handleRegister = () => {
        this.props.history.push('/register')
    }
    handleLogin = () => {

    }
    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    }
}

export default Login
