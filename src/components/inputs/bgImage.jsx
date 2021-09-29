import React, {  useRef } from "react";

import IconReset from "../../assets/svg/reset";
import { updateProperty } from "../../lib/lib";
import useDataContext from "../../lib/useDataContext";

const BGImage = ({ currentSlide }) => {
  const { state, setState } = useDataContext();
  const inputFileRef = useRef(null);
  return (
    <>
      <label htmlFor="bgImage__fileName">Hintergrundbild</label>
      <input
        type="file"
        id="bgImage__fileName"
        name="file"
        onChange={(e) =>
          e.target.files[0] !== null &&
          updateProperty(
            { setState },
            `slides[${currentSlide}].data.image.url`,
            URL.createObjectURL(e.target.files[0])
          )
        }
        ref={inputFileRef}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputFileRef.current.click()}
        className="btn flex justify-center mb-2"
      >
        Datei auswählen
      </button>

      <label htmlFor="bgImage__scale">Zoomfaktor für Bild</label>
      <input
        type="range"
        id="bgImage__scale"
        name="imageScale"
        min="0"
        defaultValue={state.slides[currentSlide].data.image.scale}
        max="30"
        onChange={(e) =>
          updateProperty(
            { state, setState },
            `slides[${currentSlide}].data.image.scale`,
            e.target.value
          )
        }
      />

      <button
        className="btn flex justify-center mb-2"
        onClick={() =>
          updateProperty(
            { state, setState },
            `slides[${currentSlide}].data.image.position`,
            { x: 0, y: 0 }
          )
        }
        type="button"
      >
        <IconReset height="20" className="block mr-1" /> Bildausschnitt
      </button>
    </>
  );
};

export default BGImage;
