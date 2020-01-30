import React from "react";
import {
  TableBody,
  Table,
  TableContainer,
  makeStyles,
  Paper
} from "@material-ui/core";
import Row from "./Row";
const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const TabContent = () => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <Row id="1" />
          <Row id="2" />
          <Row id="3" />
          <Row id="4" />
          <Row id="5" />
          <Row id="6" />
          <Row id="7" />
          <Row id="8" />
          {/* {[...Array(8).keys()].map(index => (
            <Row id={index + 1} />
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabContent;
