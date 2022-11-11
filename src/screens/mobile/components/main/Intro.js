import React from 'react'
import { MainIntroLists } from '../../../../common/Data/AppLists'
import { ApiBox } from '../common/ApiBox'

const Intro = () => {
  return (
    <div className='h-screen '>
    <div className='flex items-center justify-between py-6 px-3 bg-black text-white'>
      <div className='flex flex-col'>
        <div className='relative'>
          <span className='bg-green-600 rounded-full px-1 text-white font-semibold text-sm absolute top-0 right-0'>1.0.0</span>
          <span  className='font-bold text-3xl'>PEI_API</span></div>
        <span className='text-xs pt-3'>thanks for opening my portfolio</span>
      </div>
      <span className='border rounded-full w-[80px] h-[80px] block bg-gray-100 flex justify-center items-center text-black'>img</span>
    </div>
    <div className='h-2/3 overflow-y-auto relative px-6'>
      <span className='text-xl font-semibold block border-b block py-3'>default</span>
      <div className='flex flex-col gap-y-4 px-1 pt-4'>
      {MainIntroLists.map((list,idx)=>(
        <ApiBox
        key={idx}
        list={list}
        />
      ))}
      </div>
    </div>
  </div>
  )
}

export default Intro