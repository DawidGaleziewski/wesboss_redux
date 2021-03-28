# reducers in redux

reducers handle what happens to the state.

Actions are like events fired in the browser. Similar to click, hover etc

We usually create a reducer for each piece of state.
i.e comments, posts etc.
After that those smaller reducers get joint into one big one

## reducer structure

```javascript
// Reducer takes two things:
// 1. Action (info about what happened)
// 2. Copy of current state that is updated with data provided in the action

// We want to set the state to default value as first time it runs it will be empty
const posts = (state = [], action) => {
    console.log(state, action)
    return state;
}

export default posts;
```

## root reducer
We can have only one reducer. Therefore our smaller reducers will need to get put into it.

We make a reducer for each part of state and then put them into one big reducer

```javascript
import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';

import posts from './post'
import comments from './comments'

const rootReducer = combineReducers({posts, comments, router: routerReducer})

export default rootReducer;
```

## reducers job
reducer does the actual editing of the state

we can acces the provider by selecting it and typing $r in console.

On store object we can see that there is a dispatch method. Used to send the action

$r.store.dispatch({type: 'INCREMENT_LIKES', index: 0})

important to understand is that whenever we run a action EVERY SINGLE reducer will run. Whenever to acto on that action is up to the reducer
