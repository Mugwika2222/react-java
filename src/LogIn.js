import { Button,Box,TextField, Card,CardContent,Link } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
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
    onSubmit={LogIn}
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
       <div class="login">
        <Card>
        <h1>LOGIN</h1>
          <CardContent>
          <TextField 
                    required
                    id="outlined-required"
                    label="Username"
                    value ={username} onChange ={e =>setUsername(e.target.value)} type="text" 
                    defaultValue="Username"
                    /> <br/>
                    <TextField
                        id="outlined-password-input"
                        label="Password"
                        value ={passWord}  onChange ={e =>setPassWord(e.target.value)} type="password" 
                        autoComplete="current-password"
                      />  <br/>
                    <Button type='submit'>LogIn</Button>
                    <h5>Forgot Password?<Link component = {RouterLink} to ='/LogIn'>Click here</Link></h5>
        </CardContent>
                 
        </Card>
        
              
    </div>
    </Box>
    
  )
}

export default LogIn;