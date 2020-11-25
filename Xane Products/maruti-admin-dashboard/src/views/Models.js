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

const dataTable = [
  ["Maruti", "Baleno"],
  ["Maruti", "Ciaz"],
  ["Maruti", "Ignis"],
  ["Maruti", "S-Cross"],
  ["Maruti", "XL6"],
];

class Models extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          make: prop[0],
          model: prop[1],
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find((o) => o.id === key);
                  // alert(
                  //   "You've clicked EDIT button on \n{ \nModel: " +
                  //     obj.model +
                  //     "\n}."
                  // );
                  this.setState({
                    isEdit: true,
                    singleSelect: obj.make,
                    model: obj.model,
                    isOpen: true,
                  });
                }}
                color="warning"
                size="sm"
                className={classNames("btn-icon btn-link like", {
                  "btn-neutral": key < 5,
                })}
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
                className={classNames("btn-icon btn-link like", {
                  "btn-neutral": key < 5,
                })}
              >
                <i className="tim-icons icon-simple-remove" />
              </Button>{" "}
            </div>
          ),
        };
      }),
      isOpen: false,
      model: "",
      isEdit: false,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen, isEdit: !this.state.isEdit });
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
    let { isOpen, isEdit } = this.state;
    return (
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
                  <CardTitle tag="h4">Models</CardTitle>
                  <div className="actions-right">
                    <Button onClick={() => this.showModal()} color="info">
                      Add Model
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
                      Header: "Make",
                      accessor: "make",
                    },
                    {
                      Header: "Model",
                      accessor: "model",
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
        <Modal
          isOpen={isOpen}
          backdrop={true}
          contentClassName="model-background"
        >
          <ModalHeader close={this.closeBtn()}>
            <h4 className="modal-text">Add Model</h4>
          </ModalHeader>
          <ModalBody>
            <Form action="#">
              <label>Make</label>
              <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  onChange={(value) => this.setState({ singleSelect: value })}
                  options={[{ value: "1", label: "Nexa" }]}
                  placeholder="Select Make"
                />
              </FormGroup>
              <label>Model</label>
              <FormGroup>
                <Input
                  type="text"
                  autoComplete="off"
                  value={isEdit ? this.state.model : ""}
                  placeholder="Enter Model Name"
                />
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
      </div>
    );
  }
}

export default Models;
