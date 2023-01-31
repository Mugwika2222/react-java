import { Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css'; 



function LogIn(props) {
    const  navigate = useNavigate();
    const [username, setUsername] = useState('collins');
    const [passWord, setPassWord] = useState();
    const LogIn = e =>{
        e.preventDefault();
          console.log(username);
          navigate('/DashBoard');
          props.loginStatus.setIsLoggedIn(true);
          console.log(props.loginStatus.isLoggedIn)
          
    }

  return (
    <div class="login">
       <h1>LOGIN</h1>
        <form onSubmit={LogIn}>
            <div>
              <label>Username:
                      <input  value ={username} onChange ={e =>setUsername(e.target.value)} type="text" />
                  </label>
            </div>
              <div>
                <label>PassWord:
                      <input  value ={passWord}  onChange ={e =>setPassWord(e.target.value)}type="text" />
                  </label>
              </div>
              <Button type='submit'>LogIn</Button>
          </form>
    </div>
  )
}

export default LogIn;