import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList'

import {connect} from 'react-redux'

class Dashboard extends Component {
  
  render() {
  //console.log(this.props);
const {projects}=this.props;

    return (
    <div className='dashboard container'>
        <div className="row">
            <div className="col s12 m6">
                <ProjectList projects={projects}/>
            </div>

            <div className="col s12 m5">
                <Notifications/>
            </div>

        </div>
    </div>
    )
  }
}

//state mein se data mangwa rai hein taka is component mein use kr saka or ye root component ha islia better ha yahan mangwain taka iska child mein pass kr sakan

const mapStateToProps=(state)=>
{
  return{
    projects:state.project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
