import React from "react";
import {
  Hidden,
  Chip,
  makeStyles,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";
import SelectOptions from "./common/selectOptions";

const useStyles = makeStyles(theme => ({
  chip: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: 16,
    "&:focus": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black
    }
  }
}));

const TabTitles = [
  { key: 0, label: "تبويب1" },
  { key: 1, label: "تبويب2" },
  { key: 2, label: "تبويب3" },
  { key: 3, label: "تبويب4" },
  { key: 4, label: "تبويب5" }
];

const handleClick = e => {};

const TabsHeader = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Hidden smUp>
        <SelectOptions />
      </Hidden>
      <Hidden xsDown>
        {TabTitles.map(title => (
          <Chip
            key={title.key}
            label={title.label}
            onClick={handleClick}
            className={classes.chip}
          />
        ))}
      </Hidden>
    </React.Fragment>
  );
};

export default TabsHeader;
