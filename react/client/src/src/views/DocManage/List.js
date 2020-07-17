import React from 'react'
import {Input, Button, Table, Form, Space, Popconfirm, message} from 'antd'
import {getList, delDoc} from '@/api/doc'
import AddModal from './Add'

class List extends React.Component {
    column = [
        {
            title: '活动',
            dataIndex: 'title',
            align: 'center'
        },
        {
            title: '活动地址',
            align: 'center',
            render: (record) => (
                <a href={record.url} target='_blank' rel="noopener noreferrer">
                    {record.url}
                </a>
            )
        },
        {
            title: '操作',
            align: 'center',
            render: (record) => (
                <Space>
                    <Button type='primary' size='small' onClick={()=>{this.gotoDetail(record)}}>详情</Button>
                    <Popconfirm
                        title="你确定要删除该活动配置吗?"
                        okText="是"
                        cancelText="否"
                        onConfirm={() => {
                            this.deleteDoc(record)
                        }}>
                        <Button type='primary' danger size='small'>删除</Button>
                    </Popconfirm>
                </Space>
            )
        }
    ]

    constructor() {
        super()
        this.state = {
            queryData: {
                queryText: '',
                pageIndex: 1,
                pageSize: 10
            },
            total: 0,
            result: [],
            visibleAddModal: false
        }
    }

    componentDidMount() {
        this.getList()
    }

    getList = async () => {
        const queryData = this.state.queryData
        queryData.projectId = sessionStorage.getItem('projectId')
        const res = await getList(queryData)
        this.setState({result: res.data, total: res.total})
    }
    queryClick = () => {
        this.setState({queryData: {...this.state.queryData, pageIndex: 1}}, this.getList)
    }

    pageClick = (value) => {
        this.setState({queryData: {...this.state.queryData, pageIndex: value}}, this.getList)
    }

    setAddModal = (value) => {
        this.setState({visibleAddModal: value})
    }

    deleteDoc = async (row) => {
        try {
            const res = await delDoc(row)
            this.queryClick()
            message.success(res.msg)
        } catch (e) {
            message.error(e.message)
        }
    }
    gotoDetail = (row) => {
        sessionStorage.setItem('docDetail',JSON.stringify(row))
        this.props.history.push({pathname:`/docDetail/${row.id}`})
    }

    render() {
        return (
            <>
                <div className='searchBox'>
                    <Form layout='inline' onFinish={this.queryClick}>
                        <Form.Item>
                            <Input onChange={(e) => {
                                this.setState({queryData: {...this.state.queryData, queryText: e.target.value}})
                            }}
                                   allowClear={true} placeholder='请输入活动或活动地址' maxLength={200} style={{width: '450px'}}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit'>查询</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' className='green-5' onClick={() => {
                                this.setAddModal(true)
                            }}>新建</Button>
                        </Form.Item>
                    </Form>
                </div>
                <Table columns={this.column}
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
                <AddModal isShow={this.state.visibleAddModal}
                          setShow={this.setAddModal}
                          getList={this.getList}>
                </AddModal>
            </>
        )
    }
}

export default List
