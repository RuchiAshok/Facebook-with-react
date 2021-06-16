import React,{useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {Button,FormControl,InputGroup,Image,ListGroup} from 'react-bootstrap';
import {Switch,Route} from "react-router-dom";
import Headerpanel from '../Controls/HeaderPanel';
import '../../css/scrollbar.css';
import '../../css/chat.css';
import chat from '../../images/chat.png';
import ChatWindow  from './ChatWindow';
import Onlineusers from './Onlineusers';

const client = new W3CWebSocket('ws://127.0.0.1:8000');

function Chat(){
    let [online, setOnline] = useState('');         // is user is online or not
    let [userLoggedIn, setLoginUser] = useState('');        //name of user who is online
    let [msgPopup, setmsgPopup] = useState(false);        //Chat Window - currently not used
    let [activeChats,setactiveChats] = useState([]);
    let [activeChatOverflow, setactiveUserOverflow] = useState([]);
    let [chatMsgs1, setchatMessages1] = useState([]);   //Chat messages displayed in window

    client.onopen = () => {
        console.log('WebSocket Client Connected');
    };

    //Not used currently -- on click of chat image, need to create a chat for new user
    function msgWindowPopup(data){
        setmsgPopup(!msgPopup);
    }

    //Sending WeSocket server information that user has logged in
    function login(){
        console.log('Logged in successfully: '+ userLoggedIn );
        setOnline(true);

        client.send(JSON.stringify({
            type: "myInfo",
            user: userLoggedIn
          }));
    }

    // setting active chats from online list and close button from chat window
    function activeChatWindows(data){
        if(data.closeTag ==='Y'){
            let activeChatList = [];     
            if(activeChatOverflow.length >0 ){
                let removedItem = activeChatOverflow.splice(0, 1);
                activeChatList = activeChats.filter((element) =>element.msgTo !==data.msgTo);
                activeChats =activeChatList; 
                activeChatList = [...activeChats,{msgTo: removedItem[0].msgTo,chatWindowNo:"chatWindow",msgFrom:userLoggedIn,message:[]}];
                setactiveChats(activeChatList);
                setactiveUserOverflow(activeChatOverflow);
            }else{
                activeChatList = activeChats.filter((element) =>element.msgTo !==data.msgTo);
                activeChats = activeChatList;
                setactiveChats(activeChatList);
            }
        }

        if(data.closeTag ==='S'){
            console.log(data);
            let removedItem = activeChats.splice(0, 1);
            let data2 = activeChatOverflow.splice(data.index, 1);
            let data1 = [...activeChats,{msgTo: data2[0].msgTo,chatWindowNo:"chatWindow",msgFrom:userLoggedIn,message:[]}];
            setactiveChats(data1);
            data1 = [...activeChatOverflow,{msgTo: removedItem[0].msgTo,msgFrom:userLoggedIn,chatWindowNo:"chatWindow",message:[]}];
            setactiveUserOverflow(data1);
        }

        if(data.closeTag ==='N'){
            let count = (activeChats.filter((element) =>element.msgTo ===data.msgTo));
            if(count.length ===0){        
                let activeChatList = [...activeChats,{msgTo: data.msgTo,chatWindowNo:"chatWindow",msgFrom:userLoggedIn,message:[]}];
                if(activeChatList.length>3){
                    let removedItem = activeChatList.splice(0, 1);
                    let data1 = [...activeChatOverflow,{msgTo: removedItem[0].msgTo,msgFrom:userLoggedIn,chatWindowNo:"chatWindow",message:[]}]
                     activeChatOverflow = data1;
                    setactiveUserOverflow(data1);
                    setactiveChats(activeChatList);
                }else{
                    setactiveChats(activeChatList);
                }     
            }
        }
 
    }

 
    client.onmessage = (message) => {
        let dataFromServer = JSON.parse(message.data);
        console.log("Message received from server1");   
        
        if (dataFromServer.type === "message") {     
     }



    };    

    return(
        <Switch>
          <Route path="/chat">   
            <div style ={{background:"#F2F3F5",padding:"2px",paddingTop:"62px"}}>
                <Headerpanel /> 
                <div style={{paddingTop:"2px",height:"687px"}}>

                    
                    <div>
                        <InputGroup style ={{width:"390px",marginLeft:"35%",borderRadius:"1rem",marginBottom:"15px"}} className="boxShadow">
                            <FormControl  style ={{height:"50px"}} value={userLoggedIn} onChange={event => setLoginUser(event.target.value)} placeholder="Enter UserName" aria-describedby="basic-addon2" />
                            <InputGroup.Append>
                            <Button variant="primary" onClick={login}>Login</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                                    
                    <div>

                        {online? 
                        <Onlineusers userLoggedIn={userLoggedIn} activeChatWindows={activeChatWindows} client={client}/>
                        :null}

                        <Image className="msgicon" src={chat} onClick={msgWindowPopup} alt="messaging"/>
                        {
                            activeChats.map((chatData,index) =>{                            
                                return <div key={index} index={index}  className={"chatWindowDiv " +chatData.chatWindowNo+index}>                                                                     
                                <ChatWindow key={index} index={index}  activeChatWindows={activeChatWindows} client={client} activeChats={chatData}/>           
                                </div>          
                            })
                        }

                       
                        <div>

                            <ListGroup variant="flush" className="scrollbar activeUserOverflow">
                            {
                                activeChatOverflow.map((data,index) =>{
                                  return  <ListGroup.Item key={index} className="onlineUsersListItems activeUserList"
                                  onClick={() => activeChatWindows({msgTo:data.msgTo,closeTag:'S',index:index})} >{data.msgTo}</ListGroup.Item>       
                                })
                            }

                            </ListGroup>
                        </div>
                        


                    
                    </div>

                   

                </div>  
           
            </div>
        </Route>
        </Switch>
    );
}

export default Chat;