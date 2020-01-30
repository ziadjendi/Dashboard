import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SelectOptions from "./common/selectOptions";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

import {
  Grid,
  FormControlLabel,
  OutlinedInput,
  Button,
  IconButton,
  Hidden,
  Fab,
  Link
} from "@material-ui/core";
import DatePicker from "./common/datePicker";
import CloseIcon from "@material-ui/icons/Close";
import InputField from "./common/InputField";
import SaveOrClear from "./common/saveOrClear";

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
      <Grid container spacing={2}>
        <Grid item lg={3} sm={8} xs={12}>
          <InputField label="العنوان" />
        </Grid>
        <Grid item lg="auto" sm={4} xs={12}>
          <SelectOptions label="كلمة" />
        </Grid>
        <Grid item lg="auto" sm={4} xs={12}>
          <SelectOptions label="كلمة" />
        </Grid>
        <Grid item lg="auto" sm={4} xs={12}>
          <SelectOptions label="كلمة" />
        </Grid>
        <Hidden xsDown>
          <Grid item lg={3}>
            <SaveOrClear />
          </Grid>
        </Hidden>
      </Grid>
    </form>
  );
};

export default FilterRow;
