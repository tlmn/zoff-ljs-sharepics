import React from "react";
import { getProperty, updateProperty } from "../../lib/lib";

import useDataContext from "../../lib/useDataContext";

const TextScale = ({ propertyPath, label = "Textgröße" }) => {
  const { state, setState } = useDataContext();
  return (
    <label htmlFor={propertyPath}>
      <span dangerouslySetInnerHTML={{ __html: label }} />
      <input
        type="range"
        id={propertyPath}
        name="bodyTextScale"
        min={getProperty({ state }, `${propertyPath}.range[0]`)}
        max={getProperty({ state }, `${propertyPath}.range[1]`)}
        value={getProperty({ state }, `${propertyPath}.value`)}
        onChange={(e) =>
          updateProperty(setState, `${propertyPath}.value`, e.target.value)
        }
      />
    </label>
  );
};

export default TextScale;
