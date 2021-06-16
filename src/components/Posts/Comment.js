import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import profile from '../../images/woman_pic.png';
// import profile_man from '../../images/man_pic.png';
import {Container,Row,Col,OverlayTrigger,Tooltip} from 'react-bootstrap';



function Comment(data){
        return <div style ={{marginTop:"4px",marginLeft:"20px"}}>
        <Container style ={{maxWidth:"100%", padding:"0px"}}>
            <Row>
                <Col style ={{flexGrow:"0"}}>
                <OverlayTrigger
                            key="top"
                            placement="top"
                            overlay={
                                <Tooltip>
                               User Information
                                </Tooltip>
                            }
                            >
                            <img style ={{maxWidth:"30px", padding:"0px", cursor:"pointer"}} src={profile} alt="profile" />
                        </OverlayTrigger>
                
                </Col>
                <Col xs={10} style ={{paddingLeft:"0px"}}>
                    <div style ={{fontWeight:"500", fontSize:"14px"}}>
                        <span>Aastha Priya</span>
                    </div>
                    <div style ={{fontWeight:"400", fontSize:"14px"}}>
                        <span> My favourite season is Spring :)</span>
                    </div>
                    <div style ={{fontWeight:"400",fontSize:"12px"}}>
                        <span style ={{color:"blue",cursor:"pointer"}}> Like </span>
                        <span style ={{color:"red", paddingLeft:"15px", cursor:"pointer"}}> Delete </span>
                    </div>
                </Col>
            </Row>
        </Container>                                                                                                  
    </div>
}
export default Comment;