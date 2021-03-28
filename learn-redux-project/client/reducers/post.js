// Reducer takes two things:
// 1. Action (info about what happened)
// 2. Copy of current state that is updated with data provided in the action

// We want to set the state to default value as first time it runs it will be empty
const posts = (state = [], action) => {
    //  It is important that we write a pure function that does not mutate the state. We want to take a copy of a old state and return new state
    // console.log('post will change')
    // console.log(state, action)

    // We act on the type
    switch(action.type){
        case 'INCREMENT_LIKES':
            console.log('incrementing likes')
            const index = action.index
            // Using spread operator we create new arrays/objects and only increment the one we act on
        return [
            ...state.slice(0, index),
            {...state[index], likes: state[index].likes + 1},
            ...state.slice(index + 1)
        ]

        // Default state that always just returns state in case we have a error in our actions
        default:
            return state;
    }
}

export default posts;