import React from 'react'

export const Checkbox = ({labelName,classN,onClickAction}) => {
  return (
    <div className='flex gap-x-2 items-center'>    
      <input type="checkbox"
      id={labelName}
      className={"cursor-pointer "+classN}
      onChange={onClickAction}
      />
      <label htmlFor={labelName}>{labelName}</label>
    </div>
  )
}
export const Radio = ({labelName,classN,onClickAction}) => {
  return (
    <div className='flex gap-x-2 items-center'>    
      <input type="radio"
      id={labelName}
      className={"cursor-pointer "+classN}
      onChange={onClickAction}
      />
      <label htmlFor={labelName}>{labelName}</label>
    </div>
  )
}