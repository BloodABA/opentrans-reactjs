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
            prevText: [
                {id: 1, text:'Facebook은 행동 강령을 채택하여 프로젝트 참여자가1!', like:3, dislike: 9},
                {id: 2, text:'Facebook은 행동 강령을 채택하여 프로젝트 참여자가2!', like:7, dislike: 3},
                {id: 3, text:'Facebook은 행동 강령을 채택하여 프로젝트 참여자가3!', like:9, dislike: 2}
            ]
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

    selectRow = async (row) => {
        if (row.text == "") return;
        const prevText = []
        const res = await API.request('translateInfo', {translateKey: row.key})
        console.log(res.data)
        if(!res) return;
        this.setState({
            selectedRow: row.key,
            // prevText : res.data
        });
    }

    keyPress(e){
        if(e.keyCode == 13){
           console.log('>> value', e.target.value);
        }
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
                            <div key={`row-${index}`} onClick={()=>this.selectRow(row)}>
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
                                        <div className="w-100">
                                            <form className="inputBox p-2">
                                                <div className="input-group">
                                                    <input id="editInput" className="form-control" placeholder="번역문을 입력해주세요." onChange={(e) => { this.setState({editInput: e.target.value}); }}/>
                                                    <div className="input-group-append">
                                                        <button className="btn btn-outline-primary" type="button" id="editInputBtn" onClick={this.submit}>완료</button>
                                                    </div>
                                                </div>
                                            </form>
                                            {this.state.prevText.map((row, index) => (
                                                <div className="prevTextRow" key={`prevTextRow-${index}`}>
                                                    <div className="text">
                                                        {row.text}
                                                    </div>
                                                    <span className="percent mr-2">
                                                        <span className="badge badge-info">
                                                            {Math.floor(row.like / (row.like+row.dislike) * 100)+'% '}
                                                        </span>
                                                    </span>
                                                    <button className="like btn btn-sm btn-primary mr-2">
                                                        좋아요{' '}
                                                        <span className="badge badge-light">{row.like}</span>
                                                    </button>
                                                    <button className="dislike btn btn-sm btn-warning mr-2">
                                                        별로에요{' '}
                                                        <span className="badge badge-light">{row.dislike}</span>
                                                    </button>
                                                    <button className="btn btn-sm btn-outline-success">
                                                        채택
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
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