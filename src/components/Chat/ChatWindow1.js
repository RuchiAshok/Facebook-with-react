import React,{useState } from 'react';
import {Button,Card,FormControl,InputGroup,Image,Row,Col} from 'react-bootstrap';
import '../../css/scrollbar.css';
import '../../css/chat.css';
import closebtn from '../../images/delete.png';

function ChatWindow1(data){
    let {activeChat,activeChatWindows,sendChatMsg,inputMessage} =data;
  //  console.log('Chat Messages, ',activeChat.chatMsgs);
    let [inpMsg, setInpMsg] = useState('');

   

    
    return<div>
    <Card className="boxShadow">
            <Card.Header className="chatWindowCardHeader">
                <Row>
                    <Col>{activeChat.msgTo}</Col>
                    <Col style={{padding:"0px"}}>
                    <Image className="msgCloseBtn" src={closebtn} 
                    onClick={() => activeChatWindows({msgTo:activeChat.msgTo,closeTag:'Y',msgFrom: activeChat.msgFrom})} alt="close"/>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body style={{paddingTop:"0px",paddingRight:"5px",paddingLeft:"5px",paddingBottom:"1px"}}>                  
                <div className="scrollbar chatWindowCardBody">               
                    {
                        activeChat.chatMsgs.map((data,index) =>{
                            return (                 
                            <div className="chatWindowMsgDiv" key={index} style={{background: data.type === "sent" ?"#dcf8c6": "#F2F3F5",
                                marginLeft: data.type === "sent" ? '107px':'0px',                                               
                                }}>
                                {data.type === "sent" ? <span> You </span>: data.from }
                                <span style={{paddingLeft:"5px",color:"blue"}}> 
                                   : {data.body}
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
                    {/* <Button variant="primary"onClick={() => sendChatMsg({activeChat:activeChat,inpMsg:inpMsg})}>Send</Button> */}
                    <Button variant="primary"onClick={()=>{sendChatMsg({activeChat:activeChat,inpMsg:inpMsg});setInpMsg('')}}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Card.Footer>
    </Card>            


    </div>
}

export default ChatWindow1;