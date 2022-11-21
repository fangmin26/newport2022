import React from 'react'

const SelectBox = ({options, outlineColor, outlineWidth,width}) => {
  return (
    <div className={`outline ${outlineWidth} outline-offset-0 ${outlineColor} p-2 rounded  ${width === undefined?"w-full":width} text-base bg-transparent cursor-pointer`}>
      <select
      className="w-full focus:outline-none w-full"
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