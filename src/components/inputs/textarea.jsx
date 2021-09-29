import React from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import useDataContext from "../../lib/useDataContext";

const Textarea = ({ propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <textarea
        onChange={(e) =>
          updateProperty({ setState }, propertyPath, e.target.value)
        }
        id={propertyPath}
        {...props}
        value={getProperty({ state }, propertyPath)}
      />
    </>
  );
};

export default Textarea;
