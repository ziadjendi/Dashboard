import React from "react";
import { Typography, Grid } from "@material-ui/core";
import DownArrow from "./downArrow";
const SplitBtn = () => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="subtitle1">العربية</Typography>
      </Grid>
      <Grid>
        <DownArrow />
      </Grid>
    </Grid>
  );
};

export default SplitBtn;
