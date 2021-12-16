import React from "react";
import Color from "../assets/svg/inputIcons/color";
import Date from "../assets/svg/inputIcons/date";
import LocalGroup from "../assets/svg/inputIcons/localGroup";
import Location from "../assets/svg/inputIcons/location";
import Person from "../assets/svg/inputIcons/person";
import Image from "../assets/svg/inputIcons/image";
import Text from "../assets/svg/inputIcons/text";
import Title from "../assets/svg/inputIcons/title";
import useDataContext from "../lib/useDataContext";
import clsx from "clsx";

const MenuItem = ({ iconType, legend, targetFieldset }) => {
  const {
    state: { activeFieldset },
    setState,
  } = useDataContext();

  const renderIcon = (iconType) => {
    switch (iconType) {
      case "color":
        return <Color />;
      case "date":
        return <Date />;
      case "localGroup":
        return <LocalGroup />;
      case "location":
        return <Location />;
      case "person":
        return <Person />;
      case "image":
        return <Image />;
      case "text":
        return <Text />;
      case "title":
        return <Title />;
      default:
        return null;
    }
  };
  return (
    <button
      className={clsx(
        "flex flex-col items-center text-white transition-all ease-in-out duration-200 hover:text-turquoise hover:fill-turquoise cursor-pointer",
        activeFieldset === targetFieldset ? "fill-turquoise" : "fill-white"
      )}
      onClick={() =>
        setState((prev) => ({
          ...prev,
          activeFieldset:
            activeFieldset !== targetFieldset ? targetFieldset : "",
        }))
      }
    >
      {renderIcon(iconType)}
      {legend && (
        <span
          className="uppercase text-xs font-medium text-center leading-none"
          dangerouslySetInnerHTML={{ __html: legend }}
        />
      )}
    </button>
  );
};
export default MenuItem;
