import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

function Success(props) {
  return (
    <MuiThemeProvider>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Success</Typography>
          </Toolbar>
        </AppBar>
        <br />
        <h1>Registration has been completed successfully</h1>
        <p>We appreciate your Interest for registering with Us </p>
      </>
    </MuiThemeProvider>
  );
}

export default Success;
