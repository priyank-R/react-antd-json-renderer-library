import React from "react";

const _Custom = ({ children, ...props }) => {
  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, { ...props });
      })}
    </>
  );
};

export default _Custom;
