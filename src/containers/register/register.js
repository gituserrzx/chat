import React from 'react'
import Logo from '../../components/logo/logo'
import {List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import {connect} from 'react-redux'
import {register} from '../../reducers/userReducer'
import '../../style/css/index.css'

@connect(state => state.user,
    {register}
    )
class Register extends React.Component{
    state = {
        user: '',
        pwd: '',
        repwd: '',
        type: 'genius',
    }
    render() {
        const RadioItem = Radio.RadioItem
        return (<div>
            <Logo />
            <WingBlank>
                {this.props.msg ? <p className={'err-msg'}>{this.props.msg}</p> : ''}
                <List>
                    <InputItem  onChange={v => this.handleChange('user', v)}>
                        用户名
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem type={'password'}  onChange={v => this.handleChange('pwd', v)} >
                        密码
                    </InputItem>
                    <WhiteSpace/>
                    <InputItem  type={'password'} onChange={v => this.handleChange('repwd', v)}>
                        确认密码
                    </InputItem>
                    <WhiteSpace/>
                    <RadioItem checked={this.state.type === 'genius'} onChange={() => this.handleChange('type', 'genius')}>
                        牛人
                    </RadioItem>
                    <RadioItem checked={this.state.type === 'boss'} onChange={() => {this.handleChange('type', 'boss')}}>
                        Boss
                    </RadioItem>
                </List>
                <WhiteSpace />
                <Button type={'primary'} onClick={this.register}>注册</Button>
            </WingBlank>
        </div>)
    }
    register = () => {

       this.props.register(this.state)
    }
    handleChange(key, value) {
        this.setState({
            [key]: value
        })
    }
}
export default Register
