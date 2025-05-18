import React from "react";
import Box from '@mui/material/Box';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

const ComposeBox = () => {
  return (
    <>
      <div className="inputCard">
        <div className="inputHead">
          <h3>Compose Message</h3>
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
                label="To"
                defaultValue="abc@gmail.com"
              />
            </div>


            <div className="col-md-12">
              <TextField
                className="inputBox"
                label="Subject"
                defaultValue="subject"
              />
            </div>
            
            <div className="col-md-12">
              <TextareaAutosize
                  className="textArea w-100"
                  aria-label="Type message here..."
                  placeholder="Type message here..."
                  minRows={3}
                />
            </div>
            

            <div className="col-md-12 inputButton">
              <Button className="w-100  mt-1" type="submit">
                Sent
              </Button>
            </div>
          </div>
        </Box>
      </div>
    </>
  )
}

export default ComposeBox