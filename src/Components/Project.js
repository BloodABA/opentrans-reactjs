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
                <h1>{this.props.query}</h1>
                <ProjectList />
            </React.Fragment>
        )
    }
}


export default Project;
