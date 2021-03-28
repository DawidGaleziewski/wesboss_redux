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
    return {
        type: 'ADD_COMMENT',
        postId,
        author,
        comment
    }
}

// Remove the comment
export const removeComment = (postId, index) => {
    return {
        type: 'REMOVE_COMMENT',
        index
    }
}

// Changing of the route (chandled)