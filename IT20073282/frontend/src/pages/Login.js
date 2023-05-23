import React, { useState } from 'react';
import { Button, TextField, Typography, Link, Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



function Login() {
  const [hint, setHint] = React.useState('');
  const [errHint, setErrHint] = React.useState(false);
  const classes = useStyles();
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    
    const data = {
      email: email,
      password: password
    };
  
    fetch('http://localhost:5000/mentor/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(res => {
        if(res.status === 'exist'){
          setErrHint(false);
          setHint('');
          const  id  = res.id;
          console.log(id);
          history("/profile", {state:{id:id}});
        }else{
          setErrHint(true);
          setHint('Invalid email or password');
          
        }

      })
      .catch(error => console.log(error));
  };


  

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            error ={errHint}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            helperText={hint}
            error ={errHint}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
   
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Mentor Login
          </Button>

          <br/>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item >
              <Link href="/Registration" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <br/>

          <br/>
        </form>
      </div>
    </Container>
  );
}

export default Login;
