import React,{useState,useEffect} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,InputGroup,FormControl,Modal} from 'react-bootstrap';
import Comment from './Comment';
import PostUserInfo from './PostUserInfo';
import { connect } from "react-redux";
import  {getComments,addComment} from '../../stores/actions/comments';
import  {deletePost} from '../../stores/actions/posts';

function Post(data){
  let{postData} = data;
  console.log("Post Component", postData);
  let [postComment, setComments] = useState([]);
  let [inputCommment, setInpComment] = useState('');
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    
    useEffect(() => {
        data.getComments({
            postId: postData.postId
          });
       
    }, []);
    
   

    function delPost(){
        data.deletePost({
            postId: postData.postId
          });
          setShow(false);
        //   data.getComments({
        //     postId: postData.postId
        //   });
                 
    }

    function addNewComment(){
        data.addComment({
            postId: postData.postId,
            comment:inputCommment
          });
          setInpComment('');
    }
    


    return <Card style ={{marginBottom:"15px"}}  bg={"light"}>
                    <Card.Header style ={{paddingTop:"3px",paddingBottom:"3px"}}>
                        <PostUserInfo postData={postData} />
                    </Card.Header>
                    <Card.Body>                  
                        <Card.Title>{postData.title}</Card.Title>
                        {/* <Card.Img style={{width:"50%"}} src="https://static.toiimg.com/photo/49149294.cms" /> */}
                        <Card.Text>
                        {postData.content}
                        </Card.Text>
                        <InputGroup style ={{width:"80%"}}>
                            <FormControl value={inputCommment} onChange={event => setInpComment(event.target.value)} placeholder="Write a comment" aria-describedby="basic-addon2" />
                            <InputGroup.Append>
                            <Button variant="primary" onClick={addNewComment}>Comment</Button>
                            <Button variant="danger" style ={{marginLeft:"3px"}} onClick={handleShow}>Delete Post</Button>
                            </InputGroup.Append>
                        </InputGroup>
                            {                           
                                postData.comments?
                                postData.comments.map((commentData,index) =>{
                                    return  <Comment key={index} index={index}  commentData={commentData}/>                                                             
                                })
                                :null
                            }       
                        
                    </Card.Body>

                    <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header closeButton>
                        <Modal.Title>Delete Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={delPost}>
                            Delete
                        </Button>
                        </Modal.Footer>
                    </Modal>

                </Card>         

}

function mapStateToProps(state){
    return {
         state
    }
}
export default connect(mapStateToProps, {getComments,addComment,deletePost})(Post);
//export default Post;