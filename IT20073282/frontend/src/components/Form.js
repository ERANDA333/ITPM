import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';


export default function Form() {

  const [firstName, setFirstName] = React.useState('');

  const [Title, setTitle] = React.useState('');
  const [TitleError, setTitleError] = React.useState(false);
  const [TitleHelperText, setTitleHelperText] = React.useState('Choose the title');

  const [Gender, setGender] = React.useState('');
  const [GenderError, setGenderError] = React.useState(false);
  const [GenderHelperText, setGenderHelperText] = React.useState('Choose the title');

  const [CheckBox, setChechBox] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
  });
 
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setTitleHelperText(' ');
    setTitleError(false);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
    setGenderHelperText(' ');
    setGenderError(false);
  };

  const handleCheckBoxChange = (event) => {
    setChechBox({
      ...CheckBox,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = CheckBox;
  const CheckBoxError = [gilad, jason, antoine].filter((v) => v).length !== 2;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (Title === 'mr') {
      setTitleError(false);
      console.log(Title);
    } else if (Title === 'mrs') {
      setTitleError(false);
      console.log(Title);
    } else if (Title === 'ms') {
        setTitleError(false);
        console.log(Title);
    }else {
      setTitleHelperText('Please select an option.');
      setTitleError(true);
      console.log('error');
    }

    if (Gender === 'male') {
        setGenderError(false);
        console.log(Gender);
      } else if (Gender === 'female') {
        setGenderError(false);
        console.log(Gender);
      } else {
        setGenderHelperText('Please select an option.');
        setGenderError(true);
        console.log('error');
      }

      if (CheckBoxError === false){
        console.log(CheckBox);
      }
      else {
         console.log('error');
     }
      
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl sx={{ m: 3 }} error={TitleError} variant="standard">
      <FormLabel id="demo-radio-buttons-group-label">Title</FormLabel>
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="title"
          value={Title}
          onChange={handleTitleChange}
          row
        >
          <FormControlLabel value="mr" control={<Radio />} label="Mr." />
          <FormControlLabel value="mrs" control={<Radio />} label="Mrs." />
          <FormControlLabel value="ms" control={<Radio />} label="Ms." />
        </RadioGroup>
        <FormHelperText>{TitleHelperText}</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 3 }} error={GenderError} variant="standard">
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

        <FormControl
            required
            error={CheckBoxError}
            component="fieldset"
            sx={{ m: 3 }}
            variant="standard"
        >
            <FormLabel component="legend">Pick two</FormLabel>
            <FormGroup>
            <FormControlLabel
                control={
                <Checkbox checked={gilad} onChange={handleCheckBoxChange} name="gilad" />
                }
                label="Gilad Gray"
            />
            <FormControlLabel
                control={
                <Checkbox checked={jason} onChange={handleCheckBoxChange} name="jason" />
                }
                label="Jason Killian"
            />
            <FormControlLabel
                control={
                <Checkbox checked={antoine} onChange={handleCheckBoxChange} name="antoine" />
                }
                label="Antoine Llorca"
            />
            </FormGroup>
            <FormHelperText>You can display an error</FormHelperText>
        </FormControl>

        <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="First Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
        

     

    <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
        Submit
    </Button>
    </form>
  );
}
