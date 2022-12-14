import React, { useState } from 'react'


export const ApiBox = ({list,contact,}) => {
  const [open, setOpen] = useState(false);
  const showOpen = ()=>setOpen(!open)
  return (
    <>
      {contact!==undefined?
      <div className="bg-black rounded p-4 outline outline-1 outline-offset-0 flex gap-x-4 items-start ">
        <ul >
          {list.map((el,idx)=>(
            <li key={idx}>
              <span className={el.lefttextcolor}>{el.left}</span>
              <span className={el.righttextcolor}> {el.right}</span>
            </li>
          ))}
        </ul>
      </div>
      :
      <div className="bg-gray-100 rounded px-2 pt-2 outline outline-1 outline-offset-0 outline-gray-200 cursor-pointer"
      onClick={showOpen}
      >
        <div className='flex items-center justify-between font-semibold'>
          <div className='flex gap-x-4'>
            <span className={`${list.apibgcolor} text-white font-semibold text-sm px-3 py-1 rounded`}>
              {list.api}
            </span>
            <div className='flex gap-x-3 items-center'>
              <span>{list.slash}</span>
              <span className='font-normal text-sm'>{list.descrip}</span>
            </div>
          </div>
          <span className='border'>버튼</span>
        </div>
        {open?
          <div className='bg-black text-white text-sm font-semibold p-3 rounded mt-2 mb-2 transition-all duration-200'>{list.cont}</div>  
          :
          <div className='bg-black text-white text-sm font-semibold p-0 mt-3 rounded transition-all duration-200'></div>}
      </div>
      }
    </>
  )
}
