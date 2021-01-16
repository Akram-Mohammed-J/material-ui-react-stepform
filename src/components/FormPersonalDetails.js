import React from "react";
import { MuiThemeProvider, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
function FormPersonalDetails(props) {
  const goForward = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const goBackward = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const values = props.values;
  const handleChange = props.handleChange;
  console.log(values.firstName);

  return (
    <MuiThemeProvider>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter Personal details</Typography>
          </Toolbar>
        </AppBar>
        <TextField
          id="Occupation"
          label="Occupation"
          defaultValue={values.occupation}
          onChange={handleChange("occupation")}
        />
        <br />
        <TextField
          id="City"
          label="City"
          defaultValue={values.city}
          onChange={handleChange("city")}
        />
        <br />
        <TextField
          id="Bio"
          label="Bio"
          defaultValue={values.bio}
          onChange={handleChange("bio")}
        />
        <br />
        <Button
          style={{ marginTop: "1rem" }}
          color="primary"
          type="submit"
          size="small"
          variant="contained"
          onClick={goForward}
        >
          NEXT
        </Button>
        <br />
        <Button
          style={{ marginTop: "1rem" }}
          color="primary"
          type="submit"
          size="small"
          variant="contained"
          onClick={goBackward}
        >
          BACK
        </Button>
      </>
    </MuiThemeProvider>
  );
}

export default FormPersonalDetails;
