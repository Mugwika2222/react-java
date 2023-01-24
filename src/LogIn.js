import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      
        <form onSubmit={LogIn}>
          <h1>LogIn</h1>
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
              <button type='submit'>LogIn</button>
          </form>
    </div>
  )
}

export default LogIn;