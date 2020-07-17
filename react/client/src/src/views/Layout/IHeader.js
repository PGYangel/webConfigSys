import React from 'react'
import {Link} from 'react-router-dom'
import {Select} from 'antd'
import {connect} from 'react-redux'
import cookie from 'js-cookie'

class IHeader extends React.Component {
    handleProjects = (val) => {
        sessionStorage.setItem('projectId', val)
        window.location.href = '#/home'
    }

    renderProjects = () => {
        if (this.props.projects.length > 0) {
            return (
                this.props.projects.map(item => (
                    <Select.Option value={item.projectId} key={item.projectId}>{item.name}</Select.Option>
                ))
            )
        }
        return null
    }

    render() {
        return (
            <>
                <Select defaultValue={sessionStorage.getItem('projectId')} style={{width: '200px',marginRight:'15px'}}
                        onChange={this.handleProjects}>
                    {this.renderProjects()}
                </Select>
                <span style={{marginRight:'15px'}}>{cookie.get('name')}</span>
                <Link to='/login'>退出</Link>
            </>
        )
    }
}

export default connect(
    (state) => (state)
)(IHeader)
