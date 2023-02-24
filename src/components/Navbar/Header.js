import React from 'react';
import {
  Nav,

  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import { Typography } from '@mui/material';
import AnchorIcon from '@mui/icons-material/Anchor';

  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
        <AnchorIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: '#fff' }} />
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
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            PLUMBERS.<br/>
            INC
          </Typography>

          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/LogIn'>LOGIN</NavBtnLink>
          <NavBtnLink to='/Register'>REGISTER</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;