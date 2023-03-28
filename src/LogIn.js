import { Button,Box,TextField, Card,CardContent,Link } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link as RouterLink } from "react-router-dom";
import './login.css'; 
import axios from 'axios';



function LogIn(props) {
    const  navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [passWord, setPassWord] = useState();
    const LogIn = e =>{
        e.preventDefault();
        console.log(`${username}    ${passWord}`);
        try {
          axios.post('http://localhost:8000/api/v1/login', {username: username,  password: passWord});
          const {token} = response.data;
          localStorage.setitem('authToken', token);
          console.log(token);
          navigate('/DashBoard');
          props.loginStatus.setIsLoggedIn(true);
          console.log(props.loginStatus.isLoggedIn)
      } catch (error) {
          console.log(error);
      }
      
    };

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
        <h5>Not a member yet?<Link component = {RouterLink} to ='/Register'>Register</Link></h5>
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