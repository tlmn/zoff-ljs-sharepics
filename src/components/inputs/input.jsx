import React from "react";
import { getProperty, updateProperty } from "../../lib/lib";
import EraseIcon from "../../assets/svg/inputIcons/erase";

import useDataContext from "../../lib/useDataContext";

const Input = ({ propertyPath, label, ...props }) => {
  const { state, setState } = useDataContext();
  return (
    <>
      <label htmlFor={propertyPath}>{label}</label>
      <div className="relative">
        <input
          type="text"
          className="pr-5"
          value={getProperty({ state }, propertyPath)}
          onChange={(e) =>
            updateProperty(setState, propertyPath, e.target.value)
          }
          id={propertyPath}
          {...props}
        />
        <button
          className="absolute top-0 bottom-0 my-auto right-1 fill-lightGray hover:fill-green"
          onClick={() => updateProperty(setState, propertyPath, "")}
        >
          <EraseIcon />
        </button>
      </div>
    </>
  );
};

export default Input;
