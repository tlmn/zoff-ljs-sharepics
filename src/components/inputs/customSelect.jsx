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
        value={getProperty(state, propertyPath)}
        onChange={({ target: { value } }) =>
          updateProperty(setState, propertyPath, value)
        }
        id={propertyPath}
        {...props}
      >
        {availableValues.map(({ label, value }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  );
};

export default CustomSelect;
