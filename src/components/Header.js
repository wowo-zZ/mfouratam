require('normalize.css/normalize.css');
require('styles/Header.less');

import React from 'react';


class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let logoSrc = require('../images/syhs.png');
        let labels = require('../data/labels.json');
        var lableItemts = labels.map((label) =>
            <div className="label">
                <span>{label.labelName}</span>&nbsp;|&nbsp;
            </div>
        );
        return (
            <div className="header">
                <div className="logo">
                    <img src={logoSrc}/>
                </div>

                <div className="nav">
                    {lableItemts}
                </div>

                <div className="login">
                    <span>登录</span>&nbsp;|&nbsp;
                    <span>注册</span>
                </div>
            </div>
        );
    }
}

export default Header;
