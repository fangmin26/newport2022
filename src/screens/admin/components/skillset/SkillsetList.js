import React from 'react'

const SkillsetList = ({el}) => {
  return (
    <div >
      <div className='px-12 '>
      <div className='border-b py-4 font-bold text-right pr-[140px] md:pr-[200px]'>{el.title}</div>
      </div>
      <div className='shadow-lg px-12 py-2'>
        {el.cont.length>0 ?
          el.cont.map((contel,idx)=>(
            <div 
            className='py-2'
            key={idx}>{contel}</div>
          )):""  
        }
      </div>
    </div>
  )
}

export default SkillsetList