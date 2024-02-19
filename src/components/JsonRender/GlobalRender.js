import Conversations from "./RenderTypes/Conversations";
import Stages from "./RenderTypes/Stages";
import * as _ from "lodash";
import SectionTabs from "./RenderTypes/SectionTabs";

export const GlobalRender = ({ data }) => {
  const walkPath = (path, additional_props = {}, pathTrace = "$") => {
    if (!path || _.isString(path)) {
      return null;
    }
    if (_.isArray(path)) {
      return path;
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
        ...{ ...additional_props, pathTrace: pathTrace },
      };
    }
    let _props = {};
    return Object.keys(path)
      .map((key) => {
        if (_.get(path[key], "renderType", false)) {
          _props = _.omit(path[key], "renderValue");

          return walkPath(
            path[key],
            { key, name: key, ..._props },
            pathTrace + `.${key}`
          );
        } else {
          return null;
        }
      })
      .filter((val) => val != null);
  };

  const componentByType = (type, children = []) => {
    switch (type) {
      case "stages":
        return <Stages>{children}</Stages>;
      case "tabs":
        return <SectionTabs>{children}</SectionTabs>;
      case "text":
        return <p>This is a text</p>;
      case "conversations":
        return <Conversations>{children}</Conversations>;
    }
  };
  return walkPath(data);
};
