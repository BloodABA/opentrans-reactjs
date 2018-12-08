import React, { Component } from 'react';
import './ProjectListItem.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import dummyLogo from '../img/project_dummy_logo.svg';

class ProjectListItem extends Component {
    render() {
        const isHead = this.props.isHead
        let itemData = isHead ? {
            title: "Project",
            date: "Date",
            activity: "Activity",
            bounty: "Bounty"
        } : {
            title: this.props.title,
            date: this.props.date,
            activity: this.props.activity,
            bounty: this.props.bounty,
            img: this.props.img ? this.props.img : dummyLogo,
            percent: Math.random()*100
        };
        itemData.title = isHead ? "Project" : (
            <div className="itemTitle">
                <div className="text">{this.props.title}</div>
                <div className="progress" style={{height: "7px"}}>
                    <div className="progress-bar progress-bar-striped bg-info"
                        role="progressbar" style={{width: itemData.percent + "%"}} aria-valuenow={`${itemData.percent}`}
                        aria-valuemin="0" aria-valuemax="100" />
                </div>
            </div>
        )

        return (
            <React.Fragment>
                <div className={`ProjectListItem d-flex ${isHead ? "head" : "item"}`}>
                    <div className="item-cell title">
                        {isHead ? '' : (
                            <div className="title-logo">
                                <img src={itemData.img}></img>
                            </div>
                        )}
                        {itemData.title}
                    </div>
                    <div className="item-cell date">
                        {itemData.date}
                    </div>
                    <div className="item-cell activity">
                        {itemData.activity}
                    </div>
                    <div className="item-cell Bounty">
                        {itemData.bounty}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}


export default ProjectListItem;
