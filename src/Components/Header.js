import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Header.scss';

import logoImg from '../img/opentrans_logo.svg';
import logoImgWhite from '../img/opentrans_logo_white.svg';
import API from '../API';


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

        let menuItems = this.props.menuItems.map((item, idx) => (
            <li className={`nav-item Item ${item.id === this.props.currentPage ? 'active' : ''}`} key={`menuItem-${idx}`}>
                <Link to={'/'+item.id} className="nav-link">{item.title}</Link>
            </li>
        ));

        let headerMenu = (
            <div className="collapse navbar-collapse" id="ca-navbar">
                <ul className="navbar-nav ml-auto" id="nav">
                    {menuItems}
                    {this.props.isLoggedIn ?
                        <React.Fragment>
                            <li className={`nav-item Item ${'/project/create' === this.props.currentPage ? 'active' : ''}`}>
                                <Link to={'/project/create'} className="nav-link">프로젝트 생성</Link>
                            </li>
                            <li className={`nav-item Item ${'/mypage' === this.props.currentPage ? 'active' : ''}`}>
                                <Link to={'/mypage'} className="nav-link">마이페이지</Link>
                            </li>
                        </React.Fragment>
                        :
                        <React.Fragment></React.Fragment>
                    }
                </ul>
                <div className="ml-1">
                    {this.props.isLoggedIn ?
                        <React.Fragment>
                            <button className="btn btn-sm btn-outline-secondary" onClick={() => { API.request('logout'); window.location.href='/'; }}>로그아웃</button>
                        </React.Fragment>
                        :
                        <Link to="/login">
                            <button className="btn btn-sm btn-outline-secondary">로그인</button>
                        </Link>
                    }
                </div>
            </div>
        )

        let topHeader = (
            <nav className="navbar navbar-expand-lg navbar-light Header Header-Top">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logoImg} style={{width:'150px'}} alt="logo"></img>
                    </Link>
                    {headerMenu}
                </div>
            </nav>
        );

        let fixedHeader = (
            <nav id="fixedHeader" className="navbar navbar-expand-lg navbar-light Header Header-Fixed">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logoImgWhite} style={{width:'150px'}} alt="logo"></img>
                    </Link>
                    {headerMenu}
                </div>
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
