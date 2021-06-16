import React,{useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Nav,Button,Image} from 'react-bootstrap';
import cover_photo from '../../images/night.jpg';
import profile_pic from '../../images/user.png';
import UserPost from '../User/UserPost';
import UserPhoto from '../User/UserPhoto';


function UserComData(data){
    const [showPost, setPost] = useState(true);
    const [showPhoto, setPhoto] = useState(false);

    const handlePost =() =>{
        setPhoto(false);
        setPost(true);
    };
    const handlePhoto =() =>{
        setPhoto(true);
        setPost(false);
    };

        return  <div>
      <div style ={{height:"550px",display:"block",textAlign:"center"}}>
        <div>
        <img style ={{width:"1050px",height:"400px",padding:"2px",borderRadius:"0.8rem"}} src={cover_photo} alt="cover_photo"/>
        </div>
        <div className="profile_circle">
        <Image  style ={{width:"160px",margin:"5px"}} src={profile_pic} alt="profile_pic" roundedCircle/>
        </div>
        <div>
            <span style={{fontWeight:"600",fontSize:"35px"}}>
                Puja Gupta
            </span>
        </div>
        <div>
            <span style={{fontWeight:"500",fontSize:"15px",color:"blue",cursor:"pointer"}}>Add Bio</span>
        </div>

        <hr style={{width:"70%"}} />
        <div style={{display:"block",textAlign:"center"}}>
            <Container style ={{maxWidth:"70%",marginTop:"2px"}}>
                <Row>
                    <Col xs={12} md={8} lg={8} style ={{}}>
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item style={{fontWeight:"600"}} onClick={handlePost}>
                            <Nav.Link href="" eventKey="link-1">
                                Posts
                                </Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{fontWeight:"600"}}>
                            <Nav.Link href="" eventKey="link-2">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{fontWeight:"600"}} onClick={handlePhoto}>
                            <Nav.Link eventKey="link-3" href="">
                                <span>
                                Photos
                                </span></Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={{fontWeight:"600"}}>
                            <Nav.Link eventKey="link-4">Friends</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col xs={12} md={4} lg={4} style ={{}}>
                        <Button className="float-right" variant="secondary">Edit Profile</Button>
                     </Col>
                </Row>
            </Container>
                        
        </div>            
      </div>
        {showPhoto?<UserPhoto />:null}  
        {showPost?<UserPost />:null}
         
    </div>   
   
}
export default UserComData;