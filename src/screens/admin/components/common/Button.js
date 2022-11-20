import React from "react";

export const BGButton = ({
  title,
  bgColor,
  hoverBgColor,
  textSize,
  textColor,
  onClickFunc,
  width,
}) => {
  const common = "py-2 cursor-pointer text-center font-semibold";
  return (
    <div
      className={`${common} ${textColor} ${hoverBgColor} ${bgColor} ${textSize} ${width}`}
      onClick={onClickFunc}
    >
      {title}
    </div>
  );
};
export const BDButton = ({
  title,
  bdColor,
  hoverBdColor,
  bgColor,
  hoverBgColor,
  textSize,
  textColor,
  onClickFunc,
  width,
}) => {
  const common =
    "py-2 cursor-pointer text-center outline outline-1 outline-offset-0 hover:outline-offset-0 font-semibold";
  return (
    <div
      className={`${common} ${textColor} ${hoverBdColor} ${bdColor} ${bgColor} ${hoverBgColor} ${textSize} ${width}`}
      onClick={onClickFunc}
    >
      {title}
    </div>
  );
};
