import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import profile from '../../images/woman_pic.png';
// import profile_man from '../../images/man_pic.png';
import {Container,Row,Col,OverlayTrigger,Tooltip} from 'react-bootstrap';
import { connect } from "react-redux";
import  {deleteComment,getComments} from '../../stores/actions/comments';

function Comment(data){
    let {commentData} =data;

    function delComment(){
        data.deleteComment({
            postId: commentData.postId,
            commentId:commentData.commentId
        });
    }
//   console.log("Comment Component ", commentData);
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
                        <span>
                            {
                            commentData.userName !== null
                            ?
                            commentData.userName
                            :
                            "Aastha Priya"
                            }
                            </span>
                    </div>
                    <div style ={{fontWeight:"400", fontSize:"14px"}}>
                        <span> 
                        {
                            commentData.content !== null
                            ?
                            commentData.content
                            :
                            "Herebhd"
                            }
                            </span>
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