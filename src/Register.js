import React, { useState } from 'react'

function Register() {
    const [username, setUsername] = useState('collins');
    const [email, setEmail] = useState();
    const [passWord, setPassWord] = useState();
    const SignUp = e =>{
        e.preventDefault();
          console.log(username);
    }

  return (
    <div>
        <form onSubmit={SignUp}>
            <label>Username:
                <input  value ={username} onChange ={e =>setUsername(e.target.value)} type="text" />
            </label><br/>
            <label>Email:
                <input value ={email}  onChange ={e =>setEmail(e.target.value)}type="email" />
            </label><br/>
            <label>PassWord:
                <input  value ={passWord}  onChange ={e =>setPassWord(e.target.value)}type="text" />
            </label><br/>
            <button type='submit'>SignUp</button>
        </form>
    </div>
  )
}

export default Register