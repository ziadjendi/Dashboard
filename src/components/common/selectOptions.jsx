import React from "react";
import { Select, MenuItem, Typography, makeStyles } from "@material-ui/core";
import DownArrow from "./downArrow";
const useStyles = makeStyles(theme => ({
  select: {
    backgroundColor: theme.palette.common.white,
    height: 55,
    width: "100%"
  }
}));
const defualtOptions = [
  { label: "خيار أول", value: 10 },
  { label: "خيار ثاني", value: 20 },
  { label: "خيار ثالث", value: 30 },
  { label: "خيار رابع", value: 40 }
];
const SelectOptions = ({ label, options = defualtOptions }) => {
  const classes = useStyles();

  const [option, setOption] = React.useState("0");

  const handleChange = event => {
    setOption(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="subtitle1" align="right">
        {label}
      </Typography>
      <Select
        IconComponent={DownArrow}
        onChange={handleChange}
        displayEmpty
        className={classes.select}
        variant="outlined"
        value={option}
      >
        <MenuItem value="0" selected>
          قائمة منسدلة
        </MenuItem>
        {options.map(option => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </React.Fragment>
  );
};

export default SelectOptions;
