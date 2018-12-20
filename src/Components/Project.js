import React, { Component } from 'react';
import './Project.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ProjectList from './ProjectList';
import InnerContainer from './InnerContainer';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
                <InnerContainer>
                    <ProjectList />
                </InnerContainer>
            </React.Fragment>
        )
    }
}


export default Project;
