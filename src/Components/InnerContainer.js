import React, { Component } from 'react';
import './InnerContainer.scss';

class InnerContainer extends Component {
    render() {
        return (
             <div className="InnerContainer container mb-5 mt-5">
                {this.props.children}
            </div>
        )
    }
}

export default InnerContainer;