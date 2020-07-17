import React from 'react'
import {addUser} from '@/api/users';
import {Button, Input, Modal, Form, message, Select} from 'antd';
import {connect} from 'react-redux'
import {crypPassword} from '@/util/crypText'

class Add extends React.Component {
    addUser = (value) => {
        this.setState({
            addData: {
                userName: value.userName,
                name: value.name,
                password: crypPassword(value.password),
                powers: parseInt(value.powers)
            }
        })
        addUser(this.state.addData).then(res => {
            if (res.state) {
                this.refs.form.resetFields()
                this.props.setShow(false)
                this.props.getUserList()
                message.success('新建用户成功！');
            } else {
                message.warning(res.error);
            }
        })
    }

    render() {
        return (
            <Modal title="新建"
                   visible={this.props.isShow}
                   onCancel={() => {
                       this.props.setShow(false)
                   }}
                   footer={null}
            >
                <Form labelCol={{span: 4}} onFinish={this.addUser.bind(this)} ref='form'>
                    <Form.Item rules={[
                        {required: true, message: '请输入用户名!'}
                    ]}
                               label="用户名" name='userName'>
                        <Input allowClear={true} placeholder='请输入用户名' maxLength={20}/>
                    </Form.Item>
                    <Form.Item rules={[{required: true, message: '请输入姓名!'}]}
                               label="姓名" name='name'>
                        <Input allowClear={true} placeholder='请输入姓名' maxLength={20}/>
                    </Form.Item>
                    <Form.Item rules={[{required: true, message: '请输入密码!'}]}
                               label="密码" name='password'>
                        <Input.Password allowClear={true} placeholder='请输入密码' maxLength={50}/>
                    </Form.Item>
                    <Form.Item rules={[
                        {required: true, message: '请再次输入密码!'},
                        ({getFieldValue}) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve()
                                }
                                return Promise.reject('确认密码不一致！')
                            }
                        })
                    ]}
                               label="确认密码" name='checkPW'>
                        <Input.Password allowClear={true} placeholder='再次输入密码' maxLength={50}/>
                    </Form.Item>
                    <Form.Item rules={[{required: true, message: '请选择用户角色!'}]}
                               label='用户角色' name='powers'>
                        <Select>
                            {
                                parseInt(this.props.userInfo.powers) <= 1 ?
                                    <Select.Option value='1'>管理人员</Select.Option>
                                    : ''
                            }
                            <Select.Option value='2'>运营人员</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' block>新建</Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

export default connect(
    (state) => (state)
)(Add)
