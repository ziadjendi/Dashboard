import React from "react";
import { createMuiTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import Dashboard from "./dashboard/dashboard";

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
        <Dashboard />
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
