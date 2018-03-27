require('normalize.css/normalize.css');
require('styles/Content.less');

import React from 'react';

class Content extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      'pages': require('../data/imageDatas.json')
    };
  }

  render () {
    let pageItems = this.state.pages.map((page) =>
      <div className="page">
        <span>{page.key}</span>
        <span>{page.fileName}</span>
      </div>
    );
    return (
      <div className="content">
        <ul>{pageItems}</ul>
      </div>
    );
  }
}

export default Content;
