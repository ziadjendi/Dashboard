import React from "react";
import { Button, makeStyles, Grid, Box } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 5,
    paddingTop: 20
  },
  saveBtn: {
    backgroundColor: "#6ec30b",
    color: theme.palette.common.white,
    lineHeight: 2.5,
    width: 100,
    height: 52,
    float: "left",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: 42
    }
  },
  closeBtn: {
    fontSize: 40,
    fill: grey[600],
    [theme.breakpoints.down("xs")]: {
      fontSize: 30
    }
  }
}));

const SaveOrClear = ({ saveLabel = "حفظ" }) => {
  const classes = useStyles();
  return (
    <Box width={1}>
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={8}>
          <Button variant="contained" className={classes.saveBtn}>
            {saveLabel}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Button variant="outlined">
            <CloseIcon className={classes.closeBtn} />
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SaveOrClear;
