import React,{useState} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FormControl,Navbar,Nav,Form,Button} from 'react-bootstrap';
import user from '../../images/user.png';
import '../../css/navBar.css';
import HUserDropDown from './HUserDropDown';


function HeaderPanel(data){
    const [showUD, setShowUD] = useState(false);

    const handleUDD =() =>{
        setShowUD(!showUD);
    } 

        return <div style={{position: "fixed",
            top: 0,
            /* height: 40px; */
            width: "100%",
            zIndex: "100"}}> 
            <Navbar bg="primary" variant="dark">
                    <Form inline style ={{width:"85%"}}>
                        <FormControl style ={{width:"40%"}} type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                        {/* <Nav.Link href="/home"><Link to="/home" style={{color:"rgba(255,255,255,.5)"}}>Home</Link></Nav.Link> */}
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#features">Post</Nav.Link>
                        <Nav.Link href="#pricing"> Notification</Nav.Link>  
                        <Nav.Link href="#pricing" style={{paddingTop:"0px", paddingBottom:"0px"}}>
                            
                        <img style ={{maxWidth:"40px", padding:"0px", pointerEvents:(showUD)?"none":"all"}} onClick={handleUDD} src={user} alt="user" />
                        </Nav.Link>  
                    </Nav>
        </Navbar>
        <div className="profileDropDown">
        { showUD ? <HUserDropDown closeit={handleUDD} /> : null }
        </div>
        </div>
}
export default HeaderPanel;