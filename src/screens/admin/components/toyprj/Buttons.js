import React, { useState } from "react";
import { MainContactOptinos } from "../../../../common/Data/AppLists";
import { bdArrays, bgArrays, bWArrays, checkboxArr, selectArr, txtArrays } from "../../../../common/Data/ToyPrjTrList";
import SelectBox from "../../../mobile/components/common/SelectBox";
import { BDButton, BGButton } from "../common/Button";
import {Checkbox, Radio} from "../common/CheckboxRadio";
import BlackLabel from "./BlackLabel";

const Buttons = () => {
  const [button1Bg, setButton1Bg] = useState("bg-gray-100");
  const [button1Txt, setButton1Txt] = useState("text-gray-400");
  const [button2Bg, setButton2Bg] = useState("bg-gray-100");
  const [button2Txt, setButton2Txt] = useState("text-gray-400");
  const [button2Bd, setButton2Bd] = useState("outline-gray-400");
  const [button3Bd,setButton3Bd] = useState("outline-gray-400");
  const [button3BdW,setButton3BdW] = useState("outline-1");

  const changeButton1Bg = (e) => {
    setButton1Bg(e.target.innerText);
  };
  const changeButton1Txt = (e) =>{
    setButton1Txt(e.target.innerText)
  }
  const changeButton2Bg = (e) =>{
    setButton2Bg(e.target.innerText)
  }
  const changeButton2Txt = (e) =>{
    setButton2Txt(e.target.innerText)
  }
  const changeButton2Bd = (e) =>{
    setButton2Bd(e.target.innerText)
  }
  const changeButton3Bd = (e) => {
    setButton3Bd(e.target.innerText);
  };
  const changeButton3BdW = (e) => {
    setButton3BdW(e.target.innerText);
  };
  const CustomBoxses = (changeFc, arrays, label) => {
    return (
      <div className="flex gap-x-2 items-center">
        <span className="font-semibold text-sm">{label} | </span>
        {arrays.map((el) => (
          <span
            key={el}
            className={el + " inline-block p-1 hover:border-b border-black"}
            onClick={changeFc}
          >
            {el}
          </span>
        ))}
      </div>
    );
  };
  const onClickThisCkbox = (e,oneparam)=>{
    if(oneparam ==="check1"){
      const checkboxes1 = document.getElementsByClassName("check1")
      for(let i=0; i<checkboxes1.length; i++){
        checkboxes1[i].checked = false
      }
      e.target.checked = true;
    }else if(oneparam ==="check3"){
      const checkboxes3 = document.getElementsByClassName("check3")
      for(let i=0; i<checkboxes3.length; i++){
        checkboxes3[i].checked = false
      }
      e.target.checked = true;
    }
  }

  return (
    <>
      <BlackLabel title={"* 커스텀 버튼 : 오른쪽 옵션을 클릭하면 다양한 조건을 변경할 수있습니다. (sample:background-color, text-color, border-color)"}>
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
            {CustomBoxses(changeButton1Bg, bgArrays, "bgColor")}
            {CustomBoxses(changeButton1Txt, txtArrays, "txtColor")}
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
            {CustomBoxses(changeButton2Bd, bdArrays, "borderColor")}
            {CustomBoxses(changeButton2Bg, bgArrays, "bgColor")}
            {CustomBoxses(changeButton2Txt, txtArrays, "txtColor")}
          </div>
        </div>
      </BlackLabel>
      <BlackLabel title={"* 커스텀 라디오버튼, 체크박스, 셀렉트"}>
        <div className="flex flex-col gap-y-6 py-6">
          <div className="font-bold">Checkbox custom</div>
          <div className="flex gap-x-6">
            <div>하나만 선택</div>
            <div className="flex gap-x-2">
              {checkboxArr.map((el,idx)=>(
                 <Checkbox key={idx} labelName={el} classN={"check1"} onClickAction={(e)=>onClickThisCkbox(e,"check1")}/>
              ))}
            </div>
          </div>
          <div className="flex gap-x-6">
            <div>다중 선택</div>
            <div className="flex gap-x-2">
              {checkboxArr.map((el,idx)=>{
                return(
                 <Checkbox key={idx} labelName={el} classN={"check2"} onClickAction={(e)=>onClickThisCkbox(e)}/>
                )
              })}
            </div>
          </div>
        </div>
        <span className="w-full h-[1px] bg-gray-400 block"></span>
        <div className="flex flex-col gap-y-6 py-6">
          <div className="font-bold">Radio custom</div>
          <div className="flex gap-x-6">
            <div>하나만 선택</div>
            <div className="flex gap-x-2">
              {checkboxArr.map((el,idx)=>(
                 <Radio key={idx} labelName={el} classN={"check3"} onClickAction={(e)=>onClickThisCkbox(e,"check3")}/>
              ))}
            </div>
          </div>
          <div className="flex gap-x-6">
            <div>다중 선택</div>
            <div className="flex gap-x-2">
              {checkboxArr.map((el,idx)=>{
                return(
                 <Radio key={idx} labelName={el} classN={"check4"} onClickAction={(e)=>onClickThisCkbox(e)}/>
                )
              })}
            </div>
          </div>
        </div>
        <span className="w-full h-[1px] bg-gray-400 block"></span>
        <div className="flex flex-col gap-y-6 py-6">
          <div className="font-bold">Select custom</div>
          <div className="flex  gap-x-6">
            <div className="flex justify-center items-center">
              <SelectBox
              width={"w-[300px]"}
              outlineColor={button3Bd}
              outlineWidth={button3BdW}
              options={selectArr}
              />
            </div>
            <div className="cursor-pointer">
              {CustomBoxses(changeButton3Bd, bdArrays, "borderColor")}
              {CustomBoxses(changeButton3BdW, bWArrays, "borderWidth")}
            </div>
          </div>
        </div>
      </BlackLabel>
    </>
  );
};

export default Buttons;
