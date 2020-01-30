import React from "react";
import {
  Grid,
  Paper,
  makeStyles,
  TableContainer,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Chip,
  Hidden
} from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  chip: {
    width: 50,
    height: 50,
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    "&:focus": {
      backgroundColor: theme.palette.common.white,
      borderColor: theme.palette.primary.main
    }
  }
}));
const handleClick = e => {};

const TabHeader = () => {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <Hidden mdDown>
            <TableRow key="TabHeader1">
              {[...Array(14).keys()].map(item => (
                <TableCell key={item + "key"} style={{ padding: 5 }}>
                  <Chip
                    key={item + "key"}
                    label={item + 1}
                    onClick={handleClick}
                    className={classes.chip}
                    variant="outlined"
                  />
                  <Chip
                    key={item + "key"}
                    label={item + 15}
                    onClick={handleClick}
                    className={classes.chip}
                    variant="outlined"
                  />
                </TableCell>
              ))}
            </TableRow>
          </Hidden>
          <Hidden lgUp>
            <TableRow key="TabHeader1">
              {[...Array(28).keys()].map(item => (
                <TableCell key={item + "key"} style={{ padding: 5 }}>
                  <Chip
                    key={item + "key"}
                    label={item + 1}
                    onClick={handleClick}
                    className={classes.chip}
                    variant="outlined"
                  />
                </TableCell>
              ))}
            </TableRow>
          </Hidden>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabHeader;
