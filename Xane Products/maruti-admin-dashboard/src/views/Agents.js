import React, { Component } from "react";
import classNames from "classnames";
// react component for creating dynamic tables
import ReactTable from "react-table";
import "./Models.css";

import Select from "react-select";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Form,
  FormGroup,
  Input,
} from "reactstrap";

import classnames from "classnames";

let dataTable = [
  {
    role: "consumer",
    first_name: "John",
    last_name: "Doe",
    gender: "male",
    date_of_birth: "1970-01-13 00:00:00",
    email: "john.doe@email.com",
    phone: "9876543210",
  },
  {
    role: "field-agent",
    first_name: "Jane",
    last_name: "Doe",
    gender: "female",
    date_of_birth: "1970-01-13 00:00:00",
    email: "jane.doe@email.com",
    phone: "9876543210",
  },
  {
    role: "field-agent",
    first_name: "Xane",
    last_name: "AI",
    gender: "female",
    date_of_birth: "1970-04-01 00:00:00",
    email: "xane.ai@email.com",
    phone: "9879879870",
  },
];

class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          first_name: prop.first_name,
          last_name: prop.last_name,
          role: prop.role,
          gender: prop.gender.toUpperCase(),
          email: prop.email,
          phone: prop.phone,
          date_of_birth: prop.date_of_birth.split(" ")[0],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find((o) => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nModel: " +
                      obj.variant +
                      "\n}."
                  );
                }}
                color="warning"
                size="sm"
                className="btn-icon btn-link like btn-neutral"
              >
                <i className="tim-icons icon-pencil" />
              </Button>{" "}
              {/* use this button to remove the data row */}
              <Button
                onClick={() => {
                  var data = this.state.data;
                  data.find((o, i) => {
                    if (o.id === key) {
                      // here you should add some custom code so you can delete the data
                      // from this component and from your server as well
                      data.splice(i, 1);
                      console.log(data);
                      return true;
                    }
                    return false;
                  });
                  this.setState({ data: data });
                }}
                color="danger"
                size="sm"
                className={classNames("btn-icon btn-link like")}
              >
                <i className="tim-icons icon-simple-remove" />
              </Button>{" "}
            </div>
          ),
        };
      }),
      isOpen: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  showModal = () => {
    this.setState({ isOpen: true });
  };

  closeBtn = () => {
    return (
      <Button
        size="sm"
        className="btn-icon btn-link like btn-neutral"
        onClick={() => this.toggle()}
      >
        &times;
      </Button>
    );
  };

  render() {
    let { isOpen } = this.state;
    return (
      <>
        <Modal
          isOpen={isOpen}
          backdrop={true}
          contentClassName="model-background"
          style={{ maxHeight: "50vh" }}
        >
          <ModalHeader close={this.closeBtn()}>
            <h4 className="modal-text">Add User</h4>
          </ModalHeader>
          <ModalBody>
            <Form action="#">
              <Row>
                <Col md="6">
                  <label>First Name</label>
                  <FormGroup>
                    <Input type="text" autoComplete="off" />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <label>Last Name</label>
                  <FormGroup>
                    <Input type="text" autoComplete="off" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md="6">
                  <label>Gender</label>
                  <FormGroup>
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      name="singleSelect"
                      value={this.state.singleSelect}
                      onChange={(value) =>
                        this.setState({ singleSelect: value })
                      }
                      options={[
                        { value: "1", label: "Male" },
                        { value: "2", label: "Female" },
                      ]}
                      placeholder="Gender"
                    />
                  </FormGroup>
                </Col>
                <Col md="6">
                  <label>Role</label>
                  <FormGroup>
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      name="singleSelect"
                      value={this.state.singleSelect}
                      onChange={(value) =>
                        this.setState({ singleSelect: value })
                      }
                      options={[
                        { value: "1", label: "Consumer" },
                        { value: "2", label: "Agent" },
                      ]}
                      placeholder="Role"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <label>Email</label>
              <FormGroup>
                <Input type="email" autoComplete="off" />
              </FormGroup>
              <label>Phone</label>
              <FormGroup>
                <Input type="tel" autoComplete="off" />
              </FormGroup>
              <label>Date Of Birth</label>
              <FormGroup>
                <Input type="date" autoComplete="off" />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              className="btn-fill"
              color="info"
              type="submit"
              onClick={() => this.toggle()}
            >
              Submit
            </Button>
          </ModalFooter>
        </Modal>
        <div className="content">
          <Row className="mt-5">
            <Col xs={12} md={12}>
              <Card>
                <CardHeader>
                  <Row
                    style={{
                      justifyContent: "space-between",
                      padding: "0px 20px",
                    }}
                  >
                    <CardTitle tag="h4">Users</CardTitle>
                    <div className="actions-right">
                      <Button onClick={() => this.showModal()} color="info">
                        Add User
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    filterable
                    resizable={false}
                    columns={[
                      {
                        Header: "First Name",
                        accessor: "first_name",
                      },
                      {
                        Header: "Last Name",
                        accessor: "last_name",
                      },
                      {
                        Header: "Gender",
                        accessor: "gender",
                      },
                      {
                        Header: "Role",
                        accessor: "role",
                      },
                      {
                        Header: "Email",
                        accessor: "email",
                        resizable: true,
                      },
                      {
                        Header: "Phone",
                        accessor: "phone",
                      },
                      {
                        Header: "Date of Birth",
                        accessor: "date_of_birth",
                      },
                      {
                        Header: "Actions",
                        accessor: "actions",
                        sortable: false,
                        filterable: false,
                      },
                    ]}
                    defaultPageSize={10}
                    showPaginationTop
                    showPaginationBottom={false}
                    className="-striped -highlight"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Variants;
