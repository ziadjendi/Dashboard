import "date-fns";
import React from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {
  TableCell,
  TableRow,
  TableBody,
  Table,
  TableContainer,
  makeStyles,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Link,
  Switch
} from "@material-ui/core";
import Row from "./Row";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const TabContent = () => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabContent;
