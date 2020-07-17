import React from 'react';
import {Button, Input, Modal, Form, message} from 'antd';
import {addDoc} from '@/api/doc'

class Add extends React.Component {
    addDoc = async (value)=>{
        try{
            const res = await addDoc({...value,projectId:sessionStorage.getItem('projectId')})
            if(res.state){
                this.refs.form.resetFields()
                this.props.setShow(false)
                this.props.getList()
                message.success(res.msg)
            }else{
                message.error(res.msg)
            }
        }catch (e) {
            message.error(e.message)
        }
    }

    render() {
        return (
            <Modal title='新建'
                   visible={this.props.isShow}
                   onCancel={()=>{
                       this.props.setShow(false)
                   }}
                   footer={null}>
                <Form onFinish={this.addDoc} ref='form'>
                    <Form.Item name='title' rules={[{required: true, message: '请输入活动标题!'}]}>
                        <Input placeholder='请输入活动标题' allowClear={true} maxLength={50}/>
                    </Form.Item>
                    <Form.Item name='url' rules={[{required: true, message: '请输入活动url!'}]}>
                        <Input placeholder='请输入活动url' allowClear={true} maxLength={500}/>
                    </Form.Item>
                    <Form.Item>
                        <Button type='primary' htmlType='submit' block>新建</Button>
                    </Form.Item>
                </Form>
            </Modal>
        )
    }
}

export default Add
