import React from 'react'
import {Button, Input, Modal, Form, message} from 'antd'
import {modPassword} from '@/api/users'
import {crypPassword} from '@/util/crypText'

class Modify extends React.Component {
    modifyPW = async (value) => {
        try {
            const res = await modPassword(this.props.userName, {
                oldPassword: crypPassword(value.oldPassword),
                newPassword: crypPassword(value.newPassword),
            })
            if (res.state) {
                this.setShow(false)
                message.success(res.msg)
            } else {
                message.error(res.error)
            }
        } catch (e) {
        }
    }
    setShow = (val) => {
        this.refs.modForm.resetFields()
        this.props.setShow(val)
    }

    render() {
        return (
            <Modal title="修改密码"
                   visible={this.props.isShow}
                   onCancel={() => {
                       this.setShow(false)
                   }}
                   footer={null}
            >
                <Form labelCol={{span: 4}} onFinish={this.modifyPW} ref='modForm'>
                    <Form.Item label='原密码：' name='oldPassword'
                               rules={[{required: true, message: '请输入原密码！'}]}>
                        <Input.Password allowClear={true} placeholder='请输入原密码'/>
                    </Form.Item>
                    <Form.Item label='新密码：' name='newPassword'
                               rules={[{required: true, message: '请输入新密码！'}]}>
                        <Input.Password allowClear={true} placeholder='请输入新密码'/>
                    </Form.Item>
                    <Form.Item label='确认密码：' name='checkPW'
                               rules={[
                                   {required: true, message: '请再次输入密码！'},
                                   ({getFieldValue}) => ({
                                       validator(rule, value) {
                                           if (!value || getFieldValue('newPassword') === value) {
                                               return Promise.resolve()
                                           }
                                           return Promise.reject('确认密码不一致！')
                                       }
                                   })
                               ]}>
                        <Input.Password allowClear={true} placeholder='再次输入密码'/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' block>修改密码</Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

export default Modify
