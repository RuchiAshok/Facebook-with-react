import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,Image} from 'react-bootstrap';
import baby_pic from '../../images/baby.png';
import like from '../../images/like.png';
import notification from '../../images/notification.png';
import gallery from '../../images/gallery.png';
import profile from '../../images/woman_pic.png';
import profile1 from '../../images/man_pic.png';

function UserPhoto(data){
        return <div style={{background:"#F2F3F5",paddingTop:"15px",paddingBottom:"20px"}}>
                    <Card style ={{marginBottom:"15px", maxWidth:"70%",marginLeft:"15%"}}>
                        <Card.Header style={{background:"#CCCCCC",fontWeight:"600", fontSize:"25px"}}>
                            Photos
                        </Card.Header>
                        <Card.Body>     
                        <Image style={{width:"178px",marginLeft:"5px",marginTop:"2px"}} src={baby_pic} thumbnail />
                        <Image style={{width:"178px",marginLeft:"5px",marginTop:"2px"}} src={like} thumbnail />
                        <Image style={{width:"178px",marginLeft:"5px",marginTop:"2px"}} src={gallery} thumbnail />
                        <Image style={{width:"178px",marginLeft:"5px",marginTop:"2px"}} src={notification} thumbnail />
                        <Image style={{width:"178px",marginLeft:"5px",marginTop:"2px"}} src={profile} thumbnail />  
                        <Image style={{width:"178px",marginLeft:"5px",marginTop:"2px"}} src={profile1} thumbnail />             
                         </Card.Body>
                     </Card>
    </div>      
}
export default UserPhoto;