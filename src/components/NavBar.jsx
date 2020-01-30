import React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import {
  AppBar,
  IconButton,
  Toolbar,
  Badge,
  makeStyles
} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.common.white
  }
}));
const NavBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <IconButton
          edge="start"
          aria-label="logo"
          style={{
            float: "none",
            width: "200px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          <img src="./logo.png" alt="logo" />
        </IconButton>
        <IconButton edge="start" color="inherit" aria-label="notification">
          <Badge badgeContent={5} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;