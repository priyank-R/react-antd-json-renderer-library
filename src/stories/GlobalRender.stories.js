import React from "react";
import { storiesOf } from "@storybook/react";
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
