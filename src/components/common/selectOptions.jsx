import React from "react";
import {
  FormControl,
  Select,
  MenuItem,
  Typography,
  makeStyles
} from "@material-ui/core";
import DownArrow from "./downArrow";
const useStyles = makeStyles(theme => ({
  select: {
    backgroundColor: theme.palette.common.white,
    height: 55,
    width: "100%"
  }
}));

const SelectOptions = ({ label }) => {
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
        <MenuItem value={10}>خيار أول</MenuItem>
        <MenuItem value={20}>خيار ثاني</MenuItem>
        <MenuItem value={30}>خيار ثالث</MenuItem>
      </Select>
    </React.Fragment>
  );
};

export default SelectOptions;