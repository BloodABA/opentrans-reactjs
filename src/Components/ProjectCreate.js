import React, { Component } from 'react';
import './ProjectCreate.scss';
import InnerContainer from './InnerContainer';
import CardBox from './CardBox';

class ProjectCreate extends Component {
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
                <InnerContainer>
                    <CardBox innerFrame title="프로젝트 생성">
                        <form>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </CardBox>
                </InnerContainer>
            </React.Fragment>
        )
    }
}

export default ProjectCreate;