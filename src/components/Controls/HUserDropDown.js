import React,{} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Card} from 'react-bootstrap';
import {Link} from "react-router-dom";
import '../../css/navBar.css';
import profile from '../../images/woman_pic.png';
import setting from '../../images/settings.png';
import logout from '../../images/exit.png';
import onClickOutside from "react-onclickoutside";
import ls from 'local-storage';


function HUserDD(data){
     let  {closeit} = data;
    HUserDD.handleClickOutside = () =>
    {   
        closeit();
    } 

    function userLogout(){
        

        window.location.href = "http://localhost:3000/";

    }
        return <div>
            {/* { isOpen ?  */}
        <Card style={{width:"360px"}} className="boxShadow" >
        <Card.Header>            
            <Row>
                <Col xs={2} md={2} lg={2} style ={{}}>
                <img style ={{maxWidth:"40px"}} src={profile} alt="profile" />
                </Col>
                <Col xs={10} md={10} lg={10} style ={{paddingLeft:"0px"}}>
                    <span  style ={{fontWeight:"600",fontSize:"20px"}}>
                    Puja Gupta
                    </span>
                </Col>
            </Row>                                              
        </Card.Header>
        <Card.Body>
            <div>
              <img style ={{maxWidth:"40px", padding:"0px"}} src={setting} alt="setting" />
              <span style ={{fontWeight:"400",fontSize:"17px",paddingLeft:"18px",color:"black"}}>Settings & Privacy</span>
            </div>
              <hr />
            <div>
            {/* <Link to="/"> */}
            <div style={{cursor:"pointer"}}>
                <img style ={{maxWidth:"40px", padding:"0px"}} src={logout} alt="logout" />
                <span style ={{fontWeight:"400",fontSize:"17px",paddingLeft:"18px",color:"black"}} onClick={userLogout}>Logout</span>
            </div>
            {/* </Link> */}
            </div>
        </Card.Body>
    </Card>
    {/* : null } */}
    </div>
};

const clickOutsideConfig = {
    handleClickOutside: () => HUserDD.handleClickOutside,

};

export default onClickOutside(HUserDD, clickOutsideConfig);
//export default HUserDD;