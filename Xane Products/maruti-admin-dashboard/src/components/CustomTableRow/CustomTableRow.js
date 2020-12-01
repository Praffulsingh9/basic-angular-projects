import React from "react";
import { Progress } from "reactstrap";

export const CustomTableRow = (props) => {
  return (
    <tr>
      <td className="text-center">
        <div className="photo">{props.index + 1}</div>
      </td>
      <td>{props.model.make}</td>
      <td>{props.model.model}</td>
      <td className="text-center">
        <div className="progress-container progress-sm">
          <Progress multi>
            <span className="progress-value">{`${parseFloat(
              (props.model.count / props.model.target) * 100
            ).toFixed(1)} %`}</span>
            <Progress
              bar
              max="100"
              value={(props.model.count / props.model.target) * 100}
            />
          </Progress>
        </div>
      </td>
      <td className="text-center">{props.model.count}</td>
    </tr>
  );
};

export const CustomTableRowForVariant = (props) => {
  return (
    <tr>
      <td className="text-center">
        <div className="photo">{props.index + 1}</div>
      </td>
      <td>{props.variant.make}</td>
      <td>{props.variant.model}</td>
      <td>{props.variant.variant}</td>
      <td className="text-center">
        <div className="progress-container progress-sm">
          <Progress multi>
            <span className="progress-value">{`${parseFloat(
              (props.variant.count / props.variant.target) * 100
            ).toFixed(1)} %`}</span>
            <Progress
              bar
              max="100"
              value={(props.variant.count / props.variant.target) * 100}
            />
          </Progress>
        </div>
      </td>
      <td className="text-center">{props.variant.count}</td>
    </tr>
  );
};

export const CustomTableRowForLocation = (props) => {
  return (
    <tr>
      <td className="text-center">
        <div className="photo">{props.index + 1}</div>
      </td>
      <td>{props.location.latitude}</td>
      <td>{props.location.longitude}</td>
      <td className="text-center">{props.location.count}</td>
    </tr>
  );
};

export const CustomTableRowForPart = (props) => {
  return (
    <tr>
      <td className="text-center">
        <div className="photo">{props.index + 1}</div>
      </td>
      <td>{props.part.make}</td>
      <td>{props.part.model}</td>
      <td>{props.part.variant}</td>
      <td>{props.part.part}</td>
      <td className="text-center">
        <div className="progress-container progress-sm">
          <Progress multi>
            <span className="progress-value">{`${parseFloat(
              (props.part.count / props.part.target) * 100
            ).toFixed(1)} %`}</span>
            <Progress
              bar
              max="100"
              value={(props.part.count / props.part.target) * 100}
            />
          </Progress>
        </div>
      </td>
      <td className="text-center">{props.part.count}</td>
    </tr>
  );
};

export const CustomTableRowForUser = (props) => {
  return (
    <tr>
      <td className="text-center">
        <div className="photo">{props.index + 1}</div>
      </td>
      <td>{props.user.first_name}</td>
      <td>{props.user.phone}</td>
      <td className="text-center">{props.user.count}</td>
    </tr>
  );
};
