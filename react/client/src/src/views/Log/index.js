import React from 'react'
import {Table, Button, Input, message, Select, Tooltip, DatePicker} from 'antd';
import {getList} from '@/api/log'
import {simpleFormat,format} from '@/util/date'
import {connect} from 'react-redux'

class Log extends React.Component {
    columns = [
        {
            title: '用户名',
            dataIndex: 'user',
            align: 'center'
        },
        {
            title: '请求类型',
            dataIndex: 'request_type',
            align: 'center'
        },
        {
            title: '请求URL',
            align: 'left',
            render: (record) => (
                <Tooltip placement="topLeft" title={record.request_url}
                         getPopupContainer={trigger => trigger.parentElement}>
                    <div className='overText' style={{maxWidth: '300px'}}>{record.request_url}</div>
                </Tooltip>
            )
        },
        {
            title: '请求内容',
            align: 'left',
            render: (record) => (
                <Tooltip placement="topLeft" title={record.content}
                         getPopupContainer={trigger => trigger.parentElement}>
                    <div className='overText' style={{maxWidth: '300px'}}>{record.content}</div>
                </Tooltip>
            )
        },
        {
            title: '请求结果',
            align: 'left',
            render: (record) => (
                <Tooltip placement="topLeft" title={record.result} getPopupContainer={trigger => trigger.parentElement}>
                    <div className='overText' style={{maxWidth: '300px'}}>{record.result}</div>
                </Tooltip>
            )
        },
        {
            title: '请求时间',
            align: 'center',
            render: (record) => (
                <span>{simpleFormat(record.createTime)}</span>
            )
        }
    ]

    constructor(props) {
        super(props)
        this.state = {
            queryData: {
                user: '',
                type: '',
                url: '',
                startTime: '',
                endTime: '',
                pageIndex: 1,
                pageSize: 10
            },
            total: 0,
            result: [],
        }
    }

    componentDidMount() {
        this.getList()
    }

    getList = async () => {
        try {
            const res = await getList(this.state.queryData)
            if (res.state) {
                this.setState({
                    result: res.data,
                    total: res.total
                })
            } else {
                throw res
            }
        } catch (e) {
            message.error(e.error)
        }
    }

    queryClick = async () => {
        this.setState({queryData: {...this.state.queryData, pageIndex: 1}}, this.getList)
    }
    pageClick = (value) => {
        this.setState({queryData: {...this.state.queryData, pageIndex: value}}, this.getList)
    }
    changeType = (value) => {
        const obj = {...this.state.queryData, type: value}
        this.setState({queryData: obj})
    }
    changeTime = (value) => {
        const start = value ? format(value[0]._d,'YYYY-MM-DD 00:00:00') : '';
        const end = value ? format(value[1]._d,'YYYY-MM-DD 23:59:59') : '';
        const obj = {...this.state.queryData, startTime: start, endTime: end}
        this.setState({queryData: obj})
    }

    render() {
        return (
            <>
                <div className='searchBox'>
                    <Input onChange={(e) => {
                        const obj = {...this.state.queryData, user: e.target.value}
                        this.setState({queryData: obj})
                    }}
                           allowClear={true} placeholder='请输入用户名' className='searchInput'
                           value={this.state.queryData.user} maxLength={20}/>
                    <Input onChange={(e) => {
                        const obj = {...this.state.queryData, url: e.target.value}
                        this.setState({queryData: obj})
                    }}
                           allowClear={true} placeholder='请输入请求URL' maxLength={500} className='searchInput'
                           value={this.state.queryData.url}/>
                    <Select onChange={this.changeType} defaultValue='' className='searchInput'>
                        <Select.Option value=''>全部请求类型</Select.Option>
                        <Select.Option value='GET'>GET</Select.Option>
                        <Select.Option value='POST'>POST</Select.Option>
                        <Select.Option value='PUT'>PUT</Select.Option>
                        <Select.Option value='DELETE'>DELETE</Select.Option>
                    </Select>
                    <DatePicker.RangePicker onChange={this.changeTime}
                                            style={{marginRight: '15px'}}></DatePicker.RangePicker>
                    <Button type='primary' className='searchButton' onClick={this.queryClick}>查询</Button>
                </div>
                <Table style={{width: '100%'}}
                       columns={this.columns}
                       dataSource={this.state.result}
                       rowKey='id'
                       bordered
                       pagination={
                           {
                               position: ['bottomLeft'],
                               current: this.state.queryData.pageIndex,
                               total: this.state.total,
                               defaultPageSize: this.state.queryData.pageSize,
                               showTotal: (total) => `总共：${total} 条数据 `,
                               onChange: this.pageClick
                           }
                       }>
                </Table>
            </>
        )
    }
}

export default connect(
    (state) => (state)
)(Log)
