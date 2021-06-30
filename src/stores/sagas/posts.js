import {
    put,
    takeEvery
  } from 'redux-saga/effects';
  import axios from 'axios';
  import ls from 'local-storage';
  let token = ls.get('JWTToken');
  let userDetails = ls.get('userDetails');
  let uDetails = JSON.parse(userDetails);

  async function getPostsAPI() {
    let postsData =null;
    const data = await axios.get('http://localhost:8080/posts/getPost', {
        headers: {
          token: token
        }
        })
        .then(function (response) {
          postsData = response.data;
          return(postsData);      
        })
        .catch(function (error) {
          console.log('Error while fetching Posts',error);
          postsData.error_message= "Error Occured";
          return(postsData);
        });  
    return data;
     
  }

  async function addPostAPI(post) {
    let postsData =null;
    const data = await axios.post('http://localhost:8080/posts/insertPost', {
          newTitle: post.title,
          newContent: post.inputContent,
          userId:uDetails.userId
        },
        {
          headers: {
            token: token
                  }
        })
        .then(function (response) {
          console.log('Successfully Inserted');
          postsData = response.data;
          return(postsData);
        })
        .catch(function (error) {
          console.log(error);
          postsData.error_message= "Error Occured";
          return postsData;
        }); 
    return data;
     
  }

  async function deletePostAPI(postId) {
    let postsData =null;
    const data = await axios.post('http://localhost:8080/posts/deletePost', {
      postId: postId
        },
          {
          headers: {
            token: token
                  }
        })
        .then(function (response) {
          console.log('Post Successfully Deleted');
          postsData = response.data;
          return(postsData);
        })
        .catch(function (error) {
          console.log(error);
          postsData.error_message= "Error Occured while deleting Post";
          return postsData;
        }); 
    return data; 
  }



  function *   getPosts(action) {
      try {   
        const postResponse = yield getPostsAPI();
       // console.log('Posts Saga', postResponse);
          yield put({
              type: "FETCH_POSTS_SUCCESS",
              payload: {
                 posts:postResponse
              }
          });
      } catch (e) {
          yield put({
              type: "FETCH_POSTS_FAILED",
              message: e.message
          });
      }
  }


  function *   addPosts(action) {
    try {   
      const postResponse = yield addPostAPI(action.payload.post);
        yield put({
            type: "ADD_POST_SUCCESS",
            payload: {
               posts:postResponse
            }
        });
    } catch (e) {
        yield put({
            type: "ADD_POST_FAILED",
            message: e.message
        });
    }
  }

  function * deletePost(action) {
    try {   
      const postResponse = yield deletePostAPI(action.payload.postId);
        yield put({
            type: "DELETE_POST_SUCCESS",
            payload: {
               posts:postResponse,
               delPostId:action.payload.postId
            }
        });
    } catch (e) {
        yield put({
            type: "DELETE_POST_FAILED",
            message: e.message
        });
    }
}
  
  function* PostSaga() {
      yield takeEvery("FETCH_POSTS", getPosts);
      yield takeEvery("ADD_POST", addPosts);
      yield takeEvery("DELETE_POST", deletePost);
  }
  
  export default PostSaga;
  