import React, { Component } from 'react';
import './ProjectCreate.scss';
import InnerContainer from './InnerContainer';
import CardBox from './CardBox';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class ProjectCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            desc: '',
            endDate: new Date(),
            isOss: false
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }
    handleNameInput = (e) => {
        this.setState({name: e.target.value});
    }
    handleIdInput = (e) => {
        this.setState({id: e.target.value});
    }
    handleDescInput = (e) => {
        this.setState({desc: e.target.value});
    }
    handleOssInput = (e) => {
        this.setState({isOss: !this.state.isOss});
    }
    handleDateChange(date) {
        this.setState({endDate: date});
    }
    projectSubmit() {
        console.log(">>>> submit");
    }
    
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        const helloWorld = "Hello World!";

        return (
            <div className="ProjectCreate">
                <InnerContainer>
                    <div className="createContainer">
                        <CardBox innerFrame title="프로젝트 생성">
                            <form className="projectForm">
                                <div>
                                    <label htmlFor="projectName">프로젝트명</label>
                                    <input type="text" className="form-control" id="projectName" aria-describedby="emailHelp"
                                        placeholder="프로젝트명"  onChange={this.handleNameInput}/>
                                    <small id="projectNameHelp" className="form-text text-muted">프로젝트 이름을 입력해주세요.</small>
                                </div>
                                <div>
                                    <label htmlFor="description">프로젝트 설명</label>
                                    <input type="text" className="form-control" id="description"
                                    placeholder="프로젝트 설명"  onChange={this.handleDescInput}/>
                                </div>
                                <div>
                                    <label htmlFor="projectId">프로젝트 ID</label>
                                    <div className="projectId">
                                        <div className="prefix">opentrans.work/project/</div>
                                        <div className="projectIdInput">
                                            <input type="text" className="form-control" id="projectId"
                                                placeholder="ID"  onChange={this.handleIdInput}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <fieldset disabled>
                                        <label htmlFor="description">언어 번역 설정</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" id="originLang" placeholder="영어" />
                                            <input type="text" className="form-control" id="transLang" placeholder="한국어" />
                                        </div>
                                    </fieldset>
                                </div>
                                <div>
                                    <label htmlFor="description">마감일</label>
                                    <div className="endDate">
                                        <DatePicker
                                            className="form-control"
                                            dateFormat="yyyy/MM/dd"
                                            withPortal
                                            selected={this.state.endDate}
                                            onChange={this.handleDateChange} />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="isOss">오픈소스 여부</label>
                                    <div className="isOss">
                                        <input type="checkbox" className="mr-2" id="isOss"  onChange={this.handleOssInput}/>
                                        <label className="form-check-label" htmlFor="isOss">이 프로젝트는 오픈소스입니다.</label>
                                    </div>
                                </div>
                                <div className="d-flex flex-row-reverse mt-4">
                                    <span className="btn btn-outline-secondary" onClick={this.projectSubmit}>프로젝트 생성</span>
                                </div>
                            </form>
                        </CardBox>
                    </div>
                </InnerContainer>
            </div>
        )
    }
}

export default ProjectCreate;