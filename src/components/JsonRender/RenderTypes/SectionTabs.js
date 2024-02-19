import {  Tabs } from "antd";
import * as _ from "lodash";

 const SectionTabs = ({ children }) => {
  console.log(children);
  const handleChange = (change) => {
    console.log(change);
  };
  return (
      <Tabs onChange={handleChange}>
        {children.map((child, index) => {
          let name_or_key = _.get(
            child,
            "props.name",
            _.get(child, "name", `Tab ${index + 1}`)
          );
          return (
            <Tabs.TabPane
              key={name_or_key}
              tabKey={name_or_key}
              tab={name_or_key}
            >
              {_.has(child, "props") ? child : null}
            </Tabs.TabPane>
          );
        })}
      </Tabs>
  );
};

export default SectionTabs

