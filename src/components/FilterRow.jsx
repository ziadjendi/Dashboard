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
        <Grid item lg={9} md={9} sm={12} xs={12}>
          <Grid container spacing={1}>
            <Grid item lg={4} md sm={8} xs={12}>
              <InputField label="العنوان" />
            </Grid>
            <Grid item lg md sm={4} xs={12}>
              <SelectOptions label="كلمة" />
            </Grid>
            <Hidden smDown>
              <Grid item lg md>
                <DatePickerComp label="يبدأ في" id="startDate" />
              </Grid>
              <Grid item lg md>
                <DatePickerComp label="ينتهي في" id="endDate" />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item lg md={3} sm={12}>
          <Grid container spacing={1}>
            <Hidden mdUp>
              <Grid item sm xs={12}>
                <DatePickerComp label="يبدأ في" id="startDate" />
              </Grid>
              <Grid item sm xs={12}>
                <DatePickerComp label="ينتهي في" id="endDate" />
              </Grid>
            </Hidden>
            <Hidden xsDown>
              <Grid item sm>
                <SaveOrClear />
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default FilterRow;
