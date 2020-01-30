import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  Drawer,
  ListItemText,
  Avatar,
  IconButton,
  makeStyles,
  fade
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {
  Title1Icon,
  Title2Icon,
  Title3Icon,
  Title4Icon
} from "./SvgIcons/SvgIcons";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  image: { padding: theme.spacing(3) },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    padding: theme.spacing(3)
  },
  listItem: {
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 1),
      color: theme.palette.common.white
    }
  }
}));
const SidBar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="right"
    >
      <List>
        <ListItem>
          <img alt="logo" src="logo.png" className={classes.image} />
        </ListItem>
        <ListItem>
          <Avatar src="ic_avatar.png" />
          <ListItemText>الاسم</ListItemText>
          <IconButton size="small">
            <ArrowDropDownIcon fontSize="inherit" />
          </IconButton>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <Title1Icon />
          </ListItemIcon>
          <ListItemText>عنوان أول</ListItemText>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <Title2Icon />
          </ListItemIcon>
          <ListItemText>عنوان ثاني</ListItemText>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <Title3Icon />
          </ListItemIcon>
          <ListItemText>عنوان ثالث</ListItemText>
        </ListItem>
        <ListItem button className={classes.listItem}>
          <ListItemIcon>
            <Title4Icon />
          </ListItemIcon>
          <ListItemText>عنوان رابع</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidBar;
