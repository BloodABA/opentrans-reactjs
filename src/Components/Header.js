import React, { Component } from 'react';
import './Header.css';
import logoImg from '../img/opentrans_logo.svg';
import logoImgWhite from '../img/opentrans_logo_white.svg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuFixed: false
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = () => {
        if (window.scrollY > 100 && !this.state.menuFixed) {
            this.setState({ menuFixed: true });
        } else if (window.scrollY <= 100 && this.state.menuFixed) {
            this.setState({ menuFixed: false});
        }
    }; 

    render() {
        let menuItems = this.props.menuItems.map(item => (
            <li className={`nav-item ${item.isActive ? 'active' : ''}`}><a class="nav-link">{item.title}</a></li>
        ));

        return (
            <nav className="navbar navbar-expand-lg navbar-light Header">
                <a className="navbar-brand" href="#"><img src={logoImg} style={{width:'150px'}}></img></a>
                <div className="collapse navbar-collapse" id="ca-navbar">
                    <ul className="navbar-nav ml-auto" id="nav">
                        {menuItems}
                    </ul>
                    <div className="d-lg-none">
                        <button className="btn btn-outline-secondary">로그인</button>
                        <button className="btn btn-outline-primary">회원가입</button>
                    </div>
                </div>
            </nav>
        )
    }
}


export default Header;
