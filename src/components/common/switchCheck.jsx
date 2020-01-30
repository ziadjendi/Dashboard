import React from "react";
import { Switch } from "@material-ui/core";
const SwitchCheck = () => {
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
      inputProps={{ "aria-label": "secondary checkbox" }}
    />
  );
};

export default SwitchCheck;
