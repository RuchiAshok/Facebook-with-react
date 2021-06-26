import React,{useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {Button,FormControl,InputGroup,ListGroup,Card} from 'react-bootstrap';
import {Switch,Route} from "react-router-dom";
import Headerpanel from '../Controls/HeaderPanel';
import '../../css/scrollbar.css';
import '../../css/chat.css';
import ChatWindow  from './ChatWindow';
import Onlineusers from './Onlineusers';


const client = new W3CWebSocket('ws://127.0.0.1:8000');
//const client = new W3CWebSocket('ws://127.0.0.1:5000');

function Chat(){
    let [online, setOnline] = useState('');         // is user is online or not
    let [userLoggedIn, setLoginUser] = useState('');        //name of user who is online
    let [activeChats,setactiveChats] = useState([]);
    let [activeChatOverflow, setactiveUserOverflow] = useState([]);
    let [usersOnline, setUsersOnline] = useState([]);  //list of online users
    let [inputMessage,setinputMessage] = useState('');

    let [chatUsers, setChatUsers] = useState({});  //list of online users

    client.onopen = () => {
        console.log('WebSocket Client Connected');
    };

    //Sending WeSocket server information that user has logged in
    function login(){
        setOnline(true);
        client.send(JSON.stringify({
            type: "myInfo",
            user: userLoggedIn
          }));
    }

    // setting active chats from online list and close button from chat window
    function activeChatWindows(data){
        if(data.closeTag ==='Y'){
           
            let activeChatList =[];
            if(activeChatOverflow.length >0 ){
                let removedItem = activeChatOverflow.splice(0, 1);
                activeChatList = activeChats.filter((element) =>element.msgTo !==data.msgTo);
                activeChats =activeChatList;
                activeChatList = [...activeChats,{msgTo: removedItem[0].msgTo,msgFrom:userLoggedIn,chatMsgs:removedItem[0].chatMsgs}];
                setactiveChats(activeChatList);
                setactiveUserOverflow(activeChatOverflow);
            }else{
                activeChatList = (activeChats.filter((element) =>element.msgTo !==data.msgTo));
                 setactiveChats(activeChatList);
            }



        }

        if(data.closeTag ==='S'){
            let removedItem = activeChats.splice(0, 1);
            let data2 = activeChatOverflow.splice(data.index, 1);
            let data1 = [...activeChats,{msgTo: data2[0].msgTo,msgFrom:userLoggedIn,chatMsgs:data2[0].chatMsgs}];
            setactiveChats(data1);
            data1 = [...activeChatOverflow,{msgTo: removedItem[0].msgTo,msgFrom:userLoggedIn,chatWindowNo:"chatWindow",chatMsgs:removedItem[0].chatMsgs}];
            setactiveUserOverflow(data1);
            //NEED TO CHEK IF IN ONLINE USERS, NEED TO ADD THE MESSAGE
        }

        if(data.closeTag ==='N'){
            let activeChatList =[];
           // activeChats[data.msgTo] = [msg]
            let count = (activeChats.filter((element) =>element.msgTo ===data.msgTo));
            if(count.length ===0){       
                console.log("Chat users :",chatUsers);               
                 activeChatList = [...activeChats,{msgTo: data.msgTo,msgFrom:userLoggedIn,chatMsgs:[]}];
                 for(var i=0;i<activeChatList.length;i++){
                     if(activeChatList[i].msgTo===data.msgTo){
                         if(chatUsers[data.msgTo])
                         {
                            activeChatList[i].chatMsgs =chatUsers[data.msgTo];
                         }                       
                     }
                }

                if(activeChatList.length>3){
                    let removedItem = activeChatList.splice(0, 1);
                    let overflowData = [...activeChatOverflow,{msgTo: removedItem[0].msgTo,msgFrom:userLoggedIn,chatMsgs:removedItem[0].chatMsgs}]
                    setactiveUserOverflow(overflowData);
                    console.log("Close Window : ActiveuserOverflow :",overflowData);
                }
            }
            console.log("Close Window : Activechats :",activeChatList);
            setactiveChats(activeChatList);
        }
 
    }

    function sendChatMsg(data){ 
            client.send(JSON.stringify({
                type:"message_two",
                msgTo: data.activeChat.msgTo,
                msgBody: data.inpMsg,
                msgFrom:data.activeChat.msgFrom
            }));
            let msg = {
                type: "sent",
                body: data.inpMsg,
                from:data.activeChat.msgFrom,
                to:data.activeChat.msgTo
            }

            if(chatUsers[data.activeChat.msgTo]){             
            // chatUsers[data.msgto].push(msg)
                chatUsers[data.activeChat.msgTo] = [...chatUsers[data.activeChat.msgTo], msg]
            }else{
                chatUsers[data.activeChat.msgTo] = [msg]
            }
            setChatUsers(chatUsers);

            let activeChatList =[];
            activeChatList = [...activeChats];
            for( var i=0;i<activeChatList.length;i++){
                if(activeChatList[i].msgTo===data.activeChat.msgTo){
                    if(chatUsers[data.msgTo])
                    {
                       activeChatList[i].chatMsgs =chatUsers[data.msgTo];
                    } 
                    else{
                        activeChatList[i].chatMsgs.push(msg);
                    }                      
                }
            }

            activeChats = activeChatList;
            console.log("Send Function: active chats ",activeChats);
            console.log('Send Function: chatusers ',chatUsers);
            setinputMessage(null);
            setactiveChats(activeChatList);
    }

 
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
            case("message_two"):{
                let activeChatList =[];
                let msg = {
                    type: "received",
                    body: dataFromServer.msgBody,
                    from:dataFromServer.msgFrom,
                    to:dataFromServer.msgTo
                }
                if(chatUsers[dataFromServer.msgFrom]){                    
                 //   chatUsers[dataFromServer.msgFrom].push(msg) ;     
                   chatUsers[dataFromServer.msgFrom] = [...chatUsers[dataFromServer.msgFrom], msg]
                }else{
                    chatUsers[dataFromServer.msgFrom] = [msg]
                }
                setChatUsers(chatUsers);

                activeChatList = [...activeChats];
                 for(var i=0;i<activeChatList.length;i++){
                     if(activeChatList[i].msgTo===dataFromServer.msgFrom){
                        activeChatList[i].chatMsgs =chatUsers[dataFromServer.msgFrom];
                     }
                 }
                 activeChats = activeChatList;
                setactiveChats(activeChatList);


                let activeOverflowList = [...activeChatOverflow];
                 for(var i=0;i<activeOverflowList.length;i++){
                     if(activeOverflowList[i].msgTo===dataFromServer.msgFrom){
                        activeOverflowList[i].chatMsgs =chatUsers[dataFromServer.msgFrom];
                     }
                 }
                 activeChatOverflow = activeOverflowList;
               // setactiveChats(activeOverflowList);

                console.log("On Client Message: activeChatOverflow: ",activeChatOverflow);
                console.log("On Client Message: ChatUsers: ",chatUsers);
                console.log("On Client Message: activechatlist",activeChatList);
                break;
            }
            default:
                break;
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
                        <Card className="onlineUserscard">
                            <Card.Header className="onlineUsersCardHeader">Friends Online</Card.Header>
                            <ListGroup variant="flush" className="scrollbar onlineListGroup">
                                    {
                                        usersOnline.map((data,index) =>{
                                            return <Onlineusers key={index} index={index} activeChatWindows={activeChatWindows} usersOnline={data} />        
                                        })
                                    }
                            </ListGroup>
                        </Card>
                        :null}
                        {
                            activeChats.map((chatData,index) =>{                            
                                // return <div key={index} className={"chatWindowDiv " +chatData.chatWindowNo+index}>   
                                return <div key={index} className={"chatWindowDiv chatWindow" +index}>                                                                     
                                <ChatWindow key={index} index={index} inputMessage={inputMessage} sendChatMsg={sendChatMsg} activeChatWindows={activeChatWindows} activeChat={chatData}/>           
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