import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {} from 'react';
import {Switch,Route} from "react-router-dom";
//import {Container,Row,Col,Nav,Button,Card,ListGroup,InputGroup,FormControl} from 'react-bootstrap';
import Headerpanel from '../Controls/HeaderPanel';
import UserComData from '../User/UserComData';
import '../../index.css';


function UserProfile(){
    return(
        <Switch>
          <Route path="/userProfile">   
        <div style ={{padding:"2px",paddingTop:"58px"}}>
            <Headerpanel /> 
            <UserComData />            
        </div>
        </Route>
        </Switch>
    );
}

export default UserProfile;