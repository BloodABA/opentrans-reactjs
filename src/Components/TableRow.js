import React, { Component } from 'react';
import './TableRow.scss';

class TableRow extends Component {
    render() {
        return (
            <div className="TableRow">
                <div className="col1">
                    {this.props.col1}
                </div>
                <div className="col2">
                    {this.props.col2}
                </div>
            </div>
        )
    }
}

export default TableRow;