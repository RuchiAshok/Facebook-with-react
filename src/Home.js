import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, {useState,useEffect} from 'react';
import {Switch,Route} from "react-router-dom";
import {Container,Row,Col} from 'react-bootstrap';
import NewPost from './components/Posts/NewPost';
import Headerpanel from './components/Controls/HeaderPanel';
import SideNav from './components/Controls/SideNav';
import Post from './components/Posts/Post';
import { connect } from "react-redux";
import  {getPosts} from './stores/actions/posts';

function Home(props){
   // console.log("Home Page: ",props);
    useEffect(() => {
        props.getPosts();
    }, []);

    return(
        <Switch>                
        <Route path="/home"> 
        <Headerpanel />      
            <div style ={{padding:"2px",paddingTop:"64px"}}>      
                <Container style ={{maxWidth:"100%"}}>
                    <Row style ={{marginTop:"2px"}}>
                        <Col xs={6} md={2} style ={{backgroundColor:"#f0f2f5"}}> <SideNav /> </Col>
                        <Col xs={12} md={10} style ={{paddingRight:"0px"}}>
                            <NewPost />                                                  
                            {props.posts?
                                props.posts.map((postData,index) =>{
                                    return  <Post key={index} index={index}  postData={postData}/>           
                                                
                                })
                            :null}
                        </Col>              
                    </Row>
                </Container>      
            </div>
        </Route>
        </Switch>
    );
}

function mapStateToProps(state){
    return {
         state,
         posts:state.PostsReducer.posts,
         userDetails:state.LoginReducer.login 
    }
  }

  export default connect(mapStateToProps, { getPosts })(Home);
//export default Home;