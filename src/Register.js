import React, { useState } from 'react'
import { Button,Box,TextField,Link, Card, CardContent } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import './Register.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Register() {
  const  navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState();
    const [password, setPassWord] = useState();

    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(`${username}  ${email}  ${password}`);
          try {
            axios.post('http://localhost:8000/api/v1/signup', {username: username, email: email, password: password});
            navigate('/Login');
        } catch (error) {
            console.log(error);
        }

    };
  return (
    <Box     component="form"
    onSubmit={handleSubmit}
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
                          id="outlined-password-input"
                          label="Password"
                          value ={password}  onChange ={e =>setPassWord(e.target.value)} type="password" 
                          autoComplete="current-password"
                        /> <br/>
                      <Button  type='submit'>SignUp</Button>
                      <h5>Already have an account?<Link component = {RouterLink} to ='/LogIn'>Login here</Link></h5>
                </CardContent>
              </Card>
    </div>
    </Box>
    
  )
}

export default Register