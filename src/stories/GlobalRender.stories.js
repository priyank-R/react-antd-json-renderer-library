import React from "react";
import { storiesOf } from "@storybook/react";
import { List } from "antd";
import { GlobalRender } from "../components/JsonRender";
import test2Json from "./JsonSchema/test2.json";
import test1Json from "./JsonSchema/test3.json";

const stories = storiesOf("Global Renderer", module);

stories.add("Render complex JSON", () => {
  return (
    <div>
      <GlobalRender data={test2Json} />
    </div>
  );
});
stories.add("Render simple JSON", () => {
  return (
    <div>
      <GlobalRender data={test1Json} />
    </div>
  );
});
stories.add("Listen to data change", () => {
  const onDataChange = (pathTrace, value) => {
    console.log("onDataChange invoked !");
    console.log(pathTrace);
    console.log(value);
  };

  return <GlobalRender data={test2Json} onDataChange={onDataChange} />;
});
stories.add("Custom component", () => {
  const myCustomComponent = (
    <List>
      <List.Item>Custom Component Item 1</List.Item>
    </List>
  );

  return (
    <GlobalRender
      data={{
        renderType: "stages",
        renderValue: {
          "Stage 1": {
            renderType: "custom",
            renderValue: myCustomComponent,
          },
        },
      }}
    />
  );
});
