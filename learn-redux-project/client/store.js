import {createStore, compose} from 'redux';
// Hook up react router with router
import {syncHistoryWithStore} from 'react-router-redux';

// History will be imported into store as well
import  {browserHistory} from 'react-router';

// root reducer
import rootReducer from "./reducers/index";

// default data (initial data)
import comments from './data/comments'
import posts from './data/posts';

// create an object for default data

const defaultState ={
    posts,
    comments
}

// CreateStore method takes rootReducers which is a way of interfacing with the state and starting defaultState
const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store)

export default store;