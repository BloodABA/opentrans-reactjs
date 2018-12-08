import React, { Component } from 'react';
import './Header.scss';
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
        const scrollY = window.scrollY;
        document.getElementById('fixedHeader').style.top = (scrollY - 160) > 0 ? 0 : scrollY - 160 + 'px';
        if (scrollY > 100 && !this.state.menuFixed) {
            this.setState({ menuFixed: true });
        } else if (scrollY <= 100 && this.state.menuFixed) {
            this.setState({ menuFixed: false});
        }
    }; 

    render() {
        let menuItems = this.props.menuItems.map(item => (
            <li className={`nav-item Item ${item.id === this.props.currentPage ? 'active' : ''}`}><a class="nav-link">{item.title}</a></li>
        ));

        let headerMenu = (
            <div className="collapse navbar-collapse" id="ca-navbar">
                <ul className="navbar-nav ml-auto" id="nav">
                    {menuItems}
                </ul>
                <div className="ml-1">
                    {this.props.isLoggedIn ? 
                        <button className="btn btn-sm btn-outline-secondary">로그아웃</button> :
                        <button className="btn btn-sm btn-outline-secondary">로그인</button>
                    }
                </div>
            </div>
        )

        let topHeader = (
            <nav className="navbar navbar-expand-lg navbar-light Header Header-Top">
                <a className="navbar-brand" href="#">
                    <img src={logoImg} style={{width:'150px'}}></img>
                </a>
                {headerMenu}
            </nav>
        );

        let fixedHeader = (
            <nav id="fixedHeader" className="navbar navbar-expand-lg navbar-light Header Header-Fixed">
                <a className="navbar-brand" href="#">
                    <img src={logoImgWhite} style={{width:'150px'}}></img>
                </a>
                {headerMenu}
            </nav>
        );

        return (
            <React.Fragment>
                {topHeader}
                {fixedHeader}
            </React.Fragment>
        )
    }
}


export default Header;
