import {React} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Card,ListGroup} from 'react-bootstrap';
//import { connect } from "react-redux";



function UserFriends(data){
    let {friends} =data;
    console.log("Friends", friends);

        return <div style={{background:"#F2F3F5",paddingTop:"15px",paddingBottom:"20px"}}>
                    <Card style ={{marginBottom:"15px", maxWidth:"70%",marginLeft:"15%"}}>
                        <Card.Header style={{background:"#CCCCCC",fontWeight:"600", fontSize:"25px"}}>
                            Friends
                        </Card.Header>
                        <Card.Body>     
                            {(friends == null)? "No friends" : 
                                friends.map((data,index) =>{
                                return (
                                    <ListGroup.Item key={index} className="">
                                {data.name}</ListGroup.Item>       
                                )
                            })
                            }
                         </Card.Body>
                     </Card>
    </div>      
}

export default UserFriends;