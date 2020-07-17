import React from 'react'
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom'
import Login from '@/views/Login/index'
import Projects from '@/views/Projects/index'
import Layout from '@/views/Layout/index'
import Home from '@/views/Home'
import DocList from '@/views/DocManage/List'
import DocDetail from '@/views/DocManage/Detail'
import UserList from '@/views/User/List'
import LogList from '@/views/Log'
import NotFind from '@/views/404'

const BasicRoute = () => {
    return (
        <HashRouter>
            <Switch>
                <Redirect exact from='/' to='/home'/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/projects' component={Projects}/>
                <Route path='/' render={() =>
                    <Layout>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/docList' component={DocList}/>
                            <Route path='/docDetail/:id' component={DocDetail}/>
                            <Route path='/userList' component={UserList}/>
                            <Route path='/logList' component={LogList}/>
                            <Route component={NotFind}/>
                        </Switch>
                    </Layout>
                }/>
                <Route component={NotFind}></Route>
            </Switch>
        </HashRouter>
    )
}

export default BasicRoute
