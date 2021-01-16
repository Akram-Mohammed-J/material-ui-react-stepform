import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
function Confrim(props) {
  const goForward = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const goBackward = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const values = props.values;
  console.log(values.firstName);

  return (
    <MuiThemeProvider>
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Confrim User Data</Typography>
          </Toolbar>
        </AppBar>
        <br />
        <List component="div" disablePadding>
          <ListItem>
            <ListItemText primary="First Name" />
            <ListItemText secondary={values.firstName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" />
            <ListItemText secondary={values.lastName} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email" />
            <ListItemText secondary={values.email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Occupation" />
            <ListItemText secondary={values.occupation} />
          </ListItem>
          <ListItem>
            <ListItemText primary="City" />
            <ListItemText secondary={values.city} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bio" />
            <ListItemText secondary={values.bio} />
          </ListItem>
        </List>
        <Button
          style={{ marginTop: "1rem" }}
          color="primary"
          type="submit"
          size="small"
          variant="contained"
          onClick={goForward}
        >
          Confrim & Continue
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

export default Confrim;
