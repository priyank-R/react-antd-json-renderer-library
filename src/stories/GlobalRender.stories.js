import React, { useEffect, useState } from "react";
import { storiesOf } from "@storybook/react";
import { List } from "antd";
import { GlobalRender } from "../components/JsonRender";
import test2Json from "./JsonSchema/test2.json";
import test1Json from "./JsonSchema/test3.json";
import expansion_test from "./JsonSchema/expansion_test.json";
import ref_test from "./JsonSchema/ref_test.json";

import CustomComponentWithProps from "./components/CustomComponentWithProps";

const stories = storiesOf("02 - Global Renderer", module);

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

stories.add(
  "Custom component in JSON that receives props from the GlobalRenderer",
  () => {
    const CustomComponent = ({ children, ...rest_of_the_props }) => {
      return (
        <>
          <p>
            These props are injected by json renderer inside the parent object
            of the custom component
          </p>
          <ul>
            {Object.keys(rest_of_the_props).map((key) => {
              return (
                <li>
                  Key: {key}, Val:{" "}
                  {_.isString(rest_of_the_props[key]) ||
                  _.isNumber(rest_of_the_props[key])
                    ? rest_of_the_props[key]
                    : typeof rest_of_the_props[key]}
                </li>
              );
            })}
          </ul>
        </>
      );
    };
    return (
      <GlobalRender
        data={{
          _id: "123484303fe6b",
          name: "Procurment 1",
          _v: 1,
          renderType: "stages",
          renderValue: {
            "Custom props are here": {
              prop_1: 1,
              prop_2: 2,
              renderType: "custom",
              renderValue: React.createElement(CustomComponent),
            },
            "Custom component referenced somewhere else": {
              abc: "abc",
              pqr: "pqr",
              renderType: "ref",
              renderValue: "$.custom_component_parent",
            },
          },
          custom_component_parent: {
            wxy: "wxy",
            renderType: "custom",
            renderValue: React.createElement(CustomComponent),
          },
        }}
      />
    );
  },
  {}
);
