import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

import App from './App'
import StockInd from './pages/stockind'
import store from './mainstore'


ReactDOM.render(
    (<Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App} />
            <Route path="/stockind/:code" component={StockInd} />
        </Router>
    </Provider>), 
    document.getElementById('app'));