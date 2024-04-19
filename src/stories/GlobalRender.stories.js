import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import { List } from "antd";
import { GlobalRender } from "../components/JsonRender";
import test2Json from "./JsonSchema/test2.json";
import test1Json from "./JsonSchema/test3.json";
import expansion_test from "./JsonSchema/expansion_test.json";
import ref_test from "./JsonSchema/ref_test.json";

import CustomComponentWithProps from "./components/CustomComponentWithProps";

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
stories.add("Custom component with Props", () => {
  return (
    <GlobalRender
      data={{
        renderType: "stages",
        renderValue: {
          "Stage 1": {
            renderType: "custom",
            renderValue: React.createElement(CustomComponentWithProps),
            formData: { a: 1 },
          },
        },
      }}
    />
  );
});
stories.add("Re-render when the props change", () => {
  const [data, setData] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setData({
        renderType: "stages",
        renderValue: {
          "Stage 1": {
            renderType: "custom",
            renderValue: React.createElement(CustomComponentWithProps),
            formData: { a: 1 },
          },
        },
      });
    }, 5000);
  }, []);
  return (
    <>
      <GlobalRender data={data} />;
      <div>
        <p>State currently is: </p>
        <p>{JSON.stringify(data)}</p>
      </div>
    </>
  );
});
stories.add("Custom Sort Order", () => {
  return (
    <div>
      <GlobalRender
        sortOrder={[
          "Demand Management / Procurement",
          "Deployment",
          "Decommission / Disposal",
        ]}
        data={test2Json}
      />
    </div>
  );
});
stories.add("Expanded property for stages", () => {
  return (
    <div>
      <GlobalRender data={expansion_test} />
    </div>
  );
});
stories.add("Ref property in the json", () => {
  return (
    <div>
      <GlobalRender data={ref_test} />
    </div>
  );
});
