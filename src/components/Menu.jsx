import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Avatar,
  Grid,
  InputBase,
  Paper,
  ListItemIcon
} from "@material-ui/core";
import { red, grey } from "@material-ui/core/colors";
import SearchIcon from "./common/searchIcon";

import RainBow from "./RainBow";
import {
  Title4Icon,
  Title3Icon,
  Title2Icon,
  Title1Icon,
  Title5Icon
} from "./SvgIcons/SvgIcons";

const useStyles = makeStyles(theme => ({
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
  },
  paper: {
    backgroundColor: grey[200],
    height: "100%"
  },
  listItemText: {
    flexGrow: 0
  },
  listItem: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    }
  }
}));

const handleHover = isHover => {
  this.childIsHover = isHover;
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

const MenuItems = [
  { label: "عنوان أول", icon: <Title1Icon /> },
  { label: "عنوان ثاني", icon: <Title2Icon /> },
  { label: "عنوان ثالث", icon: <Title3Icon /> },
  { label: "عنوان رابع", icon: <Title4Icon /> },
  { label: "عنوان خامس", icon: <Title5Icon /> }
];
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
        <Paper className={classes.paper}>
          <List>
            {MenuItems.map(item => (
              <React.Fragment>
                <ListItem
                  button
                  onHover={handleHover}
                  className={classes.listItem}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText className={classes.listItemText}>
                    {item.label}
                  </ListItemText>
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </Dialog>
    </div>
  );
}
