import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Container,Row,Col,Image} from 'react-bootstrap';
import profile_woman from '../../images/woman_pic.png';
import profile_man from '../../images/man_pic.png';

function PostUserInfo(data){
        let {postData}=data;
        return <Container style ={{maxWidth:"100%", padding:"0px"}}>
                <Row>
                    <Col style ={{flexGrow:"0"}}>
                    {postData.genderTag ==='F'?
                     <Image style ={{maxWidth:"40px", padding:"0px"}} src={profile_woman} alt="profile" />
                    :
                    <Image style ={{maxWidth:"40px", padding:"0px"}} src={profile_man} alt="profile" />
                    }
                   
                    </Col>
                    <Col xs={10} style ={{paddingLeft:"0px"}}>
                        <div style ={{fontWeight:"600"}}>
                            {postData.userName}
                            
                        </div>
                        <div style ={{fontWeight:"400",fontSize:"12px"}}>
                            {postData.createdOn}                          
                        </div>
                    </Col>
                    <Col>
                    {/* <Button variant="primary">Info</Button> */}
                    </Col>
                </Row>
    </Container>   
}
export default PostUserInfo;