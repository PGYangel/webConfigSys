import React from 'react';
import {Row, Col, Form, Input, Button, message} from 'antd';
import {login} from '@/api/users'
import {crypPassword} from '@/util/crypText'
import {setInfo} from '@/actions/userInfo'
import {connect} from 'react-redux'
import cookie from 'js-cookie'

class Login extends React.Component {
    constructor(props){
        super(props)
        props.dispatch(setInfo({}))
        cookie.remove('userName')
        cookie.remove('name')
        cookie.remove('token')
    }

    async login(values) {
        try {
            const res = await login({...values, password: crypPassword(values.password)})
            const overTime = new Date(new Date().getTime() + (res.cookieExp * 60 * 1000))
            if (res.state) {
                this.props.dispatch(setInfo(res))
                cookie.set('name', res.name, {expires: overTime})
                cookie.set('userName', res.userName, {expires: overTime})
                cookie.set('token', res.token, {expires: overTime})
                this.props.history.push({
                    pathname: '/projects'
                })
            } else {
                message.warning('用户密码错误！')
            }
        } catch (e) {
            message.error(e);
        }
    }

    render() {
        return (
            <div className='loginBg'>
                <div className="loginBox">
                    <Row><Col span={24}><h1>网站管理系统</h1></Col></Row>
                    <Form onFinish={this.login.bind(this)}>
                        <Form.Item
                            name='userName'
                            rules={[{required: true, message: '请输入用户名'}]}>
                            <Input placeholder='用户名' maxLength='20'/>
                        </Form.Item>
                        <Form.Item
                            name='password'
                            rules={[{required: true, message: '请输入密码'}]}>
                            <Input.Password placeholder='密码' maxLength='50'/>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' block>登录</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
}

export default connect()(Login)
