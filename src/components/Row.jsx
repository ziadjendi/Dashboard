import React from "react";
import {
  TableCell,
  TableRow,
  Typography,
  Link,
  Hidden,
  Grid
} from "@material-ui/core";
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
    <React.Fragment>
      <TableRow key={row.id(id)} id={row.id(id)}>
        <Hidden xsDown>
          <TableCell component="th" scope="row" align="right">
            {row.description}
          </TableCell>
          <TableCell align="right">{row.datepicker(row.id(id))}</TableCell>
          <TableCell align="right">{row.selectOptions}</TableCell>
          <TableCell align="right">{row.details(preventDefault)}</TableCell>
          <TableCell align="right">{row.switch}</TableCell>
        </Hidden>
        <Hidden smUp>
          <TableCell component="th" scope="row" align="right">
            <Grid container direction="column">
              <Grid item>{row.description}</Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6}>
                    {row.datepicker(row.id(id))}
                  </Grid>
                  <Grid item xs={5}>
                    {row.selectOptions}
                  </Grid>
                  <Grid item xs={1}>
                    {row.switch}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </TableCell>
        </Hidden>
      </TableRow>
    </React.Fragment>
  );
};

export default Row;
