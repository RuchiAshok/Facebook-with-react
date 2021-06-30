export const getPosts = content => {
    return {
        type: "FETCH_POSTS"
    }
};

export const addPost = content => {
    return {
        type: "ADD_POST",
        payload: {
            post: content.post
        }
    }
};

export const deletePost = content => {
    return {
        type: "DELETE_POST",
        payload: {
            postId: content.postId
        }
    }
};

