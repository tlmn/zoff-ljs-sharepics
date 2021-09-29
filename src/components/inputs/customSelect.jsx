import React from "react";
/* eslint-disable jsx-a11y/no-onchange */
import { getProperty, updateProperty } from "../../lib/lib";

import useDataContext from "../../lib/useDataContext";

const CustomSelect = ({ availableValues, propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <select
        type="text"
        value={getProperty({ state }, propertyPath)}
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, e.target.value)
        }
        id={propertyPath}
        {...props}
      >
        {availableValues.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
