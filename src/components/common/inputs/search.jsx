import React from "react";
import { Typography, TextField, Grid, Fab } from "@material-ui/core";
import SearchIcon from "../icons/searchIcon";

const Search = props => {
  return (
    <React.Fragment>
      <Grid container spacing={0}>
        <Grid item>
          <Typography variant="subtitle1">بحث</Typography>
        </Grid>
        <Grid item>
          <TextField id="search" />
        </Grid>
        <Grid item>
          <Fab
            aria-label="بحث"
            size="small"
            style={{ backgroundColor: "white" }}
          >
            <SearchIcon />
          </Fab>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Search;
