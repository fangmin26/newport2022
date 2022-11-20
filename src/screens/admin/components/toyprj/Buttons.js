import React, { useState } from "react";
import { BDButton, BGButton } from "../common/Button";

const Buttons = () => {
  const bdArrays = [
    "outline-gray-400",
    "outline-gray-500",
    "outline-gray-600",
    "outline-gray-700",
    "outline-gray-800",
  ];
  const bgArrays = [
    "bg-gray-100",
    "bg-gray-200",
    "bg-gray-300",
    "bg-gray-400",
    "bg-gray-500",
  ];
  const txtArrays = [
    "text-gray-400",
    "text-gray-500",
    "text-gray-600",
    "text-gray-700",
    "text-gray-800",
  ];
  const [button1Bg, setButton1Bg] = useState("bg-gray-100");
  const [button1Txt, setButton1Txt] = useState("text-gray-400");
  const [button2Bg, setButton2Bg] = useState("bg-gray-100");
  const [button2Txt, setButton2Txt] = useState("text-gray-400");
  const [button2Bd, setButton2Bd] = useState("outline-gray-400");

  const changeBgFunc1 = (e) => {
    setButton1Bg(e.target.innerText);
  };
  const changeBgFunc2 = (e) => {
    setButton1Txt(e.target.innerText);
  };
  const changeBdFunc1 = (e) => {
    setButton2Bd(e.target.innerText);
  };
  const changeBdFunc2 = (e) => {
    setButton2Bg(e.target.innerText);
  };
  const changeBdFunc3 = (e) => {
    setButton2Txt(e.target.innerText);
  };
  const CustomBoxses = (changeFc, arrays, label) => {
    return (
      <div className="flex gap-x-2 items-center">
        <span className="font-semibold text-sm">{label} | </span>
        {arrays.map((el) => (
          <span
            key={el}
            className={el + " inline-block p-1 hover:border-b"}
            onClick={changeFc}
          >
            {el}
          </span>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="pt-4">
        <p className="py-2 bg-black text-white px-4">
          * 커스텀 버튼 : 오른쪽 옵션을 클릭하면 다양한 조건을 변경할 수
          있습니다. (sample:background-color, text-color, border-color)
        </p>
        <div className="px-4">
          <div className="flex gap-x-[20px] items-center py-6">
            <BGButton
              title={"BackGroundButton"}
              bgColor={button1Bg}
              hoverBgColor={"hover:bg-gray-800"}
              textSize={"text-lg"}
              textColor={button1Txt}
              width={"w-[200px]"}
            />
            <div className="flex gap-y-1 flex-col cursor-pointer">
              {CustomBoxses(changeBgFunc1, bgArrays, "bgColor")}
              {CustomBoxses(changeBgFunc2, txtArrays, "txtColor")}
            </div>
          </div>
          <span className="w-full h-[1px] bg-gray-400 block"></span>
          <div className="flex gap-x-[20px] items-center py-6">
            <BDButton
              title={"BorderButton"}
              hoverBdColor={"hover:outline-gray-600"}
              bdColor={button2Bd}
              bgColor={button2Bg}
              hoverBgColor={"hover:bg-gray-800"}
              textSize={"text-lg"}
              textColor={button2Txt}
              width={"w-[200px]"}
            />
            <div className="flex gap-y-1 flex-col cursor-pointer">
              {CustomBoxses(changeBdFunc1, bdArrays, "borderColor")}
              {CustomBoxses(changeBdFunc2, bgArrays, "bgColor")}
              {CustomBoxses(changeBdFunc3, txtArrays, "txtColor")}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <p className="py-2 bg-black text-white px-4">
          * 커스텀 라디오버튼, 체크박스, 셀렉트
        </p>
        <div className="px-4">
          <div className="flex gap-x-[20px] items-center py-6">
            <BGButton
              title={"BackGroundButton"}
              bgColor={button1Bg}
              hoverBgColor={"hover:bg-gray-800"}
              textSize={"text-lg"}
              textColor={button1Txt}
              width={"w-[200px]"}
            />
            <div className="flex gap-y-1 flex-col cursor-pointer">
              {CustomBoxses(changeBgFunc1, bgArrays, "bgColor")}
              {CustomBoxses(changeBgFunc2, txtArrays, "txtColor")}
            </div>
          </div>
          <span className="w-full h-[1px] bg-gray-400 block"></span>
          <div className="flex gap-x-[20px] items-center py-6">
            <BDButton
              title={"BorderButton"}
              hoverBdColor={"hover:outline-gray-600"}
              bdColor={button2Bd}
              bgColor={button2Bg}
              hoverBgColor={"hover:bg-gray-800"}
              textSize={"text-lg"}
              textColor={button2Txt}
              width={"w-[200px]"}
            />
            <div className="flex gap-y-1 flex-col cursor-pointer">
              {CustomBoxses(changeBdFunc1, bdArrays, "borderColor")}
              {CustomBoxses(changeBdFunc2, bgArrays, "bgColor")}
              {CustomBoxses(changeBdFunc3, txtArrays, "txtColor")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buttons;
