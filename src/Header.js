import './Header.css'; 
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
function HEADER(){
    return (
        <div className='top-nav'>   
        <section>
          <AppBar>
            <Toolbar>
              <Typography><Link className='list' to = "/">Home</Link></Typography>
              <Typography><Link  className='list' to = "/About">About</Link> </Typography>
              <Typography><Link  className='list' to ="/Login">Log In</Link></Typography>  
              <Typography><Link className='list' to ="/Register">Register</Link></Typography>
            </Toolbar>  
          </AppBar>
         
        </section>
        
        </div>
      );
}
export default HEADER;