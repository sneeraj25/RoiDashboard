import React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const ProfileEdit = () => {
  return (
    <>
        <div className="inputCard">
        <div className="inputHead">
            <h3>Edit Profile</h3>
        </div>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off">
          <div className="row g-3">
            <div className="col-md-6">
              <TextField
                className="inputBox"
                label="Sponsor Id"
                defaultValue="SGm545"
              />
            </div>
            <div className="col-md-6">
              <TextField
                className="inputBox"
                label="Sponsor Name"
                defaultValue="Sponsor Name"
              />
            </div>
            <div className="col-md-12">
              <TextField
              className="inputBox"
                label="User Id"
                defaultValue="abCY54V"
              />
            </div>
            <div className="col-md-12">
              <TextField
                className="inputBox"
                label="User Name"
                defaultValue="john clue"
              />
            </div>
            <div className="col-md-12">
              <TextField
                className="inputBox"
                label="Email Id"
                defaultValue="abc@gmail.com"
              />
            </div>
            <div className="col-md-12">
              <TextField
                className="inputBox"
                label="Wallet Address"
                defaultValue="0x82454140915d5d50062f6854B8e326f77984b68ed"
              />
            </div>

            <div className="col-md-12 inputButton">
              <Button className='w-100  ' type="submit">Submit</Button>
            </div>
                

          </div>
        </Box>
      </div>
    </>
  )
}

export default ProfileEdit