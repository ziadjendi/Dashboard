import React from "react";
import { TableCell, TableRow, Typography, Link } from "@material-ui/core";
import DatePickerComp from "./common/DatePickerComp";
import SelectOptions from "./common/selectOptions";
import SwitchCheck from "./common/switchCheck";
const row = {
  id: id => "rowId" + id,
  description: (
    <Typography paragraph>عنوان ما أكثر من 8 كلمات في وصف الحالة</Typography>
  ),
  datepicker: id => <DatePickerComp id={id} />,
  selectOptions: <SelectOptions />,
  details: preventDefault => (
    <Link href="#" onClick={preventDefault} variant="body2">
      {"تفاصيل"}
    </Link>
  ),
  switch: <SwitchCheck />
};
const preventDefault = event => event.preventDefault();

const Row = ({ id }) => {
  //   const classes = useStyles();
  return (
    <TableRow key={row.id(id)} id={row.id(id)}>
      <TableCell component="th" scope="row" align="right">
        {row.description}
      </TableCell>
      <TableCell align="right">{row.datepicker(row.id(id))}</TableCell>
      <TableCell align="right">{row.selectOptions}</TableCell>
      <TableCell align="right">{row.details(preventDefault)}</TableCell>
      <TableCell align="right">{row.switch}</TableCell>
    </TableRow>
  );
};

export default Row;
