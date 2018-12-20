import React, { Component } from 'react';
import './Footer.scss';

import logoImg from '../img/opentrans_logo.svg';

class Footer extends Component {
    render() {
        const text = (
            <p style={{margin: "8px 0"}}>
                <b>블록체인 기반의 형상관리 기술문서 번역 플랫폼</b><br />
                LINE X 정보과학회 블록체인 경진대회<br />
                집단지성, 블록체인과 형상관리 시스템을 결합하여 협력을 통한 기술문서 번역 문화를 활성화 한다. 이를 통해 기술 진입장벽을 낮추고자 한다.<br />
                © BloodABA
            </p>
        );
        return (
            <div className="Footer">
                <div className="container">
                    <div className="d-flex">
                        <div className="left">
                            <img src={logoImg} alt="logo" />
                        </div>
                        <div className="right">
                            {text}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;