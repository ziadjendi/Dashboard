import React from "react";
import { Button, makeStyles, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
  root: {
    margin: 0,
    paddingTop: 20
  },
  saveBtn: {
    backgroundColor: "#6ec30b",
    color: theme.palette.common.white,
    lineHeight: 2.5,
    width: 100
  },

  closeBtn: { fontSize: 40, color: "gray" }
}));

const SaveOrClear = () => {
  const classes = useStyles();
  return (
    <Grid container justify="flex-end" spacing={2} className={classes.root}>
      <Grid item>
        <Button variant="contained" size="large" className={classes.saveBtn}>
          حفظ
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
