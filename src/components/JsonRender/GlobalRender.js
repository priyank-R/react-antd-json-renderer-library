import Conversations from "./RenderTypes/Conversations";
import Stages from "./RenderTypes/Stages";
import * as _ from "lodash";
import SectionTabs from "./RenderTypes/SectionTabs";
import React from "react";
import List from "./RenderTypes/List";
import _Empty from "./RenderTypes/Empty";
import _Custom from "./RenderTypes/Custom";

export const GlobalRender = ({
  data,
  onDataChange = (pathTrace, changedValue) => {},
}) => {
  const [renderedData, setRenderedData] = React.useState(data);
  const walkPath = (path, additional_props = {}, pathTrace = "$") => {
    if (!path || _.isString(path)) {
      return null;
    }
    if (_.isArray(path)) {
      return path.map((item, index) => {
        return { ...item, pathTrace: pathTrace + `[${index}]` };
      });
    }

    if (_.get(path, "renderType", false)) {
      return {
        ...componentByType(
          _.get(path, "renderType"),
          walkPath(
            _.get(path, "renderValue", null),
            {},
            pathTrace + ".renderValue"
          )
        ),
        ...{ ...additional_props, pathTrace: pathTrace, onDataChange },
      };
    }
    let _props = {};
    if (Object.keys(path).length == 0 || !path) {
      return componentByType(null, { pathTrace });
    }
    return Object.keys(path).map((key) => {
      if (_.get(path[key], "renderType", false)) {
        _props = _.omit(path[key], "renderValue");

        return walkPath(
          path[key],
          { key, name: key, ..._props },
          pathTrace + `.${key}`
        );
      } else {
        return walkPath(
          null,
          { key, name: key, ..._props },
          pathTrace + `.${key}`
        );
      }
    });
  };

  const walkPath_2 = (path, pathTrace = "$", passOnProps = {}) => {
    if (_.isArray(path)) {
      return path.map((item, index) => {
        return {
          ...item,
          pathTrace: pathTrace + `[${index}]`,
          ...passOnProps,
          onDataChange: (changedValue) =>
            onDataChange(pathTrace + `[${index}]`, changedValue),
        };
      });
    }
    if (_.isObject(path) && _.keys(path).length > 0) {
      if (_.has(path, "renderType", false)) {
        if (_.get(path, "renderType", false) == "custom") {
          return componentByType(
            _.get(path, "renderType", null),
            _.get(path, "renderValue"),
            {
              ..._.omit(path, "renderValue"),
              pathTrace,
              pass: 1,
              ...passOnProps,
              onDataChange: (changedValue) =>
                onDataChange(pathTrace, changedValue),
            }
          );
        } else {
          return componentByType(
            _.get(path, "renderType", null),
            walkPath_2(path["renderValue"], pathTrace + ".renderValue"),
            {
              ..._.omit(path, "renderValue"),
              pathTrace,
              pass: 1,
              ...passOnProps,
              onDataChange: (changedValue) =>
                onDataChange(pathTrace, changedValue),
            }
          );
        }
      }
      return _.keys(path).map((key) => {
        if (_.has(path[key], "renderType")) {
          return walkPath_2(path[key], pathTrace + `.${key}`, {
            name: key,
            ..._.omit(path[key], "renderValue"),
            pass: 2,
          });
        } else {
          if (_.isObject(path)) {
            return componentByType(null, [], {
              name: key,
              ...path[key],
              pathTrace: pathTrace + `.${key}`,
              pass: 3,
              onDataChange: (changedValue) =>
                onDataChange(pathTrace + `.${key}`, changedValue),
            });
          } else {
            return componentByType(null, [], {
              name: key,
              pathTrace: pathTrace + `.${key}`,
              pass: 4,
              onDataChange: (changedValue) =>
                onDataChange(pathTrace + `.${key}`, changedValue),
            });
          }
        }
      });
    }

    return componentByType(null, [], { ...passOnProps, pathTrace });
  };

  const componentByType = (type, children = [], props = {}) => {
    switch (type) {
      case "stages":
        return <Stages {...props}>{children}</Stages>;
      case "tabs":
        return <SectionTabs {...props}>{children}</SectionTabs>;
      case "text":
        return <p>This is a text</p>;
      case "conversations":
        return <Conversations {...props}>{children}</Conversations>;
      case "files":
        return <List {...props}>{children}</List>;
      case "custom":
        return <_Custom {...props}>{children}</_Custom>;
      default:
        return <_Empty {...props}>{children}</_Empty>;
    }
  };

  return walkPath_2(renderedData);
};
