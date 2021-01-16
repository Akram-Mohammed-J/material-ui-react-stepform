import React from "react";
import { MuiThemeProvider, ThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
function FormUserDetails(props) {
  const goForward = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const values = props.values;
  const handleChange = props.handleChange;
  console.log(values.firstName);

  return (
    <MuiThemeProvider>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Enter User details</Typography>
          </Toolbar>
        </AppBar>
        <TextField
          id="FirstName"
          label="FirstName"
          defaultValue={values.firstName}
          onChange={handleChange("firstName")}
        />
        <br />
        <TextField
          id="LastName"
          label="LastName"
          defaultValue={values.firstName}
          onChange={handleChange("lastName")}
        />
        <br />
        <TextField
          id="Email"
          label="Email"
          defaultValue={values.email}
          onChange={handleChange("email")}
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
      </>
    </MuiThemeProvider>
  );
}

export default FormUserDetails;
