import React, { Component } from 'react';
import './ProjectList.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ProjectListItem from './ProjectListItem';
import CardBox from './CardBox';

import API from '../API'

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        }
    }
    async componentDidMount() {
        /*
        axios.get('/project')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) { 
            console.log(error);
        });
        */

        const listData = []
        const projects = await API.request('project');
        if(!projects) return;
        for(let i=0;i<projects.data.length;i++) {
            listData.push({
                id: projects.data[i].projectUrl,
                title: projects.data[i].project,
                desc: projects.data[i].description,
                openstamp: projects.data[i].openstamp,
                active: projects.data[i].isOpensource ? "오픈소스" : "기업용",
                bounty: projects.data[i].bounty
            })
        }

        console.log(listData);

       this.setState({listData: listData});
    }
    render() {
        let body = this.state.listData.map(item => (
            <ProjectListItem
                id={item.id}
                title={item.title}
                desc={item.desc}
                date={item.openstamp}
                active={item.active}
                bounty={item.bounty}
                key={`prjItem-${item.id}`}
            />
        ));
        body.unshift(
            <ProjectListItem
                isHead={true}
                key="prjItem-head"
            />
        );

        return (
            <div className="ProjectList">
                <CardBox>
                    {body}
                </CardBox>
            </div>
        )
    }
}


export default ProjectList;
