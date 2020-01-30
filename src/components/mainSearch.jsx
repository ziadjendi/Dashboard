import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  TextField,
  Badge
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SplitBtn from "./common/splitBtn";
import Search from "./common/search";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));
const MainSerach = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item lg={8}>
        <Typography variant="h5">عنوان ما</Typography>
      </Grid>
      <Grid item lg={4}>
        <Grid container spacing={2}>
          <Grid item>
            <SplitBtn />
          </Grid>
          <Grid item>
            <Search />
          </Grid>
          <Grid item>
            <Badge badgeContent={5} color="secondary">
              <NotificationsIcon />
            </Badge>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainSerach;
