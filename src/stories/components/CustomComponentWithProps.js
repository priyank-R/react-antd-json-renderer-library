
import React from 'react'
const CustomComponentWithProps = (props) => {
  console.log(props)
  return (
    <>
      <p>This is a custom component</p>
      <p>Props are: </p>
      <ul>
        {Object.keys(props).map((key) => (
          <li>{key}</li>
        ))}
      </ul>
    </>
  );
};

export default CustomComponentWithProps