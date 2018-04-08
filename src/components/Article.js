require('normalize.css/normalize.css');
require('styles/Article.less');

import React from 'react';

class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      'id': 0,
      'labels': [],
      'content': '',
      'title': ''
    };
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    let article = require('../data/articles.json').find((article) => article.id == id);
    this.setState({
      'id': id,
      'labels': article.labels,
      'content': article.content,
      'title': article.title
    });
  }

  render() {
    return (
      <div>
        <div className="article-title">{this.state.title}</div>
        <div className="article-content">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.content}</div>
      </div>
    );
  }
}

export default Article;
