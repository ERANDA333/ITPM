import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { AutoStories } from '@mui/icons-material';


import { useNavigate } from "react-router-dom";

export default function MenuAppBar() {
  
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null); 

  const clickRightMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clickLeftMenu = event => {
    setAnchorEl2(event.currentTarget);
  };

  /* routePaths are defined in App.js */
  const redirectRoute = routePath => {
    navigate(routePath);
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={clickLeftMenu}
          >
            <MenuIcon />
          </IconButton>

          <AutoStories sx={{ display: { xs: '', md: 'flex', fontSize:55 }, mr: 2 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 0,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Support
          </Typography>

          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'red',
              textDecoration: 'none',
            }}
          >
            ED
          </Typography>
          
          {/* Left hand side */}

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl2}
            open={Boolean(anchorEl2)}
            onClose={() => {setAnchorEl2(null);}}>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItem button onClick={() => {redirectRoute("/");setAnchorEl2(null);}}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button  onClick={() => {redirectRoute("/about");setAnchorEl2(null);}}>
                  <ListItemText primary="About Us" />
                </ListItem>
                <ListItem button  onClick={() => {redirectRoute("/resources");setAnchorEl2(null);}}>
                  <ListItemText primary="Resources" />
                </ListItem>
                <ListItem button  onClick={() => {redirectRoute("/profile");setAnchorEl2(null);}}>
                  <ListItemText primary="Profile" />
                </ListItem>
              </List>
          </Menu>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            
              <Button
                onClick={() => redirectRoute("/")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Home
              </Button>
              <Button
                onClick={() => redirectRoute("/about")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                About Us
              </Button>
              <Button
                onClick={() => redirectRoute("/resources")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Resources
              </Button>
              <Button
                onClick={() => redirectRoute("/profile")}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Profile
              </Button>
          
          </Box>

          

          {/* Right hand side */}

              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={clickRightMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >              
                <ListItem button onClick={() => redirectRoute("/login")}>
                  <ListItemText primary="Login" />
                </ListItem>
                <ListItem button onClick={() => redirectRoute("/logout")}>
                  <ListItemText primary="Logout" />
                </ListItem>
                <ListItem button onClick={() => redirectRoute("/registration")}>
                  <ListItemText primary="Register" />
                </ListItem>
              </Menu>

        </Toolbar>
      </AppBar>
    </Box>



  );
}
