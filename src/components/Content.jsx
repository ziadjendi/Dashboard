import React from "react";
import {
  makeStyles,
  Typography,
  Hidden,
  Paper,
  Chip,
  Grid
} from "@material-ui/core";
import MainSerach from "./mainSearch";
import TabContent from "./TabContent";
import FilterRow from "./FilterRow";
import SelectOptions from "./common/selectOptions";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: "eeeeee",
    padding: theme.spacing(3),
    [theme.breakpoints.up("lg")]: {
      marginRight: drawerWidth
    },
    "&>*": {
      margin: theme.spacing(4)
    }
  },
  paperout: {
    borderRadius: 20,
    height: "100vh",
    marginTop: "2em",
    backgroundColor: theme.palette.primary.main,
    padding: 0
  },
  paperin: {
    borderRadius: 20,
    padding: theme.spacing(2),
    height: "100vh",
    marginTop: "2em",
    color: theme.palette.text.secondary
  },
  chip: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:focus": {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.main
    }
  },
  paper: {
    padding: theme.spacing(2.54),
    margin: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
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

const Content = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Hidden mdDown>
        <MainSerach />
      </Hidden>

      <FilterRow />

      <Paper className={classes.paperout}>
        <Hidden smUp>
          <SelectOptions />
        </Hidden>
        <Hidden xsDown>
          <div
            style={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              display: "table"
            }}
          >
            {TabTitles.map(title => (
              <Chip
                key={title.key}
                label={title.label}
                onClick={handleClick}
                className={classes.chip}
              />
            ))}
          </div>
        </Hidden>
        <Paper className={classes.paperin}>
          <Grid container direction="column">
            <Grid item key="head">
              <Grid container>
                {[...Array(28).keys()].map(item => (
                  <Grid item key={item + "key"}>
                    <Paper className={classes.paper}>{item + 1}</Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item key="body">
              <TabContent />
            </Grid>
          </Grid>
        </Paper>
      </Paper>
    </main>
  );
};

export default Content;
