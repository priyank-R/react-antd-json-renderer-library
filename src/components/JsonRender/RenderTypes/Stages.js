import { Collapse } from "antd";
import * as _ from "lodash";
import { yellow, green, red } from "@ant-design/colors";

const { Panel } = Collapse;

const getStatusColor = (status) => {
  console.log(status)
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
      {children.map((child, index) => {
        let name_or_key = _.get(
          child,
          "props.name",
          _.get(child, "name", `Panel ${index + 1}`)
        );
        return (
          <Panel
            header={name_or_key}
            key={name_or_key}
            style={{ backgroundColor: getStatusColor(child?.status) }}
          >
            {_.get(child, "props", null) !== null ? child : null}
          </Panel>
        );
      })}
    </Collapse>
  );
};

export default Stages;