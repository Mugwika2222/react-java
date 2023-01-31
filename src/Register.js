import React, { useState } from 'react'
import { Button,Box,TextField } from '@mui/material';
import './Register.css'; 
function Register() {
    const [username, setUsername] = useState('collins');
    const [email, setEmail] = useState();
    const [passWord, setPassWord] = useState();
    const SignUp = e =>{
        e.preventDefault();
          console.log(username);
    }

  return (
    <Box     component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
       <div class="Register">
                    <h1>REGISTER</h1>
                  <TextField  onSubmit={SignUp}
                  required
                  id="outlined-required"
                  label="Username"
                  value ={username} onChange ={e =>setUsername(e.target.value)} type="text" 
                  defaultValue="Username"
                   />
                  <TextField 
                  required
                  id="outlined-required"
                  label="Email"
                  value ={email} onChange ={e =>setEmail(e.target.value)} type="text" 
                  defaultValue="Email"
                   />
                  <TextField
                      id="outlined-password-input"
                      label="Password"
                      value ={passWord}  onChange ={e =>setPassWord(e.target.value)} type="password" 
                      autoComplete="current-password"
                    />
                  <Button variant="outlined" type='submit'>SignUp</Button>
              
    </div>
    </Box>
    
  )
}

export default Register