import React, { useState } from 'react'

const Skillset = () => {
  const [whatname,setWhatName] = useState();
  const active = 'border-l border-t border-black h-full p-6 transition-all duration-700 hover:bg-green-400';
  const nonactive = ' border-l border-t border-black h-1/2 flex justify-center items-center transition-all duration-700  hover:bg-green-400';

  const showFrontEnd = (e) =>{
    setWhatName("FrontEnd")
  }
  const showBackEnd = (e) =>{
    setWhatName("BackEnd")
  }
  return (
    <div className='flex flex-col h-screen py-6 cursor-pointer relative'>
      <div className={whatname === "FrontEnd"? active :nonactive}
      onClick={showFrontEnd}>
        <div className=
        {whatname ==="FrontEnd"?
        'flex gap-x-2 bg-white p-2'
        :'flex gap-x-2 '
        }
          >
          <span className='border'>icon</span>
          <span className='font-bold'>Front-end</span>
        </div>
        {whatname ==="FrontEnd" &&
           <ul className='bg-white px-2 pt-2 border-t-[1px] border-green-400'>
            <li>1.dfd</li>
            <li>1.dfd</li>
            <li>1.dfd</li>
            <li>1.dfd</li>
           </ul>
        }
      </div>
      <div className={whatname === "BackEnd"?
        active+" border-b":nonactive +" border-b"
      }
      onClick={showBackEnd}>
        <div className=
        {whatname ==="BackEnd"?'flex gap-x-2 bg-white p-2':'flex gap-x-2'}
          >
          <span className='border'>icon</span>
          <span className='font-bold'>Back-end</span>
        </div>
      </div>
    </div>
  )
}

export default Skillset