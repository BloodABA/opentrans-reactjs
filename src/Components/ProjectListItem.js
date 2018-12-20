import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ProjectListItem.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import dummyLogo from '../img/project_dummy_logo.svg';

class ProjectListItem extends Component {
    render() {
        const isHead = this.props.isHead
        let itemData = isHead ? {
            title: "Project",
            date: "Date",
            active: "Activity",
            bounty: "Bounty"
        } : {
            title: this.props.title,
            date: this.props.date,
            active: this.props.active,
            bounty: this.props.bounty,
            img: this.props.img ? this.props.img : dummyLogo,
            percent: Math.random()*100
        };
        itemData.title = isHead ? "Project" : (
            <div className="itemTitle">
                <div className="text">{this.props.title}</div>
                <div className="progress" style={{height: "7px"}}>
                    <div className="progress-bar progress-bar-striped bg-info"
                        role="progressbar" style={{width: itemData.percent + "%"}} aria-valuenow={itemData.percent}
                        aria-valuemin="0" aria-valuemax="100" />
                </div>
            </div>
        )

        return (
            <React.Fragment>
                {isHead ? (
                    <div className="ProjectListItem d-flex head">
                        <div className="item-cell title">
                            {itemData.title}
                        </div>
                        <div className="item-cell date">
                            {itemData.date}
                        </div>
                        <div className="item-cell activity">
                            {itemData.active}
                        </div>
                        <div className="item-cell Bounty">
                            {itemData.bounty}
                        </div>
                    </div>
                ) : (
                    <Link to={`/project/${this.props.id}`} className="ProjectListItem d-flex item">
                        <div className="item-cell title">
                            <div className="title-logo">
                                <img src={itemData.img} alt="itemLogo"></img>
                            </div>
                            {itemData.title}
                        </div>
                        <div className="item-cell date">
                            {itemData.date}
                        </div>
                        <div className="item-cell activity">
                            {itemData.active}
                        </div>
                        <div className="item-cell Bounty">
                            {itemData.bounty}
                        </div>
                    </Link>
                )}
            </React.Fragment>
        )
    }
}


export default ProjectListItem;
