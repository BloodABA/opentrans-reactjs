import React, { Component } from 'react';
import './EmptyCpnt.scss';

class EmptyCpnt extends Component {
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
            </React.Fragment>
        )
    }
}

export default EmptyCpnt;