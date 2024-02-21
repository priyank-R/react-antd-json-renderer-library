import { Collapse } from "antd";
import * as _ from "lodash";
import { yellow, green, red } from "@ant-design/colors";
import React from "react";

const { Panel } = Collapse;

const getStatusColor = (status) => {
  if (!status) {
    return undefined;
  }
  if (status === "COMPLETED") {
    return green[1];
  }
  if (status === "IN-PROGRESS") {
    return yellow[1];
  }
  if (status === "INCOMPLETE") {
    return red[1];
  }
};

const Stages = ({ children, ...props }) => {
  return (
    <Collapse>
      {_.isArray(children) ? (
        children.map((child, index) => {
          let [name_or_key, status] = [
            _.get(
              child,
              "props.name",
              _.get(child, "name", `Panel ${index + 1}`)
            ),
            _.get(child, "props.status", _.get(child, "status", null)),
          ];
          return (
            <Panel
              header={name_or_key}
              key={name_or_key}
              style={{ backgroundColor: getStatusColor(status) }}
            >
              {_.get(child, "props", null) !== null ? child : null}
            </Panel>
          );
        })
      ) : (
        <></>
      )}
    </Collapse>
  );
};

export default Stages;
