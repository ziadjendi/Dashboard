import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  datePicker: {
    backgroundColor: theme.palette.common.white,
    lineHeight: 40,
    width: "100%"
  }
}));

export default function DatePickerComp({ id, label = "" }) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <React.Fragment>
      <Typography variant="subtitle1">{label}</Typography>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          inputVariant="outlined"
          format="MM/dd/yyyy"
          margin="none"
          openTo="date"
          id={id}
          variant="dialog"
          className={classes.datePicker}
          value={selectedDate}
          onChange={handleDateChange}
          showTodayButton
        />
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}
