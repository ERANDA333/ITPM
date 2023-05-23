import React from 'react';
import { TextField, Button, Container, Stack, FormControlLabel, FormControl, FormLabel, FormHelperText, Radio, RadioGroup, Checkbox, FormGroup} from '@mui/material';
import { Link, useNavigate } from "react-router-dom"
import './styles.css';

 
 
const RegisterForm = () => {
    const navHistory = useNavigate();
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

    const [InputPassword, setInputPassword] = React.useState({
        password: '',
        confirmPassword: '',
      });
    
      const [PasswordError, setPasswordError] = React.useState({
        password: '',
        confirmPassword: '',
      });

      const onInputPasswordChange = (e) => {
        const { name, value } = e.target;
        setInputPassword((prev) => ({
          ...prev,
          [name]: value,
        }));
        validateInputPassword(e);
      };
    
      const validateInputPassword = (e) => {
        let { name, value } = e.target;
        setPasswordError((prev) => {
          const stateObj = { ...prev, [name]: '' };
      
          switch (name) {
            case 'password':
              if (!value) {
                stateObj[name] = 'Please enter Password.';
              } else if (
                InputPassword.confirmPassword &&
                value !== InputPassword.confirmPassword
              ) {
                stateObj['confirmPassword'] =
                  'Password and Confirm Password do not match.';
              } else {
                stateObj['confirmPassword'] = InputPassword.confirmPassword
                  ? ''
                  : stateObj['confirmPassword'];
              }
              break;
      
            case 'confirmPassword':
              if (!value) {
                stateObj[name] = 'Please enter Confirm Password.';
              } else if (
                InputPassword.password &&
                value !== InputPassword.password
              ) {
                stateObj[name] = 'Password and Confirm Password do not match.';
              }
              break;
      
            default:
              break;
          }
      
          return stateObj;
        });
      };
      

    const [CheckBox, setCheckBox] = React.useState({
      Sinhala: false,
      Science: false,
      Buddhism: false,
      English: false,
      Mathematics: false,
      Chatholism: false,
      Tamil: false,
      IT: false,
      History: false,
    });
    const handleCheckBoxChange = (event) => {
        setCheckBox({
          ...CheckBox,
          [event.target.name]: event.target.checked,
        });
    };
    const { Sinhala, Science, Buddhism, English, Mathematics, Chatholism, Tamil, IT, History } = CheckBox;
    const CheckBoxError = [Sinhala, Science, Buddhism, English, Mathematics, Chatholism, Tamil, IT, History].filter((v) => v).length > 3;
    
    const [Discription, setDiscription] = React.useState('');
    const [DiscriptionError, setDiscriptionError] = React.useState(false);
    const [DiscriptionHelperText, setDiscriptionHelperText] = React.useState('');
    const handleDiscriptionChange = (event) => {
      setDiscription(event.target.value);
      setDiscriptionHelperText(' ');
      setDiscriptionError(false);
  };


 
  
    
  function handleSubmit(event) {
    event.preventDefault();
  
    let sendTitle = "";
    let sendGender = "";
    let sendNICNo = "";
    let sendContact = "";
    let sendCheckBox = [];
    let sendDescription = "";
  
    if (Title === 'Mr' || Title === 'Mrs' || Title === 'Ms') {
      setTitleError(false);
      sendTitle = Title;
    } else {
      setTitleHelperText('Please select an option.');
      setTitleError(true);
      return;
    }
  
    if (Gender === 'male' || Gender === 'female') {
      setGenderError(false);
      sendGender = Gender;
    } else {
      setGenderHelperText('Please select an option.');
      setGenderError(true);
      return;
    }
  
    if (NICNo.length === 10) {
      sendNICNo = NICNo;
    } else {
      setNICNoHelperText('Check your NIC No');
      setNICNoError(true);
      return;
    }
  
    if (Contact.length === 10) {
      sendContact = Contact;
    } else {
      setContactHelperText('Check your Contact No');
      setContactError(true);
      return;
    }
  
    if (CheckBoxError === false) {
      sendCheckBox =  Object.keys(CheckBox).filter(skill => CheckBox[skill]);
    } else {
      return;
    }
  
    if (Discription.length > 20) {
      sendDescription = Discription;
    } else {
      setDiscriptionHelperText('Type a long Description!');
      setDiscriptionError(true);
      return;
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
      password: InputPassword.confirmPassword,
      description: sendDescription,
      skills: sendCheckBox,
    };
  
    console.log(mentorData);
    // Send the mentorData object to the server
    fetch('http://localhost:5000/mentor/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mentorData),
    })
      .then(response => response.json())
      .then(data => {
        window.confirm('Account created successfully!');
        navHistory("/login");
        console.log('Response:', data);
      })
      .catch(error => {
        console.log('errorrrr');
        console.error('Error:', error);
      });
  }
 
    return (
        <Container maxWidth="md">
        <React.Fragment>
            <h2>Register Form</h2>
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
                        <FormControlLabel value="Mrs" control={<Radio />} label="Mrs." />
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
                        InputLabelProps={{ shrink: true, required: true }}
                        onChange={e => setDateOfBirth(e.target.value)}
                        value={DateOfBirth}
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
                <input
                    className='InputPass'
                    type="password"
                    name="password"
                    variant='outlined'
                    color='primary'
                    placeholder="Enter Password *"
                    value={InputPassword.password}
                    onChange={onInputPasswordChange}
                    onBlur={validateInputPassword}
                    required
                ></input>
                    {PasswordError.password && <span className="err">{PasswordError.password}</span>}

                <input
                    className='InputPass'
                    type="password"
                    name="confirmPassword"
                    variant='outlined'
                    color='primary'
                    placeholder="Enter Confirm Password *"
                    value={InputPassword.confirmPassword}
                    onChange={onInputPasswordChange}
                    onBlur={validateInputPassword}
                    fullWidth
                    required
                ></input>
                    {PasswordError.confirmPassword && (
                    <span className="err">{PasswordError.confirmPassword}</span>
                    )}
                </Stack>
                <Stack spacing={2} direction="row" sx={{marginBottom: 2}} fullWidth>
                    <FormControl
                        required
                        error={CheckBoxError}
                        component="fieldset"
                        variant="standard"
                        fullWidth
                        >
                        <FormLabel component="legend">Skills</FormLabel>
                        <FormGroup 
                            row
                        >
                        <FormControlLabel   
                            control={
                            <Checkbox checked={Sinhala} onChange={handleCheckBoxChange} name="Sinhala" />
                            }
                            label="Sinhala"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={Science} onChange={handleCheckBoxChange} name="Science" sx={{ml: 30}}/>
                            }
                            label="Science"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={Buddhism} onChange={handleCheckBoxChange} name="Buddhism" sx={{ml: 34}}/>
                            }
                            label="Buddhism"
                        />
                        </FormGroup>
                        <FormGroup 
                            row
                        >
                        <FormControlLabel
                            control={
                            <Checkbox checked={English} onChange={handleCheckBoxChange} name="English" />
                            }
                            label="English"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={Mathematics} onChange={handleCheckBoxChange} name="Mathematics" sx={{ml: 30}}/>
                            }
                            label="Mathematics"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={Chatholism} onChange={handleCheckBoxChange} name="Chatholism" sx={{ml: 30}}/>
                            }
                            label="Chatholism"
                        />
                        </FormGroup>
                        <FormGroup 
                            row
                        >
                        <FormControlLabel
                            control={
                            <Checkbox checked={Tamil} onChange={handleCheckBoxChange} name="Tamil" />
                            }
                            label="Tamil" 
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={IT} onChange={handleCheckBoxChange} name="IT" sx={{ml: 32}}/>
                            }
                            label="IT"
                        />
                        <FormControlLabel
                            control={
                            <Checkbox checked={History} onChange={handleCheckBoxChange} name="History" sx={{ml: 39.6}}/>
                            }
                            label="History"
                        />
                        </FormGroup>
                        <FormHelperText>Please select no more than 3 skill sets</FormHelperText>
                    </FormControl>
                    
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
                
                    <Button variant="outlined" color="primary" type="submit">Submit</Button>

            </form>
            <br/>
           
            <small>Already have an account? <Link to="/login">Login Here</Link></small>


            <br/>
            <br/>
            <br/>
            <br/>
     
        </React.Fragment>
       
        </Container>
    )
}
 
export default RegisterForm;