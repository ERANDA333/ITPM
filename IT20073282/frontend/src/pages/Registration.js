import React from 'react';
import { Button } from '@material-ui/core';
import '../App.css';

import { useNavigate } from "react-router-dom";

function RegistrationBox() {

    let navigate = useNavigate();

    const redirectRoute = routePath => {
        navigate(routePath);
      };


  return (
    <div className='registerF'>
    <div className='btnArea'>
        <div>
            <h2> Register</h2>
        </div>
        <br/>
        <br/>

      <Button size="large" variant="contained" color="primary">
        Register as a Student
      </Button>
      <br/>
      <Button size="large" variant="contained" color="primary"
      onClick={() => redirectRoute("/mentorregister")} >
        Register as a Mentor
      </Button>
    </div>
    </div>
  
  );
}

export default RegistrationBox;