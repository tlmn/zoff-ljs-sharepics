import React from "react";
import { getProperty, updateProperty } from "../../lib/lib";
import EraseIcon from "../../assets/svg/inputIcons/erase";

import useDataContext from "../../lib/useDataContext";

const Textarea = ({ propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <div className="relative">
        <textarea
          onChange={({ target: { value } }) =>
            updateProperty(setState, propertyPath, value)
          }
          id={propertyPath}
          {...props}
          value={getProperty(state, propertyPath)}
        />
        <button
          className="absolute bottom-1 right-1 fill-lightGray hover:fill-green"
          onClick={() => updateProperty(setState, propertyPath, "")}
        >
          <EraseIcon />
        </button>
      </div>
    </>
  );
};

export default Textarea;
