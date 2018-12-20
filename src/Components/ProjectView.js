import React, { Component } from 'react';
import './ProjectView.scss';
import { Link } from 'react-router-dom';

import InnerContainer from './InnerContainer';
import CardBox from './CardBox';
import Table from './Table';
import TableRow from './TableRow';

class ProjectView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    
    componentDidMount() {
        /*
        axios.get('/project/${this.props.id}')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) { 
            console.log(error);
        });
        */
    }
    componentWillUnmount() {
    }
    render() {
        let projectData = this.props.projectData;

        projectData = {
            id : "tensorflow",
            title : "TensorFlow",
            desc : "TensorFlow is most beautiful opensource project in the world!",
            bounty : "$ 123,456,000",
            owner : "내가 오너다",
            pages: [
                {id: '1', title: "1페이지"}, 
                {id: '2', title: "2페이지"}, 
                {id: '3', title: "3페이지"}, 
                {id: '4', title: "4페이지"}
            ]
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
                        <div class="list-group">
                            {projectData.pages.map(doc => 
                                <Link to={`${projectData.id}/${doc.id}`} key={`doc-${doc.id}`}class="list-group-item list-group-item-action">{doc.title}</Link>
                            )}
                        </div>
                    </CardBox>
                </InnerContainer>
            </div>
        )
    }
}



export default ProjectView;