import React from "react";

const MobileInputMenu = ({ children }) => {
  return (
    <div className="flex gap-1 justify-center overflow-x-scroll overflow-y-hidden bg-black px-1 pb-1">
      {children}
    </div>
  );
};
export default MobileInputMenu;
