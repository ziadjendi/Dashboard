import React from "react";
import { Switch, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  switch: {
    [theme.breakpoints.down("xs")]: {}
  }
}));
const SwitchCheck = () => {
  const classes = useStyles();
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true
  });
  return (
    <Switch
      checked={state.checkedA}
      onChange={handleChange("checkedA")}
      value="checkedA"
      className={classes.switch}
      size="small"
    />
  );
};

export default SwitchCheck;
