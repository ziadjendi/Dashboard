import React from "react";
import { Grid, Typography, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SplitBtn from "./common/splitBtn";
import Search from "./common/search";

// const useStyles = makeStyles(theme => ({
//   margin: {
//     margin: theme.spacing(1)
//   }
// }));
const Header = () => {
  // const classes = useStyles();

  return (
    <Grid container justify="space-between">
      <Grid item lg>
        <Typography variant="h5">عنوان ما</Typography>
      </Grid>
      <Grid item lg>
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

export default Header;
