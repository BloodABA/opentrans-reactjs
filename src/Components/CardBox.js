import React, { Component } from 'react';
import './CardBox.scss';

class CardBox extends Component {
    render() {
        return (
             <div className="CardBox">
                {this.props.innerFrame ? (
                    <div className="innerFrame">
                        <div className="title">
                            {this.props.title}
                        </div>
                        <div className="contents">
                            {this.props.children}
                        </div>
                    </div>
                ) : this.props.children}
            </div>
        )
    }
}

export default CardBox;