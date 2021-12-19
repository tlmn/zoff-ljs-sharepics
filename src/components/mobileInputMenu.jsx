import React from "react";
import DownloadButton from "../components/inputs/downloadButton";

const MobileInputMenu = ({ children }) => {
  return (
    <div className="flex gap-1 justify-center overflow-x-scroll overflow-y-hidden bg-black px-1">
      <DownloadButton className="m-1" />
      {children}
    </div>
  );
};
export default MobileInputMenu;
