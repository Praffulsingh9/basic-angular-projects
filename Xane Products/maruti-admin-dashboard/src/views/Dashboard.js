/*!

=========================================================
* Black Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// react plugin for creating vector maps
import { VectorMap } from "react-jvectormap";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
  Spinner,
} from "reactstrap";

import { TableForModelCount } from "../components/CustomTables/TableForModelCount";
import { TableForVariantCount } from "../components/CustomTables/TableForVariantCount";
import { TableForLocationCount } from "../components/CustomTables/TableForLocationCount";
import { TableForPartsCount } from "../components/CustomTables/TableForPartsCount";
import { TableForUsersCount } from "../components/CustomTables/TableForUsersCount";
// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
} from "../variables/charts.js";

import { fetchData } from "../store/actions/analytics";
import { connect } from "react-redux";

var mapData = {
  AU: 760,
  BR: 550,
  CA: 120,
  DE: 1300,
  FR: 540,
  GB: 690,
  GE: 200,
  IN: 2000,
  RO: 600,
  RU: 300,
  US: 2920,
};

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1",
      pageSize: 10,
      pagesCount: 0,
    };
  }

  componentDidMount() {
    this.props.fetchData();
    console.log(this.props.masterData);
  }
  setBgChartData = (name) => {
    this.setState({
      bigChartData: name,
    });
  };
  render() {
    return (
      <>
        {this.props.loading ? (
          <div
            className="content"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Spinner style={{ alignSelf: "center" }} />
          </div>
        ) : (
          <div className="content">
            <Row>
              <Col xs="12">
                <Card className="card-chart">
                  <CardHeader>
                    <Row>
                      <Col className="text-left" sm="6">
                        <h5 className="card-category">Total Images</h5>
                        <CardTitle tag="h2">Model Wise</CardTitle>
                      </Col>
                      <Col sm="6">
                        <ButtonGroup
                          className="btn-group-toggle float-right"
                          data-toggle="buttons"
                        >
                          <Button
                            color="info"
                            id="0"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data1",
                            })}
                            onClick={() => this.setBgChartData("data1")}
                          >
                            <input defaultChecked name="options" type="radio" />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Models
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-single-02" />
                            </span>
                          </Button>
                          {/* <Button
                            color="info"
                            id="1"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data2",
                            })}
                            onClick={() => this.setBgChartData("data2")}
                          >
                            <input name="options" type="radio" />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Purchases
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-gift-2" />
                            </span>
                          </Button>
                          <Button
                            color="info"
                            id="2"
                            size="sm"
                            tag="label"
                            className={classNames("btn-simple", {
                              active: this.state.bigChartData === "data3",
                            })}
                            onClick={() => this.setBgChartData("data3")}
                          >
                            <input name="options" type="radio" />
                            <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                              Sessions
                            </span>
                            <span className="d-block d-sm-none">
                              <i className="tim-icons icon-tap-02" />
                            </span>
                          </Button> */}
                        </ButtonGroup>
                      </Col>
                    </Row>
                  </CardHeader>
                  <CardBody>
                    <div className="chart-area">
                      <Line
                        data={this.props.masterData.model_trend.data}
                        options={this.props.masterData.model_trend.options}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <div className="info-icon text-center icon-warning">
                          <i className="tim-icons icon-chat-33" />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Number of Models</p>
                          <CardTitle tag="h3">5</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <div className="info-icon text-center icon-primary">
                          <i className="tim-icons icon-shape-star" />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Number of images</p>
                          <CardTitle tag="h3">+45k</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <div className="info-icon text-center icon-success">
                          <i className="tim-icons icon-single-02" />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Users</p>
                          <CardTitle tag="h3">300</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="3" md="6">
                <Card className="card-stats">
                  <CardBody>
                    <Row>
                      <Col xs="5">
                        <div className="info-icon text-center icon-danger">
                          <i className="tim-icons icon-molecule-40" />
                        </div>
                      </Col>
                      <Col xs="7">
                        <div className="numbers">
                          <p className="card-category">Number of Features</p>
                          <CardTitle tag="h3">257</CardTitle>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">Progress By Model</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <TableForModelCount masterData={this.props.masterData} />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">Progress By Variants</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <TableForVariantCount masterData={this.props.masterData} />
                  </CardBody>
                </Card>
              </Col>
              {/* <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">Location Wise Count</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <TableForLocationCount masterData={this.props.masterData} />
                  </CardBody>
                </Card>
              </Col> */}
              <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">Progress By Parts</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <TableForPartsCount masterData={this.props.masterData} />
                  </CardBody>
                </Card>
              </Col>
              <Col lg="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h5">Count by Users</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <TableForUsersCount masterData={this.props.masterData} />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        )}
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

const mapStateToProps = (state) => {
  return {
    masterData: state.analytics.data,
    loading: state.analytics.loading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
