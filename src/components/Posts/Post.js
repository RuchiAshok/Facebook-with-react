import React,{useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,Button,InputGroup,FormControl,Modal} from 'react-bootstrap';
import Comment from './Comment';
import PostUserInfo from './PostUserInfo';


function Post(data){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return <Card style ={{marginBottom:"15px"}}  bg={"light"}>
                    <Card.Header style ={{paddingTop:"3px",paddingBottom:"3px"}}>
                        <PostUserInfo />
                    </Card.Header>
                    <Card.Body>                  
                        <Card.Title>What is your favourite season?</Card.Title>
                        {/* <Card.Img style={{width:"50%"}} src="https://static.toiimg.com/photo/49149294.cms" /> */}
                        <Card.Text>
                        Mine is autumn and spring, what is yours?
                        </Card.Text>
                        <InputGroup style ={{width:"80%"}}>
                            <FormControl placeholder="Write a comment" aria-describedby="basic-addon2" />
                            <InputGroup.Append>
                            <Button variant="primary">Comment</Button>
                            <Button variant="danger" style ={{marginLeft:"3px"}} onClick={handleShow}>Delete Post</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Comment />
                        <Comment />
                        <Comment />
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
                        <Button variant="danger">
                            Delete
                        </Button>
                        </Modal.Footer>
                    </Modal>

                </Card>         

}
export default Post;