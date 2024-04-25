import React from "react";
import { storiesOf } from "@storybook/react";
import Playground from "../components/Playground";
import test1Json from "./JsonSchema/test3.json";
const stories = storiesOf("01 - Playground", module);


// stories.addParameters({
//   //   docs: {
//   //     description: {
//   //       component:
//   //         "This story displays the usage of the 'Ref' property in the JSON schema.",
//   //     },
//   //   },
//   docs: componentDocs,
// });
stories.add("01 - Play around by modifying JSON", () => {
  return (
    <div>
      <Playground initial_json={JSON.stringify(test1Json)} />
    </div>
  );
});
