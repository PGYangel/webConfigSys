import React from 'react'
import {Menu} from 'antd';
import {AppstoreOutlined, FileWordFilled, IdcardFilled,ProfileOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {choice} from '@/actions/menu'

const {SubMenu} = Menu;

class LeftNav extends React.Component {
    handleNav = (item) => {
        const {dispatch} = this.props
        dispatch(choice(item.item.props.title))
    }

    render() {
        return (
            <Menu theme='dark' mode="inline">
                <Menu.Item key="1" icon={<AppstoreOutlined/>} title='欢迎' onClick={this.handleNav}><NavLink
                    to='/home'>欢迎</NavLink></Menu.Item>
                <SubMenu key="sub1" icon={<FileWordFilled/>} title="文案管理">
                    <Menu.Item key="2" title='文案列表' onClick={this.handleNav}><NavLink
                        to='/docList'>文案列表</NavLink></Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<IdcardFilled/>} title="用户管理">
                    <Menu.Item key="3" title='用户列表' onClick={this.handleNav}><NavLink
                        to='/userList'>用户列表</NavLink></Menu.Item>
                </SubMenu>
                {
                    parseInt(this.props.userInfo.powers) <= 1 ?
                        <SubMenu key="sub3" icon={<ProfileOutlined/>} title="日志管理">
                            <Menu.Item key="4" title='操作日志' onClick={this.handleNav}><NavLink
                                to='/logList'>操作日志</NavLink></Menu.Item>
                        </SubMenu>
                        : ''
                }
            </Menu>
        )
    }
}

export default connect(
    (state) => (state)
)(LeftNav)
