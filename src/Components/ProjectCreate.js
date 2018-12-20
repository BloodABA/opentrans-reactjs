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
            endDate: new Date()
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        this.setState({
          endDate: date
        });
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
                                    <label for="projectName">프로젝트명</label>
                                    <input type="text" className="form-control" id="projectName" aria-describedby="emailHelp" placeholder="프로젝트명" />
                                    <small id="projectNameHelp" className="form-text text-muted">프로젝트 이름을 입력해주세요.</small>
                                </div>
                                <div>
                                    <label for="description">프로젝트 설명</label>
                                    <input type="text" className="form-control" id="description" placeholder="프로젝트 설명" />
                                </div>
                                <div>
                                    <label for="projectId">프로젝트 ID</label>
                                    <div className="projectId">
                                        <div className="prefix">opentrans.work/project/</div>
                                        <div className="projectIdInput">
                                            <input type="text" className="form-control" id="projectId" placeholder="ID" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <fieldset disabled>
                                        <label for="description">언어 번역 설정</label>
                                        <div className="d-flex">
                                            <input type="text" className="form-control" id="originLang" placeholder="영어" />
                                            <input type="text" className="form-control" id="transLang" placeholder="한국어" />
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="mb-4">
                                    <label for="description">마감일</label>
                                    <div className="endDate">
                                        <DatePicker
                                            className="form-control"
                                            dateFormat="yyyy/MM/dd"
                                            withPortal
                                            selected={this.state.endDate}
                                            onChange={this.handleDateChange} />
                                    </div>
                                </div>
                                <div className="d-flex flex-row-reverse">
                                    <button type="submit" className="btn btn-outline-secondary">프로젝트 생성</button>
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