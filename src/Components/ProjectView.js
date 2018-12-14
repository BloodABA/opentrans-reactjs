import React, { Component } from 'react';
import './ProjectView.scss';

class ProjectView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        const helloWorld = "Hello World!";

        return (
            <React.Fragment>
                {this.props.index}
            </React.Fragment>
        )
    }
}

export default ProjectView;