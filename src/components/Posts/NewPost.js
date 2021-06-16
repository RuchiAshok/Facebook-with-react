import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,Form,Button} from 'react-bootstrap';



function NewPost(data){
        return <Card style ={{marginBottom:"15px"}}>
                        <Card.Header><Form.Control type="text" placeholder="Add Title" /></Card.Header>
                        <Card.Body>
                            <Card.Title>
                            <Form.Control as="textarea" rows={3} placeholder="What is in your mind..." />
                            </Card.Title>
                            <Button variant="primary">Photo/Vedio</Button>
                            <Button variant="primary" style ={{marginLeft:"3px"}}>Add Post</Button>
                        </Card.Body>
                </Card>
}
export default NewPost;