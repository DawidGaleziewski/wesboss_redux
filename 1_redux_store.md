# store

All data will be put in redux store.
Store is a one giant object storing all the data

in store.js we can create a startup file that will:

- create a store
- hold our initialState
- sync the state with the react router

```javascript   
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

const history = syncHistoryWithStore(browserHistory)

export {store, history}

```