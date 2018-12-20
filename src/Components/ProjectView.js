import React, { Component } from 'react';
import './ProjectView.scss';
import { Link } from 'react-router-dom';

import InnerContainer from './InnerContainer';
import CardBox from './CardBox';
import Table from './Table';
import TableRow from './TableRow';

import API from '../API'

class ProjectView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: {}
        }
    }
    
    async componentDidMount() {
       
        const projectUrl = window.location.pathname.split("/project/")[1].split("/")[0]
        const project = await API.request('projectDetail', {projectUrl: projectUrl}, {})
        if(!project) return;

        const pages = []

        const docsList = await API.request('docsList', {projectUrl: projectUrl}, {})
        console.log(docsList.data)
        if(!docsList) return;

        for(let i=0;i<docsList.data.length;i++) {
            pages.push({
                "key" : docsList.data[i].md5,
                "title" : docsList.data[i].path
            })
        }
        
        this.setState({
            project: project,
            pages: pages
        })

    }

    componentWillUnmount() {
    }

    render() {
        let projectData = this.props.projectData;
        let project = this.state.project.data;

        if(!project) {
            return (<div></div>)
        }

        console.log(this.state.project);

        projectData = {
            id : project.projectUrl,
            title : project.project,
            desc : project.description,
            bounty : project.bounty,
            owner : project.owner,
            pages: this.state.pages
        }

        return (
            <div className="ProjectView">
                <div className="headerCard">
                    <div className="container">
                        {projectData.title}
                    </div>
                </div>
                <InnerContainer>
                    <CardBox innerFrame title="Introduce">
                        <Table>
                            <TableRow col1="설명" col2={projectData.desc}>
                            </TableRow>
                            <TableRow col1="바운티" col2={projectData.bounty}>
                            </TableRow>
                            <TableRow col1="오너" col2={projectData.owner}>
                            </TableRow>
                        </Table>
                    </CardBox>
                    <CardBox innerFrame title="Pages">
                        <div className="list-group">
                            {projectData.pages.map(doc => 
                                <Link to={`${projectData.id}/${doc.key}`} key={`doc-${doc.key}`} className="list-group-item list-group-item-action">{doc.title}</Link>
                            )}
                        </div>
                    </CardBox>
                </InnerContainer>
            </div>
        )
    }
}



export default ProjectView;