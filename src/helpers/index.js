import _ from "lodash";
import React from "react";

export function isReactComponent(obj) {
  return (
    typeof obj === "function" &&
    (obj.prototype instanceof React.Component ||
      obj.prototype instanceof React.PureComponent)
  ) || (_.isObject(obj) && _.get(obj, '$$typeof', false));
}
