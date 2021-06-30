import ls from 'local-storage';

const initialState = {
    login: []
};

export default function(state = initialState, action) {
    switch (action.type) {   
      case "USER_LOGIN_SUCCESS": {
        const data = action.payload;
        if(data != null){
         //   console.log("Login Reducers",data);
             ls.set('JWTToken', data.loginResponse.jwtToken);
        } 
        // let obj={
        //     jwtToken:data.loginResponse.jwtToken,
        //     success_message:data.loginResponse.message,
        //     error_message:data.loginResponse.error_message
        // }
        if(data.loginResponse.error_message === null || data.loginResponse.error_message ===undefined){
            window.location.href = "http://localhost:3000/home";
        }
        break;
      }

      case "USER_LOGIN_FAILED": {
        const data = action.payload;
        if(data != null){
            console.log("Login Failed Reducers",data);
        } 
        break;
      }

      default:
        return state;
    }
  }