import React, { useState } from 'react'
import Wrapper from './style'

const Login = ({setLoginUser}) => {
  const[Username,setUsername]= useState('')
  const[password,setPassword]= useState('')
  const Login = () =>{
    const Name = " Ansh";
    localStorage.setItem("username", Name);
    localStorage.setItem("password", password);
    alert("Logged in!")
  };

    
  return (
    <Wrapper>
      <h1>Sign IN</h1>
      <form className=" user">
      <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      <h6>Remember Me</h6>  
      <input type="submit" placeholder='Login' onClick={Login}/>
      </form>
    </Wrapper>
  )
}

export default Login
