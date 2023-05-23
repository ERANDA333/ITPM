import React, { useState, useEffect } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import { Button, Container, Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import '../App.css'


const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)'
    },
  });

const UserDetails = () => {
  const location = useLocation();
  const history = useNavigate();
  const [user, setUser] = useState(null);
  const userId = (location.state.id); 

  useEffect(() => {
    fetch(`http://localhost:5000/mentor/profile/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.log(error));
  }, []);

  const navEdit = () => {
    history("/update", {state:{id:userId}})
  }

  const navDelete = () => {
    history("/delete", {state:{id:userId}});
  }


  const classes = useStyles();
  
  return (
    <>
    <br/>
    <br/>
    <Typography variant='h2'>Mentor Profile</Typography>
    <br/>
    

    <Container className={classes.container}>
    <br/>
    <br/>
    <br/>
    

    

      {user ? (
        <div>

        
          <Typography variant="h4">{user.title}. {user.firstName} {user.lastName}</Typography>

          <Typography variant="h6">{user.description}</Typography>



        <br/>
        <br/>

        <div className='skill'>
          <p> SKILLS: <span> {((user.skills)[0])}  {((user.skills)[1])}  {((user.skills)[2])} </span></p>
        </div>
        
        
        <br/>
        <br/>
        <br/>
        <List
            sx={{
                display:'flex',
                justifyContent:'space-evenly',
                width: '100%',
                bgcolor: 'background.paper',
            }}>
              
            </List>
          <List
            sx={{
                display:'flex',
                justifyContent:'space-evenly',
                width: '100%',
                bgcolor: 'background.paper',
            }}>
            <List
            sx={{

                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText  primary="EMAIL" secondary={user.email} />
              </ListItem>
              
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CallIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="CONTACT NUMBER" secondary={user.contact} />
              </ListItem>

              <Divider variant="inset" component="li" />

    
            </List>

            <List
            sx={{

                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText  primary="NIC NUMBER" secondary={user.nicNo} />
              </ListItem>
              
              <Divider variant="inset" component="li" />

              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <CallIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="DATE OF BIRTH" secondary={user.dateOfBirth ? user.dateOfBirth.substring(0, 10) : ''} />
              </ListItem>

              <Divider variant="inset" component="li" />

    
            </List>
            </List>
         
            <br/>
            <br/>
            <br/>

        </div>
      ) : (
        <Typography variant="body1">Loading user data...</Typography>
      )}

    <div>
    <Stack direction="row" spacing={2} sx={{display:'flex', justifyContent: 'center'}}>
        
      <Button size="large" fontSize="inherit" variant="contained" endIcon={<SendIcon />} onClick={navEdit} >
        Update Profile
      </Button>

      <Button size="large" fontSize="inherit" variant="outlined" startIcon={<DeleteIcon />} onClick={navDelete}>
        Delete Profile
      </Button>
    </Stack>
    </div>
    
      



    <br/>
    <br/>
    <br/>
    
    </Container>
    </>
  );
};

export default UserDetails;
