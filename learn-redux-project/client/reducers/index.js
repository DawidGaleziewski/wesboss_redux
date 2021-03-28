import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './post'
import comments from './comments'

// It needs to be called routing or it wont work!
const rootReducer = combineReducers({posts, comments, routing: routerReducer})

export default rootReducer;