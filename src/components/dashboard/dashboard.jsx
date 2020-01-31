import React from "react";
import { Hidden } from "@material-ui/core";
import NavBar from "./navBar/NavBar";
import RainBow from "./../common/RainBow";
import SidBar from "./sideBar/Sidbar";
import Content from "./content/Content";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Hidden lgUp>
        <NavBar />
      </Hidden>
      <RainBow />
      <Hidden mdDown>
        <SidBar />
      </Hidden>
      <Content />
    </React.Fragment>
  );
};

export default Dashboard;
