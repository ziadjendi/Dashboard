import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Avatar,
  Grid,
  TextField,
  Fab,
  InputBase,
  fade
} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import SearchIcon from "./common/searchIcon";
import { grey } from "@material-ui/core/colors";
import RainBow from "./RainBow";

const useStyles = makeStyles(theme => ({
  appBar: {
    position: "relative",
    backgroundColor: theme.palette.common.white
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    borderStyle: "solid",
    borderColor: grey[400],
    borderWidth: 1,
    margin: 20,
    height: 50,
    width: "90%"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    top: 0
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  inputInput: {
    padding: theme.spacing(2, 3, 1, 0),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function Menu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton edge="start" aria-label="menu" onClick={handleClickOpen}>
        <MenuIcon />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <Grid container justify="space-between" style={{ marginTop: 20 }}>
          <Grid item xs={4}>
            <IconButton onClick={handleClose} aria-label="close">
              <CloseIcon style={{ fontSize: 35, color: red[800] }} />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton aria-label="logo">
              <img src="./logo.png" alt="logo" width="90" />
            </IconButton>
          </Grid>
          <Grid item xs={4}>
            <IconButton
              style={{ position: "absolute", left: 5 }}
              aria-label="avatar"
            >
              <Avatar alt="" src="./ic_avatar.png" />
            </IconButton>
          </Grid>
        </Grid>

        <div className={classes.search}>
          <InputBase
            placeholder="بحث"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
        </div>
        <RainBow />
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
