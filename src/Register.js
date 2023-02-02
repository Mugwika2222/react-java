import React, { useState } from 'react'
import { Button,Box,TextField,Link, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import './Register.css'; 
function Register() {
    const [username, setUsername] = useState('collins');
    const [email, setEmail] = useState();
    const [number, setNumber] = useState();
    const [passWord, setPassWord] = useState();
    const SignUp = e =>{
        e.preventDefault();
          console.log(username);
    }

  return (
    <Box     component="form"
    onSubmit={SignUp}
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off">
       <div class="Register">
              <Card className='card'>
                 <h1>REGISTER</h1>    
                <CardContent>
                    <TextField 
                      required
                      id="outlined-required"
                      label="Username"
                      value ={username} onChange ={e =>setUsername(e.target.value)} type="text" 
                      defaultValue="Username"
                      /> <br/>
                      <TextField 
                      required
                      id="outlined-required"
                      label="Email"
                      value ={email} onChange ={e =>setEmail(e.target.value)} type="text" 
                      defaultValue="Email"
                      /> <br/>
                      <TextField
                      id="outlined-number"
                      label="Number"
                      value ={number} onChange ={e =>setNumber(e.target.value)}   type="number"

                      /> <br/>
                      <TextField
                          id="outlined-password-input"
                          label="Password"
                          value ={passWord}  onChange ={e =>setPassWord(e.target.value)} type="password" 
                          autoComplete="current-password"
                        /> <br/>
                      <Button variant="outlined" type='submit'>SignUp</Button>
                      <h5>Already have an account?<Link component = {RouterLink} to ='/LogIn'>Login here</Link></h5>
                </CardContent>
              </Card>
    </div>
    </Box>
    
  )
}

export default Register