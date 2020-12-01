import React from "react";
import { CustomTableRow } from "../CustomTableRow/CustomTableRow";
import { Table, Progress } from "reactstrap";
import ReactTable from "react-table";
export const TableForModelCount = (props) => {
  const filterCaseInsensitive = (filter, row) => {
    console.log(filter, row);
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id].toLowerCase()).includes(
          filter.value.toLowerCase()
        )
      : true;
  };
  return (
    // <Table responsive>
    //   <thead className="text-primary">
    //     <tr>
    //       <th className="text-center">#</th>
    //       <th>Make</th>
    //       <th>Model</th>
    //       <th className="text-center">Progress</th>
    //       <th className="text-center">Count</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {props.masterData.model_count_data.map((model, i) => {
    //       return (
    //         <CustomTableRow model={model} key={model.model_id} index={i} />
    //       );
    //     })}
    //   </tbody>
    // </Table>

    <ReactTable
      data={props.masterData.model_count_data}
      filterable
      defaultFilterMethod={(filter, row) => filterCaseInsensitive(filter, row)}
      resizable={false}
      columns={[
        {
          Header: "#",
          accessor: "model_id",
          filterable: false,
          headerStyle:{textAlign:'center'},
        },
        {
          Header: "Make",
          accessor: "make",
          filterable: false,
          headerStyle:{textAlign:'center'},
        },
        {
          Header: "Model",
          accessor: "model",
          headerStyle:{textAlign:'center'},
        },
        {
          Header: "Progress",
          filterable: false,
          style:{minWidth:150},
          headerStyle:{textAlign:'center'},
          Cell: (props) => {
            console.log(props.original);
            return (
              <div className="progress-container progress-sm">
                <Progress multi>
                  <span style={{position:'absolute',left:'45%',top:-2}}>{`${parseFloat(
                    (props.original.count / props.original.target) * 100
                  ).toFixed(1)} %`}</span>
                  <Progress
                    bar
                    max="100"
                    value={
                      ((props.original.count / props.original.target)) * 100
                    }
                  />
                </Progress>
              </div>
            );
          },
        },
        {
          Header: "Count",
          accessor: "count",
          filterable:false,
          headerStyle:{textAlign:'center'},
          style:{textAlign:'center'}
        },
      ]}
      defaultPageSize={5}
      showPaginationTop
      showPaginationBottom={false}
      className="-striped -highlight"
    />
  );
};
