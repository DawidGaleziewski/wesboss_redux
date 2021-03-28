// Reducer takes two things:
// 1. Action (info about what happened)
// 2. Copy of current state that is updated with data provided in the action

// We want to set the state to default value as first time it runs it will be empty
const posts = (state = [], action) => {
    console.log('post will change')
    console.log(state, action)
    return state;
}

export default posts;