import _ from "lodash";
import React from "react";

export function isReactComponent(obj) {
  return (
    (typeof obj === "function" &&
      (obj.prototype instanceof React.Component ||
        obj.prototype instanceof React.PureComponent)) ||
    (_.isObject(obj) && _.get(obj, "$$typeof", false))
  );
}

export function customSort(arr, sortOrder) {
  // Create a map to store the index of each element in sortOrder
  const sortOrderMap = new Map();
  sortOrder.forEach((value, index) => {
    sortOrderMap.set(value, index);
  });

  // Custom sorting function
  arr.sort((a, b) => {
    // If both elements are not in sortOrder, maintain their original order
    if (!sortOrderMap.has(a) && !sortOrderMap.has(b)) {
      return 0;
    }
    // If a is not in sortOrder, move b to a higher index
    else if (!sortOrderMap.has(a)) {
      return 1;
    }
    // If b is not in sortOrder, move a to a higher index
    else if (!sortOrderMap.has(b)) {
      return -1;
    }
    // Compare the indices of a and b in sortOrder
    else {
      return sortOrderMap.get(a) - sortOrderMap.get(b);
    }
  });

  return arr;
}
