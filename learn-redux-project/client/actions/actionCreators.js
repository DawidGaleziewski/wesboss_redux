// Increment the like
// ACTION Creator
export const increment = (index) => {
    // ACTION BODY
    return {
        type: 'INCREMENT_LIKES',
        index
    }
}

// Add comment
export const addComment = (postId, author, comment) => {
    console.log('dispatch add comment')
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// Remove the comment
export const removeComment = (postId, index) => {
    console.log('removing a comment')
    return {
        type: 'REMOVE_COMMENT',
        index,
        postId
    }
}

// Changing of the route (chandled)