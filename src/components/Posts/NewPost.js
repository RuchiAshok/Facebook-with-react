import React,{useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,Form,Button} from 'react-bootstrap';
import { connect } from "react-redux";
import  {addPost} from '../../stores/actions/posts';



function NewPost(props){
 let [inputTitle, setInpTitle] = useState('')
 let [inputContent, setInpContent] = useState('')

 function addNewPost(){
    props.addPost({
        post: {
            title:inputTitle,
            inputContent:inputContent
        }
      });
      setInpTitle('');
      setInpContent('');
 }


        return <Card style ={{marginBottom:"15px"}}>
                        <Card.Header>
                            <Form.Control value={inputTitle} onChange={event => setInpTitle(event.target.value)} type="text" placeholder="Add Title" /></Card.Header>
                        <Card.Body>
                            <Card.Title>
                            <Form.Control value={inputContent} onChange={event => setInpContent(event.target.value)} as="textarea" rows={3} placeholder="What is in your mind..." />
                            </Card.Title>
                            <Button variant="primary">Photo/Vedio</Button>
                            <Button variant="primary" style ={{marginLeft:"3px"}} onClick={addNewPost}>Add Post</Button>
                        </Card.Body>
                </Card>
}
function mapStateToProps(state){
    return {
         state  
    }
  }

  export default connect(mapStateToProps, {addPost})(NewPost);
//export default NewPost;