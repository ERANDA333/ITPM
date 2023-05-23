import React , { useState, useEffect } from 'react';
import { TextField, Button, Container, Stack, FormControlLabel, FormControl, FormLabel, FormHelperText, Radio, RadioGroup} from '@mui/material';
import './styles.css';
import { useNavigate, useLocation } from 'react-router-dom';

 
 
const EditMentor = () => {

  const location = useLocation();
  const history = useNavigate();
  const [setUser] = useState(null);
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
    const [Title, setTitle] = React.useState('');
    const [TitleError, setTitleError] = React.useState(false);
    const [TitleHelperText, setTitleHelperText] = React.useState('Choose the title');
    const handleTitleChange = (event) => {
        setTitle(event.target.value);
        setTitleHelperText(' ');
        setTitleError(false);
    };

    const [Gender, setGender] = React.useState('');
    const [GenderError, setGenderError] = React.useState(false);
    const [GenderHelperText, setGenderHelperText] = React.useState('Choose the gender');
    
    const handleGenderChange = (event) => {
        setGender(event.target.value);
        setGenderHelperText(' ');
        setGenderError(false);
    };
    
    const [FirstName, setFirstName] = React.useState('');

    const [LastName, setLastName] = React.useState('');

    const [NICNo, setNICNo] = React.useState('');
    const [NICNoError, setNICNoError] = React.useState(false);
    const [NICNoHelperText, setNICNoHelperText] = React.useState('');
    const handleNICNoChange = (e) => {
        const regex = /^[0-9-Vv]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setNICNo(e.target.value);
        }
        setNICNoError(false);
        setNICNoHelperText('');
    };
      
    const [Contact, setContact] = React.useState('');
    const [ContactError, setContactError] = React.useState(false);
    const [ContactHelperText, setContactHelperText] = React.useState('');
    const handleContactChange = (e) => {
        const regex = /^[0-9]+$/;
        if (e.target.value === "" || regex.test(e.target.value)) {
            setContact(e.target.value);
        }
        setContactError(false);
        setContactHelperText('');
    };

    const [Email, setEmail] = React.useState('');

    const [DateOfBirth, setDateOfBirth] = React.useState('');

    
    const [Discription, setDiscription] = React.useState('');
    const [DiscriptionError, setDiscriptionError] = React.useState(false);
    const [DiscriptionHelperText, setDiscriptionHelperText] = React.useState('');
    const handleDiscriptionChange = (event) => {
      setDiscription(event.target.value);
      setDiscriptionHelperText(' ');
      setDiscriptionError(false);
  };



  useEffect(() => {
   
    fetch(`http://localhost:5000/mentor/profile/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.title);
        setGender(data.gender);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setNICNo(data.nicNo);
        setContact(data.contact);
        setEmail(data.email);
        setDateOfBirth(data.dateOfBirth);
        setDiscription(data.description)
      })
      .catch((error) => console.log(error));
  }, [userId]);

 
  
    
    function handleSubmit(event) {

      event.preventDefault();

      let sendTitle;
      let sendGender;
      let sendNICNo;
      let sendContact;
      let sendDescription;

        if (Title === 'Mr') {
            setTitleError(false);

            sendTitle = Title

        } else if (Title === 'Mrs') {
            setTitleError(false);
            sendTitle = Title

        } else if (Title === 'Ms') {
            setTitleError(false);
            sendTitle = Title

        }else {
           setTitleHelperText('Please select an option.');
           setTitleError(true);
           event.preventDefault();
        }
          
        if (Gender === 'male') {
          setGenderError(false);
          sendGender = Gender

        } else if (Gender === 'female') {
          setGenderError(false);
          sendGender = Gender

        } else {
          setGenderHelperText('Please select an option.');
          setGenderError(true);
          event.preventDefault();
        }


        if (NICNo.length === 10) {
          sendNICNo = NICNo;
        }
        else {
          setNICNoHelperText('Check your NIC No');
          setNICNoError(true);
          event.preventDefault();
        }


        if (Contact.length === 10) {
          sendContact = Contact
        }
        else {
          setContactHelperText('Check your Contact No');
          setContactError(true);
          event.preventDefault();
        }

        

        if (Discription.length > 20) {
          sendDescription = Discription
        }
        else {
          setDiscriptionHelperText('Type a long Description!');
          setDiscriptionError(true);
          event.preventDefault();
        }


        const mentorData = {
          title: sendTitle,
          gender: sendGender,
          firstName: FirstName,
          lastName: LastName,
          nicNo: sendNICNo,
          contact: sendContact,
          email: Email,
          dateOfBirth: DateOfBirth,
          description: sendDescription,
        };
    
        console.log(mentorData);
        fetch(`http://localhost:5000/mentor/patch/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mentorData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Update successful', mentorData);
          history("/profile", {state:{id:userId}})
         
        } else {
          throw new Error('Update request failed');
        }
      })
      .catch((error) => {
        console.log(error);
      });
        
    }
 
    return (
        <Container maxWidth="md">
        <React.Fragment>
            <h2>Update Profile</h2>
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} textAlign={'left'} direction="row" sx={{marginBottom: 2}} >
                <FormControl fullWidth error={TitleError} variant="standard">
                    <FormLabel id="demo-radio-buttons-group-label">Title</FormLabel>
                        <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="title"
                        value={Title}
                        onChange={handleTitleChange}
                        row
                        >
                        <FormControlLabel value="Mr" control={<Radio />} label="Mr." />
                        <FormControlLabel value="mrs" control={<Radio />} label="Mrs." />
                        <FormControlLabel value="Ms" control={<Radio />} label="Ms." />
                        </RadioGroup>
                        <FormHelperText>{TitleHelperText}</FormHelperText>
                </FormControl>
                <FormControl fullWidth error={GenderError} variant="standard">
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                        aria-labelledby="demo-error-radios"
                        name="gender"
                        value={Gender}
                        onChange={handleGenderChange}
                        row
                        >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        </RadioGroup>
                        <FormHelperText>{GenderHelperText}</FormHelperText>
                </FormControl>
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 2}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={FirstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Last Name"
                        onChange={e => setLastName(e.target.value)}
                        value={LastName}
                        fullWidth
                        required
                    />
                </Stack>
                <Stack spacing={2} textAlign={'left'} direction="row" sx={{marginBottom: 2}} >
                    <TextField
                        type="date"
                        variant='outlined'
                        color='primary'
                        label="Date of Birth"
                        // InputLabelProps={{ shrink: true, required: true }}
                        onChange={(e) => setDateOfBirth(e.target.value)}
                        value={DateOfBirth? DateOfBirth.substring(0, 10) : ''}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="NIC Number"
                        onChange={handleNICNoChange}
                        value={NICNo}
                        fullWidth
                        required
                        inputProps={{ maxLength: 10 }}
                        helperText={NICNoHelperText}
                        error={NICNoError}
                    />
                </Stack>
                <Stack spacing={2} textAlign={'left'} direction="row" sx={{marginBottom: 2}} >
                    <TextField
                        type="email"
                        variant='outlined'
                        color='primary'
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={Email}
                        fullWidth
                        required
                    />
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Contact Number"
                        onChange={handleContactChange}
                        value={Contact}
                        fullWidth
                        required
                        inputProps={{ maxLength: 10 }}
                        helperText={ContactHelperText}
                        error={ContactError}
                    />
                </Stack>
                
               
                <Stack spacing={2} textAlign={'left'} direction="row" sx={{marginBottom: 2}} >
                    <TextField
                        type="text"
                        variant='outlined'
                        color='primary'
                        label="Discription"
                        onChange={handleDiscriptionChange}
                        value={Discription}
                        fullWidth
                        multiline
                        rows={4}
                        required
                        helperText={DiscriptionHelperText}
                        error={DiscriptionError}
                    />
                    
                    </Stack>
                
                <br/>
                <br/>
                <br/>
                    <Button variant="outlined" color="primary" type="submit">Update</Button>

            </form>
            <br/>

            <br/>
            <br/>
            <br/>
            <br/>
     
        </React.Fragment>
        </Container>
    )
}
 
export default EditMentor;