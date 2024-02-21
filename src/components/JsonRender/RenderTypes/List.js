import React, { useEffect, useState } from "react";
import { List } from "antd";
import _ from "lodash";

const _List = ({ children }) => {
  let [listItems, setListItems] = useState([]);
  useEffect(() => {
    if (_.isArray(children)) {
      setListItems(children);
    }
  }, [children]);

  let [id, name, link] = [null, null, null];
  const _renderItems = (item, index) => {
    id = _.get(item, "id", _.random());
    name = _.get(item, "name", `File ${index + 1}`);
    link = _.get(item, "link", null);
    return (
      <List.Item key={id}>
        {name} {link ? <a href={link} target="_blank">Link</a> : <></>}
      </List.Item>
    );
  };

  return (
    <List
      size="small"
      //   header={<div>Header</div>}
      //   footer={<div>Footer</div>}
      bordered
      dataSource={listItems}
      renderItem={_renderItems}
    />
  );
};

export default _List;
