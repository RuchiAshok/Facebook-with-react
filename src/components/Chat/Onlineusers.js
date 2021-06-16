import React,{} from 'react';
import {ListGroup} from 'react-bootstrap';
import '../../css/scrollbar.css';
import '../../css/chat.css';


function Onlineusers(data){
    let {usersOnline,activeChatWindows,index} =data;
    return  <ListGroup.Item key={index} className="onlineUsersListItems" 
            onClick={() => activeChatWindows({msgTo:usersOnline.username,closeTag:'N'})}>{usersOnline.username}</ListGroup.Item>        
}

export default Onlineusers;