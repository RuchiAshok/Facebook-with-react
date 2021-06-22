import React,{useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {Button,FormControl,InputGroup,ListGroup,Card} from 'react-bootstrap';
import {Switch,Route} from "react-router-dom";
import Headerpanel from '../Controls/HeaderPanel';
import '../../css/scrollbar.css';
import '../../css/chat.css';
import ChatWindow  from './ChatWindow';
import Onlineusers from './Onlineusers';


// const client = new W3CWebSocket('ws://127.0.0.1:5000');
const client = new W3CWebSocket('ws://127.0.0.1:8000');

function Chat(){
    let [online, setOnline] = useState('');         // is user is online or not
    let [userLoggedIn, setLoginUser] = useState('');        //name of user who is online
    let [activeChats,setactiveChats] = useState([]);
    let [inactiveChats,setinactiveChats] = useState([]);
    let [activeChatOverflow, setactiveUserOverflow] = useState([]);
    let [usersOnline, setUsersOnline] = useState([]);  //list of online users


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
            for(var i=0;i<inactiveChats.length;i++){
                if(inactiveChats[i].msgFrom ===data.msgTo){
                    inactiveChats[i].chatMsgs =data.chatMsgs;
                }
                if(inactiveChats[i].msgTo ===data.msgTo){
                    inactiveChats[i].chatMsgs =data.chatMsgs;
                }
            }
            if(inactiveChats.length ===0){
               let newData = [...inactiveChats, {
                    msgTo: data.msgTo,
                    msgFrom: data.msgFrom,
                    chatMsgs:data.chatMsgs
                }];
                inactiveChats = newData;
            }
            
            setinactiveChats(inactiveChats);
      
            let activeChatList = [];     
            if(activeChatOverflow.length >0 ){
                let removedItem = activeChatOverflow.splice(0, 1);
                activeChatList = activeChats.filter((element) =>element.msgTo !==data.msgTo);
                activeChats =activeChatList; 
                activeChatList = [...activeChats,{msgTo: removedItem[0].msgTo,chatWindowNo:"chatWindow",msgFrom:userLoggedIn,chatMsgs:[]}];
                setactiveChats(activeChatList);
                setactiveUserOverflow(activeChatOverflow);
            }else{
                activeChatList = activeChats.filter((element) =>element.msgTo !==data.msgTo);
               activeChats = activeChatList;
               setactiveChats(activeChatList);
            }
        }

        
        if(data.closeTag ==='S'){
            let removedItem = activeChats.splice(0, 1);
            let data2 = activeChatOverflow.splice(data.index, 1);
            let data1 = [...activeChats,{msgTo: data2[0].msgTo,chatWindowNo:"chatWindow",msgFrom:userLoggedIn,chatMsgs:[]}];
            setactiveChats(data1);
            data1 = [...activeChatOverflow,{msgTo: removedItem[0].msgTo,msgFrom:userLoggedIn,chatWindowNo:"chatWindow",chatMsgs:[]}];
            setactiveUserOverflow(data1);
        }

        if(data.closeTag ==='N'){
            let activeChatList =[];
            let count = (activeChats.filter((element) =>element.msgTo ===data.msgTo));
            if(count.length ===0){        
                 activeChatList = [...activeChats,{msgTo: data.msgTo,chatWindowNo:"chatWindow",msgFrom:userLoggedIn,chatMsgs:[]}];
                
                if(activeChatList.length>3){
                    let removedItem = activeChatList.splice(0, 1);
                    let data1 = [...activeChatOverflow,{msgTo: removedItem[0].msgTo,msgFrom:userLoggedIn,chatWindowNo:"chatWindow",chatMsgs:[]}]
                     activeChatOverflow = data1;
                    setactiveUserOverflow(data1);
                }
            }
       

            //check active chat msg to is present in inactive chat msg from, copy the messages
            for( i=0;i<activeChatList.length;i++){
                for (var j=0;j<inactiveChats.length;j++){
                    if(activeChatList[i].msgTo === inactiveChats[j].msgFrom){
                     activeChatList[i].chatMsgs = inactiveChats[j].chatMsgs;
                    }
                    if(activeChatList[i].msgTo === inactiveChats[j].msgTo){
                        activeChatList[i].chatMsgs = inactiveChats[j].chatMsgs;
                    }
                }
            }
             setactiveChats(activeChatList);
        }
 
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
            case("message_2"):{
                console.log("Message received from server: page1");
                console.log('on msg1',dataFromServer);
                let activeChatList =[];
                let position = null;
                
                
                for (var i = 0; i < inactiveChats.length; i++) {
                    if (inactiveChats[i].msgFrom === dataFromServer.msgFrom) {
                            position = i;
                    }
                }

                if (position != null) {
                        let newObj ={
                            msgTo: dataFromServer.msgTo,msgFrom: dataFromServer.msgFrom,messages:dataFromServer.msg
                        }
                        inactiveChats[position].chatMsgs.push(newObj);
                        position = null;
                }else{
                        activeChatList = [...inactiveChats, {
                            msgTo: dataFromServer.msgTo,
                            msgFrom: dataFromServer.msgFrom,
                            chatMsgs:[{msgTo: dataFromServer.msgTo,msgFrom: dataFromServer.msgFrom,messages:dataFromServer.msg}]
                        }];
                        inactiveChats = activeChatList;
                }

                console.log("inactiveChats",inactiveChats);
                setinactiveChats(inactiveChats);
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

                        {/* <Image className="msgicon" src={chat} onClick={msgWindowPopup} alt="messaging"/> */}
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