import React, { Component } from 'react';
import './PageEdit.scss';
import InnerContainer from './InnerContainer';
import CardBox from './CardBox';

import API from '../API'

class PageEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRow: -1,
            project: {},
            lines: []
        }
    }
    
    async componentDidMount() {
        const projectUrl = window.location.pathname.split("/project/")[1].split("/")[0]
        const docKey = window.location.pathname.split("/project/")[1].split("/")[1]
        const project = await API.request('projectDetail', {projectUrl: projectUrl}, {})
        if(!project) return;

        this.setState({
            project: project.data
        })

        const lines = await API.request('docsRead', {projectUrl: projectUrl, fileHash: docKey})
        if(!lines) return;
        
        this.setState({
            lines: lines.data
        })

    }

    componentWillUnmount() {
    }

    render() {
        const helloWorld = "Hello World!";
        let pageData = {
            projectTitle: this.state.project.project,
            pageTitle: 'Page1',
            contents: this.state.lines
        }

        return (
            <div className="PageEdit">
                <div className="headerCard">
                    <div className="container">
                        <span className="mr-3">
                            {pageData.projectTitle}
                        </span>
                        <span className="mr-3">
                            {"➤"}
                        </span>
                        {pageData.pageTitle}
                    </div>
                </div>
                <InnerContainer>
                    <CardBox>
                        <div className="tableHead">
                            {`TRANSLATE | `}
                            <b>{pageData.contents.length}</b>
                            {` lines`}
                        </div>
                        {pageData.contents.map((row, index) => (
                            <div onClick={()=> this.setState({selectedRow: row.key})}>
                                <div className="tableRow">
                                    <div className="lineNum">
                                        {index + 1}
                                    </div>
                                    <div className="text">
                                        {row.text}
                                    </div>
                                </div>
                                {this.state.selectedRow === row.key ? (
                                    <div className="editBox">
                                        <div className="dummy">{' '}</div>
                                        <form className="inputBox p-2">
                                            <div className="form-group">
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                            </div>
                                        </form>
                                    </div>
                                ) : ''}
                            </div>
                        ))}
                    </CardBox>
                </InnerContainer>
                
            </div>
        )
    }
}

export default PageEdit;