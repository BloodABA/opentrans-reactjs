import React, { Component } from 'react';
import './PageEdit.scss';
import InnerContainer from './InnerContainer';
import CardBox from './CardBox';

class PageEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRow: -1
        }
    }
    
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    render() {
        const helloWorld = "Hello World!";
        let pageData = {
            projectTitle: 'TensorFlow',
            pageTitle: 'Page1',
            contents: [
                ['1a', `import Header from './Components/Header';`],
                ['1b', `import Footer from './Components/Footer';`],
                ['1c', `import Home from './Components/Home';`],
                ['1d', `import Project from './Components/Project';`],
                ['1e', `import Login from './Components/Login';`],
                ['1f', `class App extends Component {`],
                ['1g', `render() {`],
                ['1h', `const menuItems = [`],
                ['1i', `{id: 'project', title : '프로젝트'},`],
                ['1j', `{id: 'voting', title : '보팅'},`],
                ['1k', `{id: 'mypage', title : '마이페이지'}`],
                ['1l', `];`]
            ]
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
                        {pageData.contents.map((row,index) => (
                            <div onClick={()=> this.setState({selectedRow: index})} key={`pagerow-${index}`}>
                                <div className="tableRow">
                                    <div className="lineNum">
                                        {index + 1}
                                    </div>
                                    <div className="text">
                                        {row[1]}
                                    </div>
                                </div>
                                {this.state.selectedRow === index ? (
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