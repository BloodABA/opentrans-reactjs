import React, { Component } from 'react';
import './ProjectList.scss';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ProjectListItem from './ProjectListItem';
import CardBox from './CardBox';

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
           {id: 'tensorflow1', title: 'TensorFlow', desc: 'The best way to relive stress'},
           {id: 'tensorflow2', title: 'Facebook React', desc: 'The best way to relive stress'},
           {id: 'tensorflow3', title: 'PepsiCola', desc: 'The best way to relive stress'},
           {id: 'tensorflow4', title: 'Emart', desc: 'The best way to relive stress'},
           {id: 'tensorflow5', title: 'Apple iPad', desc: 'The best way to relive stress'},
           {id: 'tensorflow6', title: 'Kleenex', desc: 'The best way to relive stress'},
           {id: 'tensorflow7', title: 'TensorFlow', desc: 'The best way to relive stress'},
           {id: 'tensorflow8', title: 'Facebook React', desc: 'The best way to relive stress'},
           {id: 'tensorflow9', title: 'PepsiCola', desc: 'The best way to relive stress'},
           {id: 'tensorflow10', title: 'Emart', desc: 'The best way to relive stress'},
           {id: 'tensorflow11', title: 'Apple iPad', desc: 'The best way to relive stress'},
           {id: 'tensorflow12', title: 'Kleenex', desc: 'The best way to relive stress'}
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
                <CardBox>
                    {body}
                </CardBox>
            </div>
        )
    }
}


export default ProjectList;
