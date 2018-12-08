import React, { Component } from 'react';
import './ProjectList.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ProjectListItem from './ProjectListItem';

class ProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        }
    }
    componentDidMount() {
        /*
        axios.get('/project')
        .then(function (response) {
        console.log(response);
        })
        .catch(function (error) {
        console.log(error);
        });
        */
       this.setState({listData: [
           {id: 1, title: 'TenserFlow', desc: 'The best way to relive stress'},
           {id: 2, title: 'Facebook React', desc: 'The best way to relive stress'},
           {id: 3, title: 'PepsiCola', desc: 'The best way to relive stress'},
           {id: 4, title: 'Emart', desc: 'The best way to relive stress'},
           {id: 5, title: 'Apple iPad', desc: 'The best way to relive stress'},
           {id: 6, title: 'Kleenex', desc: 'The best way to relive stress'},
           {id: 7, title: 'TenserFlow', desc: 'The best way to relive stress'},
           {id: 8, title: 'Facebook React', desc: 'The best way to relive stress'},
           {id: 9, title: 'PepsiCola', desc: 'The best way to relive stress'},
           {id: 10, title: 'Emart', desc: 'The best way to relive stress'},
           {id: 11, title: 'Apple iPad', desc: 'The best way to relive stress'},
           {id: 12, title: 'Kleenex', desc: 'The best way to relive stress'}
       ]});
    }
    render() {
        let body = this.state.listData.map(item => (
            <ProjectListItem
                id={item.id}
                title={item.title}
                desc={item.desc}
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
                <div className="projectTable">
                    {body}
                </div>
            </div>
        )
    }
}


export default ProjectList;
