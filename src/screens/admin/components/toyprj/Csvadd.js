import React, { useState } from 'react'
import { CenterModal } from '../common/ModalCustom'
import { parse } from "papaparse";
const Csvadd = ({onClickShowCsv,MakeTable}) => {
  const [highlighted, setHilighted] = useState(false);
  return (
    <CenterModal onClickClose={onClickShowCsv}>
      <div className={`border w-full h-20 w-20 ${highlighted ? `bg-green-100` : ""}`}
        onDragEnter={() => {
          setHilighted(true);
        }}
        onDragLeave={() => {
          setHilighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setHilighted(true);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHilighted(false);
          console.log(e.dataTransfer.files)
          Array.from(e.dataTransfer.files)
          .filter((file)=>file.type ==="text/csv")
          .forEach(async(file)=>{
            const text = await file.text()
            console.log(file)
            console.log(text)
            const result = parse(text,{header:true}).data;
            console.log(result)
            MakeTable(result)
          })
        }}
      >111</div>
      <div>csv파일만 입력해주세요.</div>
    </CenterModal>
  )
}

export default Csvadd