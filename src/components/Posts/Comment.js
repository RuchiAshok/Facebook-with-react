import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import profile_woman from '../../images/woman_pic.png';
import profile_man from '../../images/man_pic.png';
import {Container,Row,Col,OverlayTrigger,Tooltip} from 'react-bootstrap';
import { connect } from "react-redux";
import  {deleteComment,getComments} from '../../stores/actions/comments';

function Comment(data){
    let {commentData} =data;
    console.log("Comment Component",commentData)

    function delComment(){
        data.deleteComment({
            postId: commentData.postId,
            commentId:commentData.commentId
        });
    }

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
                            {commentData.genderTag ==='F'?
                            <img style ={{maxWidth:"30px", padding:"0px", cursor:"pointer"}} src={profile_woman} alt="profile" />
                            :
                            <img style ={{maxWidth:"30px", padding:"0px", cursor:"pointer"}} src={profile_man} alt="profile" />
                            }
                            
                        </OverlayTrigger>
                
                </Col>
                <Col xs={10} style ={{paddingLeft:"0px"}}>
                    <div style ={{fontWeight:"500", fontSize:"14px"}}>
                        <span>{commentData.userName}
                            </span>
                    </div>
                    <div style ={{fontWeight:"400", fontSize:"14px"}}>
                        <span> {commentData.content}</span>
                    </div>
                    <div style ={{fontWeight:"400",fontSize:"12px"}}>
                        <span style ={{color:"blue",cursor:"pointer"}}> Like </span>
                        <span style ={{color:"red", paddingLeft:"15px", cursor:"pointer"}} onClick={delComment}> Delete </span>
                    </div>
                </Col>
            </Row>
        </Container>                                                                                                  
    </div>
}

function mapStateToProps(state){
    return {
         state
    }
}
export default connect(mapStateToProps, {deleteComment,getComments})(Comment);
//export default Comment;