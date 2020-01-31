import React from "react";
import { Button, makeStyles, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { grey } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
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
      width: 30
    }
  }
}));

const SaveOrClear = ({ saveLabel = "حفظ" }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={1} className={"save-clear"}>
      <Grid item xs={8}>
        <Button variant="contained" className={classes.saveBtn}>
          {saveLabel}
        </Button>
      </Grid>
      <Grid item xs>
        <Button variant="outlined">
          <CloseIcon className={classes.closeBtn} />
        </Button>
      </Grid>
    </Grid>
  );
};

export default SaveOrClear;
