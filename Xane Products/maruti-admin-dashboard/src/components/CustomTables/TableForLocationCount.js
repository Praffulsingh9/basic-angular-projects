import React from "react";
import { CustomTableRowForLocation } from "../CustomTableRow/CustomTableRow";
import { Table } from "reactstrap";

export const TableForLocationCount = (props) => {
  return (
    <Table responsive>
      <thead className="text-primary">
        <tr>
          <th className="text-center">#</th>
          <th>Longitude</th>
          <th>Latitude</th>
          <th className="text-center">Count</th>
        </tr>
      </thead>
      <tbody>
        {props.masterData.location_count_data.map((l, i) => {
          return <CustomTableRowForLocation location={l} key={i} index={i} />;
        })}
      </tbody>
    </Table>
  );
};
