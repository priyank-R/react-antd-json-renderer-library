import { Collapse } from "antd";
import * as _ from "lodash";
import { yellow, green, red } from "@ant-design/colors";
import React, { useEffect, useState } from "react";

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

const get_expanded_keys = (children) => {};
const renderAndProcessPanels = (children) => {
  return _.isArray(children) ? (
    children.map((child, index) => {
      let [name_or_key, status] = [
        _.get(child, "props.name", _.get(child, "name", `Panel ${index + 1}`)),
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
  );
};

const Stages = ({ children, ...props }) => {
  const [activeKeys, setActiveKeys] = useState([]);
  const [panelMap, setPanelMap] = useState([]);
  const renderAndProcessPanels = () => {
    let activeKeys = [];
    let map = _.isArray(children) ? (
      children.map((child, index) => {
        let [name_or_key, status, expanded, panel_color] = [
          _.get(
            child,
            "props.name",
            _.get(child, "name", `Panel ${index + 1}`)
          ),
          _.get(child, "props.status", _.get(child, "status", null)),
          _.get(child, "props.expanded", false),
          _.get(child, "props.panel_color", undefined),
        ];
        if (expanded) {
          activeKeys.push(name_or_key);
        }
        return (
          <Panel
            header={name_or_key}
            key={name_or_key}
            style={{
              backgroundColor: panel_color
                ? panel_color
                : getStatusColor(status),
            }}
          >
            {_.get(child, "props", null) !== null ? child : null}
          </Panel>
        );
      })
    ) : (
      <></>
    );
    setActiveKeys(activeKeys);
    setPanelMap(map);
    return map;
  };
  useEffect(() => {
    renderAndProcessPanels();
  }, []);
  return (
    <Collapse onChange={(key) => setActiveKeys(key)} activeKey={activeKeys}>
      {panelMap}
    </Collapse>
  );
};

export default Stages;
