import React from "react";
import "./App.css";
import { TextField, RadioGroup, Radio, FormControlLabel, FormLabel, FormControl } from "@mui/material";


function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="title">Test</h2>
        <div className="Questionsfield">
          <h3 className="text"> ข้อที่ 1</h3>
          <TextField
            helperText=""
            id="demo-helper-text-aligned"
            label="Questions"
            className="textfield"
          />
          <FormControl className="radiofield">
            <FormLabel id="demo-radio-buttons-group-label">Choice</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="ข้อท๊่ 1 "
              name="radio-buttons-group"
              className="tss"
            >
              <FormControlLabel value="ข้อท๊่ 1 " control={<Radio />} label="ข้อท๊่ 1 " />
              <FormControlLabel
                value="ข้อท๊่ 2"
                control={<Radio />}
                label="ข้อท๊่ 2"
              />
              <FormControlLabel
                value="ข้อท๊่ 3"
                control={<Radio />}
                label="ข้อท๊่ 3"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="Questionsfield">
          <h3 className="text"> ข้อที่ 2</h3>
          <TextField
            helperText=""
            id="demo-helper-text-aligned"
            label="Questions"
            className="textfield"
          />
          <TextField
            helperText=""
            id="demo-helper-text-aligned"
            label="Answers"
            className="radiofield"
          />  
          
        </div>
      </div>
    </div>
  );
}

export default App;
