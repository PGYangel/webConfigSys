import React from 'react';
import {usersList, delUser} from '@/api/users';
import {Table, Button, Input, Space, Popconfirm, message} from 'antd';
import AddModal from './Add'
import Modify from './Modify'
import cookie from 'js-cookie'
import {connect} from 'react-redux'

class List extends React.Component {
    columns = [
        {
            title: '用户名',
            dataIndex: 'userName',
            align: 'center'
        },
        {
            title: '姓名',
            dataIndex: 'name',
            align: 'center'
        },
        {
            title: '操作',
            align: 'center',
            render: (record) => (
                <Space>
                    <Button type='primary' size='small' onClick={() => {
                        this.setState({propUserName: record.userName});
                        this.setModifyModal(true)
                    }}>修改密码</Button>
                    <Popconfirm
                        title="你确定要删除该用户吗?"
                        okText="是"
                        cancelText="否"
                        onConfirm={() => {
                            this.delUser(record)
                        }}
                    >
                        {
                            parseInt(this.props.userInfo.powers) <= 1 ?
                                <Button type='primary' danger size='small'>删除</Button>
                                : ''
                        }
                    </Popconfirm>
                </Space>
            )
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            queryData: {
                queryText: '',
                pageIndex: 1,
                pageSize: 10
            },
            total: 0,
            result: [],
            visibleAddModal: false,
            visibleModifyModal: false,
            propUserName: ''
        }
    }

    componentDidMount() {
        this.queryClick()
    }

    getUserList = async () => {
        try {
            const res = await usersList({
                ...this.state.queryData,
                adminUser: cookie.get('userName'),
                token: cookie.get('token')
            })
            this.setState({
                result: res.data,
                total: res.total,
                addData: {
                    userName: '',
                    name: '',
                    password: ''
                }
            });
        } catch (e) {
            message.error(e.message)
        }
    }

    delUser = async (record) => {
        try {
            const res = await delUser(record.userName)
            if (res.state) {
                this.getUserList()
                message.success(res.msg)
            } else {
                message.error(res.error)
            }
        } catch (e) {
        }
    }

    setModifyModal = (val) => {
        this.setState({visibleModifyModal: val})
    }

    setAddModal = (val) => {
        this.setState({visibleAddModal: val})
    }
    queryClick = () => {
        this.setState({queryData: {...this.state.queryData, pageIndex: 1}}, this.getUserList)
    }
    pageClick = (value) => {
        this.setState({queryData: {...this.state.queryData, pageIndex: value}}, this.getUserList)
    }

    render() {
        return (
            <>
                <div className='searchBox'>
                    <Input onChange={(e) => {
                        const obj = {...this.state.queryData, queryText: e.target.value}
                        this.setState({queryData: obj})
                    }}
                           allowClear={true} placeholder='请输入用户名或姓名' className='searchInput'
                           value={this.state.queryData.queryText} maxLength={20}/>
                    <Button type='primary' className='searchButton' onClick={this.queryClick}>查询</Button>
                    <Button type='primary' className='green-5' onClick={() => {
                        this.setAddModal(true)
                    }}>新建</Button>
                </div>
                <Table columns={this.columns}
                       dataSource={this.state.result}
                       rowKey='userName'
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
                {/*新建弹窗*/}
                <AddModal isShow={this.state.visibleAddModal}
                          setShow={this.setAddModal}
                          getUserList={this.getUserList}>
                </AddModal>
                {/*修改密码弹窗*/}
                <Modify isShow={this.state.visibleModifyModal}
                        setShow={this.setModifyModal}
                        userName={this.state.propUserName}>
                </Modify>
            </>
        )
    }
}

export default connect(
    (state) => (state)
)(List)
