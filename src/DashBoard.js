import React from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function DashBoard(props) {
    const  navigate = useNavigate();
    const LogOut = e =>{
        e.preventDefault();
        navigate('/Login');
          props.logoutStatus.setIsLoggedOut(true);
          console.log(props.logoutStatus.isLoggedOut)
    }
  return (
    <div>

<form onSubmit={LogOut}>
          <Link className='list' to = "/Tables">Post</Link>  
          <Link  className='list' to ="#">ToDo</Link>
          <button type='submit'>logout</button>
          </form>
    </div>
  )
}

export default DashBoard