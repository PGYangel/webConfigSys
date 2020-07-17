import React from 'react'
import {Row, Button} from 'antd'
import Icon from '@/assets/logo.png'
import cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {getList} from '@/api/projects'
import {connect} from 'react-redux'
import {setProjectList} from '@/actions/projects'

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        this.getList()
    }

    getList = async () => {
        const res = await getList()
        this.setState({projects: res})
    }

    gotoManage =(id) => {
        sessionStorage.setItem('projectId',id)
        this.props.dispatch(setProjectList(this.state.projects))
        this.props.history.push({
            pathname: '/home'
        })
    }

    renderList = () => {
        if (this.state.projects.length > 0) {
            return (
                this.state.projects.map(item => (
                    <div className="unit" key={item.projectId}>
                        <Row>
                            <img src={Icon} alt=""/>
                        </Row>
                        <Row>
                            <h6>{item.name}</h6>
                        </Row>
                        <Row>
                            <Button block type='primary' onClick={()=>{this.gotoManage(item.projectId)}}>进入管理</Button>
                        </Row>
                    </div>
                ))
            )
        }
        return null
    }

    render() {
        if (!cookie.get('token')) {
            return (
                <Redirect to={{pathname: "/login",}}/>
            )
        }
        return (
            <div className='loginBg'>
                <div className="listBox">
                    {this.renderList()}
                </div>
            </div>
        )
    }
}

export default connect(
    (state)=>{return state}
)(Projects)
