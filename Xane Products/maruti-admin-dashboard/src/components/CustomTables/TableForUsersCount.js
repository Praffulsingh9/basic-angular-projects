import React, { useState, useEffect } from "react";
import { Table, Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { CustomTableRowForUser } from "../CustomTableRow/CustomTableRow";
import ReactTable from 'react-table';

export const TableForUsersCount = (props) => {
  const [pageSize, setPageSize] = useState(10);
  const [pagesCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setPageCount(
      Math.ceil(props.masterData.users_count_data.length / pageSize)
    );
  }, []);


  const filterCaseInsensitive = (filter, row) => {
    console.log(filter, row);
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id].toLowerCase()).includes(
          filter.value.toLowerCase()
        )
      : true;
  };

  const handleClick = (e, index) => {
    e.preventDefault();

    setCurrentPage(index);
  };

  return (
    <>
      {/* <Pagination style={{flexWrap:'wrap'}}>
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
            <th>Name</th>
            <th>Phone</th>
            <th className="text-center">Count</th>
          </tr>
        </thead>
        <tbody>
          {props.masterData.users_count_data
            .slice(
              currentPage * pageSize,
              (currentPage + 1) * pageSize
            )
            .map((user,i) => {
              return (
                <CustomTableRowForUser
                  user={user}
                  key={user.id}
                  index={(currentPage) * pageSize + i}
                />
              );
            })}
        </tbody>
      </Table> */}
      <ReactTable
      data={props.masterData.users_count_data}
      filterable
      defaultFilterMethod={(filter, row) => filterCaseInsensitive(filter, row)}
      resizable={false}
      columns={[
        {
          Header: "#",
          accessor:'id',
          filterable: false,
          headerStyle:{textAlign:'center'},

        },
        {
          Header: "NAME",
          accessor: "first_name",
          headerStyle:{textAlign:'center'},
        },
        {
          Header: "PHONE",
          accessor: "phone",
          headerStyle:{textAlign:'center'},
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
    </>
  );
};
