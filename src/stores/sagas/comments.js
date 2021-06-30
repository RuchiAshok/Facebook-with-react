import {
    put,
    takeEvery
  } from 'redux-saga/effects';
  import axios from 'axios';
  import ls from 'local-storage';
  let token = ls.get('JWTToken');
  let userDetails = ls.get('userDetails');
  let uDetails = JSON.parse(userDetails);
  
  async function getCommentsAPI(postId) {
    let commentsData =null;
    const data = await axios.post('http://localhost:8080/posts/getComment', {
        postId:postId
        },
        {
        headers: {
          token: token
        }
        })
        .then(function (response) {
       //     debugger;
            commentsData = response.data;
          return(commentsData);      
        })
        .catch(function (error) {
          console.log('Error while fetching Comments',error);
          commentsData.error_message= "Error Occured";
          return(commentsData);
        });  
    return data;
  }
  
  async function addCommentAPI(cData) {
        let commentsData =null;
        const data = await axios.post('http://localhost:8080/posts/insertComment', {
          postId: cData.postId,
          commentData: cData.inpComment,
          userId:uDetails.userId
        },
        {
          headers: {
            token: token
                  }
        })
        .then(function (response) {
            commentsData = response.data;
          return(commentsData);      
        })
        .catch(function (error) {
          console.log('Error while adding Comments',error);
          commentsData.error_message= "Error Occured";
          return(commentsData);
        });  
    return data;
  }
  
  async function deleteCommentAPI(cData) { 
    let commentsData =null;
    const data = await axios.post('http://localhost:8080/posts/deleteComment', {
            postId: cData.postId,
            commentId:cData.commentId
        },
        {
          headers: {
            token: token
                  }
        })
        .then(function (response) {
            commentsData = response.data;
          return(commentsData);      
        })
        .catch(function (error) {
          console.log('Error while deleting Comments',error);
          commentsData.error_message= "Error Occured";
          return(commentsData);
        });  
    return data;
  }
 
  function *   getComments(action) {
      try {    
        let postId = action.payload.postId;
        const commentResponse = yield getCommentsAPI(postId);    

          yield put({
              type: "FETCH_COMMENTS_SUCCESS",
              payload: {
                 comments:commentResponse,
                 postId:postId
              }
          });
      } catch (e) {
          yield put({
              type: "FETCH_COMMENTS_FAILED",
              message: e.message
          });
      }
  }

  function * addComment(action) {
    try {    

      const commentResponse = yield addCommentAPI(action.payload);    

        yield put({
            type: "ADD_COMMENT_SUCCESS",
            payload: {
               comments:commentResponse,
               postId:action.payload.postId
            }
        });
    } catch (e) {
        yield put({
            type: "ADD_COMMENT_FAILED",
            message: e.message
        });
    }
  }

  function * deleteComment(action) {
    try {    
      const commentResponse = yield deleteCommentAPI(action.payload);    
     
        yield put({
            type: "DELETE_COMMENT_SUCCESS",
            payload: {
               comments:commentResponse,
               postId:action.payload.postId
              
            }
        });
    } catch (e) {
        yield put({
            type: "DELETE_COMMENT_FAILED",
            message: e.message
        });
    }
  }
  
  function* CommentSaga() {
      yield takeEvery("FETCH_COMMENTS", getComments);
      yield takeEvery("ADD_COMMENT", addComment);
      yield takeEvery("DELETE_COMMENT", deleteComment);
  }
  
  export default CommentSaga;
  