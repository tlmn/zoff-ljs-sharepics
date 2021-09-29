import React from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import useDataContext from "../../lib/useDataContext";

const Input = ({ propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <input
        type="text"
        value={getProperty({ state }, propertyPath)}
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, e.target.value)
        }
        id={propertyPath}
        {...props}
      />
    </>
  );
};

export default Input;
