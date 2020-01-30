import React from "react";
import { Button, makeStyles, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 5,
    paddingTop: 20
    // [theme.breakpoints.down("sm")]: {
    //   position: "fixed",
    //   left: 0,
    //   right: 0,
    //   bottom: 0
    // }
  },
  saveBtn: {
    backgroundColor: "#6ec30b",
    color: theme.palette.common.white,
    lineHeight: 2.5,
    width: 100,
    height: 52,
    [theme.breakpoints.down("xs")]: {
      width: 250,
      height: 52
    }
    // [theme.breakpoints.down("md")]: {
    //   width: 100,
    //   height: 52
    // }
  },

  closeBtn: { fontSize: 40, color: "gray" }
}));

const SaveOrClear = ({ saveLabel = "حفظ" }) => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end" spacing={1} className={classes.root}>
      <Grid item>
        <Button variant="contained" className={classes.saveBtn}>
          {saveLabel}
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained">
          <CloseIcon className={classes.closeBtn} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SaveOrClear;
