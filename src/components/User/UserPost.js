import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Button,Card,ListGroup,InputGroup,FormControl} from 'react-bootstrap';
import baby_pic from '../../images/baby.png';
import like from '../../images/like.png';
import comment from '../../images/comment.png';
import Posts from '../Posts/Post';
import NewPost from '../Posts/NewPost'; 
import PostUserInfo from'../Posts/PostUserInfo';



function UserPost(data){
        return   <div style={{background:"#F2F3F5",paddingTop:"15px",paddingBottom:"20px"}}>
        <Container style ={{maxWidth:"70%",marginTop:"2px"}}>
                <Row>
                    <Col xs={12} md={2} lg={4} style ={{}}>
                    <Card style={{}}>
                        <Card.Header style={{background:"#CCCCCC",fontWeight:"600", fontSize:"25px"}}>Intro</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item style={{textAlign:"center", fontWeight:"600"}}>Edit Details</ListGroup.Item>
                            <ListGroup.Item style={{textAlign:"center", fontWeight:"600"}}>Add Hobbies </ListGroup.Item>
                            <ListGroup.Item style={{textAlign:"center", fontWeight:"600"}}>Add Story</ListGroup.Item>
                        </ListGroup>
                    </Card>

                    <Card style={{marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>
                                <Row>
                                    <Col>
                                     <span style={{fontWeight:"600", fontSize:"22px"}}>Photos</span>
                                    </Col>
                                    <Col style={{padding:"0"}}>
                                        <span style={{textAlign:"right", color:"blue", fontWeight:"400", fontSize:"18px"}}>See all Photos</span>
                                    </Col>
                                </Row>
                                
                            </Card.Title>
                        </Card.Body>
                    </Card>

                    <Card style={{marginTop:"15px"}}>
                        <Card.Body>
                            <Card.Title>
                                <Row>
                                    <Col>
                                     <span style={{fontWeight:"600", fontSize:"22px"}}>Friens</span>
                                    </Col>
                                    <Col style={{padding:"0"}}>
                                        <span style={{textAlign:"right", color:"blue", fontWeight:"400", fontSize:"18px"}}>See all Friends</span>
                                    </Col>
                                </Row>
                                
                            </Card.Title>
                        </Card.Body>
                    </Card>


                    </Col>
                    <Col xs={12} md={8} lg={8} style ={{paddingRight:"0px",backgroundColor:"#f0f2f5"}}>
                        <NewPost />
                        <Card style ={{marginBottom:"15px"}}>
                        <Card.Header style ={{paddingTop:"3px",paddingBottom:"3px"}}>
                            <PostUserInfo />
                        </Card.Header>
                        <Card.Body>                  
                            <Card.Title style={{textAlign:"center",height:"130px",fontWeight:"400"}}>                               
                            <img  style ={{ maxWidth:"50px",paddingTop:"15px"}} src={baby_pic} alt="born"/>                                
                            <div style ={{ paddingTop:"10px"}}>
                            <span> Born on 12 February 1995</span>
                            </div>
                            
                           </Card.Title>
                            
                            <div style={{textAlign:"center"}}>
                            <hr style={{marginTop:"0.7rem", marginBottom:"0.7rem"}}/>
                            <Row>
                                <Col>
                                <img  style ={{ maxWidth:"25px",cursor:"pointer"}} src={like} alt="like"/> <span style ={{ paddingTop:"5px"}}>Like</span>
                                </Col>
                                <Col>
                                <img  style ={{ maxWidth:"25px",cursor:"pointer"}} src={comment} alt="comment"/> <span>Comment</span>
                                </Col>
                            </Row>
                            <hr style={{marginTop:"0.7rem", marginBottom:"0.7rem"}}/>
                           
                            </div>
                            <InputGroup style ={{}}>
                                <FormControl placeholder="Write a comment" aria-describedby="basic-addon2" />
                                <InputGroup.Append>
                                <Button variant="primary">Comment</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Card.Body>
                        </Card>
                        <Posts />
                       
                    </Col>          
                </Row>
        </Container>      
    </div>      
}
export default UserPost;