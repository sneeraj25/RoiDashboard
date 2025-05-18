import React from "react";
import Box from '@mui/material/Box';

import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const WithdrawBox = () => {



  return (
    <>
      <div className="inputCard">
        <div className="inputHead">
          <h3>Withdraw</h3>
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
              <TextField
                className="inputBox"
                label="Amount"
                defaultValue="0.0"
              />
            </div>

            <div className="col-md-12 inputButton">
              <Button className="w-100  mt-1" type="submit">
                Withdraw
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  )
}

export default WithdrawBox