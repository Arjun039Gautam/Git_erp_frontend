import React, { useState } from 'react';
import Wrapper from './style';

const Login = ({ setLoginUser }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh

    if (userName && password) {
      localStorage.setItem("username", userName); // Store username separately
      localStorage.setItem("password", password); // Store password separately
      alert("Logged in!");
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <Wrapper>
      <h1>Sign IN</h1>
      <form className="user" onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={userName}
          onChange={(e) => setUserName(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
        <h6>Remember Me</h6>  
        <button type="submit">Login</button>
      </form>
      <div className='logo'>
        arjun
        <p>hello</p>
      </div>
    </Wrapper>
  );
};

export default Login;
