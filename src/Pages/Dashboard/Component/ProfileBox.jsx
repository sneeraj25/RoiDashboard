import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ProfileBox = () => {
  return (
    <>
      <div className="inputCard">
        <div className="inputHead">
            <h3>Profile</h3>
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
               
                 id="filled-read-only-input"
                label="Sponsor Id"
                defaultValue="SGm545"
                
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </div>
            <div className="col-md-6">
              <TextField
              className="inputBox"
               
                 id="filled-read-only-input"
                label="Sponsor Name"
                defaultValue="Sponsor Name"
                
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
              />
            </div>
            <div className="col-md-12">
              <TextField
              className="inputBox"
               
                 id="filled-read-only-input"
                label="User Id"
                defaultValue="abCY54V"
                
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
              />
            </div>
            <div className="col-md-12">
              <TextField
              className="inputBox"
               
                 id="filled-read-only-input"
                label="User Name"
                defaultValue="john clue"
                
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
              />
            </div>
            <div className="col-md-12">
              <TextField
              className="inputBox"
               
                 id="filled-read-only-input"
                label="Email Id"
                defaultValue="abc@gmail.com"
                
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
              />
            </div>
            <div className="col-md-12">
              <TextField
              className="inputBox"
               
                 id="filled-read-only-input"
                label="Wallet Address"
                defaultValue="0x82454140915d5d50062f6854B8e326f77984b68ed"
                
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
              />
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default ProfileBox;
