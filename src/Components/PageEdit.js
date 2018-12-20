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
            lines: [],
            editInput : "",
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

    submit = async () => {
        const projectUrl = window.location.pathname.split("/project/")[1].split("/")[0]
        const docKey = window.location.pathname.split("/project/")[1].split("/")[1]

        const res = await API.request(
            'LogSubmit',
            {projectUrl: projectUrl},
            {
                "docKey" : docKey,
                "translateKey" : this.state.selectedRow,
                "translate" : this.state.editInput
            }
        )
        if(!res) return;
        // 임시
        window.location.reload();
    }

    render() {
        const helloWorld = "Hello World!";
        let pageData = {
            projectTitle: this.state.project.project,
            pageTitle: 'Markdown.md',
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
                                    <div className={this.state.selectedRow === row.key ? 'text-selected': 'text'}>
                                        {row.text}
                                    </div>
                                </div>
                                {this.state.selectedRow === row.key ? (
                                    <div className="editBox">
                                        <div className="dummy">{' '}</div>
                                        <form className="inputBox p-2">
                                            <div className="input-group">
                                                <input id="editInput" className="form-control" placeholder="번역문을 입력해주세요." onChange={(e) => { this.setState({editInput: e.target.value}); }}/>
                                                <div class="input-group-append">
                                                    <button class="btn btn-outline-primary" type="button" id="editInputBtn" onClick={this.submit}>완료</button>
                                                </div>
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