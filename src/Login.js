import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route,Link} from "react-router-dom";
import React, {useState} from 'react';
import Home from './Home';
import UserProfile from './components/Home/UserProfile';
import connectPpl from './images/p1.jpg';
import Chat from './components/Chat/Chat';

import {Modal,Form,Button,Container,Row,Col} from 'react-bootstrap';


function Login(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return(
        <Switch>
            <Route path="/home">
             <Home/>
           </Route>
           <Route path="/userProfile">
             <UserProfile/>
         </Route>
         <Route path="/chat">
             <Chat/>
         </Route>
          <Route path="/">
        <div style ={{padding:"2px"}}>
        <Container style ={{maxWidth:"100%",backgroundColor:"#f0f2f5"}}>
            <Row style ={{paddingTop:"110px",paddingRight:"120px", paddingBottom:"115px"}}>
                <Col xs={8} style ={{borderRadius:"1rem"}}>
                <img style ={{paddingLeft:"100px"}} src={connectPpl} alt="people" />
                </Col>
                <Col xs={4} style ={{backgroundColor:"white",borderRadius:"1rem"}}>
                    <div style ={{display:"block",textAlign:"center"}}>
                    <Form style ={{paddingTop:"100px",width:"90%", marginLeft:"20px"}}>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Control  size="lg" type="text" placeholder="UserName" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Control size="lg" type="password" placeholder="Password" />
                    </Form.Group>
                    <Link to ="/home"><Button style ={{width:"100%"}} size="lg" variant="primary">Login</Button></Link>
                    <div style ={{marginTop:"6px",display:"block",textAlign:"center"}}>
                    <span style ={{color:"blue", cursor:"pointer"}} variant="primary">Forgotten password?</span>
                    </div>
                    <hr style={{height: "9"}} />
                    <div style ={{marginTop:"40px",display:"block",textAlign:"center"}}>
                    <Button style ={{width:"80%"}} size="lg" variant="success" onClick={handleShow}>Create New Account</Button>
                    
                    </div>
                   </Form>
                    </div>                 
                </Col>              
            </Row>
        </Container>
                    <Modal show={show} onHide={handleClose} animation={false} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                        <Modal.Header style={{backgroundColor:"#e9ecef" }} closeButton>
                        <Modal.Title >Sign Up
                        </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                            <Form.Group controlId="formGroupUserName">
                                <Form.Control type="text" placeholder="UserName" />
                            </Form.Group>
                                <Row>
                                    <Col>
                                    <Form.Control placeholder="First name"  />
                                    </Col>
                                    <Col>
                                    <Form.Control placeholder="Last name" />
                                    </Col>
                                </Row>
                            <Form.Group controlId="formGroupEmail" style={{paddingTop:"12px"}}>
                                <Form.Control type="text" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPassword">
                                <Form.Control  type="password" placeholder="New Password" />
                            </Form.Group>
                            <Form.Group controlId="formGroupPhone">
                                <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>
                            <Row>
                                <Col>
                                <Form.Group controlId="exampleForm.Age">
                                <Form.Label style={{marginBottom:"0px"}}>Age</Form.Label>
                                <Row>
                                    <Col>
                                    <Form.Control as="select">
                                        <option>Day</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Form.Control>
                                    </Col>
                                    <Col>
                                    <Form.Control as="select">
                                        <option>Month</option>
                                        <option>January</option>
                                        <option>February</option>
                                        <option>March</option>
                                        <option>April</option>
                                        <option>May</option>
                                    </Form.Control>
                                    </Col>
                                    <Col>
                                    <Form.Control as="select">
                                        <option>Year</option>
                                        <option>2021</option>
                                        <option>2020</option>
                                        <option>2019</option>
                                        <option>2018</option>
                                        <option>2017</option>
                                    </Form.Control>
                                    </Col>
                                  </Row>                               
                                </Form.Group>
                              </Col>
                                <Col>
                                <Form.Group controlId="exampleForm.Age">
                                    <Form.Label style={{marginBottom:"0px"}}>Gender</Form.Label>
                                    <Form.Control as="select">
                                        <option>Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </Form.Control>                                          
                                </Form.Group>                          
                                </Col>
                            </Row>                      
                            </Form>
                            </Modal.Body>
                        <Modal.Footer style ={{display:"block",textAlign:"center"}}>
                        <Button variant="success" style ={{width:"25%"}} onClick={handleClose}>
                            Sign Up
                        </Button>
                        </Modal.Footer>
                    </Modal>      
        </div>
        </Route>
        </Switch>
    );
}

export default Login;