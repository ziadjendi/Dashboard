import React from "react";
import { TextField, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  inputField: {
    backgroundColor: theme.palette.common.white
  }
}));

const InputField = ({ label, id }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="subtitle1">{label}</Typography>
      <TextField
        variant="outlined"
        margin="none"
        fullWidth
        placeholder="عنوان ما"
        className={classes.inputField}
        id={id}
      />
    </React.Fragment>
  );
};
export default InputField;
