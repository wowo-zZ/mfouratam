require('normalize.css/normalize.css');
require('styles/Content.less');

import React from 'react';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'pages': require('../data/pages.json')
        };
    }

    render() {
        let pageItems = this.state.pages.map((page) =>
            <div className="page">
                <a href={page.url}><p>{page.title}</p></a>
                <span>{page.desc}</span>
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
