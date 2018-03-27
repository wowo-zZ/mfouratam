require('normalize.css/normalize.css');
require('styles/Contents.less');

import React from 'react';
import Content from './Content';

class Contents extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="contents">
        <Content/>
      </div>
    );
  }
}

export default Contents;
