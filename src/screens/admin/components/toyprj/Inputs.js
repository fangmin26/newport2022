import React, { useState } from "react";
import { toast } from "react-toastify";
import { checkBirth, checkName, checkPhone } from "../../../../common/CommonFunc/Reg";
import { errorMsgColor } from "../../../../common/Data/AdminLists";
import toastCommonProps from "../../../../common/Toast";
import { BDButton, BGButton } from "../common/Button";
import BlackLabel from "./BlackLabel";

const Inputs = () => {
  const [newInput,setNewInput] = useState({
    name:"",
    birth:"",
    phone:""
  })  ;
  const [arrs,setArrs] = useState([]);

  const checkNameFc = newInput.name ==="" ||checkName(newInput.name)
  const checkBirthFc = newInput.birth ==="" ||checkBirth(newInput.birth)
  const checkPhoneFc = newInput.phone ==="" ||checkPhone(newInput.phone)
  const inputAllNotFilled = newInput.name === "" ||newInput.birth ==="" || newInput.phone === "";
  const checkAll = checkNameFc&& checkBirthFc &&checkPhoneFc
  const onChangeInput = (e) =>{
    const {value, name} = e.target
    setNewInput({...newInput, [name]:value})
  }
  const onCLickInput = ()=>{
    if(inputAllNotFilled){
      toast(<p>빈칸을 모두 채워주세요.</p>, toastCommonProps('top-right', 'toast_fail',1000))
    }else{
      const filterName = arrs.filter((el)=>el.name === newInput.name)
      if(filterName.length === 0){
        setArrs(arrs=>[...arrs,newInput])
      }else{
        toast(<p>중복되지 않는 name을 입력해주세요.</p>, toastCommonProps('top-right', 'toast_fail',1000))
      }
    }
  }
  const onCLickDeleteId = (idx)=>{
    const filterArr = arrs.filter((el)=> el !== arrs[idx])
    setArrs(filterArr)
  }

  const PrintList = (label,val) =>{
    return(
      <li className="py-2">
        <span className="font-bold">{label} :</span>
        <span> {val}</span>
      </li>
    )
  }
const LabelLayout = (inputName,children, ) =>{
  return(
    <div className='w-full flex gap-x-4 h-[80px]'>
      <label htmlFor={inputName}>{inputName}</label>
      {children}
    </div>
  )
}

const onClickNew = () =>{
  setArrs([]);
  const inputs = document.getElementsByClassName("inputsInput")
  for(let i =  0; i <inputs.length; i++){
    inputs[i].value = ""
  }
}
console.log(checkNameFc&& checkBirthFc &&checkPhoneFc)
  return(
      <BlackLabel title={"input 값 입력, 리스트 출력, 삭제 ,초기화"}>
        <div className="w-full flex justify-end p-4">
        <BDButton
          title={"초기화"}
          hoverBdColor ={"hover:outline-gray-600"}
          bdColor = {"outline-gray-black"}
          bgColor={"bg-gray-100"} 
          hoverBgColor={"hover:bg-gray-200"}
          textSize={"text-lg"}
          textColor={"text-[#000]"}
          width={"w-[100px]"}
          onClickFunc={onClickNew}
          />
        </div>
        <div className="flex gap-x-[20px] items-center py-6">
          {LabelLayout("name", 
          <div className="flex flex-col w-full">
            <input id={"name"} name ={"name"} 
              className=
              {checkNameFc?'inputsInput w-full border border-black outline-none py-2 px-2':
              'w-full border border-red-500 outline-none py-2 px-2'
              }
              type="text"
              onChange={onChangeInput}
              onKeyPress={(e) => {
                if (e.key === "Enter") onCLickInput();
              }}
              />
              <p className={!checkNameFc? errorMsgColor: ""}>
              {!checkNameFc &&"이름 형식을 체크해주세요."}</p>
          </div>
          )}
          {LabelLayout("birth", 
          <div className="flex flex-col w-full">
            <input id={"birth"} name ={"birth"} 
              className=
              {checkBirthFc?'inputsInput w-full border border-black outline-none py-2 px-2':
              'w-full border border-red-500 outline-none py-2 px-2'
              }
              placeholder="ex)1990-01-01"
              type="text"
              onChange={onChangeInput}
              onKeyPress={(e) => {
                if (e.key === "Enter") onCLickInput();
              }}
              />
              <p className={!checkBirthFc? errorMsgColor: ""}>
              {!checkBirthFc &&"생일 형식을 체크해주세요."}</p>
          </div>
          )}
          {LabelLayout("phone", 
          <div className="flex flex-col w-full">
            <input id={"phone"} name ={"phone"} 
              className=
              {checkPhoneFc?'inputsInput w-full border border-black outline-none py-2 px-2':
              'w-full border border-red-500 outline-none py-2 px-2'
              }
              placeholder="ex)010-1111-1111"
              type="text"
              onChange={onChangeInput}
              onKeyPress={(e) => {
                if (e.key === "Enter")
                  if(checkAll){
                    onCLickInput();
                  }
              }}
              />
              <p className={!checkPhoneFc? errorMsgColor: ""}>
              {!checkPhoneFc &&"번호 형식을 체크해주세요."}</p>
          </div>
          )}
        </div>
        <BGButton
          title={"리스트 추가"}
          bgColor={!inputAllNotFilled && checkAll ?"bg-gray-600":"bg-gray-200"} 
          hoverBgColor={!inputAllNotFilled &&checkAll ?"bg-gray-800":""}
          textSize={"text-lg"}
          textColor={"text-[#ffffff]"}
          onClickFunc={checkAll?onCLickInput:undefined}
          />
          <div>
            {arrs.map((el,idx)=>(
              <div key={idx} className="flex justify-between border-b border-black">
                <ul className="flex gap-x-6 items-center">
                  <li>{idx+1}. </li>
                  {PrintList("이름",el.name,idx)}
                  {PrintList("나이",el.birth,idx)}
                  {PrintList("키",el.phone,idx)}
                </ul>
                <div>
                  <img
                    src={process.env.PUBLIC_URL + "/images/close.svg"}
                    className="cursor-pointer"
                    alt="닫기"
                    onClick={()=>onCLickDeleteId(idx)}
                  />
                </div>
              </div>
            ))}
          </div>
      </BlackLabel>
    
  )     
  

};

export default Inputs;
