import React, { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const FundBox = () => {

const [wallet, setWallet] = useState('');

  const handleChange = (event) => {
    setWallet(event.target.value);
  };

  return (
    <>
      <div className="inputCard">
        <div className="inputHead">
          <h3>Fund Request</h3>
        </div>
        <Box
          component="form"
          sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
          noValidate
          autoComplete="off">
          <div className="row g-3">
            <div className="col-md-12">
              <TextField
                className="inputBox"
                label="User Id"
                defaultValue="Enter UserId"
              />
            </div>

            <div className="col-md-12">
              <FormControl fullWidth>
                <InputLabel className="w-100  " id="demo-simple-select-label">Select Wallet</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={wallet}
                  label="Select Wallet"
                  onChange={handleChange}>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="col-md-12">
              <TextField
                className="inputBox"
                label="Amount"
                defaultValue="0.0"
              />
            </div>

            <div className="col-md-12 inputButton">
              <Button className="w-100  mt-1" type="submit">
                Request
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  );
};

export default FundBox;
