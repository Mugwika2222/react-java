import { Button,Box,TextField } from '@mui/material';
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
    <Box     component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
       <div class="login">
         <h1>LOGIN</h1>
                  <TextField  onSubmit={LogIn}
                  required
                  id="outlined-required"
                  label="Username"
                  value ={username} onChange ={e =>setUsername(e.target.value)} type="text" 
                  defaultValue="Username"
                   />
                  <TextField
                      id="outlined-password-input"
                      label="Password"
                      value ={passWord}  onChange ={e =>setPassWord(e.target.value)} type="password" 
                      autoComplete="current-password"
                    />
                  <Button type='submit'>LogIn</Button>
              
    </div>
    </Box>
    
  )
}

export default LogIn;