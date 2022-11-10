import { IonButton  } from "@ionic/react";
import axios from 'axios';
import { useState } from 'react';

const LoginButton: React.FC = () => {

  const [accessToken,setAccessToken] = useState('');
  const [userName,setUserName] =  useState('');
  const [userPassword,setUserPassword] = useState('');
  const [errorMessage,setErrorMessge] = useState('');

  const handleSubmit = async (event:any) => {
    try{
      event.preventDefault();
      console.log("userInput : ", userName, "password :",userPassword);
  
      const body:any = ({
        "client_id":"DosEg3PVvlCkJvy0z0YzWnIuV2gExH87",
        "grant_type":"password",
        "username":userName,
        "password":userPassword
      });
  
      console.log("body :: ", body)
      const config = {
        method:'post',
        url:"https://dev-nodi7dk0hk7rpxjp.us.auth0.com/oauth/token",
        data:body
      };
      const response:any = await axios(config);
      console.log("response.status ::",response.status);
      const data:any = await response.data;
      console.log("data :: ", data);
      console.log("data.access_token :: ", data.access_token);
      
      //get access token status = 200
      //else invalid user 
      if(data.access_token){
        setAccessToken(data.access_token);
      }

    }catch(err){
      setErrorMessge("Invalid User!");
    }
    
  }
  return (
    <div className="login-page">
      <form onSubmit = {handleSubmit}>
        <input type ="email" placeholder ="username" value = {userName} onChange = {(e:any) => setUserName(e.target.value) }/>
        <input  type="password" placeholder ="password" value = {userPassword} onChange = {(e:any) => setUserPassword(e.target.value)} /> 
        <IonButton type="submit">Submit</IonButton>
        <div className="showToken">{ accessToken ? <p>{accessToken}</p> : <p>{errorMessage}</p> }</div>
      </form>
    </div>
  )


};

export default LoginButton;
