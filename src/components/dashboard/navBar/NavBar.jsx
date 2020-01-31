import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { AppBar, IconButton, Badge, makeStyles, Grid } from "@material-ui/core";
import Menu from "./Menu";

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white
  },
  logo: {
    width: 70,
    paddingTop: 10
  }
}));
const NavBar = props => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Grid container justify="space-between" direction="row">
        <Grid item>
          <Menu />
        </Grid>
        <Grid item>
          <img src="./logo.png" alt="logo" className={classes.logo} />
        </Grid>
        <Grid item>
          <IconButton aria-label="notification">
            <Badge badgeContent={5} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
