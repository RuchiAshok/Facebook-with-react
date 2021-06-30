const initialState = {
    posts: []
};

export default function(state = initialState, action) {
    switch (action.type) {   
      case "FETCH_POSTS_SUCCESS": {
        const data = action.payload;
        if(data != null){
          //  console.log("Posts Fetch Reducers",data); 
        } 
        return {
            ...state,
            posts: data.posts
          };
        break;
      }

      case "ADD_POST_SUCCESS": {
        const data = action.payload;
        let newPosts =state.posts;
        let count = parseInt(data.posts.length)-1; 
        let newAddPost =data.posts.filter((element,index) =>index ===count);
        if(newAddPost.length ===1){
          newPosts.push(newAddPost[0]);
        }
        return {
            ...state,
            posts: newPosts
          };
        break;
      }

      case "DELETE_POST_SUCCESS": {
        const data = action.payload;
        let newPosts =state.posts.filter(element =>element.postId !==data.delPostId);
        return {
            ...state,
            posts: newPosts
          };
        break;
      }


      case "FETCH_COMMENTS_SUCCESS": {   
        const data = action.payload;
        if(data != null){      
          let newPosts =state.posts;
          for (let post of newPosts){
            if(post.postId === data.postId){
              post.comments = data.comments
              break;
            }
          }    
          return {
            ...state,
            posts:newPosts
           };
        } 
    
        break;
      }

      case "ADD_COMMENT_SUCCESS": {   
        const data = action.payload;
        if(data != null){      
          let newPosts =state.posts;
          for (let post of newPosts){
            if(post.postId === data.postId){
              post.comments = data.comments
              break;
            }
          }       
          return {
            ...state,
            posts:newPosts
           };
        } 
    
        break;
      }

      case "DELETE_COMMENT_SUCCESS": {   
        const data = action.payload;
        if(data != null){     
          let newPosts =state.posts;
          for (let post of newPosts){
            if(post.postId === data.postId){
              post.comments = data.comments
              break;
            }
          }      
          return {
            ...state,
            posts:newPosts
           };
        } 
    
        break;
      }

      case "FETCH_POSTS_FAILED": {
        const data = action.payload;
        if(data != null){
            console.log("Posts fetch Failed Reducers",data);
        } 
        break;
      }

      case "ADD_POST_FAILED": {
        const data = action.payload;
        if(data != null){
            console.log("Add Post Failed Reducers",data);
        } 
        break;
      }

      case "DELETE_POST_FAILED": {
        const data = action.payload;
        if(data != null){
            console.log("Delete Post Failed Reducers",data);
        } 
        break;
      }

      case "DELETE_COMMENTT_FAILED": {
        const data = action.payload;
        if(data != null){
            console.log("Delete Comment Failed Reducers",data);
        } 
        break;
      }

      case "ADD_COMMENT_FAILED": {
        const data = action.payload;
        if(data != null){
            console.log("Add Comment Failed Reducers",data);
        } 
        break;
      }

      default:
        return state;
    }
  }