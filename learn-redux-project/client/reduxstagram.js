// let's go!
import React from 'react';
import {render} from 'react-dom';

import App from './components/App';
import Main from "./components/Main";
import Single from "./components/Single";
import PhotoGrid from "./components/PhotoGrid";

import  {Router, Route, IndexRoute, browserHistory} from 'react-router';

//  Provider binds our redux with react and provides the store to the application
import {Provider} from 'react-redux'
import store, {history} from './store';

// We wrap the router with our store provider and feed it the store we have defined
// We also feed history that is connected with redux state to the router
const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}></Route>
            </Route>
        </Router>
    </Provider>

)

// Import css
import css from './styles/style.styl';

render(router, document.getElementById('root'))