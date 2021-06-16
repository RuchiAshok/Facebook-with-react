import React,{useState } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {Button,Card,FormControl,InputGroup} from 'react-bootstrap';
import {Switch,Route} from "react-router-dom";
import Headerpanel from '../Controls/HeaderPanel';
import '../../css/scrollbar.css';
import '../../css/chat.css';
const client = new W3CWebSocket('ws://127.0.0.1:8000');

function Chat(){
    // let [chatMsgs, setMessages] = useState([{ userName:"",message:""}]);
    let [chatMsgs, setMessages] = useState([]);
    
    let [inpMsg, setInpMsg] = useState('');
    let [userLoggedIn, setLoginUser] = useState('');
    let [uLog, setuLog] = useState(false);

    client.onopen = () => {   
        console.log('WebSocket Client Connected');
    };
 

    client.onmessage = (message) => {
        console.log('got reply! ', dataFromServer);
        const dataFromServer = JSON.parse(message.data);

        // switch(message.type){
        //     case "message" :
        //       let msgTo = message.to;
        //       let msgBody = message.body;
        //       let msgFrom = userId;
        //     //  clients[key].sendUTF(message.utf8Data);
        //       clients[msgTo].send(JSON.stringify({
        //         type: "message",
        //         body: msgBody,
        //         from: msgFrom
        //       }));
        //       break;      
        //   }

        
        if (dataFromServer.type === "message") {
            let newMessageList = [...chatMsgs,{userName: dataFromServer.user,message: dataFromServer.msg}];  
        if(dataFromServer.user !== userLoggedIn){
            let newMessageList = [...chatMsgs,{userName: dataFromServer.user,message: dataFromServer.msg}];           
            setMessages(newMessageList);
        }
     }
    };

    function login(){
        console.log('Logged in successfully: '+ userLoggedIn );
        setuLog(true);
        client.send(JSON.stringify({
            type: "myInfo",
            user: userLoggedIn
          }));
    }

    function sendMsg(){
        if(uLog){
           let messageList = [...chatMsgs,{userName: userLoggedIn,message: inpMsg}];
          chatMsgs = messageList; 
           console.log(chatMsgs);       
          setMessages(messageList);
            

            client.send(JSON.stringify({
              type: "message",
              msg: inpMsg,
              user: userLoggedIn
            }));
            setInpMsg("");
        }
      }
     

     
 

    return(
        <Switch>
          <Route path="/chat">   
            <div style ={{background:"#F2F3F5",padding:"2px",paddingTop:"62px"}}>
                <Headerpanel /> 
                <div style={{paddingTop:"10px"}}>

                <div style={{}}>
                    <div>
                        <InputGroup style ={{width:"390px",marginLeft:"35%",borderRadius:"1rem",marginBottom:"15px"}} className="boxShadow">
                            <FormControl  style ={{height:"50px"}} value={userLoggedIn} onChange={event => setLoginUser(event.target.value)} placeholder="Enter UserName" aria-describedby="basic-addon2" />
                            <InputGroup.Append>
                            <Button variant="primary" onClick={login}>Login</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </div>
                
                    {uLog? 

                    <Card style ={{width:"390px",marginLeft:"35%",borderRadius:"1rem", height:"606px"}} className="boxShadow">
                                    <Card.Header style ={{paddingTop:"3px",paddingBottom:"3px",fontWeight:"600", fontSize:"25px"}}>
                                    Chat Box
                                    </Card.Header>
                                    <Card.Body style={{paddingTop:"0px"}}>                  
                                        <Card.Text className="scrollbar"
                                        style={{fontWeight:"400",height:"496px",fontSize:"16px"}}> 
                                        {
                                            chatMsgs.map((data,index) =>{
                                                return ( 
                                                
                                                <div key={index} style={{background: data.userName === userLoggedIn ?"#dcf8c6": "#F2F3F5",
                                                 marginLeft: data.userName === userLoggedIn ? '120px':'0px',                                               
                                                 marginTop:"10px", width:"65%",borderRadius:"0.4rem",minHeight:"40px",padding:"10px"}}>
                                                   {data.userName === userLoggedIn ? <span style={{}}> You </span>: data.userName }
                                                    <span style={{paddingLeft:"5px",color:"blue"}}> 
                                                        {data.message}
                                                    </span>
                                                </div>   
                                                )       
                                            })
                                        }
                                        </Card.Text>
                                       
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                    <InputGroup style ={{}}>
                                            <FormControl value={inpMsg} onChange={event => setInpMsg(event.target.value)} placeholder="Write a message" aria-describedby="basic-addon2" />
                                            <InputGroup.Append>
                                            <Button variant="primary" onClick={sendMsg}>Send</Button>
                                            </InputGroup.Append>
                                        </InputGroup>
                                    </Card.Footer>
                    </Card>            
               
                    :null}
                </div>
               </div>  
            </div>
        </Route>
        </Switch>
    );
}

export default Chat;