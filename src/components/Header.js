require('normalize.css/normalize.css');
require('styles/Header.less');

import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'labels': require('../data/labels.json')
    };
  }

  componentDidMount() {
    // ajax请求类型数据，然后setState
  }

  render() {

    class PHP extends React.Component {

      render() {
        return (<div> welcome to php! </div>)
      }
    }

    let LabelItems = () => (
        <Router>
          <div>
            <Link to="/php">PHP</Link>
            <Route path="/php" component={PHP}/>
          </div>
        </Router>
    );

    let logoSrc = require('../images/syhs.png');
    return (
      <div className="header">
        <div className="logo">
          <img src={logoSrc}/>
        </div>

        <div className="nav">
          <LabelItems/>
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
