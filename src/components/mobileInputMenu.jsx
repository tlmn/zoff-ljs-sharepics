import React from "react";
import DownloadButton from "../components/inputs/downloadButton";

const MobileInputMenu = ({ children }) => {
  return (
    <div className="bg-black flex justify-center">
      <div className="mx-auto flex overflow-x-scroll gap-1 px-1">
        <DownloadButton className="m-1" />
        {children}
      </div>
    </div>
  );
};
export default MobileInputMenu;
