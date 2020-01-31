import React from "react";
import { Grid, Typography, Badge, Box } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import SplitBtn from "../../common/buttons/splitBtn";
import Search from "../../common/inputs/search";

const Header = props => {
  return (
    <Grid container justify="space-between">
      <Grid item lg>
        <Typography component="div">
          <Box textAlign="right" fontWeight={600} fontSize={30} m={1}>
            عنوان ما
          </Box>
        </Typography>
      </Grid>
      <Grid item lg>
        <Grid container spacing={2} justify="flex-end">
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
