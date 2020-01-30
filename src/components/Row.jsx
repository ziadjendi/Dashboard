import React from "react";
import { TableCell, TableRow, Typography, Link } from "@material-ui/core";
import DatePicker from "./common/datePicker";
import SelectOptions from "./common/selectOptions";
import SwitchCheck from "./common/switchCheck";
const row = {
  id: "id1",
  description: (
    <Typography paragraph>عنوان ما أكثر من 8 كلمات في وصف الحالة</Typography>
  ),
  datepicker: id => <DatePicker id={id} />,
  selectOptions: <SelectOptions />,
  details: preventDefault => (
    <Link href="#" onClick={preventDefault} variant="body2">
      {"تفاصيل"}
    </Link>
  ),
  switch: <SwitchCheck />
};

const Row = () => {
  //   const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  return (
    <TableRow key={row.id}>
      <TableCell component="th" scope="row" align="right">
        {row.description}
      </TableCell>
      <TableCell align="right">{row.datepicker(row.id)}</TableCell>
      <TableCell align="right">{row.selectOptions}</TableCell>
      <TableCell align="right">{row.details(preventDefault)}</TableCell>
      <TableCell align="right">{row.switch}</TableCell>
    </TableRow>
  );
};

export default Row;
