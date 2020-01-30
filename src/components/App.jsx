import React from "react";
import SidBar from "./Sidbar";
import Hidden from "@material-ui/core/Hidden";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import NavBar from "./NavBar";
import RainBow from "./RainBow";
import Content from "./Content";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "Calibri",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500
  },

  palette: {
    primary: {
      main: "#00a5d9",
      contrastText: "#ffffff"
    }
  }
});

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const App = () => {
  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Hidden lgUp>
          <NavBar />
        </Hidden>
        <RainBow />
        <Hidden mdDown>
          <SidBar />
        </Hidden>
        <Content />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
