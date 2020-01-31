import React from "react";
import { Hidden, Chip, makeStyles } from "@material-ui/core";
import SelectOptions from "../../common/inputs/selectOptions";

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
  { value: 0, label: "تبويب1" },
  { value: 1, label: "تبويب2" },
  { value: 2, label: "تبويب3" },
  { value: 3, label: "تبويب4" },
  { value: 4, label: "تبويب5" }
];

const handleClick = e => {};

const TabsHeader = props => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Hidden smUp>
        <div
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 0
          }}
        >
          <SelectOptions options={TabTitles} />
        </div>
      </Hidden>
      <Hidden xsDown>
        {TabTitles.map(title => (
          <Chip
            key={title.value}
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
