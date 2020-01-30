import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectOptions from "./common/selectOptions";
import { Grid, Hidden } from "@material-ui/core";
import InputField from "./common/InputField";
import SaveOrClear from "./common/saveOrClear";
import DatePickerComp from "./common/DatePickerComp";

const useStyles = makeStyles(theme => ({
  form: { width: "100%" },
  button: {
    backgroundColor: "#6ec30b",
    color: theme.palette.common.white
  }
}));

const FilterRow = () => {
  const classes = useStyles();

  return (
    <form className={classes.form} noValidate>
      <Grid container justify="space-between">
        <Grid item lg={9}>
          <Grid container spacing={1}>
            <Grid item lg={4}>
              <InputField label="العنوان" />
            </Grid>
            <Grid item lg>
              <SelectOptions label="كلمة" />
            </Grid>
            <Grid item lg>
              <DatePickerComp label="يبدأ في" id="startDate" />
            </Grid>
            <Grid item lg>
              <DatePickerComp label="ينتهي في" id="endDate" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg>
          <Hidden xsDown>
            <SaveOrClear />
          </Hidden>
        </Grid>
      </Grid>
    </form>
  );
};

export default FilterRow;
