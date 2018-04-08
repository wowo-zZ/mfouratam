require('normalize.css/normalize.css');
require('styles/Content.less');

import React from 'react';

class Article extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
              This is an Article!
            </div>
        );
    }
}

export default Article;
