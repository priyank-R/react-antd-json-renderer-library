import React, { useState } from "react";
import { GlobalRender } from "./JsonRender/GlobalRender";
import _ from "lodash";
import { Button, Divider } from "antd";

const Playground = ({ initial_json = "" }) => {
  const [json, setJson] = useState(
    JSON.stringify(JSON.parse(initial_json), null, 2)
  );
  const [isValidJson, setIsValidJson] = useState(true);
  const [parsedJson, setParsedJson] = useState(JSON.parse(initial_json));

  const handleChange = (event) => {
    try {
      const newJson = event.target.value;
      setJson(newJson);
      let _json = JSON.parse(newJson);
      setIsValidJson(true);
      setParsedJson(_.clone(_json));
    } catch (error) {
      setIsValidJson(false);
    }
  };

  const formatJson = () => {
    try {
      const formattedJson = JSON.stringify(JSON.parse(json), null, 2);
      setJson(formattedJson);
      setIsValidJson(true);
    } catch (error) {
      setIsValidJson(false);
    }
  };

  return (
    <div>
      <div>
        <textarea
          value={json}
          onChange={handleChange}
          style={{ width: "100%", height: "200px" }}
        />
        {!isValidJson && <div style={{ color: "red" }}>Invalid JSON</div>}

        <Button onClick={formatJson} type='default'>Format JSON</Button>
      </div>
      &nbsp;
      <Divider>Preview of the above JSON:</Divider>
      <div>{<GlobalRender key={json} data={parsedJson} />}</div>
    </div>
  );
};

export default Playground;
