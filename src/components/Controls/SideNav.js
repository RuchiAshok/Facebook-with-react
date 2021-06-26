import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Nav} from 'react-bootstrap';
import user from '../../images/user.png';
import post from '../../images/post.png';
import gallery from '../../images/gallery.png';
import chat from '../../images/speak.png';
import notification from '../../images/notification.png';
import settings from '../../images/settings_1.png';
import logout from '../../images/exit.png';

function SideNav(data){
        return  <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/userProfile">
                    <img style ={{maxWidth:"40px", padding:"0px"}} src={user} alt="user" />
                    <span style ={{paddingLeft:"5px",fontWeight:"500"}}>Puja Gupta</span>
                    </Nav.Link>
                    <Nav.Link eventKey="link-1">
                    <img style ={{maxWidth:"40px", padding:"0px"}} src={post} alt="post" />
                    <span style ={{paddingLeft:"5px",fontWeight:"500"}}>My Posts</span>
                    </Nav.Link>                   
                    <Nav.Link eventKey="link-2" href="/chat">
                    <img style ={{maxWidth:"40px", padding:"0px"}} src={chat} alt="chat" />
                    <span style ={{paddingLeft:"5px",fontWeight:"500"}}>Chat</span>
                    </Nav.Link>
                    <Nav.Link eventKey="link-2" href="/chat1">
                    <img style ={{maxWidth:"40px", padding:"0px"}} src={gallery} alt="gallery" />
                    <span style ={{paddingLeft:"5px",fontWeight:"500"}}>Gallery</span>
                    </Nav.Link>
                    <Nav.Link eventKey="link-2"href="/redux" >
                    <img style ={{maxWidth:"40px", padding:"0px"}} src={notification} alt="notification" />
                    <span style ={{paddingLeft:"5px",fontWeight:"500"}}>Notifications</span>
                    </Nav.Link>
                    <Nav.Link eventKey="link-2">
                    <img style ={{maxWidth:"40px", padding:"0px"}} src={settings} alt="settings" />
                    <span style ={{paddingLeft:"5px",fontWeight:"500"}}>Settings</span>
                    </Nav.Link>
                    {/* <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link> */}
                     <Nav.Link eventKey="link-2">
                    <img style ={{maxWidth:"40px", padding:"0px"}} src={logout} alt="logout" />
                    <span style ={{paddingLeft:"5px",fontWeight:"500"}}>Logout</span>
                    </Nav.Link>
                </Nav>
}
export default SideNav;