import React from "react";
import {
  makeStyles,
  Hidden,
  Paper,
  Chip,
  Grid,
  TableContainer,
  Table,
  TableBody
} from "@material-ui/core";
import Header from "./header";
import TabContent from "./TabContent";
import FilterRow from "./FilterRow";
import SelectOptions from "./common/selectOptions";
import TabsHeader from "./TabsHeader";
import TabHeader from "./TabHeader";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: "eeeeee",
    padding: theme.spacing(3),
    [theme.breakpoints.up("lg")]: {
      marginRight: drawerWidth
    },
    "&>*": {}
  },
  paperout: {
    borderRadius: 20,
    height: "100%",
    marginTop: "2em",
    backgroundColor: theme.palette.primary.main,
    padding: 0
  },
  paperin: {
    borderRadius: 20,
    padding: theme.spacing(2),
    height: "100%",
    marginTop: "2em",
    color: theme.palette.text.secondary
  }
}));

const Content = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <Hidden mdDown>
        <Header />
      </Hidden>
      <FilterRow />
      <Paper className={classes.paperout}>
        <TabsHeader />
        <Paper className={classes.paperin}>
          <TabHeader />
          <TabContent />
        </Paper>
      </Paper>
    </main>
  );
};

export default Content;
