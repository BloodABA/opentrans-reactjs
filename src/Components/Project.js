import React, { Component } from 'react';
import './Project.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ProjectList from './ProjectList';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5 mb-5" style={{flex: "1 1 auto"}}>
                    <h1>{this.props.query}</h1>
                    <ProjectList />
                </div>
            </React.Fragment>
        )
    }
}


export default Project;
