require('normalize.css/normalize.css');
require('styles/App.less');
require('./Rem.js');

import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import Article from './Article.js';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

const AppComponent = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Switch>
        <Route path="/index" exact component={Content}/>
        <Route path="/article/:id" component={Article}/>
        <Redirect to="/index"/>
      </Switch>
    </div>
  </BrowserRouter>
);

AppComponent.defaultProps = {};

export default AppComponent;
