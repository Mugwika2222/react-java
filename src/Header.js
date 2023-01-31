import './Header.css'; 
import {Link} from 'react-router-dom';
import { AppBar, Toolbar, Typography, } from '@mui/material';
import AnchorIcon from '@mui/icons-material/Anchor';
function HEADER(){
    return (
        <div className='top-nav'>   
        <section>
          <AppBar>
            <Toolbar>
            <AnchorIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PLUMBERS<br/>
            INC.
          </Typography>
              <Typography sx={{marginLeft:'auto'}}><Link className='list' to = "/">Home</Link></Typography>
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