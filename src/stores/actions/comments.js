export const getComments = content => {
    return {
        type: "FETCH_COMMENTS",
        payload: {
            postId: content.postId
        }
    }
};

export const addComment = content => {
    return {
        type: "ADD_COMMENT",
        payload: {
            postId: content.postId,
            inpComment: content.comment
        }
    }
};

export const deleteComment = content => {
    return {
        type: "DELETE_COMMENT",
        payload: {
            postId: content.postId,
            commentId: content.commentId
        }
    }
};

