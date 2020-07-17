import React from 'react'
import {Layout} from 'antd';
import LeftNav from './LeftNav'
import IHeader from '@/views/Layout/IHeader'
import {getList} from '@/api/projects'
import {userInfo} from '@/api/users'
import {setProjectList} from '@/actions/projects'
import {setInfo} from '@/actions/userInfo'
import {MenuUnfoldOutlined, MenuFoldOutlined,} from '@ant-design/icons';
import cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const {Header, Sider, Content} = Layout;

class MyLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            projects:[]
        }
        if(!sessionStorage.getItem('projectId')){
            window.location.href='#/projects'
        }
        if(this.props.projects.length === 0){
            getList().then(res =>{
                this.props.dispatch(setProjectList(res))
            })
        }
        if(!this.props.userInfo.token){
            userInfo({userName:cookie.get('userName'),token:cookie.get('token')}).then(res=>{
                if(res.state){
                    this.props.dispatch(setInfo(res.data))
                }
            })
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        if (!cookie.get('token')) {
            return (
                <Redirect to={{pathname: "/login",}}/>
            )
        }
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} style={{overflow: 'auto'}}>
                    <LeftNav></LeftNav>
                </Sider>
                <Layout className="site-layout">
                    <Header style={{padding: '0 15px', background: '#fff'}}>
                        <span>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </span>
                        <span style={{paddingLeft: '15px'}}>{this.props.menu}</span>
                        <span style={{float: 'right'}}>
                            <IHeader></IHeader>
                        </span>
                    </Header>
                    <Content style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        overflow: 'auto',
                        background: '#fff'
                    }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default connect(
    (state) => {
        return state
    }
)(MyLayout)
