import React from "react";
import { storiesOf } from "@storybook/react";
import Playground from "../components/Playground";
import test1Json from "./JsonSchema/test3.json";
const stories = storiesOf("01 - Playground", module);

stories.add("01 - Play around by modifying JSON", () => {
  return (
    <div>
      <Playground initial_json={JSON.stringify(test1Json)} />
    </div>
  );
});
stories.add("Stages", () => {
  return (
    <div>
      <Playground
        initial_json={JSON.stringify({
          renderType: "stages",
          renderValue: {
            stage_1: {},
            stage_2: {
              name: "stage with custom name",
            },
            stage_3: {
              name: 'Stage with custom color', 
              panel_color: 'yellow'
            }
          },
        })}
      />
    </div>
  );
});
stories.add("Tabs", () => {
  return (
    <div>
      <Playground
        initial_json={JSON.stringify({
          renderType: "tabs",
          renderValue: {
            tab_1: {
              renderType: "text",
              renderValue: "Some text",
            },
            stage_2: {
              name: "tab with custom name",
            },
          },
        })}
      />
    </div>
  );
});
stories.add("Conversations", () => {
  return (
    <div>
      <Playground
        initial_json={JSON.stringify({
          renderType: "conversations",
          renderValue: [
            {
              user: "user_1",
              content: "Hey, how is everything ?",
            },
            {
              user: "user_2",
              content: "All is good !",
            },
            {
              user: "user_3",
              content: "Is it ?",
            },
          ],
        })}
      />
    </div>
  );
});
stories.add("File List", () => {
  return (
    <div>
      <Playground
        initial_json={JSON.stringify({
          renderType: "files",
          renderValue: [
            {
              id: "id_1",
              name: "Item 1",
              link: "google.com",
            },
            {
              id: "id_2",
              name: "Item 2",
              link: "google.com",
            },
            {
              id: "id_3",
              name: "Item 3",
              link: "google.com",
            },
          
          ],
        })}
      />
    </div>
  );
});
