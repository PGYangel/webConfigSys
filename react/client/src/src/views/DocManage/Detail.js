import React from 'react'
import {message, Form, Button, Input, Tabs} from 'antd'
import {getDataForId, modifData, uploadImg} from '@/api/doc'
import apiDomain from '@/util/apiDomain'
import './style.scss'

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: {},
            activeKey: '0',
            imgIndex: 0
        }
    }

    componentDidMount() {
        this.getDataForId()
    }

    getDataForId = async () => {
        try {
            const res = await getDataForId(this.props.match.params.id)
            if (res.state) {
                this.setState({content: res.data})
                this.refs.form.setFieldsValue({
                    title: res.data.title,
                    url: res.data.url
                })
            } else {
                throw res
            }
        } catch (e) {
            message.error(e.error)
        }
    }

    modifyDetail = (value) => {
        this.setState({content: {...this.state.content, title: value.title, url: value.url}}, async () => {
            try {
                const res = await modifData(this.state.content)
                if (res.state) {
                    sessionStorage.setItem('docDetail', JSON.stringify(this.state.content))
                    message.success(res.msg)
                } else {
                    throw res
                }
            } catch (e) {
                message.error(e.error)
            }
        })
    }

    onLinkUrl = () => {
        window.open(this.refs.form.getFieldValue('url'))
    }

    onChangeTab = (targetKey) => {
        this.setState({activeKey: targetKey})
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        let arr = []
        if (this.state.content.detail) {
            arr = [...this.state.content.detail]
        }
        arr.push({value: '', hintImg: ''})
        this.setState({content: {...this.state.content, detail: arr}, activeKey: (arr.length - 1).toString()})
    }

    remove = targetKey => {
        let arr = [...this.state.content.detail]
        arr.splice(targetKey, 1)
        if (parseInt(this.state.activeKey) > arr.length - 1) {
            this.setState({activeKey: (arr.length - 1).toString()})
        }
        this.setState({content: {...this.state.content, detail: arr}})
    }

    changeDetailText = (e, index) => {
        let arr = [...this.state.content.detail]
        arr[index].value = e.target.value
        this.setState({content: {...this.state.content, detail: arr}})
    }

    uploadImg = (index) => {
        this.setState({imgIndex: index})
        document.getElementById('fileImg').click()
    }

    getFile = async (event) => {
        let formData = new FormData()
        formData.append('file', event.target.files[0])
        event.target.value = ''
        const res = await uploadImg(formData)
        try {
            if (res.state) {
                let rData = this.state.content
                rData.detail[this.state.imgIndex].hintImg = res.fileName
                this.setState({content: rData})
            } else {
                throw res
            }
        } catch (e) {
            message.error(e.message)
        }
    }

    renderTabs = () => {
        if (this.state.content.detail) {
            return (
                this.state.content.detail.map((item, index) => (
                    <Tabs.TabPane tab={`文案 ${index}`} key={index}>
                        <div className='tab-title'>文案：</div>
                        <Input.TextArea rows={8} maxLength={5000} value={item.value} onInput={(e) => {
                            this.changeDetailText(e, index)
                        }}/>
                        <div className='exampleBtn'>
                            <span>示意图：</span>
                            <Button type='primary' onClick={() => {
                                this.uploadImg(index)
                            }}>上传</Button>
                        </div>
                        <img src={`${apiDomain}images/doc/${item.hintImg}`} alt="" className='exampleImg'/>
                    </Tabs.TabPane>
                ))
            )
        }
        return null
    }

    render() {
        return (
            <Form onFinish={this.modifyDetail} labelCol={{span: 5}} ref='form'
                  initialValues={{title: this.state.content.title, url: this.state.content.url}}>
                <Form.Item name='title' label='活动名称' className='form-Input'
                           rules={[{required: true, message: '请输入活动名称'}]}>
                    <Input placeholder='请输入活动名称' allowClear={true} maxLength={50}/>
                </Form.Item>
                <Form.Item name='url' label='活动URL' className='form-Input'
                           rules={[{required: true, message: '请输入活动URL'}]}>
                    <Input placeholder='请输入活动URL' allowClear={true} maxLength={500}
                           addonAfter={<Button type='link' size='small' onClick={() => {
                               this.onLinkUrl()
                           }}>链接跳转</Button>}/>
                </Form.Item>
                <Form.Item label='CORS接口URL' className='form-Input'>
                    <a href={`${apiDomain}doc/getDetail/${this.state.content.id}`} target='_blank'
                       rel="noopener noreferrer">{`${apiDomain}doc/getDetail/${this.state.content.id}`}</a>
                </Form.Item>
                <Form.Item label='jsonp接口URL' className='form-Input'>
                    {`${apiDomain}doc/getDetail/jsonp/${this.state.content.id}`}
                </Form.Item>
                <Form.Item label='文案管理项' className='form-Input'>
                    <Tabs defaultActiveKey='1' type="editable-card"
                          style={{width: '684px'}}
                          onChange={this.onChangeTab}
                          activeKey={this.state.activeKey}
                          onEdit={this.onEdit}>
                        {this.renderTabs()}
                    </Tabs>
                </Form.Item>
                <Form.Item className='form-Input'>
                    <div className='btn-box'>
                        <Button type='primary' htmlType='submit' block>提交</Button>
                    </div>
                </Form.Item>
                <input type="file" id="fileImg" style={{'display': 'none'}} onChange={this.getFile}/>
            </Form>
        )
    }
}

export default Detail
