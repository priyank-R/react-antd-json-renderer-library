import Conversations from "./RenderTypes/Conversations";
import Stages from "./RenderTypes/Stages";
import * as _ from "lodash";
import SectionTabs from "./RenderTypes/SectionTabs";
import React from "react";
import List from "./RenderTypes/List";
import _Empty from "./RenderTypes/Empty";
import _Custom from "./RenderTypes/Custom";
import { customSort } from "../../helpers";

export const GlobalRender = ({
  data,
  onDataChange = (pathTrace, changedValue) => {},
  sortOrder = [],
}) => {
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
              ...passOnProps,
              onDataChange: (changedValue) =>
                onDataChange(pathTrace, changedValue),
            }
          );
        } else if (_.get(path, "renderType", false) == "ref") {
          let ref_split = _.get(path, "renderValue", "").split("$.");
          let renderValue = null;
          if (ref_split.length == 2) {
            renderValue = _.get(data, ref_split[1], null);
            if (renderValue == null) {
              throw new Error(
                "Path not found: " + _.get(path, "renderValue", "")
              );
            }
            return componentByType(
              _.get(renderValue, "renderType", null),
              walkPath_2(
                _.get(renderValue, "renderValue", {}),
                pathTrace + ".renderValue"
              ),
              {
                pathTrace,
                ...passOnProps,
                ..._.omit(renderValue, "renderValue"),

                onDataChange: (changedValue) =>
                  onDataChange(pathTrace, changedValue),
              }
            );
          } else {
            throw new Error(
              "Provided ref not in valid format. Eg value: '$.path.to.object'"
            );
          }
        } else {
          return componentByType(
            _.get(path, "renderType", null),
            walkPath_2(path["renderValue"], pathTrace + ".renderValue"),
            {
              ..._.omit(path, "renderValue"),
              pathTrace,
              ...passOnProps,
              onDataChange: (changedValue) =>
                onDataChange(pathTrace, changedValue),
            }
          );
        }
      }
      return customSort(_.keys(path), sortOrder).map((key) => {
        if (_.has(path[key], "renderType")) {
          return walkPath_2(path[key], pathTrace + `.${key}`, {
            name: key,
            ..._.omit(path[key], "renderValue"),
          });
        } else {
          if (_.isObject(path)) {
            return componentByType(null, [], {
              name: key,
              ...path[key],
              pathTrace: pathTrace + `.${key}`,
              onDataChange: (changedValue) =>
                onDataChange(pathTrace + `.${key}`, changedValue),
            });
          } else {
            return componentByType(null, [], {
              name: key,
              pathTrace: pathTrace + `.${key}`,
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

  console.log(walkPath_2(data));
  return walkPath_2(data);
};
