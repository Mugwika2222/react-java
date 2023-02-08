import React from 'react'
import Image from './Image.js';
import './Home.css'; 
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ContactsIcon from '@mui/icons-material/Contacts';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Home() {
  return (

    <div className='Home'>
      <Image/>
          <h1>HOW IT WORKS</h1>
            <Box sx={{ 
              width: '100%',
              height: '20%',
              padding: '5%',
              paddingBottom:'10%',
          }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={4}>
                      <Item>
                      <h1>1.</h1>
                       <h2><LogoutIcon/></h2>   
                        <p>Appointment every Wednesday 9am.</p>
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                      <h1>2.</h1>
                       <h2><PersonSearchIcon/></h2> 
                    <p>First come, first served. Our offers are in limited quantities, so be .</p> 
                      </Item>
                    </Grid>
                    <Grid item xs={4}>
                      <Item>
                        <h1>3.</h1>
                       <h3> <ContactsIcon /></h3>
                      New offers every week. New experiences, new surprises. Your Sundays will no longer be alike.
                      </Item>
                    </Grid>
                </Grid>
          </Box>
    </div>
  )
}

export default Home