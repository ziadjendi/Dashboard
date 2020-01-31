import React from "react";
import { TableBody, Table, TableContainer } from "@material-ui/core";
import Row from "./Row";

const TabContent = props => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          {[...Array(8).keys()].map(index => (
            <Row key={"rowId" + index} id={"rowId" + index} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabContent;
