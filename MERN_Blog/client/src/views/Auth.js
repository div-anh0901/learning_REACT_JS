import React from "react";
import LoginForm from "../components/auth/LoginForm";
import RegisterForm from "../components/auth/RegisterForm";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Redirect } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const Auth = ({ authRoute }) => {
  let body;
  const {
    authState : {
      authLoading , isAuthenticated
    } 
  }= useContext(AuthContext);

  if(authLoading){
    body = (
      <div className='d-flex justify-content-center mt-2'>
        <Spinner animation="border" variant='info' />
      </div>
    )
  }
  else if(isAuthenticated){
    return <Redirect to="/dashboard" />
  }
  else{
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );
  }
  
  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>LearnIt</h1>
          <h4>Keep track of what you are Learning</h4>
          {body}
        </div>
      </div>
    </div>
  );
};

export default Auth;
