import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import Login from './containers/login/login';
import thunk from 'redux-thunk'
import Register from './containers/register/register'
import Reducers from './reducers/index'
import AuthRoute from './components/authroute/authroute'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(Reducers, composeEnhancers(
    applyMiddleware(thunk)
    )
)
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route component={AuthRoute} />
            <Route path={'/login'} component={Login} />
            <Route path={'/register'} component={Register} />
        </Router>
    </Provider>, document.getElementById('root'));


