import React from "react";
import { Typography, Grid } from "@material-ui/core";
import DownArrow from "../icons/downArrow";

const SplitBtn = props => {
  return (
    <Grid container>
      <Grid item>
        <Typography variant="subtitle1">العربية</Typography>
      </Grid>
      <Grid>
        <DownArrow style={{ paddingTop: 20 }} />
      </Grid>
    </Grid>
  );
};

export default SplitBtn;
