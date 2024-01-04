import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

const NewMassageContainer = styled(Container)({
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const FormContainer = styled(Box)({
  width: '100%',
  marginTop: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const InputField = styled(TextField)({
  width: '100%',
  marginTop: 2,
});

const SubmitButton = styled(Button)({
  width: '100%',
  marginTop: 3,
});

const NewMassage = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const submitMassageHandler = (event) => {
    event.preventDefault();
    props.onAddMassage(enteredTitle);

    // Display an alert box
    alert('Massage added successfully!');

    // Clear the input fields after adding the massage
    setEnteredTitle('');
  };

  return (
    <NewMassageContainer component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          {/* You can replace this icon with your desired one */}
         
        </Avatar>
        <Typography component="h1" variant="h5">
          Enter New Massage
        </Typography>
        <FormContainer component="form" onSubmit={submitMassageHandler} noValidate>
          <InputField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Massage Title"
            name="title"
            autoComplete="off"
            autoFocus
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
          <SubmitButton type="submit" fullWidth variant="contained">
            Enter Your Massage
          </SubmitButton>
        </FormContainer>
      </Box>
    </NewMassageContainer>
  );
};

export default NewMassage;
