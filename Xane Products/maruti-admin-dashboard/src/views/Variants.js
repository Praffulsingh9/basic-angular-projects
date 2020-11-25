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
    model: "Baleno",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Rs",
  },
  {
    model: "Baleno",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma",
  },
  {
    model: "Baleno",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "Baleno",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "Baleno",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Delta Smart Hybrid",
  },
  {
    model: "Baleno",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "S Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Delta Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Vdi",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Vdi+",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "shvs",
    variant: "Shvs Vdi",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "shvs",
    variant: "Shvs Vdi+",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Zdi",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Zdi+",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "shvs",
    variant: "Shvs Zdi",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "shvs",
    variant: "Shvs Zdi+",
  },
  {
    model: "Ciaz",
    fuel: "diesel",
    transmission: "manual",
    technology: "shvs",
    variant: "Shvs Rs",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Vxi+",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Zxi",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Zxi+",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "S",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Vxi",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Vxi+",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zxi",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zxi+",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Rs",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Delta 1.5l Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Zeta 1.5l Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Alpha 1.5l Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma 1.5l Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Delta 1.5l Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta 1.5l Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha 1.5l Smart Hybrid",
  },
  {
    model: "Ciaz",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "S 1.5l Smart Hybrid",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Delta Smart Hybrid",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta Smart Hybrid",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha Smart Hybrid",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma Smart Hybrid",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha 1.6",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Delta 1.6",
  },
  {
    model: "S-Cross",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta 1.6",
  },
  {
    model: "Ignis",
    fuel: "diesel",
    transmission: "automatic",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "Ignis",
    fuel: "diesel",
    transmission: "automatic",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "Ignis",
    fuel: "diesel",
    transmission: "automatic",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "Ignis",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "Ignis",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "Ignis",
    fuel: "diesel",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Delta",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Zeta",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Alpha",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Delta 1.2l Ags",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Zeta 1.2l Ags",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Alpha 1.2l Ags",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma 1.2l Ags",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Delta 1.2l Ags",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta 1.2l Ags",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha 1.2l Ags",
  },
  {
    model: "Ignis",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Sigma",
  },
  {
    model: "XL6",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Zeta Smart Hybrid",
  },
  {
    model: "XL6",
    fuel: "petrol",
    transmission: "automatic",
    technology: "regular",
    variant: "Alpha Smart Hybrid",
  },
  {
    model: "XL6",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Zeta Smart Hybrid",
  },
  {
    model: "XL6",
    fuel: "petrol",
    transmission: "manual",
    technology: "regular",
    variant: "Alpha Smart Hybrid",
  },
];

class Variants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          model: prop.model,
          variant: prop.variant,
          fuel: prop.fuel.toUpperCase(),
          technology: prop.technology.toUpperCase(),
          transmission: prop.transmission.toUpperCase(),
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
                  <CardTitle tag="h4">Variants</CardTitle>
                  <div className="actions-right">
                    <Button onClick={() => this.showModal()} color="info">
                      Add Variant
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
                      Header: "Model",
                      accessor: "model",
                    },
                    {
                      Header: "Variant",
                      accessor: "variant",
                    },
                    {
                      Header: "Fuel",
                      accessor: "fuel",
                    },
                    {
                      Header: "Transmission",
                      accessor: "transmission",
                    },
                    {
                      Header: "Technology",
                      accessor: "technology",
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
            <h4 className="modal-text">Add variant</h4>
          </ModalHeader>
          <ModalBody>
            <Form action="#">
              <label>Model</label>
              <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  onChange={(value) => this.setState({ singleSelect: value })}
                  options={[
                    { value: "1", label: "Baleno" },
                    { value: "2", label: "Ciaz" },
                    { value: "3", label: "Ignis" },
                    { value: "4", label: "S-Cross" },
                    { value: "5", label: "XL6" },
                  ]}
                  placeholder="Select Model"
                />
              </FormGroup>
              <label>Variant</label>
              <FormGroup>
                <Input type="text" autoComplete="off" />
              </FormGroup>
              <label>Fuel Type</label>
              <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  onChange={(value) => this.setState({ singleSelect: value })}
                  options={[
                    { value: "1", label: "Petrol" },
                    { value: "2", label: "Diesel" },
                  ]}
                  placeholder="Select Fuel Type"
                />
              </FormGroup>
              <label>Transmission</label>
              <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  onChange={(value) => this.setState({ singleSelect: value })}
                  options={[
                    { value: "1", label: "Automatic" },
                    { value: "2", label: "Manual" },
                  ]}
                  placeholder="Select Transmission"
                />
              </FormGroup>
              <label>Technology</label>
              <FormGroup>
                <Select
                  className="react-select info"
                  classNamePrefix="react-select"
                  name="singleSelect"
                  value={this.state.singleSelect}
                  onChange={(value) => this.setState({ singleSelect: value })}
                  options={[
                    { value: "1", label: "Regular" },
                    { value: "2", label: "SHVS" },
                  ]}
                  placeholder="Select Technology"
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

export default Variants;
