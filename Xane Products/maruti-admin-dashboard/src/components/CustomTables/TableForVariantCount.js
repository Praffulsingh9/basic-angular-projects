import React, { useState, useEffect } from "react";
import { Progress } from "reactstrap";
import { CustomTableRowForVariant } from "../CustomTableRow/CustomTableRow";
import ReactTable from "react-table";
export const TableForVariantCount = (props) => {
  const [pageSize, setPageSize] = useState(10);
  const [pagesCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setPageCount(
      Math.ceil(props.masterData.variants_count_data.length / pageSize)
    );
  }, []);

  const filterCaseInsensitive = (filter, row) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id].toLowerCase()).includes(filter.value.toLowerCase())
      : true;
  };

  const handleClick = (e, index) => {
    e.preventDefault();

    setCurrentPage(index);
  };

  return (
    <>
      {/* <Pagination aria-label="Page navigation example">
        <PaginationItem disabled={currentPage <= 0}>
          <PaginationLink
            onClick={(e) => handleClick(e, currentPage - 1)}
            previous
            href="#"
          />
        </PaginationItem>

        {[...Array(pagesCount)].map((page, i) => (
          <PaginationItem active={i === currentPage} key={i}>
            <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage >= pagesCount - 1}>
          <PaginationLink
            onClick={(e) => handleClick(e, currentPage + 1)}
            next
            href="#"
          />
        </PaginationItem>
      </Pagination>
      <Table responsive>
        <thead className="text-primary">
          <tr>
            <th className="text-center">#</th>
            <th>Make</th>
            <th>Model</th>
            <th>Variant</th>
            <th className="text-center">Progress</th>
            <th className="text-center">Count</th>
          </tr>
        </thead>
        <tbody>
          {props.masterData.variants_count_data
            .slice(
              currentPage * pageSize,
              (currentPage + 1) * pageSize
            )
            .map((variant,i) => {
              return (
                <CustomTableRowForVariant
                  variant={variant}
                  key={variant.variant_id}
                  index={(currentPage) * pageSize + i}
                />
              );
            })}
        </tbody>
      </Table> */}
      <ReactTable
        data={props.masterData.variants_count_data}
        filterable
        defaultFilterMethod={(filter, row) =>
          filterCaseInsensitive(filter, row)
        }
        resizable={false}
        columns={[
          {
            Header: "#",
            accessor: "variant_id",
            filterable: false,
            headerStyle: { textAlign: "center" },
          },
          {
            Header: "Make",
            accessor: "make",
            filterable: false,
            headerStyle: { textAlign: "center" },
          },
          {
            Header: "Model",
            accessor: "model",
            headerStyle: { textAlign: "center" },
          },
          {
            Header: "Variant",
            accessor: "variant",
            headerStyle: { textAlign: "center" },
            resizable: true,
          },
          {
            Header: "Progress",
            filterable: false,
            headerStyle: { textAlign: "center" },
            Cell: (props) => {
              console.log(props.original);
              return (
                <div className="progress-container progress-sm">
                  <Progress multi>
                    <span
                      style={{ position: "absolute", left: "45%", top: -2 }}
                    >{`${parseFloat(
                      (props.original.count / props.original.target) * 100
                    ).toFixed(1)} %`}</span>
                    <Progress
                      bar
                      max="100"
                      value={
                        (props.original.count / props.original.target) * 100
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
            filterable: false,
            headerStyle: { textAlign: "center" },
            style: { textAlign: "center" },
          },
        ]}
        defaultPageSize={10}
        showPaginationTop
        showPaginationBottom={false}
        className="-striped -highlight"
      />
    </>
  );
};
