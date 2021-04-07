
// handles updating of individual comment state
const postComments = (state = [], action) => {
    // Here we will add the changes  to the state of the individual post
    switch(action.type){
        case 'ADD_COMMENT':
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            console.log('remove index is: ', action.index)
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        default:
            return state;

    }
}

// handles all comments state
const comments = (state = [], action) => {
    if(typeof action.postId !== 'undefined'){
        return {
            // We take entire state and override it.
            // The point of reducer composition is that this function is only concerned with returning entire component state and not modyfing this chunk of state
            ...state,
            [action.postId]: postComments(state[action.postId], action)
        }
    }
    return state;
}

export default comments;