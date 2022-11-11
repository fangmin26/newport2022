import React from 'react'

const SelectBox = ({onChangeFc,options}) => {
  return (
    <div className=' outline outline-1 outline-offset-0 outline-gray-200 p-2 rounded  w-full text-base bg-transparent cursor-pointer'>
      <select
      className="w-full focus:outline-none w-full"
      onChange={onChangeFc}
      >
        {options.map((option, idx) => (
          <option value={option} key={idx}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectBox