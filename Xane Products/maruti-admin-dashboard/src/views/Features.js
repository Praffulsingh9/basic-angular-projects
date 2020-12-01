import React, { Component } from "react";
import classNames from "classnames";
// react component for creating dynamic tables
import ReactTable from "react-table";
import "./Models.css";

import ImageUpload from "../components/CustomUpload/ImageUpload";

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
  {
    feature: "Ignition Switch",
    variant: "Alpha",
    icon_url:
      "https://s3.ap-south-1.amazonaws.com/xane-assist-maruti/variants/1/features/1/assets/ignition_switch.jpg",
    text: 'Use this switch to turn the ignition "ON" or "OFF"',
  },
  {
    feature: "ORVM",
    variant: "Alpha",
    icon_url:
      "https://s3.ap-south-1.amazonaws.com/xane-assist-maruti/variants/1/features/2/assets/Outside_Rearview_Mirror_Switch.jpeg",
    text: "Use this switch to adjust your outside rear view mirrors.",
  },
  {
    feature: "Power Window Switch",
    variant: "Alpha",
    icon_url:
      "https://s3.ap-south-1.amazonaws.com/xane-assist-maruti/variants/1/features/3/assets/Power_Window_Switch.jpg",
    text: "This panel can be used to control all the windows from driver seat.",
  },
  {
    feature: "Low Fuel Indicator",
    variant: "Alpha",
    icon_url:
      "https://s3.ap-south-1.amazonaws.com/xane-assist-maruti/variants/1/features/4/assets/Low_Fuel_Warning_Light.png",
    text: "Please get your fuel tank refilled.",
  },
  {
    feature: "Steering Switch - Voice Call & Bluetooth",
    variant: "Alpha",
    icon_url:
      "https://s3.ap-south-1.amazonaws.com/xane-assist-maruti/variants/1/features/5/assets/Steering_Switch_Voice_Call_and_Bluetooth.png",
    text:
      "This is used to control phone calls and activate speech recognition.",
  },
  {
    feature: "Keys",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Door Locks",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Keyless Push Start System Remote Controller/",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Keyless Entry System Transmitter",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Security System",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Theft deterrent light",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Windows",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Mirrors",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Front Seats",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Rear Seats",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Seat Belts and Child Restraint Systems",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Child Restraint System For India",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Supplemental Restraint System (Airbags)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Instrument Cluster (Type A)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Speedometer",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Brightness Control",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Information Display",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Instrument Cluster (Type B)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Speedometer",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Tachometer",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Fuel Gauge",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Temperature Gauge",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Brightness Control",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Information Display",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Instrument Cluster (Type C)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Speedometer",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Tachometer",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Fuel Gauge",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Temperature Gauge",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Brightness Control",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Information Display",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Warning and Indicator Lights",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Lighting Control Lever",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Headlight Leveling Switch",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Turn Signal Control Lever",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Hazard Warning Switch",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Windshield Wiper and Washer Lever",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Tilt/Telescoping  Steering Lock Lever",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Horn",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Heated Rear Window Switch",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Exhaust Gas Warning",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Daily Inspection Checklist",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine Oil Consumption",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine Switch (Vehicle with keyless push start system)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Keyless Push Start System",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Parking Brake Lever",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Pedal",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Starting the Engine(Vehicle without keyless push start system)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Starting the Engine(Vehicle with keyless push start system)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Using the Transmission",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Gearshift Indicator",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Smart Hybrid",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine A-STOP system (engine auto stop start system)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Parking Sensors",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Rearview Camera",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Braking",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Running-in",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Catalytic Converter",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Improving Fuel Economy",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Highway Driving",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Driving on Hills",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Driving on Slippery Roads",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Off-road Driving",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "When Encountering a Flooded Area",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Do’s and Dont’s for Safe Driving",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Margin for Safety",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Fuel Filler Cap",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine Hood",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Sun Visor",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Interior Light",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Accessory Socket",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "AUX/USB Socket",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Assist Grips",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Coat Hooks",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Glove Box",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Cup Holder and Storage Area",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Footrest",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Floor Mats",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Luggage Compartment Hook",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Luggage Compartment Cover",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Frame Hooks",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Heating and Air Conditioning System",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Manual Heating and Air Conditioning System",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Automatic Heating and Air Conditioning System",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Climate control",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Radio Antenna",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Installation of Radio Frequency Transmitters",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Audio System",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Talk button",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Vehicle Loading",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Trailer Towing",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Maintenance Schedule",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Periodic Maintenance Schedule",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Drive Belt",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine Oil and Filter",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine Coolant",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Air Cleaner",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Spark Plugs (Petrol engine)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Gear Oil",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Clutch",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Continuously Variable Transmission (CVT) Fluid",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Fuel Filter (Diesel engine)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Brakes",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Steering",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Tires",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Battery",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Fuses",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Headlight Aiming",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Bulb Replacement",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Wiper Blades",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Windshield Washer Fluid",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Air Conditioning System",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Tire Changing Tool",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Jacking Instructions",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Changing Wheels",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Jump Starting Instructions",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Towing your vehicle",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine trouble: Starter does not operate",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine trouble: Flooded engine",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Engine trouble: Overheating",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Warning Triangle",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Corrosion Prevention",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Vehicle Cleaning",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "Vehicle Identification",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "FASTag",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
  {
    feature: "High Security Registration Plate (HSRP)",
    variant: "Alpha",
    icon_url: "",
    text: null,
  },
];

let variants = [
  {
    value: 1,
    label: "Alpha",
    model_id: 1,
  },
  {
    value: 106,
    label: "Rs",
    model_id: 1,
  },
  {
    value: 107,
    label: "Sigma",
    model_id: 1,
  },
  {
    value: 108,
    label: "Delta",
    model_id: 1,
  },
  {
    value: 109,
    label: "Zeta",
    model_id: 1,
  },
  {
    value: 110,
    label: "Delta",
    model_id: 1,
  },
  {
    value: 111,
    label: "Zeta",
    model_id: 1,
  },
  {
    value: 112,
    label: "Alpha",
    model_id: 1,
  },
  {
    value: 113,
    label: "Sigma",
    model_id: 1,
  },
  {
    value: 114,
    label: "Delta",
    model_id: 1,
  },
  {
    value: 115,
    label: "Zeta",
    model_id: 1,
  },
  {
    value: 116,
    label: "Alpha",
    model_id: 1,
  },
  {
    value: 117,
    label: "Delta Smart Hybrid",
    model_id: 1,
  },
  {
    value: 118,
    label: "Zeta Smart Hybrid",
    model_id: 1,
  },
  {
    value: 119,
    label: "S Smart Hybrid",
    model_id: 2,
  },
  {
    value: 120,
    label: "Sigma Smart Hybrid",
    model_id: 2,
  },
  {
    value: 121,
    label: "Delta Smart Hybrid",
    model_id: 2,
  },
  {
    value: 122,
    label: "Zeta Smart Hybrid",
    model_id: 2,
  },
  {
    value: 123,
    label: "Alpha Smart Hybrid",
    model_id: 2,
  },
  {
    value: 124,
    label: "Vdi",
    model_id: 2,
  },
  {
    value: 125,
    label: "Vdi+",
    model_id: 2,
  },
  {
    value: 126,
    label: "Shvs Vdi",
    model_id: 2,
  },
  {
    value: 127,
    label: "Shvs Vdi+",
    model_id: 2,
  },
  {
    value: 128,
    label: "Zdi",
    model_id: 2,
  },
  {
    value: 129,
    label: "Zdi+",
    model_id: 2,
  },
  {
    value: 130,
    label: "Shvs Zdi",
    model_id: 2,
  },
  {
    value: 131,
    label: "Shvs Zdi+",
    model_id: 2,
  },
  {
    value: 132,
    label: "Shvs Rs",
    model_id: 2,
  },
  {
    value: 133,
    label: "Delta",
    model_id: 2,
  },
  {
    value: 134,
    label: "Zeta",
    model_id: 2,
  },
  {
    value: 135,
    label: "Alpha",
    model_id: 2,
  },
  {
    value: 136,
    label: "Vxi+",
    model_id: 2,
  },
  {
    value: 137,
    label: "Zxi",
    model_id: 2,
  },
  {
    value: 138,
    label: "Zxi+",
    model_id: 2,
  },
  {
    value: 139,
    label: "Sigma",
    model_id: 2,
  },
  {
    value: 140,
    label: "Delta",
    model_id: 2,
  },
  {
    value: 141,
    label: "Zeta",
    model_id: 2,
  },
  {
    value: 142,
    label: "Alpha",
    model_id: 2,
  },
  {
    value: 143,
    label: "S",
    model_id: 2,
  },
  {
    value: 144,
    label: "Vxi",
    model_id: 2,
  },
  {
    value: 145,
    label: "Vxi+",
    model_id: 2,
  },
  {
    value: 146,
    label: "Zxi",
    model_id: 2,
  },
  {
    value: 147,
    label: "Zxi+",
    model_id: 2,
  },
  {
    value: 148,
    label: "Rs",
    model_id: 2,
  },
  {
    value: 149,
    label: "Delta 1.5l Smart Hybrid",
    model_id: 2,
  },
  {
    value: 150,
    label: "Zeta 1.5l Smart Hybrid",
    model_id: 2,
  },
  {
    value: 151,
    label: "Alpha 1.5l Smart Hybrid",
    model_id: 2,
  },
  {
    value: 152,
    label: "Sigma 1.5l Smart Hybrid",
    model_id: 2,
  },
  {
    value: 153,
    label: "Delta 1.5l Smart Hybrid",
    model_id: 2,
  },
  {
    value: 154,
    label: "Zeta 1.5l Smart Hybrid",
    model_id: 2,
  },
  {
    value: 155,
    label: "Alpha 1.5l Smart Hybrid",
    model_id: 2,
  },
  {
    value: 156,
    label: "S 1.5l Smart Hybrid",
    model_id: 2,
  },
  {
    value: 157,
    label: "Delta",
    model_id: 3,
  },
  {
    value: 158,
    label: "Zeta",
    model_id: 3,
  },
  {
    value: 159,
    label: "Alpha",
    model_id: 3,
  },
  {
    value: 160,
    label: "Delta Smart Hybrid",
    model_id: 3,
  },
  {
    value: 161,
    label: "Zeta Smart Hybrid",
    model_id: 3,
  },
  {
    value: 162,
    label: "Alpha Smart Hybrid",
    model_id: 3,
  },
  {
    value: 163,
    label: "Sigma",
    model_id: 3,
  },
  {
    value: 164,
    label: "Sigma Smart Hybrid",
    model_id: 3,
  },
  {
    value: 165,
    label: "Alpha 1.6",
    model_id: 3,
  },
  {
    value: 166,
    label: "Delta 1.6",
    model_id: 3,
  },
  {
    value: 167,
    label: "Zeta 1.6",
    model_id: 3,
  },
  {
    value: 168,
    label: "Delta",
    model_id: 4,
  },
  {
    value: 169,
    label: "Zeta",
    model_id: 4,
  },
  {
    value: 170,
    label: "Alpha",
    model_id: 4,
  },
  {
    value: 171,
    label: "Delta",
    model_id: 4,
  },
  {
    value: 172,
    label: "Zeta",
    model_id: 4,
  },
  {
    value: 173,
    label: "Alpha",
    model_id: 4,
  },
  {
    value: 174,
    label: "Delta",
    model_id: 4,
  },
  {
    value: 175,
    label: "Zeta",
    model_id: 4,
  },
  {
    value: 176,
    label: "Alpha",
    model_id: 4,
  },
  {
    value: 177,
    label: "Delta 1.2l Ags",
    model_id: 4,
  },
  {
    value: 178,
    label: "Zeta 1.2l Ags",
    model_id: 4,
  },
  {
    value: 179,
    label: "Alpha 1.2l Ags",
    model_id: 4,
  },
  {
    value: 180,
    label: "Sigma 1.2l Ags",
    model_id: 4,
  },
  {
    value: 181,
    label: "Delta 1.2l Ags",
    model_id: 4,
  },
  {
    value: 182,
    label: "Zeta 1.2l Ags",
    model_id: 4,
  },
  {
    value: 183,
    label: "Alpha 1.2l Ags",
    model_id: 4,
  },
  {
    value: 184,
    label: "Sigma",
    model_id: 4,
  },
  {
    value: 185,
    label: "Zeta Smart Hybrid",
    model_id: 5,
  },
  {
    value: 186,
    label: "Alpha Smart Hybrid",
    model_id: 5,
  },
  {
    value: 187,
    label: "Zeta Smart Hybrid",
    model_id: 5,
  },
  {
    value: 188,
    label: "Alpha Smart Hybrid",
    model_id: 5,
  },
];

class Features extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataTable.map((prop, key) => {
        return {
          id: key,
          variant: prop.variant,
          feature: prop.feature,
          icon: prop.icon_url,
          text: prop.text,
          actions: (
            // we've added some custom button actions
            <div className="actions-right">
              {/* use this button to add a edit kind of action */}
              <Button
                onClick={() => {
                  let obj = this.state.data.find((o) => o.id === key);
                  alert(
                    "You've clicked EDIT button on \n{ \nFeature: " +
                      obj.feature +
                      "\n}."
                  );
                }}
                color="warning"
                size="sm"
                className={classNames("btn-icon btn-link like btn-neutral")}
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
      model_id: null,
      variantsData: variants,
    };
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  showModal = () => {
    this.setState({ isOpen: true });
  };

  onModelChange = (value) => {
    console.log(value);
    let filtered_variants = variants.filter(
      (variant) => variant.model_id == value.value
    );
    this.setState({ variantsData: filtered_variants, model_id: value });
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

  filterCaseInsensitive = (filter, row) => {
    const id = filter.pivotId || filter.id;
    return row[id] !== undefined
      ? String(row[id].toLowerCase()).startsWith(filter.value.toLowerCase())
      : true;
  };

  render() {
    let { isOpen } = this.state;
    return (
      <>
        <Modal
          isOpen={isOpen}
          backdrop={true}
          contentClassName="model-background"
          style={{ maxHeight: "50vh", padding: 0 }}
        >
          <ModalHeader close={this.closeBtn()}>
            <h4 className="modal-text">Add Feature</h4>
          </ModalHeader>
          <ModalBody>
            <Form action="#">
              <Row>
                <Col md="6">
                  <label>Model</label>
                  <FormGroup>
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      name="singleSelect"
                      value={this.state.singleSelect}
                      onChange={(value) => this.onModelChange(value)}
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
                </Col>
                <Col md="6">
                  <label>Variant</label>
                  <FormGroup>
                    <Select
                      className="react-select info"
                      classNamePrefix="react-select"
                      name="singleSelect"
                      value={this.state.singleSelect}
                      onChange={(value) =>
                        this.setState({ singleSelect: value })
                      }
                      options={this.state.variantsData}
                      placeholder="Select Variant"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <label>Feature</label>
              <FormGroup>
                <Input type="text" autoComplete="off" />
              </FormGroup>
              <label>Feature Text</label>
              <FormGroup>
                <Input type="textarea" autoComplete="off" />
              </FormGroup>
              <label>Select Feature Icon</label>
              <FormGroup>
                <ImageUpload addBtnColor="default" changeBtnColor="default" />
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
                    <CardTitle tag="h4">Features</CardTitle>
                    <div className="actions-right">
                      <Button onClick={() => this.showModal()} color="info">
                        Add Feature
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <CardBody>
                  <ReactTable
                    data={this.state.data}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                      this.filterCaseInsensitive(filter, row)
                    }
                    resizable={false}
                    columns={[
                      {
                        Header: "Variant",
                        accessor: "variant",
                      },
                      {
                        Header: "Feature",
                        accessor: "feature",
                      },
                      {
                        Header: "Feature_Icon",
                        accessor: "icon",
                        Cell: (props) => <img src={props.value} />,
                      },
                      {
                        Header: "Feature_Text",
                        accessor: "text",
                        resizable: true,
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

export default Features;
