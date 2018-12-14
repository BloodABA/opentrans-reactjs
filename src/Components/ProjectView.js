import React, { Component } from 'react';
import './ProjectView.scss';


function ProjectHeader(props) {
    return (
        <div className="projectHeader">
            <div className="content">
                <div className="icon">
                </div>
                <div className="summary">
                    <div className="title">
                        {props.title}
                    </div>
                    <div className="desc">
                        {props.desc}
                    </div>
                </div>
            </div>
        </div>
    );
}

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
                <ProjectHeader
                    title="제목"
                    desc="설명설명설명설명설명설명설명" />
            </React.Fragment>
        )
    }
}



export default ProjectView;