require('normalize.css/normalize.css');
require('styles/App.less');
require('./Rem.js');

import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import TestRouter from './TestRouter';


class AppComponent extends React.Component {

  // 组件加载之后计算范围
  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Header/>
        {/*<TestRouter/>*/}
        {/*<Content/>*/}
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
