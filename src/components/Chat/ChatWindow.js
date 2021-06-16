import React,{useState } from 'react';
import {Button,Card,FormControl,InputGroup,Image,Row,Col} from 'react-bootstrap';
import '../../css/scrollbar.css';
import '../../css/chat.css';
import closebtn from '../../images/delete.png';



function ChatWindow(data){
    //activeChats.msgFrom : Logged in user ; activeChats.msgTo : Sent To

    let {activeChats,activeChatWindows,client} =data;
    let [inpMsg, setInpMsg] = useState('');
    let [chatMsgs, setchatMessages] = useState([]);   //Chat messages displayed in window


    function sendChatMsg(){    
           let messageList = [...chatMsgs,{msgTo: activeChats.msgTo,msgFrom:activeChats.msgFrom,message: inpMsg}];
           chatMsgs = messageList;    
           setchatMessages(messageList);

            client.send(JSON.stringify({
                type: "message_2",
                msgTo:activeChats.msgTo,
                msg: inpMsg,
                msgFrom:activeChats.msgFrom,
                user: activeChats.msgFrom
              }));

            setInpMsg("");   
    }


    client.onmessage = (message) => {
        let dataFromServer = JSON.parse(message.data);
        switch(dataFromServer.type){           
            case("message_2"):{
                console.log("Message received from server");
                console.log(dataFromServer);
                let ab = (dataFromServer.msgFrom ===activeChats.msgTo);
                console.log("Condition is :"+ ab);
                console.log(activeChats.msgTo);
                    if(dataFromServer.msgFrom ===activeChats.msgTo){
                        
                        let newMessageList = [...chatMsgs,{msgTo: dataFromServer.msgTo,msgFrom:dataFromServer.msgFrom,message: dataFromServer.msg}];        
                        setchatMessages(newMessageList);
                    }
                break;
            }
        }
     }
    


    

    return<div>
    <Card className="boxShadow">
            <Card.Header className="chatWindowCardHeader">
                <Row>
                    <Col>{activeChats.msgTo}</Col>
                    <Col style={{padding:"0px"}}>
                    <Image className="msgCloseBtn" src={closebtn} 
                    onClick={() => activeChatWindows({msgTo:activeChats.msgTo,closeTag:'Y'})} alt="close"/>
                    </Col>
                </Row>
            
           
            </Card.Header>
            <Card.Body style={{paddingTop:"0px",paddingRight:"5px",paddingLeft:"5px",paddingBottom:"1px"}}>                  
                <div className="scrollbar chatWindowCardBody">               
                    {
                        chatMsgs.map((data,index) =>{
                            return (                 
                            <div className="chatWindowMsgDiv" key={index} style={{background: data.msgFrom === activeChats.msgFrom ?"#dcf8c6": "#F2F3F5",
                                marginLeft: data.msgFrom === activeChats.msgFrom ? '107px':'0px',                                               
                                }}>
                                {data.msgFrom === activeChats.msgFrom ? <span style={{}}> You </span>: data.msgFrom }
                                <span style={{paddingLeft:"5px",color:"blue"}}> 
                                    {data.message}
                                </span>
                            </div>   
                            )       
                        })
                    }   
            
                </div>
                
            </Card.Body>
            <Card.Footer className="text-muted chatWindowCardFooter">
            <InputGroup style ={{}}>
                    <FormControl value={inpMsg} onChange={event => setInpMsg(event.target.value)} placeholder="Write a message" aria-describedby="basic-addon2" />
                    <InputGroup.Append>
                    <Button variant="primary" onClick={sendChatMsg}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Card.Footer>
    </Card>            


    </div>
}

export default ChatWindow;