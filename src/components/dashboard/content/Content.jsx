import React from "react";
import { makeStyles, Hidden, Paper, Grid } from "@material-ui/core";
import Header from "./header";
import TabContent from "./TabContent";
import FilterRow from "./FilterRow";
import TabsHeader from "./TabsHeader";
import TabHeader from "./TabHeader";
import SaveOrClear from "../../common/buttons/saveOrClear";

const drawerWidth = 250;

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    backgroundColor: "eeeeee",
    padding: theme.spacing(2),

    [theme.breakpoints.up("lg")]: {
      marginRight: drawerWidth
    }
  },
  paperout: {
    [theme.breakpoints.up("sm")]: {
      borderRadius: 20
    },
    height: "100%",
    marginTop: "2em",
    backgroundColor: theme.palette.primary.main,
    padding: 0
  },
  paperin: {
    [theme.breakpoints.up("sm")]: {
      borderRadius: 20
    },
    padding: theme.spacing(2),
    height: "100%",
    marginTop: "2em",
    color: theme.palette.text.secondary
  }
}));

const Content = props => {
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
          <Hidden smUp>
            <Grid container justify="space-evenly">
              <Grid item xs={12}>
                <SaveOrClear saveLabel="اختيار" />
              </Grid>
            </Grid>
          </Hidden>
        </Paper>
      </Paper>
    </main>
  );
};

export default Content;
