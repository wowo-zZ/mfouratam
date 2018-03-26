require('normalize.css/normalize.css');
require('styles/Header.less');

import React from 'react';


class Header extends React.Component {
  constructor (props) {
    super(props);

  }

  render () {
    let logoSrc = require('../images/syhs.png')
    return (
      <div className="header">
        <div className="logo">
          <img src={logoSrc}/>
        </div>

        <div className="nav">

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
