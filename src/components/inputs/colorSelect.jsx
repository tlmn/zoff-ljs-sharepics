import React from "react";
import { primaryColors } from "../../config/vars";

export default ({ state, setState }) => (
  <>
    <div className="uppercase font-headline italic text-white">
      Corporate Design
    </div>
    <div className="grid-cols-2 grid">
      {primaryColors.map((primaryColor) => (
        <div className="col-span-1">
          <input
            type="radio"
            value={primaryColor.label}
            name="primaryColor"
            id={primaryColor.name}
            onChange={(e) =>
              setState({ ...state, primaryColor: e.target.value })
            }
          />
          <label htmlFor={primaryColor.name} className="label__radio">
            <div className="px-2">
              <img
                alt={`Farbschema Vorschau für ${primaryColor.name}`}
                src={`/assets/images/colorThemes/${primaryColor.label}.png`}
                className={`colorThumbnail ${
                  state.primaryColor === primaryColor.label &&
                  `border-lightGray`
                }`}
              />
            </div>
          </label>
        </div>
      ))}
    </div>
  </>
);
