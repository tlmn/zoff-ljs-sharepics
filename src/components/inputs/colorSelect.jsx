import React from "react";

import useDataContext from "../../lib/useDataContext";
import { primaryColors } from "../../config/vars";

const ColorSelect = () => {
  const { state, setState } = useDataContext();

  const { primaryColor: currentPrimaryColor } = state;

  return (
    <>
      <div className="uppercase font-headline italic text-black md:text-white">
        Corporate Design
      </div>
      <div className="grid-cols-2 grid">
        {primaryColors.map(({ label, name }) => (
          <div className="col-span-1">
            <input
              type="radio"
              value={label}
              name="primaryColor"
              id={name}
              onChange={({ target: { value } }) => {
                setState((prev) => ({ ...prev, primaryColor: value }));
              }}
            />
            <label htmlFor={name} className="label__radio">
              <div className="px-2">
                <img
                  alt={`Farbschema Vorschau für ${name}`}
                  src={`/assets/images/colorThemes/${label}.png`}
                  className={`colorThumbnail ${
                    currentPrimaryColor === label && `border-white`
                  }`}
                />
              </div>
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default ColorSelect;
