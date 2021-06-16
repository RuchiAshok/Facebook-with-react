import React,{useState} from 'react';
import {Card,ListGroup} from 'react-bootstrap';
import '../../css/scrollbar.css';
import '../../css/chat.css';


function Onlineusers(data){
    let {client,activeChatWindows,userLoggedIn} =data;
    let [usersOnline, setUsersOnline] = useState([]);  //list of online users


    client.onmessage = (message) => {
        let dataFromServer = JSON.parse(message.data);
        switch(dataFromServer.type){
            case("online_users"):{
                let onlineusers = dataFromServer.user;
                let newOnlineList = Object.values(onlineusers);
                let newList = newOnlineList.filter((element,index_no) =>element.username !==userLoggedIn);
                setUsersOnline(newList);
                break;
            }          
        }
    };    


  
    return<Card className="onlineUserscard">
                <Card.Header className="onlineUsersCardHeader">Friends Online</Card.Header>
                <ListGroup variant="flush" className="scrollbar onlineListGroup">

                        {
                            usersOnline.map((data,index) =>{
                                return <ListGroup.Item key={index} className="onlineUsersListItems" 
                                onClick={() => activeChatWindows({msgTo:data.username,closeTag:'N'})}>{data.username}</ListGroup.Item>        
                            })
                        }

                </ListGroup>
            </Card>

}

export default Onlineusers;