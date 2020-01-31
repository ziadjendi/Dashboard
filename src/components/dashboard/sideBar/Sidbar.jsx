import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
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
import {
  Title1Icon,
  Title2Icon,
  Title3Icon,
  Title4Icon
} from "../../common/icons/SvgIcons";

const drawerWidth = 250;
const useStyles = makeStyles(theme => ({
  image: { width: 150, marginBottom: 30, marginRight: 30 },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  listItem: {
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.main, 1),
      color: theme.palette.common.white
    }
  },
  listItemText: {
    flexGrow: 0
  }
}));

const items = [
  { label: "عنوان أول", icon: <Title1Icon /> },
  { label: "عنوان ثاني", icon: <Title2Icon /> },
  { label: "عنوان ثالث", icon: <Title3Icon /> },
  { label: "عنوان رابع", icon: <Title4Icon /> }
];

const SidBar = props => {
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
          <Avatar src="ic_avatar.png" style={{ marginLeft: 10 }} />
          <ListItemText className={classes.listItemText}>الاسم</ListItemText>
          <IconButton style={{ marginRight: 100 }}>
            <ArrowDropDownIcon />
          </IconButton>
        </ListItem>
        {items.map((item, index) => (
          <ListItem
            button
            className={classes.listItem}
            key={index + "listItem"}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText className={classes.listItemText}>
              {item.label}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SidBar;
